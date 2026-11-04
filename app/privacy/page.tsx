import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Read how BIZmaster Solutions collects, uses, and protects your personal information across our website and services.',
  alternates: {
    canonical: '/privacy',
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background">
      <div className="max-w-4xl mx-auto px-6 pt-24 lg:pt-32 pb-20">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#5D0E8B' }}>
          Privacy Policy
        </h1>
        <p className="text-sm text-muted-foreground mb-12">Last updated: September 28, 2026</p>

        <div className="prose prose-lg max-w-none space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <p>
              BIZmaster Solutions (&quot;BIZmaster Solutions,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
              operates bizmastersolutions.lk (the &quot;Site&quot;). This Privacy Policy explains what
              information we collect, how we use it, and the choices you have. By using the Site, you agree
              to the practices described here.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">1. Information We Collect</h2>
            <h3 className="text-lg font-semibold text-foreground mb-2">a) Information you provide directly</h3>
            <p>
              When you submit our contact form, request a consultation, or message us via WhatsApp or live
              chat, we may collect your name, email address, phone number, company name, the service you are
              interested in, and the content of your message.
            </p>
            <h3 className="text-lg font-semibold text-foreground mb-2 mt-4">b) Information collected automatically</h3>
            <p>
              When you visit the Site, certain information is collected automatically through cookies and
              similar technologies, including your IP address, browser type, device information, pages
              viewed, referring URLs, and the dates and times of your visits.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">2. Cookies &amp; Advertising</h2>
            <p>
              We use cookies and similar tracking technologies to operate the Site, remember your
              preferences (such as light/dark theme), and understand how visitors use our content.
            </p>
            <p className="mt-3">
              We display advertisements served by Google AdSense. Google, as a third-party vendor, uses
              cookies (including the DoubleClick DART cookie) to serve ads based on your prior visits to
              this and other websites. Google&apos;s use of advertising cookies enables it and its partners
              to serve ads based on your visits to our Site and/or other sites on the Internet.
            </p>
            <p className="mt-3">
              You may opt out of personalized advertising by visiting{' '}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                Google Ads Settings
              </a>
              , or opt out of third-party vendor use of cookies for personalized advertising by visiting{' '}
              <a
                href="https://www.aboutads.info/choices"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground"
              >
                www.aboutads.info
              </a>
              . Most browsers also let you refuse or delete cookies through their settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">3. Third-Party Services</h2>
            <p>We work with the following categories of third-party service providers, who may process data on our behalf or independently under their own privacy policies:</p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Google AdSense / Google Ads</strong> — displaying and measuring advertisements.</li>
              <li><strong>Live chat and chatbot providers</strong> (including Chatbase, Tawk.to, and Zapier-powered assistants) — enabling real-time and automated customer support on our Site.</li>
              <li><strong>WhatsApp</strong> — enabling direct messaging with our team when you click our WhatsApp contact button.</li>
              <li><strong>Email delivery services</strong> — sending and receiving communications submitted through our contact form.</li>
              <li><strong>Hosting and infrastructure providers</strong> (such as Netlify) — hosting and delivering the Site.</li>
            </ul>
            <p className="mt-3">
              These providers may set their own cookies or collect data directly, subject to their own
              privacy policies. We encourage you to review those policies separately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">4. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to inquiries and provide the services you request.</li>
              <li>To operate, maintain, and improve the Site and our offerings.</li>
              <li>To send you information you have requested, such as follow-ups to your inquiry.</li>
              <li>To display relevant advertising and measure its performance.</li>
              <li>To detect, prevent, and address fraud, abuse, or technical issues.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">5. How We Share Your Information</h2>
            <p>
              We do not sell your personal information. We share information only with the service
              providers described above (to the extent necessary for them to perform their functions), or
              when required by law, to protect our rights, or in connection with a business transfer such as
              a merger or acquisition.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">6. Data Retention</h2>
            <p>
              We retain personal information for as long as necessary to fulfill the purposes described in
              this policy, respond to your inquiries, or comply with legal, accounting, or reporting
              requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">7. Your Rights &amp; Choices</h2>
            <p>
              Depending on your location, you may have the right to access, correct, delete, or restrict the
              use of your personal information, and to object to certain processing (including for
              advertising purposes). To exercise these rights, contact us using the details below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">8. Children&apos;s Privacy</h2>
            <p>
              The Site is intended for business audiences and is not directed at children under 13. We do
              not knowingly collect personal information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Changes take effect when posted on this
              page, with the &quot;Last updated&quot; date revised accordingly. Continued use of the Site
              after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">10. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or how we handle your information, contact us
              at{' '}
              <a href="mailto:info@bizmastersolutions.lk" className="underline hover:text-foreground">
                info@bizmastersolutions.lk
              </a>
              , or via our{' '}
              <a href="/contact" className="underline hover:text-foreground">
                Contact page
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
