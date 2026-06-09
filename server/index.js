import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { sendContactEmail } from './mail.js';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distPath = path.join(__dirname, '..', 'dist');
const distIndex = path.join(distPath, 'index.html');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json({ limit: '32kb' }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, mailProvider: process.env.MAIL_PROVIDER || 'unset' });
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

    await sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      company: company.trim(),
      phone: phone.trim(),
      message: typeof message === 'string' ? message.trim() : '',
    });

    res.json({ ok: true });
  } catch (error) {
    console.error('Contact API error:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again later.' });
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
});
