'use client'

import { useRef } from 'react'
import Link from 'next/link'

const products = [
  {
    category: 'AI Conversational Agent',
    name: 'AI Website Chatbot',
    description: 'Answers visitor questions 24/7, recommends the right products, and captures leads straight into your CRM.',
    image: 'https://images.unsplash.com/photo-1684369175833-4b445ad6bfb5?w=800&q=80',
    href: '/biztech-hub#website-chatbot',
  },
  {
    category: 'WhatsApp Automation',
    name: 'AI WhatsApp Chatbot',
    description: 'Smart auto-replies, order and delivery updates, and sales conversations on the app your customers use most.',
    image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&q=80',
    href: '/biztech-hub#website-chatbot',
  },
  {
    category: 'Business Operating System',
    name: 'ERP / POS / CRM',
    description: 'One system for sales, inventory, customers, and finance, customized to how your business actually runs.',
    image: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80',
    href: '/biztech-hub',
  },
  {
    category: 'Intelligent Automation',
    name: 'AI Agents',
    description: 'Automate repetitive workflows, from follow-ups to reporting, so your team can focus on growth.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80',
    href: '/biztech-hub',
  },
  {
    category: 'Online Store Solutions',
    name: 'E-Commerce Platforms',
    description: 'End-to-end online stores with payment gateways, stock management, and sales analytics built in.',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    href: '/biztech-hub',
  },
  {
    category: 'Custom Development',
    name: 'Web & Mobile Apps',
    description: 'Fast, scalable web and mobile applications designed around your customers and your brand.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
    href: '/biztech-hub',
  },
]

export default function ProductsShowcase() {
  const trackRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('article')
    const step = card ? card.getBoundingClientRect().width + 24 : 320
    track.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#5D0E8B' }}>
            Intelligent Solutions Developed by Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            BIZmaster Solutions designs and delivers AI chatbots, automation, and business systems built for real businesses: secure, scalable, and focused on results.
          </p>
        </div>

        <div className="flex justify-end gap-3 mb-6">
          <button
            onClick={() => scroll(-1)}
            aria-label="Previous products"
            className="w-11 h-11 rounded-full border border-primary/30 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Next products"
            className="w-11 h-11 rounded-full border border-primary/30 text-primary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

      <div
        ref={trackRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 pt-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {products.map((product) => (
          <article
            key={product.name}
            className="group relative flex-shrink-0 snap-start w-[85%] sm:w-[calc((100%_-_1.5rem)/2)] lg:w-[calc((100%_-_4.5rem)/4)] h-[500px] rounded-3xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-primary/25"
          >
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/20 to-black/90" />

            <div className="relative h-full flex flex-col justify-between p-7 text-white">
              <div>
                <p className="text-sm font-semibold text-white/85 mb-2">{product.category}</p>
                <h3 className="text-3xl font-bold leading-tight">{product.name}</h3>
              </div>

              <div>
                <p className="text-sm leading-relaxed text-white/85 mb-5">{product.description}</p>
                <Link
                  href={product.href}
                  className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 group-hover:bg-primary group-hover:border-primary"
                >
                  Learn More
                  <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
      </div>
    </section>
  )
}
