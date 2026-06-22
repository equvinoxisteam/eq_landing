/**
 * Validate Gmail OAuth credentials from .env or Railway.
 * Usage: node scripts/validate-gmail-token.js
 */
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '..', '.env') });

function env(name) {
  const raw = process.env[name]?.trim() || '';
  return raw.replace(/^["']|["']$/g, '');
}

const clientId = env('GOOGLE_CLIENT_ID') || env('GMAIL_CLIENT_ID');
const clientSecret = env('GOOGLE_CLIENT_SECRET') || env('GMAIL_CLIENT_SECRET');
const refreshToken = env('GMAIL_REFRESH_TOKEN');

if (!clientId || !clientSecret || !refreshToken) {
  console.error('Missing GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, or GMAIL_REFRESH_TOKEN');
  process.exit(1);
}

const response = await fetch('https://oauth2.googleapis.com/token', {
  method: 'POST',
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  body: new URLSearchParams({
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
    grant_type: 'refresh_token',
  }),
});

const data = await response.json();

if (!response.ok) {
  console.error('INVALID TOKEN');
  console.error(`Error: ${data.error}`);
  console.error(`Detail: ${data.error_description}`);
  if (data.error === 'unauthorized_client') {
    console.error('\nFix: your refresh token was NOT created with this OAuth client.');
    console.error('Run: npm run gmail:setup');
    console.error('Or OAuth Playground -> gear icon -> enable "Use your own OAuth credentials".');
  }
  process.exit(1);
}

console.log('OK — refresh token works with your OAuth client.');
console.log(`Access token received (${data.access_token.length} chars).`);
