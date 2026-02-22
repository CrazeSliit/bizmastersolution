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

export default function BIZtechHubPage() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
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
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>IT &amp; Technology Solutions</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              BIZtech <span className="text-primary">Hub</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl leading-relaxed mb-10">
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
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-primary/10 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-muted-foreground font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What We <span className="text-primary">Build</span>
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
              <h2 className="text-4xl font-bold text-foreground mb-6">
                AI-Powered Technology <span className="text-primary">At the Core</span>
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
