import nodemailer from 'nodemailer';

const GMAIL_TOKEN_URL = 'https://oauth2.googleapis.com/token';
const GMAIL_SEND_URL = 'https://gmail.googleapis.com/gmail/v1/users/me/messages/send';
const DEFAULT_MAIL_TO = 'info@equvinoxis.com';

function env(name) {
  return process.env[name]?.trim() || '';
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
      (getMailFrom() || getMailUser())
  );
}

function resolveMailProvider() {
  const configured = (env('MAIL_PROVIDER') || 'auto').toLowerCase();

  if (configured === 'smtp' || configured === 'gmail') {
    if (hasSmtpConfig()) {
      return 'smtp';
    }
    if (configured === 'gmail' && hasGmailOAuthConfig()) {
      return 'gmail-oauth';
    }
    if (configured === 'formsubmit') {
      return 'formsubmit';
    }
    if (configured === 'log') {
      return 'log';
    }
    return 'formsubmit';
  }

  if (configured === 'gmail-oauth') {
    return 'gmail-oauth';
  }

  if (configured === 'formsubmit') {
    return 'formsubmit';
  }

  if (configured === 'log') {
    return 'log';
  }

  if (hasSmtpConfig()) {
    return 'smtp';
  }

  if (hasGmailOAuthConfig()) {
    return 'gmail-oauth';
  }

  return 'formsubmit';
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
  const mailUser = getMailUser();
  const mailPass = getMailPass();
  const mailFrom = getMailFrom();
  const mailTo = getMailTo();
  const subject = `New contact form: ${name} (${company})`;

  const transporter = nodemailer.createTransport({
    host: env('SMTP_HOST') || 'smtp.gmail.com',
    port: Number(env('SMTP_PORT') || 587),
    secure: env('SMTP_SECURE') === 'true',
    auth: {
      user: mailUser,
      pass: mailPass,
    },
  });

  const info = await transporter.sendMail({
    from: mailFrom,
    to: mailTo,
    replyTo: email,
    subject,
    text: buildContactText({ name, email, company, phone, message }),
    html: buildContactHtml({ name, email, company, phone, message }),
  });

  return { provider: 'smtp', data: { messageId: info.messageId } };
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

export async function sendContactEmail(payload) {
  const provider = resolveMailProvider();

  try {
    if (provider === 'smtp') {
      return await sendViaSmtp(payload);
    }

    if (provider === 'gmail-oauth') {
      return await sendViaGmailOAuth(payload);
    }

    if (provider === 'formsubmit') {
      return await sendViaFormSubmit(payload);
    }

    if (provider === 'log') {
      return await sendViaLog(payload);
    }

    throw new Error(`Unsupported mail provider: ${provider}`);
  } catch (error) {
    if (provider === 'smtp' || provider === 'gmail-oauth') {
      console.warn(`${provider} send failed, falling back to FormSubmit:`, error.message);
      return sendViaFormSubmit(payload);
    }

    throw error;
  }
}
