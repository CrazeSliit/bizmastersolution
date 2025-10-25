# Quick Setup Guide for Email Functionality

## ✅ What's Already Done:
- Contact form UI is ready
- API endpoint created at `/api/contact`
- Form validation and error handling implemented
- Success/error messages display to users

## 📧 To Enable Email Sending:

### Step 1: Install Nodemailer (Easiest Option)
Run this command:
```bash
npm install nodemailer
```

### Step 2: Set Up Gmail App Password
1. Go to your Google Account: https://myaccount.google.com/
2. Enable 2-Step Verification if not already enabled
3. Go to App Passwords: https://myaccount.google.com/apppasswords
4. Create a new app password for "Mail"
5. Copy the 16-character password

### Step 3: Create Environment File
Create a file named `.env.local` in the root folder with:
```
EMAIL_USER=chamudithakyt21@gmail.com
EMAIL_PASS=your_16_character_app_password_here
```

### Step 4: Activate Email Sending
In the file `app/api/contact/route.ts`, find this section (around line 86):
```javascript
// METHOD 1: Using Nodemailer with Gmail (Easiest)
```

Uncomment the code block (remove the /* and */) to activate email sending.

### Step 5: Test
1. Run: `npm run dev`
2. Go to the Contact page
3. Fill out the form
4. Submit
5. Check chamudithakyt21@gmail.com for the email!

## 🔒 Security Notes:
- Never commit `.env.local` to Git (it's already in .gitignore)
- Never share your app password
- Use App Passwords, not your main Gmail password

## 🎯 Current Status:
✅ Form captures data
✅ Form validates input
✅ API endpoint processes requests
✅ Data is logged to console
⏳ Email sending (waiting for setup above)

Once you complete the steps above, emails will be sent to chamudithakyt21@gmail.com automatically when someone fills out the contact form!
