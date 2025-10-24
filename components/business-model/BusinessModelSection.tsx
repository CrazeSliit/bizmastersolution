'use client'

import { useState, useEffect } from 'react'

export default function BusinessModelSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const approaches = [
    {
      id: 1,
      
      title: "Connecting Resources & Inventing Business Models",
      description: "We act as a strategic intermediary, bringing together products, ventures, investors, business locations, and skilled professionals to conceptualize, develop, and launch entirely new, profitable business models.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      features: [
        "Strategic intermediary services",
        "Full business management responsibility",
        "Sales and marketing execution",
        "IT & technology integration",
        "Digital marketing & branding",
        "Accounting & workflow management",
        "Franchise model development"
      ],
      outcome: "Generate continuous revenue for everyone connected to the venture while creating scalable business models."
    },
    {
      id: 2,
      title: "Direct Service through Six Pillars",
      description: "We provide comprehensive, customized services to ongoing businesses, startups, SMEs, and corporate-level clients through our six specialized pillars.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
      features: [
        "BIZtech Hub - IT & Technology Solutions",
        "BIZ Creative Forge - Branding & Digital Marketing",
        "BIZ Strategic Growth Center - Strategic Development",
        "BIZ Advisor - Back-Office & Legal Support",
        "BIZ Investor & Venture Hub - Investment Solutions",
        "BIZ Academy & Forum - Education & Community"
      ],
      outcome: "Deliver tailored, scalable solutions to address specific challenges and drive growth across various business functions."
    },
    {
      id: 3,
      title: "Direct Sales of Pillar-Specific Products",
      description: "Beyond bespoke services, we offer standardized products and solutions developed within our six pillars, providing accessible, high-quality tools and resources directly to businesses.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
      features: [
        "Innovative AI products & tools",
        "Operational base software solutions",
        "Mobile applications",
        "Production-based software tools",
        "Online E-commerce platforms",
        "AI chatbots & agents",
        "Business automation tools"
      ],
      outcome: "Provide accessible, high-quality standardized solutions that businesses can implement immediately for enhanced productivity."
    }
  ]

  return (
    <div className="relative bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {/* Hero Section */}
      <div className="relative pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Our Unique <span className="text-primary">Business Model</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              A Three-Pronged Approach that addresses diverse market needs through interconnected channels, fostering long-term business partnerships and collective growth
            </p>
          </div>
        </div>
      </div>

      {/* Business Model Overview */}
      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              What Makes Us <span className="text-primary">Different</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              BIZmaster Solutions operates on a distinctive model that goes beyond traditional consulting to become your comprehensive execution partner
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-primary/20">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Service-Based Model</h3>
              <p className="text-muted-foreground">Going beyond traditional consulting to comprehensive execution partnership</p>
            </div>

            <div className="text-center p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-primary/20">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Long-Term Commitment</h3>
              <p className="text-muted-foreground">Monitoring, managing, and upgrading operations for sustainable growth</p>
            </div>

            <div className="text-center p-6 bg-background/50 backdrop-blur-sm rounded-2xl border border-primary/20">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Collective Growth</h3>
              <p className="text-muted-foreground">All connected resource partners grow together on one integrated platform</p>
            </div>
          </div>
        </div>
      </div>

      {/* Three-Pronged Approach */}
      <div className="py-16 lg:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Three-Pronged</span> Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Three interconnected channels that address diverse market needs and foster long-term partnerships
            </p>
          </div>

          <div className="space-y-16">
            {approaches.map((approach, index) => (
              <div key={approach.id} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-start space-x-4">
                    <div className="text-6xl font-bold text-primary/30">
                      
                    </div>
                    <div>
                      <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                        {approach.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        {approach.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4">
                    <h4 className="text-xl font-bold text-foreground">Key Features:</h4>
                    <ul className="space-y-3">
                      {approach.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcome */}
                  <div className="bg-primary/10 rounded-2xl p-6">
                    <h4 className="text-lg font-bold text-foreground mb-2">Expected Outcome:</h4>
                    <p className="text-muted-foreground">{approach.outcome}</p>
                  </div>
                </div>

                {/* Visual */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl p-8 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="w-full h-full" style={{
                        backgroundImage: 'radial-gradient(circle, var(--primary) 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                      }}></div>
                    </div>
                    
                    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden group">
                      {/* Image */}
                      <img 
                        src={approach.image} 
                        alt={approach.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-primary/30 flex items-center justify-center">
                        <div className="text-center p-8">
                          <div className="text-9xl font-bold text-white/30 mb-4">
                           
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2">{approach.title.split(' ').slice(0, 3).join(' ')}</h3>
                          <div className="flex flex-wrap gap-2 justify-center mt-4">
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">Strategic</span>
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">Scalable</span>
                            <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">Proven</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Implementation Timeline */}
      <div className="py-16 lg:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Implementation <span className="text-primary">Timeline</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A structured approach to business transformation with clear milestones and deliverables
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-16 bottom-0 w-1 bg-primary/30"></div>
              
              <div className="space-y-12">
                {[
                  {
                    phase: "Phase 1",
                    title: "Discovery & Assessment",
                    duration: "Weeks 1-2",
                    description: "Comprehensive analysis of current state, pain points, and opportunities",
                    deliverables: ["Business Assessment Report", "Technology Audit", "Opportunity Matrix", "Strategic Roadmap"]
                  },
                  {
                    phase: "Phase 2", 
                    title: "Strategy & Planning",
                    duration: "Weeks 3-4",
                    description: "Design tailored solutions and create detailed implementation plans",
                    deliverables: ["Strategic Plan", "Technology Blueprint", "Process Maps", "Success Metrics"]
                  },
                  {
                    phase: "Phase 3",
                    title: "Implementation & Execution",
                    duration: "Weeks 5-12",
                    description: "Deploy solutions, implement processes, and train teams",
                    deliverables: ["System Implementation", "Process Optimization", "Team Training", "Performance Monitoring"]
                  },
                  {
                    phase: "Phase 4",
                    title: "Monitoring & Optimization",
                    duration: "Ongoing",
                    description: "Continuous monitoring, support, and iterative improvements",
                    deliverables: ["Performance Reports", "Optimization Plans", "Support Services", "Growth Strategies"]
                  }
                ].map((timeline, index) => (
                  <div key={index} className="relative flex items-start space-x-8">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center relative z-10">
                      <span className="text-primary-foreground font-bold">{index + 1}</span>
                    </div>
                    <div className="flex-1 bg-background/50 backdrop-blur-sm rounded-3xl p-8 border border-primary/20">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <span className="text-primary font-semibold">{timeline.phase}</span>
                          <h3 className="text-xl font-bold text-foreground">{timeline.title}</h3>
                        </div>
                        <span className="text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">{timeline.duration}</span>
                      </div>
                      <p className="text-muted-foreground mb-6">{timeline.description}</p>
                      <div className="grid md:grid-cols-2 gap-3">
                        {timeline.deliverables.map((deliverable, deliverableIndex) => (
                          <div key={deliverableIndex} className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            <span className="text-sm text-muted-foreground">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Target Businesses */}
      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Who We <span className="text-primary">Empower</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We focus on empowering businesses at every stage to reach their full potential
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-background/50 backdrop-blur-sm rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Startups</h3>
              <p className="text-muted-foreground">
                Early-stage companies looking to establish strong foundations, develop viable business models, and scale rapidly
              </p>
            </div>

            <div className="text-center p-8 bg-background/50 backdrop-blur-sm rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">SMEs</h3>
              <p className="text-muted-foreground">
                Small and Medium Enterprises seeking to optimize operations, expand market reach, and achieve sustainable growth
              </p>
            </div>

            <div className="text-center p-8 bg-background/50 backdrop-blur-sm rounded-2xl border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:-translate-y-2">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Large Enterprises</h3>
              <p className="text-muted-foreground">
                Established corporations looking to innovate, transform digitally, and maintain competitive advantage in dynamic markets
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 lg:py-24 bg-primary/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ready to Experience Our Unique Approach?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Transform your potential into commanding success with our three-pronged business model
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center">
              Start Your Partnership
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="group bg-background hover:bg-background/80 border border-primary text-foreground px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 flex items-center justify-center">
              Learn More
              <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}