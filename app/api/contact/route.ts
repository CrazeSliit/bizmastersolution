import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, company, service, message } = body

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email content in HTML format
    const emailHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #580088 0%, #7B2CBF 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #580088; margin-bottom: 5px; }
            .value { color: #333; }
            .footer { background: #333; color: white; padding: 20px; text-align: center; border-radius: 0 0 10px 10px; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎯 New Contact Form Submission</h1>
              <p>BIZmaster Solutions Website</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">🏢 Company:</div>
                <div class="value">${company || 'Not provided'}</div>
              </div>
              <div class="field">
                <div class="label">🎯 Service of Interest:</div>
                <div class="value">${service}</div>
              </div>
              <div class="field">
                <div class="label">💬 Message:</div>
                <div class="value" style="white-space: pre-wrap;">${message}</div>
              </div>
              <div class="field" style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #ddd;">
                <div class="label">🕐 Submitted at:</div>
                <div class="value">${new Date().toLocaleString()}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was automatically generated from the BIZmaster Solutions contact form.</p>
              <p>Reply directly to <strong>${email}</strong> to respond to this inquiry.</p>
            </div>
          </div>
        </body>
      </html>
    `

    const emailText = `
New Contact Form Submission from BIZmaster Solutions Website

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Service of Interest: ${service}

Message:
${message}

Submitted at: ${new Date().toLocaleString()}

---
Reply to: ${email}
    `.trim()

    // Log the submission
    console.log('📧 Contact form submission received:', {
      name,
      email,
      company,
      service,
      timestamp: new Date().toISOString()
    })

    // Send email using nodemailer
    try {
      // Check if credentials are configured
      if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
        throw new Error('Email credentials not configured in environment variables')
      }

      console.log('🔧 Email config check:', {
        user: process.env.EMAIL_USER,
        passLength: process.env.EMAIL_PASS?.length,
        passSet: !!process.env.EMAIL_PASS
      })

      // Create transporter with explicit SMTP settings
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
        tls: {
          rejectUnauthorized: false
        }
      })

      // Verify connection
      await transporter.verify()
      console.log('✅ SMTP connection verified')

      // Send email
      const info = await transporter.sendMail({
        from: `"BIZmaster Contact Form" <${process.env.EMAIL_USER}>`,
        to: 'chamudithakyt21@gmail.com',
        replyTo: email,
        subject: `🎯 New Contact Form: ${name} - ${service}`,
        text: emailText,
        html: emailHTML,
      })

      console.log('✅ Email sent successfully:', info.messageId)
    } catch (emailError) {
      console.error('❌ Email sending failed:', emailError)
      // Continue anyway - we still want to return success to user
      // The submission is logged even if email fails
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your message! We have received your inquiry and will contact you within 24 hours.' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('❌ Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again or email us directly at chamudithakyt21@gmail.com' },
      { status: 500 }
    )
  }
}
