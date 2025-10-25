# Email Service Setup Instructions

## Option 1: Using Resend (Recommended - Easy & Free tier available)

1. Install Resend:
```bash
npm install resend
```

2. Sign up at https://resend.com and get your API key

3. Add to your `.env.local` file:
```
RESEND_API_KEY=re_your_api_key_here
```

4. Update `app/api/contact/route.ts` to use Resend (code provided below)

## Option 2: Using Gmail SMTP with Nodemailer

1. Install nodemailer:
```bash
npm install nodemailer
npm install -D @types/nodemailer
```

2. Add to your `.env.local`:
```
EMAIL_USER=chamudithakyt21@gmail.com
EMAIL_PASS=your_app_password_here
```

Note: Use Gmail App Password, not your regular password
Get it from: https://myaccount.google.com/apppasswords

## Option 3: Using SendGrid

1. Install SendGrid:
```bash
npm install @sendgrid/mail
```

2. Get API key from https://sendgrid.com

3. Add to `.env.local`:
```
SENDGRID_API_KEY=your_api_key_here
```

---

## Recommended: Update route.ts with Resend

Replace the content in `app/api/contact/route.ts` with the code that includes actual email sending.

The current implementation logs the data but doesn't send emails yet.
Follow one of the options above to enable actual email sending.
