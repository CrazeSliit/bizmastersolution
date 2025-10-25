# 🚀 FINAL STEP: Get Your Gmail App Password

Your contact form is ready! Just need your Gmail App Password to start sending emails.

## Quick Steps (2 minutes):

### 1. Get Gmail App Password
Visit: https://myaccount.google.com/apppasswords

- If you don't see this page, first enable 2-Step Verification at: https://myaccount.google.com/security
- Once 2-Step is enabled, go back to App Passwords

### 2. Generate Password
- Select app: **Mail**
- Select device: **Other (Custom name)**
- Enter name: **BIZmaster Contact Form**
- Click **Generate**
- You'll see a 16-character password (like: `abcd efgh ijkl mnop`)

### 3. Copy Password
Copy the 16 characters (remove spaces, so: `abcdefghijklmnop`)

### 4. Update .env.local
Open the file `.env.local` in your project root and replace:
```
EMAIL_PASS=your_gmail_app_password_here
```
with:
```
EMAIL_PASS=abcdefghijklmnop
```
(use your actual password)

### 5. Start the server
```bash
npm run dev
```

### 6. Test it!
1. Go to http://localhost:3000/contact
2. Fill out the form
3. Submit
4. Check chamudithakyt21@gmail.com inbox! 📧

---

## ✅ What's Already Done:
- ✅ nodemailer installed
- ✅ API endpoint configured
- ✅ Email template ready
- ✅ .env.local file created
- ✅ Form validation working
- ✅ Success/error messages

## 📧 When Form is Submitted:
Email will be sent to: **chamudithakyt21@gmail.com**

Email includes:
- Contact name
- Email address
- Company name
- Service interest
- Message
- Timestamp
- Beautiful HTML formatting

---

**Security Note:** Never commit `.env.local` to Git (it's already in .gitignore)
