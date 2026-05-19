# OTP Email Template

This is a professional one-time password (OTP) email template built with inline CSS using Xapely's brand colors.

## Usage

Replace the following placeholders in the HTML file with your actual values:

- `{{OTP_CODE}}` — The 6-8 digit OTP code to display
- `{{SUPPORT_URL}}` — Link to your support page
- `{{WEBSITE_URL}}` — Link to your website
- `{{PRIVACY_URL}}` — Link to your privacy policy
- `{{TERMS_URL}}` — Link to your terms of service
- `{{VERIFICATION_LINK}}` — Direct link to verification page (optional fallback)

## Example

```html
<!-- Replace this -->
<div style="font-size: 42px; ...">{{OTP_CODE}}</div>

<!-- With this -->
<div style="font-size: 42px; ...">123456</div>
```

## Color Palette

- **Primary Blue**: #2A7AF6
- **Dark Text**: #111827
- **Secondary Dark**: #374151
- **Light Gray**: #9CA3AF
- **White**: #ffffff
- **Light Background**: #f9fafb

## Features

✓ Fully responsive (mobile & desktop)
✓ Inline CSS (no external stylesheets needed)
✓ Professional design using Xapely brand colors
✓ Security notice included
✓ Email client compatible
✓ Dark/light mode friendly

## How to Send

Use your email service provider's API (SendGrid, Mailgun, AWS SES, etc.) and pass the HTML content as the email body.

Example with Node.js/SendGrid:
```javascript
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

let html = fs.readFileSync('otp-email.html', 'utf8');
html = html.replace('{{OTP_CODE}}', userOTP);
html = html.replace('{{SUPPORT_URL}}', 'https://xapely.com/support');
// ... replace other placeholders

const msg = {
  to: userEmail,
  from: 'noreply@xapely.com',
  subject: 'Your OTP Code',
  html: html,
};

await sgMail.send(msg);
```
