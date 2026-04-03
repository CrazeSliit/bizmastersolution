'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Link from 'next/link'

const services = [
  { title: 'ERP / POS / CRM Systems', description: 'Customized operating system implementation tailored to your business operations.' },
  { title: 'AI Integration', description: 'Embed AI across all business modules from customer service to inventory and analytics.' },
  { title: 'Social Media & WhatsApp Integration', description: 'Connect your systems with the platforms your customers use every day.' },
  { title: 'Web & Mobile App Development', description: 'Full-stack applications built for performance, scalability, and user experience.' },
  { title: 'E-Commerce Platforms', description: 'End-to-end online stores with payment gateways, inventory management, and analytics.' },
  { title: 'AI Chatbots & AI Agents', description: 'Automate customer interactions and internal workflows with intelligent agents.' },
]

const stats = [
  { value: '200+', label: 'Tech Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction Rate' },
  { value: '50+', label: 'AI Solutions Deployed' },
  { value: '24/7', label: 'Technical Support' },
]

const sliderImages = [
  {
    src: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200&q=90',
    alt: 'Artificial Intelligence',
  },
  {
    src: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=90',
    alt: 'Coding & Development',
  },
  {
    src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=90',
    alt: 'Mobile App Development',
  },
]

const chatbotSolutions = [
  {
    title: 'AI Website Chatbot',
    description:
      'Deploy an AI assistant on your website to handle customer questions, capture leads, and guide visitors to the right products instantly.',
    ctaLabel: 'Use Website Chatbot',
    ctaHref: '#website-chatbot',
    note: 'Live on your site 24/7 with multilingual support and product recommendations.',
  },
  {
    title: 'AI WhatsApp Chatbot',
    description:
      'Launch a WhatsApp AI chatbot for instant support, order updates, and sales conversations where your customers are most active.',
    ctaLabel: 'Open WhatsApp Chatbot',
    ctaHref: 'https://wa.me/+94781760086?text=Hi%20BIZmaster%2C%20I%20need%20an%20AI%20WhatsApp%20chatbot%20with%20product-wise%20API%20integration.',
    note: 'Great for auto-replies, smart follow-ups, and faster conversions.',
  },
]

export default function BIZtechHubPage() {
  const [visible, setVisible] = useState(false)
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    setVisible(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % sliderImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background pointer-events-none" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Left: Text Content */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>IT &amp; Technology Solutions</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6" style={{color: '#5D0E8B'}}>
                BIZtech Hub
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-10">
                Your dedicated technology partner from custom operating systems and AI integration to world-class web platforms and intelligent automation solutions.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25">
                  Start a Project
                </Link>
                <Link href="/services" className="bg-primary/10 hover:bg-primary/20 border border-primary/30 text-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                  View All Services
                </Link>
              </div>
            </div>

            {/* Right: Image Slider */}
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-4 overflow-hidden">
                <div className="relative h-[480px] rounded-2xl overflow-hidden shadow-2xl">
                  {sliderImages.map((image, i) => (
                    <img
                      key={i}
                      src={image.src}
                      alt={image.alt}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${i === currentImage ? 'opacity-100' : 'opacity-0'}`}
                    />
                  ))}
                </div>
                {/* Dots */}
                <div className="flex justify-center gap-2 mt-4">
                  {sliderImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === currentImage ? 'bg-primary w-6' : 'bg-primary/30'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#5D0E8B'}}>
              What We Build
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions designed to modernize, automate, and scale your business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <div key={i} className="group p-6 bg-background border border-primary/10 hover:border-primary/40 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <svg className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Highlight */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{color: '#5D0E8B'}}>
                AI-Powered Technology At the Core
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Every solution we build is infused with artificial intelligence. From predictive analytics to intelligent automation, we ensure your technology doesn&apos;t just function — it thinks, adapts, and grows with your business.
              </p>
              <div className="space-y-4">
                {['Smart ERP systems with real-time analytics', 'AI-driven customer engagement tools', 'Automated workflow and process optimization', 'Advanced data security and infrastructure'].map((point, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-foreground font-medium">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, var(--primary) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80"
                  alt="Technology Solutions"
                  className="relative w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="website-chatbot" className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-semibold mb-4">
              New Information Section
            </span>
            <h2 className="text-4xl font-bold mb-4" style={{ color: '#5D0E8B' }}>
              AI Chatbots For Website + WhatsApp
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We build both website chatbots and WhatsApp chatbots with product-wise API integration. Product-wise API හදලා දෙනවා, so each product can have its own flow, answers, and automation rules.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="bg-background border border-primary/20 rounded-2xl p-7">
              <h3 className="text-2xl font-bold text-foreground mb-4">AI Website Chatbot</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Add an intelligent chatbot directly to your website to handle visitor questions, product guidance, lead capture, and customer support in real time.
              </p>
              <ul className="space-y-2 text-sm text-foreground">
                <li>24/7 instant customer responses</li>
                <li>Product suggestions by user intent</li>
                <li>Lead collection and CRM handoff</li>
              </ul>
            </div>

            <div className="bg-background border border-primary/20 rounded-2xl p-7">
              <h3 className="text-2xl font-bold text-foreground mb-4">AI WhatsApp Chatbot</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Run sales and support conversations through WhatsApp using AI-powered replies, automated flows, and product-wise API integration.
              </p>
              <ul className="space-y-2 text-sm text-foreground">
                <li>Smart auto-replies for customer chats</li>
                <li>Order, delivery, and status updates</li>
                <li>Direct conversion from chat to sale</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {chatbotSolutions.map((item, i) => (
              <div
                key={i}
                className="bg-background border border-primary/20 rounded-2xl p-7 hover:border-primary/45 transition-all duration-300 hover:shadow-lg hover:shadow-primary/15"
              >
                <h3 className="text-2xl font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                <p className="text-sm text-primary font-medium mb-6">{item.note}</p>

                <a
                  href={item.ctaHref}
                  target={item.ctaHref.startsWith('http') ? '_blank' : undefined}
                  rel={item.ctaHref.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-3 rounded-xl font-semibold transition-all duration-300"
                >
                  {item.ctaLabel}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          <div className="bg-background border border-primary/15 rounded-2xl p-7">
            <h3 className="text-2xl font-bold text-foreground mb-5">Product-Wise API Integrations We Build</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Product catalog API',
                'Product pricing & discount API',
                'Stock and availability API',
                'Order placement & tracking API',
                'Payment and invoice API',
                'CRM + lead management API',
              ].map((apiName, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-primary/5 rounded-xl border border-primary/10">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-foreground">{apiName}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mt-6">
            <div className="bg-background border border-primary/15 rounded-2xl p-7">
              <h3 className="text-2xl font-bold text-foreground mb-5">Advanced Chatbot Capabilities</h3>
              <div className="space-y-3">
                {[
                  'Natural language conversations with context memory',
                  'Multilingual responses for Sri Lankan and global audiences',
                  'Smart product recommendations based on customer intent',
                  'Lead qualification and automatic follow-up sequences',
                  'Integration with CRM, ERP, POS, and payment systems',
                  'Admin dashboard for chat history and performance insights',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm text-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-background border border-primary/15 rounded-2xl p-7">
              <h3 className="text-2xl font-bold text-foreground mb-5">Best For These Business Use Cases</h3>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'E-commerce customer support',
                  'Order tracking and updates',
                  'Service booking and appointment handling',
                  'Education inquiry automation',
                  'Real-estate lead engagement',
                  'After-sales support and retention',
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-xl bg-primary/5 border border-primary/10 text-sm font-medium text-foreground">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 bg-background border border-primary/15 rounded-2xl p-7">
            <h3 className="text-2xl font-bold text-foreground mb-5">How We Deliver Your Chatbot Project</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { step: '01', title: 'Discovery', text: 'Understand your products, customers, and support/sales goals.' },
                { step: '02', title: 'Build', text: 'Design chatbot flows and connect required product-wise APIs.' },
                { step: '03', title: 'Launch', text: 'Deploy on website and WhatsApp with testing and quality checks.' },
                { step: '04', title: 'Optimize', text: 'Track chat performance and improve conversion continuously.' },
              ].map((phase, i) => (
                <div key={i} className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                  <p className="text-xs font-bold text-primary mb-2">STEP {phase.step}</p>
                  <h4 className="font-bold text-foreground mb-1">{phase.title}</h4>
                  <p className="text-sm text-muted-foreground">{phase.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-2xl p-7 bg-gradient-to-r from-primary/10 via-primary/5 to-background border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-3">Deployment, Training, and Ongoing Support</h3>
            <p className="text-muted-foreground leading-relaxed max-w-4xl">
              We provide full setup, team training, and continuous improvements after go-live. Your chatbot can be updated with new products, new campaign offers, and new API endpoints any time as your business grows.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Ready to Modernize Your Tech?</h2>
          <p className="text-xl text-muted-foreground mb-8">Let our team build a technology stack that drives real business results.</p>
          <Link href="/contact" className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25">
            Request a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
