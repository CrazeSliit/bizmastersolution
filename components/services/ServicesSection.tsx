'use client'

import { useState, useEffect } from 'react'

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const pillars = [
    {
      id: 1,
      name: "BIZtech Hub",
      subtitle: "IT & Technology Solutions",
      description: "Our dedicated IT & Technology solutions center specializing in customized operating systems and cutting-edge technological integrations.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      icon: (
        <svg className="w-10 h-10 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      services: [
        "Customized operating system implementation (ERP/POS/CRM)",
        "Cutting-edge technological integrations",
        "Social media & WhatsApp integration",
        "AI integration for all business solutions and modules"
      ],
      products: [
        "AI chatbots & AI agents",
        "Innovative AI products",
        "Web & mobile app development",
        "E-commerce platforms",
      ]
    },
    {
      id: 2,
      name: "BIZ Creative Forge",
      subtitle: "Branding & Digital Marketing",
      description: "Where your brand comes to life through compelling design, visual identity, and performance-driven digital campaigns.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      icon: (
        <svg className="w-10 h-10 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2M7 4h10M7 4l-.5 14a2 2 0 002 2h7a2 2 0 002-2L17 4M9 9h6M9 13h6" />
        </svg>
      ),
      services: [
        "Brand strategy development",
        "Vision/mission/profile development",
        "Graphics design and development",
        "Digital marketing strategy and execution",
        "Social media marketing (Facebook/Instagram/TikTok/YouTube)"
      ],
      products: [
        "Brand identity development",
        "Scroll-stopping content creation",
        "Performance-driven digital campaigns",
        "Total digital campaign management"
      ]
    },
    {
      id: 3,
      name: "BIZ Strategic Growth Center",
      subtitle: "Strategic Development & Execution",
      description: "The heart of our strategic development focusing on sales, marketing, business model development, and strategic execution.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      icon: (
        <svg className="w-10 h-10 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      services: [
        "Internal and external business analysis",
        "Business redesign and architecture",
        "Strategic sales & marketing planning and execution",
        "Financial planning and execution",
        "Business model & concept development",
        "Team strategic development and performance"
      ],
      products: [
        "WhatsApp/SMS/Email Marketing",
        "Expert consultation & follow-up monitoring",
        "Business model development for execution",
        "Quality product & service development",
        "Strategic planning, execution & monitoring"
      ]
    },
    {
      id: 4,
      name: "BIZ Advisor",
      subtitle: "Back-Office & Legal Support",
      description: "Comprehensive back-office support including business registration, accounting, HR, and legal services.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      icon: (
        <svg className="w-10 h-10 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      services: [
        "Business registration",
        "Tax consultancy",
        "Bookkeeping & accounting services",
        "Business plan & project plan development",
        "Human Resources (HR) activities and services",
        "Audit services & secretary services",
        "Legal activities & asset management services"
      ]
    },
    {
      id: 5,
      name: "BIZ Investor & Venture Hub",
      subtitle: "Investment & Partnership Solutions",
      description: "Strategic intermediary connecting business owners with investors, skilled professionals, and asset owners.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&q=80",
      icon: (
        <svg className="w-10 h-10 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      services: [
        "Connecting business owners with investors",
        "Skilled professional networking",
        "Asset owner connections",
        "Management of entire venture operations"
      ],
      products: [
        "Initial concept development",
        "Comprehensive business planning",
        "Ongoing management & resource allocation",
        "Profit generation through comprehensive services"
      ]
    },
    {
      id: 6,
      name: "BIZ Academy & Forum",
      subtitle: "Education & Community Building",
      description: "Hub for Business Excellence providing hands-on education and cultivating a dynamic business community.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
      icon: (
        <svg className="w-10 h-10 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      services: [
        "Hands-on education and training",
        "Dynamic business community cultivation",
        "Community building for networking and collaboration"
      ],
      products: [
        "Training on latest business strategies",
        "Business consultancy and awareness programs",
        "Technology integration and IT solutions training",
        "Advanced social media marketing training",
        "Proven sales strategies training",
        "Exclusive business events and forums"
      ]
    }
  ]

  return (
    <div className="relative bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {/* Hero Section */}
      <div className="relative pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Our <span className="text-primary">Core Service</span> Pillars
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Six specialized pillars delivering tailored, scalable solutions to address specific challenges and drive growth across various business functions
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-24">
            {pillars.map((pillar, index) => (
              <div key={pillar.id} className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
                      {pillar.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-foreground">{pillar.name}</h2>
                      <p className="text-primary font-semibold">{pillar.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>

                  {/* Core Services */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground">Core Services:</h3>
                    <div className="grid gap-3">
                      {pillar.services.map((service, serviceIndex) => (
                        <div key={serviceIndex} className="flex items-start space-x-3 p-3 bg-primary/5 rounded-xl hover:bg-primary/10 transition-colors duration-300">
                          <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          <span className="text-muted-foreground font-medium">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Products & Tools */}
                  {pillar.products && (
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-foreground">Products & Tools:</h3>
                      <div className="grid gap-3">
                        {pillar.products.map((product, productIndex) => (
                          <div key={productIndex} className="flex items-start space-x-3 p-3 bg-background/50 border border-primary/20 rounded-xl hover:border-primary/40 transition-colors duration-300">
                            <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                            <span className="text-muted-foreground font-medium">{product}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* CTA Button for each pillar */}
                  <div className="pt-4">
                    <a
                      href="https://wa.me/+94777960231"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group bg-primary/10 hover:bg-primary text-muted-foreground hover:text-primary-foreground px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center"
                    >
                      More Information
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Enhanced Visual */}
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
                        src={pillar.image} 
                        alt={pillar.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent flex flex-col items-center justify-end p-8">
                        <div className="w-24 h-24 bg-primary rounded-3xl flex items-center justify-center mb-4 shadow-2xl">
                          <div className="scale-125">
                            {pillar.icon}
                          </div>
                        </div>
                        <h3 className="text-2xl font-bold text-white text-center mb-2">{pillar.name}</h3>
                        <p className="text-white/90 font-semibold text-center mb-4">{pillar.subtitle}</p>
                        
                        {/* Feature highlights */}
                        <div className="flex flex-wrap gap-2 justify-center">
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">Professional</span>
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">Scalable</span>
                          <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm font-medium rounded-full">AI-Powered</span>
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

      {/* Service Comparison */}
      <div className="py-16 lg:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Our <span className="text-primary">Service Model</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Compare traditional consulting vs. our comprehensive execution partnership
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Traditional Consulting */}
            <div className="bg-background/50 backdrop-blur-sm rounded-3xl p-8 border border-muted-foreground/20">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-muted-foreground/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-muted-foreground mb-2">Traditional Consulting</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-muted-foreground mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-muted-foreground">Strategy only, no execution</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-muted-foreground mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-muted-foreground">Short-term engagement</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-muted-foreground mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-muted-foreground">Limited technology integration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-muted-foreground mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-muted-foreground">No ongoing monitoring</span>
                </li>
              </ul>
            </div>

            {/* BIZmaster Solutions */}
            <div className="bg-primary/10 backdrop-blur-sm rounded-3xl p-8 border border-primary/40 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-bold">RECOMMENDED</span>
              </div>
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">BIZmaster Solutions</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-primary mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-foreground font-medium">Strategy + Full Execution Partnership</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-primary mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-foreground font-medium">Long-term Commitment & Monitoring</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-primary mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-foreground font-medium">Advanced AI & Technology Integration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-primary mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                  <span className="text-foreground font-medium">Continuous Growth & Optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 lg:py-24 bg-primary/10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Partner with BIZmaster Solutions and experience next-level growth across all business functions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl flex items-center justify-center">
              Start Your Transformation
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