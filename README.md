# eq_landing

Equvinoxis landing page — Industry 4.0 manufacturing platform showcasing Enigma AI, Indianet, and SolidXCad.

## Products

| Product | URL |
|---------|-----|
| Enigma AI | https://enigma.equvinoxis.com/role-selection |
| Indianet | https://indianet.equvinoxis.com/ |
| SolidXCad | https://solidxcad.equvinoxis.com/login?fresh=1 |

## Run locally

```bash
npm install
npm run dev
```

- Frontend: http://localhost:5173
- API server: http://localhost:3001

## Environment variables (Gmail HTTPS API)

Contact form email uses the **Gmail REST API over HTTPS** (not SMTP). Railway blocks or throttles SMTP ports; HTTPS is more reliable.

```bash
MAIL_PROVIDER=gmail
MAIL_USER=info@equvinoxis.com
MAIL_FROM=Equvinoxis <info@equvinoxis.com>
MAIL_TO=info@equvinoxis.com
GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your-client-secret
GMAIL_REFRESH_TOKEN=your-refresh-token
```

### Get `GMAIL_REFRESH_TOKEN` (one-time)

1. [Google Cloud Console](https://console.cloud.google.com/) → APIs & Services → Credentials → your OAuth client
2. Add redirect URI: `https://developers.google.com/oauthplayground`
3. Open [OAuth 2.0 Playground](https://developers.google.com/oauthplayground)
4. Gear icon → check **Use your own OAuth credentials** → paste Client ID & Secret
5. Step 1: select scope `https://mail.google.com/` → Authorize APIs (sign in as info@equvinoxis.com)
6. Step 2: Exchange authorization code for tokens
7. Copy **Refresh token** → set as `GMAIL_REFRESH_TOKEN` in Railway

## Deploy (Railway)

1. Connect GitHub repo `equvinoxisteam/eq_landing`
2. Add mail env vars in **Variables** (no quotes around values)
3. Deploy — build: `npm ci --include=dev && npm run build`; start: `node server/index.js`
4. **Settings → Networking → Generate Domain** (HTTPS is automatic)

## Connect equvinoxis.com (GoDaddy → Railway)

### Step 1 — Railway

1. Open your Railway service → **Settings** → **Networking**
2. Under **Custom Domain**, add:
   - `www.equvinoxis.com`
   - `equvinoxis.com` (root)
3. Railway shows DNS records for each (usually a **CNAME** target like `xxxx.up.railway.app`)

### Step 2 — GoDaddy DNS

1. Log in to [GoDaddy](https://www.godaddy.com) → **My Products** → **DNS** for `equvinoxis.com`
2. Add/edit records:

| Type | Name | Value | TTL |
|------|------|-------|-----|
| **CNAME** | `www` | `xxxx.up.railway.app` (from Railway) | 600 |
| **Forward** | `@` (root) | `https://www.equvinoxis.com` | — |

For the root domain `@`, GoDaddy often uses **Forwarding** (not CNAME):
- GoDaddy → DNS → **Forwarding** → Add → `https://www.equvinoxis.com` (Permanent 301)

Or if Railway gives an **A record** for root, use that instead of forwarding.

3. Wait 5–30 minutes for DNS + SSL (Railway provisions HTTPS automatically)

### Step 3 — Verify

- `https://www.equvinoxis.com` loads the site
- `https://www.equvinoxis.com/api/health` shows `"transport": "https"` when Gmail API is configured

Contact: info@equvinoxis.com
