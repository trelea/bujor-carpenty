'use server';

import { transporter } from './mailer';

class StatusError extends Error {
  constructor(public status: number, message?: string, obj?: any) {
    super(message, obj);
  }
}

export const sendMail = async (_: any, formData: FormData) => {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.MAIL,
      subject: 'New Client Submission',
      text: 'New Client Submission',
      html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f7f7f7;
            margin: 0;
            padding: 0;
        }

        .email-container {
            width: 100%;
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .email-header {
            text-align: center;
            margin-bottom: 20px;
        }

        .email-header h2 {
            margin: 0;
            color: #333333;
        }

        .email-body {
            font-size: 16px;
            line-height: 1.5;
            color: #555555;
        }

        .email-body p {
            margin: 10px 0;
        }

        .email-body strong {
            color: #333333;
        }

        .footer {
            text-align: center;
            font-size: 14px;
            color: #999999;
            margin-top: 30px;
        }

        .footer a {
            color: #007BFF;
            text-decoration: none;
        }
    </style>
</head>
<body>

    <div class="email-container">
        <div class="email-header">
            <h2>New Client Submission</h2>
        </div>
        
        <div class="email-body">
            <p><strong>Client:</strong> ${formData.get(
              'surname'
            )} ${formData.get('name')}</p>
            <p><strong>Email:</strong> ${formData.get('email')}</p>
            <p><strong>Address:</strong> ${formData.get('address')}</p>
            <p><strong>Comments:</strong></p>
            <p>${formData.get('comments')}</p>
        </div>

        <div class="footer">
            <p>Best regards,</p>
            <p><strong>Bujor Carpentry</strong></p>
        </div>
    </div>

</body>
</html>
    `,
    });
    return { status: 'succed' };
  } catch (_: any) {
    throw new StatusError(501, 'STATUS MAIL', { status: 'fail' });
  }
};
