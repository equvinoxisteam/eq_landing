import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { getMailConfigStatus, probeMailProviders, sendContactEmail } from './mail.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '..', '.env') });
const distPath = path.join(__dirname, '..', 'dist');
const distIndex = path.join(distPath, 'index.html');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '32kb' }));

app.get('/api/health', (_req, res) => {
  const mail = getMailConfigStatus();
  res.json({ ok: mail.ok, ...mail });
});

app.get('/api/health/mail-probe', async (_req, res) => {
  try {
    const probe = await probeMailProviders();
    const mail = getMailConfigStatus();
    res.json({ ok: true, ...mail, probe });
  } catch (error) {
    res.status(500).json({
      ok: false,
      error: error instanceof Error ? error.message : 'Mail probe failed',
    });
  }
});

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, company, phone, message } = req.body ?? {};

    if (!name?.trim() || !email?.trim() || !company?.trim() || !phone?.trim()) {
      return res.status(400).json({ error: 'Name, email, company, and phone are required.' });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return res.status(400).json({ error: 'Invalid email address.' });
    }

    const result = await sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      company: company.trim(),
      phone: phone.trim(),
      message: typeof message === 'string' ? message.trim() : '',
    });

    res.json({ ok: true, provider: result.provider });
  } catch (error) {
    console.error('Contact API error:', error);
    const message = error instanceof Error ? error.message : 'Failed to send message. Please try again later.';
    res.status(500).json({ error: message });
  }
});

if (fs.existsSync(distIndex)) {
  app.use(express.static(distPath));

  app.get(/^(?!\/api).*/, (_req, res) => {
    res.sendFile(distIndex);
  });
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log('Mail config:', getMailConfigStatus());
});
