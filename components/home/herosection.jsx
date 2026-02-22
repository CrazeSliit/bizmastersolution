'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-hero-gradient-from via-hero-gradient-via to-hero-gradient-to overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-hero-accent rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-20 h-20 border border-hero-text rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-32 w-16 h-16 border border-hero-accent rounded-full animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-hero-text rounded-full animate-float" style={{animationDelay: '0.5s'}}></div>
        
        {/* Dot Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full" style={{
            backgroundImage: 'radial-gradient(circle, var(--hero-text) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}></div>
        </div>
      </div>
      
      

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 lg:pt-32 pb-12 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
        
            
            {/* Main Headline */}
            <h1 className="text-5xl lg:text-7xl font-extrabold text-hero-text leading-tight tracking-tight">
                <span className="block">Transforming</span>
                <span className="block bg-gradient-to-r from-hero-accentbg-clip-text ">
                    Businesses
                </span>
                <span className="block">into Industry</span>
                <span className="block text-hero-accent drop-shadow-lg">Leaders</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl lg:text-2xl text-hero-subtext leading-relaxed max-w-2xl">
              BIZmaster Solutions is your strategic growth partner blending 
              <span className="text-hero-accent font-semibold"> AI innovation</span>, 
              <span className="text-hero-accent font-semibold"> branding</span>, 
              <span className="text-hero-accent font-semibold"> finance</span>, and 
              <span className="text-hero-accent font-semibold"> execution</span> to take your business to the next level.
            </p>
            

            
            
                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                          <Link href="/services" className="group bg-hero-accent hover:bg-white text-black px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center">
                            Start Your Growth Journey
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </Link>
                          <button className="group backdrop-blur-sm bg-white/90 hover:bg-#580088 border border-hero-accent text-black px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 hover:scale-105 flex items-center justify-center">
                            Explore Our Services
                            <svg className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      
                    {/* Right Column - Visual Content */}
                                        <div className="relative -mt-8 lg:-mt-12">
                                        
                                            <div className="relative z-10 group">
                                                <div className="relative overflow-hidden rounded-xl shadow-2xl">
                                                    <img 
                                                        src="/Untitled design (5).png"
                                                        alt="Business team working together"
                                                        className="w-[1000px] h-[750px] object-cover group-hover:scale-105 transition-transform duration-700"
                                                        style={{transform: `translateY(${scrollY * 0.05}px)`}}
                                                    />
                                                    {/* Overlay gradient */}
                                                </div>
                                            </div>
                                            
                                            {/* Background Glow Effect */}
                                            <div className="absolute inset-0 bg-hero-accent/20 rounded-3xl blur-3xl scale-110 -z-10 animate-pulse"></div>
                                        </div>
                                        </div>

                                        {/* Key Value Pillars */}
        <div className="mt-20 lg:mt-32">
          <h2 className="text-center text-3xl lg:text-4xl font-bold text-hero-text mb-4">
            Our <span className="text-hero-accent">Expertise</span> Pillars
          </h2>
          <p className="text-center text-hero-subtext mb-12 max-w-3xl mx-auto">
            Comprehensive solutions designed to accelerate your business transformation
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {/* AI & Technology */}
            <div className="group text-center p-6 backdrop-blur-sm bg-white/5 rounded-2xl border border-hero-accent/30 hover:bg-hero-accent/10 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-4 bg-hero-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-hero-text mb-2">AI & Tech Hub</h3>
              <p className="text-sm text-hero-subtext">Next-gen automation & AI solutions</p>
            </div>
            
            {/* Sales & Growth */}
            <div className="group text-center p-6 backdrop-blur-sm bg-white/5 rounded-2xl border border-hero-accent/30 hover:bg-hero-accent/10 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-hero-accent">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-hero-text mb-2">Sales & Growth</h3>
              <p className="text-sm text-hero-subtext">Revenue acceleration strategies</p>
            </div>
            
            {/* Branding & Digital */}
            <div className="group text-center p-6 backdrop-blur-sm bg-white/5 rounded-2xl border border-hero-accent/30 hover:bg-hero-accent/10 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-4 bg-hero-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4l-.5 14a2 2 0 002 2h7a2 2 0 002-2L17 4M9 9h6M9 13h6" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-hero-text mb-2">Branding & Digital</h3>
              <p className="text-sm text-hero-subtext">Market presence & identity</p>
            </div>
            
            {/* Finance & Legal */}
            <div className="group text-center p-6 backdrop-blur-sm bg-white/5 rounded-2xl border border-hero-accent/30 hover:bg-hero-accent/10 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border-2 border-hero-accent">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-hero-text mb-2">Finance & Legal</h3>
              <p className="text-sm text-hero-subtext">Strategic financial advisory</p>
            </div>
            
            {/* Investor Hub */}
            <div className="group text-center p-6 backdrop-blur-sm bg-white/5 rounded-2xl border border-hero-accent/30 hover:bg-hero-accent/10 transition-all duration-300 hover:-translate-y-2 col-span-2 md:col-span-1">
              <div className="w-16 h-16 mx-auto mb-4 bg-hero-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-hero-text mb-2">Investor Hub</h3>
              <p className="text-sm text-hero-subtext">Capital & partnership connections</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Smooth Wave Transition */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="var(--background)" />
        </svg>
      </div>
    </div>
  )
}