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

Copy `.env.example` to `.env` and fill in Gmail OAuth credentials for the contact form.

## Deploy (Railway)

Set the same env vars in Railway, then deploy. Build runs `npm run build`; start runs `node server/index.js`.

Contact: info@equvinoxis.com
