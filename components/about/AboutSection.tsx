'use client'

import { useState, useEffect } from 'react'

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="relative bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {/* Hero Section */}
      <div className="relative pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              About <span className="text-primary">BIZmaster Solutions</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Your Strategic Growth Partner - Empowering Businesses for Next-Level Success
            </p>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                BIZmaster Solutions is a dynamic and innovative business development company, established in July, 
                dedicated to transforming enterprises into industry leaders. We operate on a unique, service-based 
                business model, going beyond traditional consulting to become your comprehensive execution partner.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are committed to monitoring, managing, and upgrading your operations for measurable, sustainable 
                growth, fostering long-term business partnerships where all connected resource partners grow together 
                on one integrated platform.
              </p>
              
            
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8">
                <div className="w-full h-[400px] bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-12 h-12 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div className="text-2xl font-bold text-foreground">Innovation</div>
                    <div className="text-muted-foreground">Driving Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Three-Pronged Approach Preview */}
      <div className="py-16 lg:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Unique <span className="text-primary">Three-Pronged</span> Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Addressing diverse market needs through interconnected channels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group text-center p-8 bg-background/80 backdrop-blur-sm rounded-3xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-primary-foreground">01</div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Connecting Resources</h3>
              <p className="text-muted-foreground">Strategic intermediary bringing together products, ventures, investors, and professionals</p>
            </div>

            <div className="group text-center p-8 bg-background/80 backdrop-blur-sm rounded-3xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-primary-foreground">02</div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Six Service Pillars</h3>
              <p className="text-muted-foreground">Comprehensive customized services through our specialized expertise pillars</p>
            </div>

            <div className="group text-center p-8 bg-background/80 backdrop-blur-sm rounded-3xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold text-primary-foreground">03</div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Direct Product Sales</h3>
              <p className="text-muted-foreground">Standardized AI products, software solutions, and business tools</p>
            </div>
          </div>
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="py-16 lg:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Vision & Mission
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Vision */}
            <div className="bg-background/80 backdrop-blur-sm rounded-3xl p-8 border border-primary/20 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To transform businesses into industry leaders who are known for delivering unparalleled quality and 
                professional service to their customers. Creating a vibrant ecosystem where innovation, collaboration, 
                and sustained profitability lead to financial freedom for all connected stakeholders.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-background/80 backdrop-blur-sm rounded-3xl p-8 border border-primary/20 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mr-4">
                  <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower businesses at every stage by providing integrated, next-level strategic solutions, 
                comprehensive management, and a supportive community, ensuring continuous growth and the creation 
                of professional, smooth, and classy business models.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Expertise */}
      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our expertise spans cutting-edge technology, strategic solutions, and comprehensive business support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* AI & Technology */}
            <div className="group bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">AI Integration</h3>
              <p className="text-muted-foreground">Advanced AI integration and cutting-edge technological solutions</p>
            </div>

            {/* Strategic Sales */}
            <div className="group bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Strategic Sales</h3>
              <p className="text-muted-foreground">Comprehensive sales and marketing strategies for growth</p>
            </div>

            {/* Digital Presence */}
            <div className="group bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Digital Presence</h3>
              <p className="text-muted-foreground">Advanced digital presence and branding solutions</p>
            </div>

            {/* Financial Advisory */}
            <div className="group bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Financial Advisory</h3>
              <p className="text-muted-foreground">Robust financial and legal advisory services</p>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 lg:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Partner with <span className="text-primary">BIZmaster Solutions?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer more than just consulting - we&apos;re your comprehensive execution partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group text-center p-8 bg-background/80 backdrop-blur-sm rounded-3xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Unique Service Model</h3>
              <p className="text-muted-foreground">Our distinctive three-pronged approach ensures comprehensive support from concept to execution</p>
            </div>

            <div className="group text-center p-8 bg-background/80 backdrop-blur-sm rounded-3xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Execution-Focused</h3>
              <p className="text-muted-foreground">Beyond strategy, we commit to long-term execution and monitoring for tangible results</p>
            </div>

            <div className="group text-center p-8 bg-background/80 backdrop-blur-sm rounded-3xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">AI & Technology Integration</h3>
              <p className="text-muted-foreground">Cutting-edge AI and continuously updated technologies in all our solutions</p>
            </div>

            <div className="group text-center p-8 bg-background/80 backdrop-blur-sm rounded-3xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Community & Network</h3>
              <p className="text-muted-foreground">Connect to a vibrant ecosystem of resources, investors, and professionals</p>
            </div>

            <div className="group text-center p-8 bg-background/80 backdrop-blur-sm rounded-3xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Scalable Solutions</h3>
              <p className="text-muted-foreground">Tailored, customized, and scalable solutions with expert guidance</p>
            </div>

            <div className="group text-center p-8 bg-background/80 backdrop-blur-sm rounded-3xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Innovation & Franchise</h3>
              <p className="text-muted-foreground">Committed to inventing new business models and developing scalable franchises</p>
            </div>
          </div>
        </div>
      </div>

      {/* Client Testimonials */}
      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What Our <span className="text-primary">Clients Say</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Success stories from businesses we&apos;ve transformed
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-background/80 backdrop-blur-sm rounded-3xl p-8 border border-primary/20 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-primary">TM</span>
                </div>
                <div>
                  <div className="font-bold text-foreground">Tech Innovate Corp</div>
                  <div className="text-sm text-muted-foreground">Startup → Market Leader</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">&ldquo;BIZmaster transformed our startup into a market leader. Their three-pronged approach and AI integration helped us scale 500% in just 18 months.&rdquo;</p>
              <div className="flex text-primary text-xl">★★★★★</div>
            </div>

            <div className="bg-background/80 backdrop-blur-sm rounded-3xl p-8 border border-primary/20 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-primary">GS</span>
                </div>
                <div>
                  <div className="font-bold text-foreground">GreenStyle Enterprises</div>
                  <div className="text-sm text-muted-foreground">SME Transformation</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">&ldquo;From branding to financial planning, they handled everything. Our revenue increased by 300% and we now have a commanding brand presence.&rdquo;</p>
              <div className="flex text-primary text-xl">★★★★★</div>
            </div>

            <div className="bg-background/80 backdrop-blur-sm rounded-3xl p-8 border border-primary/20 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-2xl font-bold text-primary">FL</span>
                </div>
                <div>
                  <div className="font-bold text-foreground">FutureLab Industries</div>
                  <div className="text-sm text-muted-foreground">Corporate Innovation</div>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">&ldquo;Their investor hub connected us with the right partners. We successfully launched three new ventures with their comprehensive support.&rdquo;</p>
              <div className="flex text-primary text-xl">★★★★★</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 lg:py-24 bg-primary/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join 500+ businesses that have achieved remarkable growth with BIZmaster Solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center">
              Start Your Journey
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="group bg-background hover:bg-background/80 border border-primary text-foreground px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center">
              Schedule Consultation
              <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}