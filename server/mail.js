import nodemailer from 'nodemailer';

const GMAIL_TOKEN_URL = 'https://oauth2.googleapis.com/token';
const GMAIL_SEND_URL = 'https://gmail.googleapis.com/gmail/v1/users/me/messages/send';
const WEB3FORMS_URL = 'https://api.web3forms.com/submit';
const DEFAULT_MAIL_TO = 'info@equvinoxis.com';
const DEFAULT_REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const SEND_TIMEOUT_MS = 25000;

let cachedRefreshToken = '';

function env(name) {
  const raw = process.env[name]?.trim() || '';
  return raw.replace(/^["']|["']$/g, '');
}

function requireEnv(name) {
  const value = env(name);
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

function isRailway() {
  return Boolean(env('RAILWAY_ENVIRONMENT') || env('RAILWAY_SERVICE_NAME') || env('RAILWAY_PROJECT_ID'));
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function getMailUser() {
  return env('MAIL_USER') || env('GMAIL_USER');
}

function getMailPass() {
  return (env('MAIL_PASS') || env('GMAIL_APP_PASSWORD')).replace(/\s+/g, '');
}

function getGmailClientId() {
  return env('GMAIL_CLIENT_ID') || env('GOOGLE_CLIENT_ID');
}

function getGmailClientSecret() {
  return env('GMAIL_CLIENT_SECRET') || env('GOOGLE_CLIENT_SECRET');
}

function getGmailRedirectUri() {
  return env('GMAIL_REDIRECT_URI') || DEFAULT_REDIRECT_URI;
}

function getRefreshToken() {
  return cachedRefreshToken || env('GMAIL_REFRESH_TOKEN');
}

function getMailFrom() {
  return env('MAIL_FROM') || `Equvinoxis <${getMailUser() || DEFAULT_MAIL_TO}>`;
}

function getMailTo() {
  return env('MAIL_TO') || getMailUser() || DEFAULT_MAIL_TO;
}

function hasGmailApiCredentials() {
  return Boolean(getGmailClientId() && getGmailClientSecret() && getMailUser());
}

function hasSmtpConfig() {
  return Boolean(getMailUser() && getMailPass());
}

function hasGmailOAuthConfig() {
  return Boolean(hasGmailApiCredentials() && (getRefreshToken() || env('GMAIL_AUTH_CODE')));
}

function hasWeb3FormsConfig() {
  return Boolean(env('WEB3FORMS_ACCESS_KEY'));
}

function getProviderChain() {
  const configured = (env('MAIL_PROVIDER') || 'auto').toLowerCase();
  const chain = [];
  const skipSmtp = isRailway() || env('DISABLE_SMTP') === 'true';

  const addOAuth = () => {
    if (hasGmailOAuthConfig()) chain.push('gmail-oauth');
  };
  const addWeb3Forms = () => {
    if (hasWeb3FormsConfig()) chain.push('web3forms');
  };
  const addSmtp = () => {
    if (!skipSmtp && hasSmtpConfig()) chain.push('smtp');
  };
  const addFormSubmit = () => {
    chain.push('formsubmit');
  };

  if (configured === 'log') return ['log'];
  if (configured === 'web3forms') {
    return hasWeb3FormsConfig() ? ['web3forms', 'formsubmit'] : ['formsubmit'];
  }
  if (configured === 'formsubmit') return ['formsubmit'];
  if (configured === 'smtp') {
    addSmtp();
    addOAuth();
    addWeb3Forms();
    addFormSubmit();
    return chain.length ? chain : ['formsubmit'];
  }
  if (configured === 'gmail-oauth' || configured === 'gmail-api' || configured === 'gmail') {
    addOAuth();
    addWeb3Forms();
    addSmtp();
    addFormSubmit();
    return chain.length ? chain : ['formsubmit'];
  }

  addOAuth();
  addWeb3Forms();
  addSmtp();
  addFormSubmit();
  return chain;
}

function resolveMailProvider() {
  return getProviderChain()[0] || 'formsubmit';
}

function buildContactHtml({ name, email, company, phone, message }) {
  return `
    <h2>New Equvinoxis contact form submission</h2>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Company:</strong> ${escapeHtml(company)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message || '(none)').replace(/\n/g, '<br>')}</p>
  `.trim();
}

function buildContactText({ name, email, company, phone, message }) {
  return [
    'New Equvinoxis contact form submission',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company}`,
    `Phone: ${phone}`,
    '',
    'Message:',
    message || '(none)',
  ].join('\n');
}

function withTimeout(promise, label) {
  return Promise.race([
    promise,
    new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error(`${label} timed out after ${SEND_TIMEOUT_MS / 1000}s`));
      }, SEND_TIMEOUT_MS);
    }),
  ]);
}

async function exchangeAuthCodeForTokens(code) {
  const response = await fetch(GMAIL_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: getGmailClientId(),
      client_secret: getGmailClientSecret(),
      code,
      grant_type: 'authorization_code',
      redirect_uri: getGmailRedirectUri(),
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error_description || data.error || 'Failed to exchange Gmail auth code');
  }

  if (data.refresh_token) {
    cachedRefreshToken = data.refresh_token;
    console.log('[mail] SUCCESS — save this as GMAIL_REFRESH_TOKEN in Railway:');
    console.log(data.refresh_token);
  }

  if (!data.access_token) {
    throw new Error('Gmail auth code exchange did not return an access token');
  }

  return data.access_token;
}

async function refreshGmailAccessToken(refreshToken) {
  const response = await fetch(GMAIL_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: getGmailClientId(),
      client_secret: getGmailClientSecret(),
      refresh_token: refreshToken,
      grant_type: 'refresh_token',
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error_description || data.error || 'Failed to refresh Gmail access token');
  }

  return data.access_token;
}

async function getGmailAccessToken() {
  const refreshToken = getRefreshToken();
  if (refreshToken) {
    return refreshGmailAccessToken(refreshToken);
  }

  const authCode = env('GMAIL_AUTH_CODE');
  if (authCode) {
    return exchangeAuthCodeForTokens(authCode);
  }

  throw new Error(
    'Gmail API needs GMAIL_REFRESH_TOKEN or GMAIL_AUTH_CODE. Run: node scripts/gmail-oauth-setup.js'
  );
}

function buildRawEmail({ from, to, replyTo, subject, html }) {
  const lines = [
    `From: ${from}`,
    `To: ${to}`,
    `Reply-To: ${replyTo}`,
    `Subject: ${subject}`,
    'MIME-Version: 1.0',
    'Content-Type: text/html; charset=utf-8',
    '',
    html,
  ];

  return Buffer.from(lines.join('\r\n'))
    .toString('base64')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '');
}

function createSmtpTransporter({ port, secure }) {
  return nodemailer.createTransport({
    host: env('SMTP_HOST') || 'smtp.gmail.com',
    port,
    secure,
    family: 4,
    auth: {
      user: getMailUser(),
      pass: getMailPass(),
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });
}

async function sendViaSmtp(payload) {
  const { name, email, company, phone, message } = payload;
  const mailFrom = getMailFrom();
  const mailTo = getMailTo();
  const subject = `New contact form: ${name} (${company})`;
  const mailOptions = {
    from: mailFrom,
    to: mailTo,
    replyTo: email,
    subject,
    text: buildContactText({ name, email, company, phone, message }),
    html: buildContactHtml({ name, email, company, phone, message }),
  };

  const attempts = [
    { port: 465, secure: true },
    { port: 587, secure: false },
  ];

  let lastError;

  for (const attempt of attempts) {
    try {
      const transporter = createSmtpTransporter(attempt);
      const info = await transporter.sendMail(mailOptions);
      return { provider: 'smtp', data: { messageId: info.messageId, port: attempt.port } };
    } catch (error) {
      lastError = error;
      console.warn(`SMTP send failed on port ${attempt.port}:`, error.message);
    }
  }

  throw lastError || new Error('SMTP send failed');
}

async function sendViaGmailOAuth(payload) {
  const { name, email, company, phone, message } = payload;
  const accessToken = await getGmailAccessToken();
  const mailFrom = getMailFrom();
  const mailTo = getMailTo();
  const subject = `New contact form: ${name} (${company})`;
  const html = buildContactHtml({ name, email, company, phone, message });

  const raw = buildRawEmail({
    from: mailFrom,
    to: mailTo,
    replyTo: email,
    subject,
    html,
  });

  const response = await fetch(GMAIL_SEND_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ raw }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error?.message || 'Failed to send email via Gmail API');
  }

  return { provider: 'gmail-oauth', data };
}

async function sendViaWeb3Forms(payload) {
  const { name, email, company, phone, message } = payload;

  const response = await fetch(WEB3FORMS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      access_key: requireEnv('WEB3FORMS_ACCESS_KEY'),
      subject: `New contact form: ${name} (${company})`,
      from_name: name,
      email,
      phone,
      company,
      message: message || '(none)',
      replyto: email,
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || data.success === false) {
    throw new Error(data.message || `Web3Forms failed (${response.status})`);
  }

  return { provider: 'web3forms', data };
}

async function sendViaFormSubmit(payload) {
  const { name, email, company, phone, message } = payload;
  const mailTo = getMailTo();
  const subject = `New contact form: ${name} (${company})`;

  const attempts = [
    {
      url: `https://formsubmit.co/ajax/${encodeURIComponent(mailTo)}`,
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        name,
        email,
        company,
        phone,
        message: message || '(none)',
        _subject: subject,
        _template: 'table',
      }),
    },
    {
      url: `https://formsubmit.co/${encodeURIComponent(mailTo)}`,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        name,
        email,
        company,
        phone,
        message: message || '(none)',
        _subject: subject,
        _template: 'table',
      }).toString(),
    },
  ];

  let lastError;

  for (const attempt of attempts) {
    try {
      const response = await fetch(attempt.url, {
        method: 'POST',
        headers: attempt.headers,
        body: attempt.body,
        redirect: 'manual',
      });

      const text = await response.text();
      let data = {};
      try {
        data = text ? JSON.parse(text) : {};
      } catch {
        data = { raw: text };
      }

      const succeeded =
        response.status === 302 ||
        response.status === 200 ||
        (response.ok && data.success !== false && data.success !== 'false');

      if (succeeded) {
        return { provider: 'formsubmit', data };
      }

      lastError = new Error(data.message || `FormSubmit failed (${response.status})`);
      console.warn('FormSubmit response:', text.slice(0, 200));
    } catch (error) {
      lastError = error;
    }
  }

  throw lastError || new Error('FormSubmit failed');
}

async function sendViaLog(payload) {
  console.log('[contact-form]', JSON.stringify(payload, null, 2));
  return { provider: 'log', data: { ok: true } };
}

export function getActiveMailProvider() {
  return resolveMailProvider();
}

export function getMailConfigStatus() {
  const chain = getProviderChain();
  const primary = chain[0] || 'none';
  const needsGmailToken = hasGmailApiCredentials() && !getRefreshToken() && !env('GMAIL_AUTH_CODE');

  return {
    ok: chain.length > 0 && primary !== 'none',
    provider: primary,
    fallbackChain: chain,
    transport: primary === 'gmail-oauth' || primary === 'web3forms' ? 'https' : primary,
    mailUser: getMailUser() ? `${getMailUser().slice(0, 3)}***` : 'missing',
    mailTo: getMailTo(),
    hasOAuth: hasGmailOAuthConfig(),
    hasGmailApi: hasGmailApiCredentials(),
    hasPassword: Boolean(getMailPass()),
    hasWeb3Forms: hasWeb3FormsConfig(),
    smtpDisabled: isRailway() || env('DISABLE_SMTP') === 'true',
    railway: isRailway(),
    needsGmailToken,
    setupHint: needsGmailToken
      ? 'Add GMAIL_REFRESH_TOKEN to Railway (run: node scripts/gmail-oauth-setup.js locally)'
      : null,
  };
}

async function dispatchEmail(provider, payload) {
  if (provider === 'smtp') return sendViaSmtp(payload);
  if (provider === 'gmail-oauth') return sendViaGmailOAuth(payload);
  if (provider === 'web3forms') return sendViaWeb3Forms(payload);
  if (provider === 'formsubmit') return sendViaFormSubmit(payload);
  if (provider === 'log') return sendViaLog(payload);
  throw new Error(`Unsupported mail provider: ${provider}`);
}

export async function sendContactEmail(payload) {
  const chain = getProviderChain();
  let lastError;

  for (const provider of chain) {
    try {
      const result = await withTimeout(dispatchEmail(provider, payload), `${provider} delivery`);
      console.log(`[mail] sent via ${provider}`);
      return result;
    } catch (error) {
      lastError = error;
      console.warn(`[mail] ${provider} failed:`, error.message);
    }
  }

  if (hasGmailApiCredentials() && !getRefreshToken() && !env('GMAIL_AUTH_CODE')) {
    throw new Error(
      'Email failed: Railway blocks SMTP. Add GMAIL_REFRESH_TOKEN to Railway — run node scripts/gmail-oauth-setup.js on your PC once.'
    );
  }

  throw lastError || new Error('All email delivery methods failed');
}

// Load refresh token from env on startup
cachedRefreshToken = env('GMAIL_REFRESH_TOKEN');
