/**
 * Test mail configuration without sending a contact email.
 * Usage: node scripts/mail-probe.js
 */
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { getMailConfigStatus, probeMailProviders } from '../server/mail.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '..', '.env') });

const status = getMailConfigStatus();
const probe = await probeMailProviders();

console.log(JSON.stringify({ status, probe }, null, 2));
