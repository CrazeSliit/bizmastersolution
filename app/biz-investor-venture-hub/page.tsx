'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Link from 'next/link'

const services = [
  { title: 'Investor Matching', description: 'Connect with a curated network of investors aligned with your industry, stage, and vision.' },
  { title: 'Venture Concept Development', description: 'Transform your business idea into a fundable, market-ready concept with a solid structure.' },
  { title: 'Comprehensive Business Planning', description: 'Investor-grade business plans, financial models, and pitch decks built to secure funding.' },
  { title: 'Professional Talent Sourcing', description: 'Identify and onboard the skilled professionals your venture needs to scale.' },
  { title: 'Asset Owner Connections', description: 'Access a network of asset owners for joint ventures, leases, and strategic partnerships.' },
  { title: 'Venture Operations Management', description: 'Full oversight of your venture from launch through growth we manage the details.' },
]

const stats = [
  { value: '$50M+', label: 'Capital Facilitated' },
  { value: '80+', label: 'Ventures Launched' },
  { value: '95%', label: 'Investor Satisfaction' },
  { value: '30 Days', label: 'Average Match Time' },
]

const howItWorks = [
  { step: '01', title: 'Submit Your Brief', description: 'Share your venture concept, funding needs, or partnership goals with our team.' },
  { step: '02', title: 'Strategic Assessment', description: 'We evaluate market fit, viability, and identify the ideal investor or partner profile.' },
  { step: '03', title: 'Curated Introductions', description: 'We connect you with vetted investors, professionals, or asset owners from our network.' },
  { step: '04', title: 'Deal Facilitation', description: 'We manage negotiations, documentation, and onboarding to close your deal efficiently.' },
]

const sliderImages = [
  {
    src: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1200&q=90',
    alt: 'Investment & Venture Capital',
  },
  {
    src: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=90',
    alt: 'Business Partnership Handshake',
  },
  {
    src: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&q=90',
    alt: 'Financial Markets & Trading',
  },
]

export default function BIZInvestorVentureHubPage() {
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <span>Investment &amp; Partnership Solutions</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6" style={{color: '#5D0E8B'}}>
                BIZ Investor &amp; Venture Hub
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-10">
                The bridge between great ideas and the capital, talent, and resources needed to bring them to life. We connect, structure, and manage ventures from concept to profitable enterprise.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25">
                  Find an Investor
                </Link>
                <Link href="/contact" className="bg-primary/10 hover:bg-primary/20 border border-primary/30 text-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                  Submit Your Venture
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
                <div className="flex justify-center gap-2 mt-4">
                  {sliderImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${i === currentImage ? 'bg-primary w-6' : 'bg-primary/30 w-2.5'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
     

      {/* Services */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#5D0E8B'}}>
              Venture Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From concept validation to capital raising and venture management we provide the full infrastructure for success.
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

      {/* How It Works */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#5D0E8B'}}>
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process connects the right people, capital, and resources at the right time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, i) => (
              <div key={i} className="relative p-6 bg-background rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <span className="text-5xl font-black text-primary/20 mb-4 block">{item.step}</span>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Split */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, var(--primary) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                <img
                  src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80"
                  alt="Investor Venture Hub"
                  className="relative w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{color: '#5D0E8B'}}>
                Capital Meets Opportunity
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our investor network spans multiple industries and investment stages. Whether you are a startup seeking seed funding or an established business pursuing expansion capital, we have the right connections.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Equally, for investors seeking high-potential ventures managed by a proven team, our hub offers curated opportunities with full operational support and transparent performance reporting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Your Venture Starts Here</h2>
          <p className="text-xl text-muted-foreground mb-8">Whether you are seeking capital, a partner, or a managed venture our hub is your gateway to the right opportunity.</p>
          <Link href="/contact" className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25">
            Connect With Our Venture Team
          </Link>
        </div>
      </section>
    </div>
  )
}
