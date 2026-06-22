/**
 * One-time Gmail OAuth setup — run locally to get GMAIL_REFRESH_TOKEN for Railway.
 *
 * Usage:
 *   node scripts/gmail-oauth-setup.js
 *
 * Requires GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in .env (or env vars).
 */
import http from 'http';
import { URL } from 'url';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const CLIENT_ID = (process.env.GOOGLE_CLIENT_ID || process.env.GMAIL_CLIENT_ID || '').replace(/^["']|["']$/g, '');
const CLIENT_SECRET = (process.env.GOOGLE_CLIENT_SECRET || process.env.GMAIL_CLIENT_SECRET || '').replace(/^["']|["']$/g, '');
const REDIRECT_URI = 'http://localhost:3333/oauth/callback';
const SCOPES = 'https://mail.google.com/';
const PORT = 3333;

if (!CLIENT_ID || !CLIENT_SECRET) {
  console.error('Missing GOOGLE_CLIENT_ID or GOOGLE_CLIENT_SECRET in .env');
  process.exit(1);
}

const authUrl = new URL('https://accounts.google.com/o/oauth2/v2/auth');
authUrl.searchParams.set('client_id', CLIENT_ID);
authUrl.searchParams.set('redirect_uri', REDIRECT_URI);
authUrl.searchParams.set('response_type', 'code');
authUrl.searchParams.set('scope', SCOPES);
authUrl.searchParams.set('access_type', 'offline');
authUrl.searchParams.set('prompt', 'consent');

console.log('\n=== Gmail OAuth Setup ===\n');
console.log('1. Open this URL in your browser and sign in as info@equvinoxis.com:\n');
console.log(authUrl.toString());
console.log('\n2. Waiting for callback on http://localhost:3333 ...\n');

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  if (url.pathname !== '/oauth/callback') {
    res.writeHead(404);
    res.end('Not found');
    return;
  }

  const code = url.searchParams.get('code');
  const error = url.searchParams.get('error');

  if (error || !code) {
    res.writeHead(400);
    res.end(`OAuth failed: ${error || 'no code'}`);
    console.error('OAuth error:', error);
    server.close();
    process.exit(1);
  }

  try {
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
        grant_type: 'authorization_code',
        redirect_uri: REDIRECT_URI,
      }),
    });

    const data = await tokenResponse.json();

    if (!tokenResponse.ok) {
      throw new Error(data.error_description || data.error || 'Token exchange failed');
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Success!</h1><p>You can close this tab. Check the terminal for your refresh token.</p>');

    console.log('\n=== SUCCESS ===\n');
    console.log('Add this to Railway Variables:\n');
    console.log(`GMAIL_REFRESH_TOKEN=${data.refresh_token}\n`);
    console.log('Also keep these in Railway:');
    console.log('MAIL_PROVIDER=gmail');
    console.log('MAIL_USER=info@equvinoxis.com');
    console.log('MAIL_TO=info@equvinoxis.com');
    console.log(`GOOGLE_CLIENT_ID=${CLIENT_ID}`);
    console.log('GOOGLE_CLIENT_SECRET=(your secret)\n');
  } catch (err) {
    res.writeHead(500);
    res.end('Token exchange failed — see terminal');
    console.error(err.message);
  } finally {
    setTimeout(() => {
      server.close();
      process.exit(0);
    }, 500);
  }
});

server.listen(PORT, () => {
  console.log(`Callback server listening on port ${PORT}`);
});
