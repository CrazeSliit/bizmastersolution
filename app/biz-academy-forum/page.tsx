'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Link from 'next/link'

const programs = [
  { title: 'Business Strategy Masterclass', description: 'Intensive training on modern business frameworks, competitive strategy, and market positioning.' },
  { title: 'Sales Mastery Program', description: 'Proven methodologies for building high-performance sales teams and closing deals consistently.' },
  { title: 'Digital Marketing Bootcamp', description: 'Hands-on training for social media, content strategy, paid advertising, and analytics.' },
  { title: 'Technology & AI for Business', description: 'Learn how to leverage AI tools, automation, and technology to dramatically improve efficiency.' },
  { title: 'Financial Intelligence Workshop', description: 'Understand financial statements, cash flow management, investment principles, and profitability levers.' },
  { title: 'Leadership & Team Development', description: 'Build the leadership skills required to inspire teams, manage performance, and drive culture.' },
]

const stats = [
  { value: '2,000+', label: 'Students Trained' },
  { value: '40+', label: 'Programs & Workshops' },
  { value: '95%', label: 'Completion Rate' },
  { value: '12', label: 'Industry Expert Mentors' },
]

const community = [
  { title: 'Exclusive Business Forum', description: 'A members-only community where business owners share insights, challenges, and opportunities.' },
  { title: 'Networking Events', description: 'Regular in-person and virtual events designed to create meaningful business connections.' },
  { title: 'Peer Mentorship Circles', description: 'Small groups of business owners who meet regularly for mutual accountability and guidance.' },
  { title: 'Expert Q&A Sessions', description: 'Monthly live sessions with industry experts covering the most pressing business topics.' },
]

export default function BIZAcademyForumPage() {
  const [visible, setVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<'programs' | 'community'>('programs')

  useEffect(() => {
    setVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background pointer-events-none" />
        <div className="absolute top-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>Education &amp; Community Building</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
              BIZ Academy <span className="text-primary">&amp; Forum</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl leading-relaxed mb-10">
              The hub for business excellence. Develop your skills through world-class training programs and join a thriving community of entrepreneurs, leaders, and innovators.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25">
                Join the Academy
              </Link>
              <Link href="/contact" className="bg-primary/10 hover:bg-primary/20 border border-primary/30 text-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                Join the Forum
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

      {/* Tab Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Academy &amp; <span className="text-primary">Community</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Two powerful offerings  expert-led training programs and an active business community working together to accelerate your growth.
            </p>

            {/* Tabs */}
            <div className="inline-flex bg-primary/10 rounded-xl p-1">
              <button
                onClick={() => setActiveTab('programs')}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${activeTab === 'programs' ? 'bg-primary text-primary-foreground shadow-lg' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Training Programs
              </button>
              <button
                onClick={() => setActiveTab('community')}
                className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 ${activeTab === 'community' ? 'bg-primary text-primary-foreground shadow-lg' : 'text-muted-foreground hover:text-foreground'}`}
              >
                Business Forum
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeTab === 'programs' ? programs : community).map((item, i) => (
              <div key={i} className="group p-6 bg-background border border-primary/10 hover:border-primary/40 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 group-hover:bg-primary rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <svg className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Split */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Learn, Connect, <span className="text-primary">and Grow Together</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Business doesn't grow in isolation. The BIZ Academy and Forum combines structured education with a dynamic peer community so you gain knowledge and build the relationships that open doors.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Our programs are designed by practitioners, not theorists. Every training module, workshop, and forum event is built around real-world application and measurable business outcomes.
              </p>
              <div className="space-y-3">
                {['Practical, results-focused curriculum', 'Expert mentors with proven track records', 'Active alumni network for ongoing support', 'Hybrid learning in-person and online'].map((point, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
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
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
                  alt="BIZ Academy"
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
          <h2 className="text-4xl font-bold text-foreground mb-4">Invest in Your Most Important Asset Yourself</h2>
          <p className="text-xl text-muted-foreground mb-8">Join thousands of entrepreneurs leveling up their skills and building the networks that drive business success.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25">
              Enroll Now
            </Link>
            <Link href="/contact" className="bg-primary/10 hover:bg-primary/20 border border-primary/30 text-foreground px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300">
              View Upcoming Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
