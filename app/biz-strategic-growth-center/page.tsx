'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Link from 'next/link'

const services = [
  { title: 'Internal & External Business Analysis', description: 'Deep-dive SWOT, market, and competitive analysis to reveal hidden opportunities and risks.' },
  { title: 'Business Redesign & Architecture', description: 'Restructure your operations, workflows, and systems for maximum efficiency and scalability.' },
  { title: 'Strategic Sales & Marketing Planning', description: 'Develop and execute data-driven sales funnels and marketing plans that generate predictable revenue.' },
  { title: 'Financial Planning & Execution', description: 'Budgeting, forecasting, and financial roadmaps aligned with your growth objectives.' },
  { title: 'Business Model Development', description: 'Build or refine your business concept to ensure long-term viability and competitive advantage.' },
  { title: 'Team Strategic Development', description: 'Align your team around strategy, improve performance, and build a culture of execution.' },
]

const stats = [
  { value: '150+', label: 'Growth Strategies Executed' },
  { value: '3.5x', label: 'Average Revenue Growth' },
  { value: '80%', label: 'Client Retention Rate' },
  { value: '90 Days', label: 'To Measurable Results' },
]

const pillars = [
  { title: 'Analyze', description: 'Understand where your business stands today strengths, gaps, and opportunities.' },
  { title: 'Strategize', description: 'Co-create a robust plan that targets your highest-value growth levers.' },
  { title: 'Execute', description: 'Implement the strategy with precision, accountability, and expert support.' },
  { title: 'Monitor', description: 'Track performance, adapt to change, and continuously optimize for results.' },
]

export default function BIZStrategicGrowthCenterPage() {
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
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span>Strategic Development &amp; Execution</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              BIZ Strategic <span className="text-primary">Growth Center</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl leading-relaxed mb-10">
              The engine behind your business growth. We design, build, and execute comprehensive strategies that transform ambitious goals into measurable, sustainable results.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25">
                Start Your Growth Plan
              </Link>
              <Link href="/services" className="bg-primary/10 hover:bg-primary/20 border border-primary/30 text-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Explore Services
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

      {/* Growth Framework */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Growth <span className="text-primary">Framework</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven four-phase approach to delivering consistent, compounding business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, i) => (
              <div key={i} className="relative p-8 bg-background border border-primary/10 hover:border-primary/40 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-black text-primary-foreground">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Strategic <span className="text-primary">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every service is designed to move the needle on your most critical growth metrics.
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

      {/* Visual Split */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Strategy Without Execution <span className="text-primary">Is Just a Dream</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Most consulting firms hand you a plan and walk away. We stay in the trenches with you executing, monitoring, and continuously refining until your goals are achieved.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our strategic growth partners become embedded members of your leadership team, ensuring accountability at every level of execution.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, var(--primary) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  alt="Strategic Growth"
                  className="relative w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Accelerate Your Business Growth Today</h2>
          <p className="text-xl text-muted-foreground mb-8">Partner with our strategic experts to build a growth engine that delivers results in 90 days or less.</p>
          <Link href="/contact" className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25">
            Schedule a Strategy Session
          </Link>
        </div>
      </section>
    </div>
  )
}
