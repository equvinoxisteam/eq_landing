import nodemailer from 'nodemailer';

const GMAIL_TOKEN_URL = 'https://oauth2.googleapis.com/token';
const GMAIL_SEND_URL = 'https://gmail.googleapis.com/gmail/v1/users/me/messages/send';
const DEFAULT_MAIL_TO = 'info@equvinoxis.com';
const SEND_TIMEOUT_MS = 25000;

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

function getMailFrom() {
  return env('MAIL_FROM') || `Equvinoxis <${getMailUser() || DEFAULT_MAIL_TO}>`;
}

function getMailTo() {
  return env('MAIL_TO') || getMailUser() || DEFAULT_MAIL_TO;
}

function hasSmtpConfig() {
  return Boolean(getMailUser() && getMailPass());
}

function hasGmailOAuthConfig() {
  return Boolean(
    getGmailClientId() &&
      getGmailClientSecret() &&
      env('GMAIL_REFRESH_TOKEN') &&
      getMailUser()
  );
}

function getProviderChain() {
  const configured = (env('MAIL_PROVIDER') || 'auto').toLowerCase();
  const chain = [];

  const addOAuth = () => {
    if (hasGmailOAuthConfig()) chain.push('gmail-oauth');
  };
  const addSmtp = () => {
    if (hasSmtpConfig()) chain.push('smtp');
  };
  const addFormSubmit = () => {
    chain.push('formsubmit');
  };

  if (configured === 'formsubmit') return ['formsubmit'];
  if (configured === 'log') return ['log'];
  if (configured === 'smtp') {
    addSmtp();
    addFormSubmit();
    return chain.length ? chain : ['formsubmit'];
  }
  if (configured === 'gmail-oauth' || configured === 'gmail-api') {
    addOAuth();
    addSmtp();
    addFormSubmit();
    return chain.length ? chain : ['formsubmit'];
  }

  // gmail or auto: try HTTPS API → SMTP → FormSubmit
  addOAuth();
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

function createSmtpTransporter({ port, secure }) {
  return nodemailer.createTransport({
    host: env('SMTP_HOST') || 'smtp.gmail.com',
    port,
    secure,
    auth: {
      user: getMailUser(),
      pass: getMailPass(),
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });
}

async function getGmailAccessToken() {
  const response = await fetch(GMAIL_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: getGmailClientId(),
      client_secret: getGmailClientSecret(),
      refresh_token: requireEnv('GMAIL_REFRESH_TOKEN'),
      grant_type: 'refresh_token',
    }),
  });

  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.error_description || data.error || 'Failed to refresh Gmail access token');
  }

  return data.access_token;
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

  const customPort = env('SMTP_PORT');
  const attempts = customPort
    ? [{ port: Number(customPort), secure: env('SMTP_SECURE') === 'true' }]
    : [
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

async function sendViaFormSubmit(payload) {
  const { name, email, company, phone, message } = payload;
  const mailTo = getMailTo();

  const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(mailTo)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      company,
      phone,
      message: message || '(none)',
      _subject: `New contact form: ${name} (${company})`,
      _template: 'table',
      _captcha: 'false',
    }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || data.success === false) {
    throw new Error(data.message || 'Failed to send email via FormSubmit');
  }

  return { provider: 'formsubmit', data };
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
  const primary = chain[0] || 'formsubmit';
  return {
    ok: chain.length > 0,
    provider: primary,
    fallbackChain: chain,
    transport: primary === 'gmail-oauth' ? 'https' : primary === 'smtp' ? 'smtp' : primary,
    mailUser: getMailUser() ? `${getMailUser().slice(0, 3)}***` : 'missing',
    mailTo: getMailTo(),
    hasOAuth: hasGmailOAuthConfig(),
    hasPassword: Boolean(getMailPass()),
  };
}

async function dispatchEmail(provider, payload) {
  if (provider === 'smtp') {
    return sendViaSmtp(payload);
  }

  if (provider === 'gmail-oauth') {
    return sendViaGmailOAuth(payload);
  }

  if (provider === 'formsubmit') {
    return sendViaFormSubmit(payload);
  }

  if (provider === 'log') {
    return sendViaLog(payload);
  }

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

  throw lastError || new Error('All email delivery methods failed');
}
