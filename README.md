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

## Environment variables

Copy `.env.example` to `.env` and configure Gmail SMTP for the contact form:

```bash
MAIL_PROVIDER=gmail
MAIL_USER=info@equvinoxis.com
MAIL_PASS=your-gmail-app-password
MAIL_FROM=Equvinoxis <info@equvinoxis.com>
MAIL_TO=info@equvinoxis.com
```

Use a [Gmail App Password](https://support.google.com/accounts/answer/185833) (not your regular Gmail password). Set the same variables in Railway for production.

## Deploy (Railway)

1. Connect the GitHub repo `equvinoxisteam/eq_landing`
2. Add the mail env vars above in **Variables**
3. Deploy — build runs `npm run build`; start runs `node server/index.js`
4. Generate a public domain under **Networking**

Contact: info@equvinoxis.com
