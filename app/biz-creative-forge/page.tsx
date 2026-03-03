'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import Link from 'next/link'

const services = [
  { title: 'Brand Strategy Development', description: 'Define a clear, compelling brand position that sets you apart from the competition.' },
  { title: 'Visual Identity & Logo Design', description: 'Create a timeless visual identity that communicates your brand values at a glance.' },
  { title: 'Graphics Design & Development', description: 'High-impact visual assets for all channels digital, print, and social media.' },
  { title: 'Social Media Marketing', description: 'Grow your audience across Facebook, Instagram, TikTok, YouTube, and more.' },
  { title: 'Content Creation', description: 'Scroll-stopping content crafted to engage, convert, and retain your target audience.' },
  { title: 'Digital Campaign Management', description: 'End-to-end performance-driven campaigns tracked, optimized, and reported in real time.' },
]

const stats = [
  { value: '300+', label: 'Brands Elevated' },
  { value: '5M+', label: 'Audiences Reached' },
  { value: '12x', label: 'Average ROI on Campaigns' },
  { value: '100%', label: 'Creative Ownership Transferred' },
]

const process = [
  { step: '01', title: 'Discovery', description: 'We learn your brand, market, competitors, and goals through in-depth research.' },
  { step: '02', title: 'Strategy', description: 'We craft a tailored brand and marketing strategy aligned to your business objectives.' },
  { step: '03', title: 'Creation', description: 'Our design and content teams bring your brand to life with compelling visuals and messaging.' },
  { step: '04', title: 'Launch & Optimize', description: 'We deploy campaigns and continuously optimize for maximum performance and ROI.' },
]

const sliderImages = [
  {
    src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=90',
    alt: 'Creative Design Workspace',
  },
  {
    src: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=90',
    alt: 'Graphic Design & Branding',
  },
  {
    src: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1200&q=90',
    alt: 'Social Media Marketing',
  },
]

export default function BIZCreativeForgePage() {
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
        <div className="absolute top-20 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className={`grid lg:grid-cols-2 gap-12 items-center transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Left: Text Content */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Branding &amp; Digital Marketing</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-6" style={{color: '#5D0E8B'}}>
                BIZ Creative Forge
              </h1>
              <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed mb-10">
                Where your brand comes to life. We craft compelling visual identities, magnetic content, and performance-driven digital campaigns that convert audiences into loyal customers.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25">
                  Build My Brand
                </Link>
                <Link href="/services" className="bg-primary/10 hover:bg-primary/20 border border-primary/30 text-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300">
                  Explore Services
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

    

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#5D0E8B'}}>
              Creative Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From brand foundation to viral digital campaigns everything you need to stand out and grow.
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

      {/* Process */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{color: '#5D0E8B'}}>
              Our Creative Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A structured approach to building brands that resonate and campaigns that perform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, i) => (
              <div key={i} className="relative p-6 bg-background rounded-2xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <span className="text-5xl font-black text-primary/20 mb-4 block">{item.step}</span>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Split Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, var(--primary) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                <img
                  src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80"
                  alt="Creative Design"
                  className="relative w-full h-80 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{color: '#5D0E8B'}}>
                More Than Design Brand Authority
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We don&apos;t just make things look good. We build brand authority. Every asset we create is engineered to communicate trust, expertise, and distinction across every touchpoint.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From the first impression on social media to the final checkout experience, your brand will speak with one consistent, powerful voice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">Your Brand Deserves to Be Unforgettable</h2>
          <p className="text-xl text-muted-foreground mb-8">Let our creative team forge a brand identity and digital presence that drives real growth.</p>
          <Link href="/contact" className="inline-block bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/25">
            Start Your Brand Journey
          </Link>
        </div>
      </section>
    </div>
  )
}
