import { createTransport } from 'nodemailer';

export const transporter = createTransport({
  host: 'smtp.mailersend.net',
  port: 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});
