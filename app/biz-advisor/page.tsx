'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Link from 'next/link'

const services = [
  { title: 'Business Registration', description: 'Streamlined company registration services handled efficiently with full legal compliance.' },
  { title: 'Tax Consultancy', description: 'Strategic tax planning and advisory to minimize liability and ensure full regulatory compliance.' },
  { title: 'Bookkeeping & Accounting', description: 'Accurate, timely financial records that give you a clear picture of your business health.' },
  { title: 'Business Plan Development', description: 'Professionally crafted business and project plans for investors, lenders, or internal strategy.' },
  { title: 'Human Resources Services', description: 'HR management, talent acquisition, policy development, and compliance support.' },
  { title: 'Audit & Secretary Services', description: 'Internal audits, governance documentation, and corporate secretarial functions.' },
  { title: 'Legal Activities', description: 'Contract drafting, review, legal compliance, and dispute resolution support.' },
  { title: 'Asset Management', description: 'Structured management of business and personal assets to maximize value and protect wealth.' },
]

const stats = [
  { value: '500+', label: 'Businesses Registered' },
  { value: '100%', label: 'Compliance Rate' },
  { value: '15+', label: 'Years Combined Experience' },
  { value: '48 hrs', label: 'Average Response Time' },
]

const whyChoose = [
  { title: 'End-to-End Support', description: 'From day one of registration to ongoing compliance we manage it all.' },
  { title: 'Certified Professionals', description: 'Our team includes certified accountants, legal advisors, and HR specialists.' },
  { title: 'Proactive Advice', description: 'We don\'t wait for problems we identify and solve them before they arise.' },
  { title: 'Transparent Pricing', description: 'Clear, fixed-fee structures with no hidden costs or surprise invoices.' },
]

export default function BIZAdvisorPage() {
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
        <div className="absolute top-40 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>Back-Office &amp; Legal Support</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              BIZ <span className="text-primary">Advisor</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl leading-relaxed mb-10">
              Your trusted back-office partner. We handle the complex operational, financial, and legal foundations of your business so you can focus entirely on growth.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25">
                Get Expert Advice
              </Link>
              <Link href="/services" className="bg-primary/10 hover:bg-primary/20 border border-primary/30 text-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Advisory <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive back-office solutions that keep your business compliant, organized, and positioned for sustainable growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div key={i} className="group p-6 bg-background border border-primary/10 hover:border-primary/40 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <svg className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Businesses Trust <span className="text-primary">BIZ Advisor</span>
              </h2>
              <div className="space-y-6">
                {whyChoose.map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, var(--primary) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
                  alt="Business Advisory"
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
          <h2 className="text-4xl font-bold text-foreground mb-4">Let Us Handle the Complexity</h2>
          <p className="text-xl text-muted-foreground mb-8">Focus on building your vision while our advisors ensure your back office is legally sound and financially optimized.</p>
          <Link href="/contact" className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25">
            Book a Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
