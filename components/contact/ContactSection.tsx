'use client'

import { useState, useEffect } from 'react'

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: data.message || 'Thank you! Your message has been sent successfully. We will contact you within 24 hours.'
        })
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          message: ''
        })
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Something went wrong. Please try again.'
        })
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or contact us directly at chamudithakyt21@gmail.com'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      details: ["info@bizmaster.lk", ""],
      description: "Send us an email and we'll respond within 24 hours"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Call Us",
      details: ["0777960231", ""],
      description: "Call us during business hours for immediate assistance"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Visit Us",
      details: ["231/A Athurugiriya Road,Malabe", ""],
      description: "Schedule an appointment to visit our headquarters"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Business Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 2:00 PM"],
      description: "We're available during these hours for consultations"
    }
  ]

  const services = [
    "BIZtech Hub - IT & Technology",
    "BIZ Creative Forge - Branding & Marketing",
    "BIZ Strategic Growth Center",
    "BIZ Advisor - Legal & Financial",
    "BIZ Investor & Venture Hub",
    "BIZ Academy & Forum",
    "Custom Business Model Development",
    "General Consultation"
  ]

  return (
    <div className="relative bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {/* Hero Section */}
      <div className="relative pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
              Ready to transform your business? Let&apos;s discuss how BIZmaster Solutions can accelerate your growth and success
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form & Info */}
      <div className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Start Your Growth Journey
                </h2>
                <p className="text-lg text-muted-foreground">
                  Fill out the form below and our team will get back to you within 24 hours to discuss your specific needs and how we can help.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Success/Error Message */}
                {submitStatus.type && (
                  <div className={`p-4 rounded-xl ${
                    submitStatus.type === 'success' 
                      ? 'bg-green-500/10 border border-green-500/20' 
                      : 'bg-red-500/10 border border-red-500/20'
                  }`}>
                    <div className="flex items-start space-x-3">
                      {submitStatus.type === 'success' ? (
                        <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      )}
                      <p className={submitStatus.type === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                        {submitStatus.message}
                      </p>
                    </div>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-background/50 backdrop-blur-sm text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-background/50 backdrop-blur-sm text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-foreground mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-background/50 backdrop-blur-sm text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-foreground mb-2">
                    Service of Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-background/50 backdrop-blur-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-primary/20 bg-background/50 backdrop-blur-sm text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your business goals and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-[1.02] shadow-xl hover:shadow-2xl flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Contact Information
                </h2>
                <p className="text-lg text-muted-foreground">
                  Multiple ways to reach us. Choose what works best for you.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground flex-shrink-0">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-2">{info.title}</h3>
                        <div className="space-y-1 mb-2">
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-primary font-semibold">{detail}</p>
                          ))}
                        </div>
                        <p className="text-muted-foreground text-sm">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
                <h3 className="text-xl font-bold text-foreground mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-colors duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.749-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 23.954 12.017 23.954c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Methods Grid */}
      <div className="py-16 lg:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Multiple Ways to <span className="text-primary">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Choose the communication method that works best for your business needs and urgency level
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                ),
                title: "Phone Consultation",
                subtitle: "Direct Line to Experts",
                contact: "+1 (555) 123-4567",
                availability: "Mon-Fri, 9 AM - 6 PM EST",
                response: "Immediate",
                best: "Urgent matters & complex discussions"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Email Support",
                subtitle: "Comprehensive Documentation",
                contact: "info@bizmastersolutions.com",
                availability: "24/7 Monitoring",
                response: "Within 4 hours",
                best: "Detailed inquiries & project briefs"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                ),
                title: "Live Chat",
                subtitle: "AI + Human Support",
                contact: "Website Chat Widget",
                availability: "24/7 AI + Business Hours Expert",
                response: "Instant",
                best: "Quick questions & initial guidance"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Video Conference",
                subtitle: "Face-to-Face Strategy Sessions",
                contact: "Zoom, Teams, Google Meet",
                availability: "Flexible Scheduling",
                response: "Same day booking",
                best: "Strategy planning & team meetings"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Office Visit",
                subtitle: "In-Person Collaboration",
                contact: "123 Business District, Tech City",
                availability: "By Appointment Only",
                response: "Within 48 hours",
                best: "Comprehensive strategy development"
              },
              {
                icon: (
                  <svg className="w-8 h-8 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Emergency Support",
                subtitle: "Critical Business Issues",
                contact: "+1 (555) 999-HELP",
                availability: "24/7 Priority Line",
                response: "Within 30 minutes",
                best: "System failures & urgent problems"
              }
            ].map((method, index) => (
              <div key={index} className="bg-background/50 backdrop-blur-sm rounded-3xl p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 group">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{method.title}</h3>
                <p className="text-primary font-semibold mb-4">{method.subtitle}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-sm font-medium text-foreground">Contact: </span>
                      <span className="text-sm text-muted-foreground">{method.contact}</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary/60 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-sm font-medium text-foreground">Available: </span>
                      <span className="text-sm text-muted-foreground">{method.availability}</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary/40 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span className="text-sm font-medium text-foreground">Response: </span>
                      <span className="text-sm text-muted-foreground">{method.response}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-primary/10 rounded-xl p-3 mb-4">
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold">Best for:</span> {method.best}
                  </p>
                </div>

                <button className="w-full bg-primary/10 hover:bg-primary text-muted-foreground hover:text-primary-foreground py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105">
                  Choose This Method
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* FAQ Section */}
      <div className="py-16 lg:py-24 bg-primary/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Quick answers to common questions about our services
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-2">How quickly can you start working on my project?</h3>
              <p className="text-muted-foreground">We typically begin new projects within 1-2 weeks of initial consultation, depending on the scope and your specific requirements.</p>
            </div>

            <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-2">Do you work with businesses of all sizes?</h3>
              <p className="text-muted-foreground">Yes, we specialize in working with Startups, SMEs, and Large Enterprises. Our solutions are scalable and tailored to your business size and needs.</p>
            </div>

            <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-2">What makes your approach different from other consulting firms?</h3>
              <p className="text-muted-foreground">Our unique three-pronged approach goes beyond consulting to execution partnership. We don&apos;t just provide strategies—we help implement and monitor them for long-term success.</p>
            </div>

            <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20">
              <h3 className="text-xl font-bold text-foreground mb-2">Can you help with both strategy and implementation?</h3>
              <p className="text-muted-foreground">Absolutely! Our comprehensive approach covers everything from strategic planning to hands-on implementation, monitoring, and ongoing optimization.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}