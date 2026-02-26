'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

const solutions = [
  {
    name: 'BIZtech Hub',
    subtitle: 'IT & Technology Solutions',
    href: '/biztech-hub',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'BIZ Creative Forge',
    subtitle: 'Branding & Digital Marketing',
    href: '/biz-creative-forge',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    name: 'BIZ Strategic Growth Center',
    subtitle: 'Strategy & Execution',
    href: '/biz-strategic-growth-center',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    name: 'BIZ Advisor',
    subtitle: 'Back-Office & Legal Support',
    href: '/biz-advisor',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    name: 'BIZ Investor & Venture Hub',
    subtitle: 'Investment & Partnerships',
    href: '/biz-investor-venture-hub',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    ),
  },
  {
    name: 'BIZ Academy & Forum',
    subtitle: 'Education & Community',
    href: '/biz-academy-forum',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <nav className="bg-background/80 backdrop-blur-xl border border-primary/30 rounded-2xl shadow-lg shadow-black/20 dark:shadow-primary/10 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
        <div className="px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-3 shadow-lg border-2 border-primary/20">
                  <img
                    src="/loggggo.jpg"
                    alt="BizMaster Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col leading-tight">
                  <span className="text-xl font-bold text-foreground">
                    <span className="text-primary">Biz</span>Master
                  </span>
                  <span className="text-sm font-semibold text-primary tracking-widest">Solutions</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-2">
                <Link href="/" className="text-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-300 relative group rounded-xl hover:bg-primary/10">
                  Home
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-6 rounded-full"></span>
                </Link>
                <Link href="/about" className="text-muted-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-300 relative group rounded-xl hover:bg-primary/10">
                  About
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-6 rounded-full"></span>
                </Link>
                <Link href="/services" className="text-muted-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-300 relative group rounded-xl hover:bg-primary/10">
                  Services
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-6 rounded-full"></span>
                </Link>

                {/* Solutions Dropdown */}
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center text-muted-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-300 rounded-xl hover:bg-primary/10 group"
                  >
                    Our Solutions
                    <svg
                      className={`w-4 h-4 ml-1 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-6 rounded-full"></span>
                  </button>

                  {/* Dropdown Panel */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-background/95 backdrop-blur-xl border border-primary/30 rounded-2xl shadow-2xl shadow-black/20 dark:shadow-primary/10 overflow-hidden">
                      <div className="p-2">
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 py-2">Select a Platform</p>
                        {solutions.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsDropdownOpen(false)}
                            className="flex items-start space-x-3 px-3 py-3 rounded-xl hover:bg-primary/10 transition-all duration-200 group"
                          >
                            <div className="w-9 h-9 bg-primary/10 group-hover:bg-primary rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-200">
                              <span className="text-primary group-hover:text-primary-foreground transition-colors duration-200">
                                {item.icon}
                              </span>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200">{item.name}</p>
                              <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Link href="/business-model" className="text-muted-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-300 relative group rounded-xl hover:bg-primary/10">
                  Business Model
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-6 rounded-full"></span>
                </Link>
                <Link href="/contact" className="text-muted-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-300 relative group rounded-xl hover:bg-primary/10">
                  Contact
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-6 rounded-full"></span>
                </Link>
              </div>
            </div>

            {/* Right side - Theme Toggle and CTA */}
            <div className="hidden md:flex items-center space-x-3">
              <ThemeToggle />
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 border border-primary/20">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-muted-foreground hover:text-foreground p-2.5 rounded-xl transition-all duration-300 hover:bg-primary/10"
                aria-label="Toggle mobile menu"
              >
                <svg
                  className={`h-5 w-5 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <div className={`md:hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-[600px] opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="px-4 pt-4 pb-6 space-y-2 bg-background/90 backdrop-blur-xl rounded-2xl border border-primary/30 shadow-lg">
              <Link href="/" className="text-foreground hover:text-primary block px-4 py-3 text-base font-medium transition-all duration-300 rounded-xl hover:bg-primary/10" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary block px-4 py-3 text-base font-medium transition-all duration-300 rounded-xl hover:bg-primary/10" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/services" className="text-muted-foreground hover:text-primary block px-4 py-3 text-base font-medium transition-all duration-300 rounded-xl hover:bg-primary/10" onClick={() => setIsMobileMenuOpen(false)}>
                Services
              </Link>

              {/* Mobile Solutions Accordion */}
              <div>
                <button
                  onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
                  className="w-full flex items-center justify-between text-muted-foreground hover:text-primary px-4 py-3 text-base font-medium transition-all duration-300 rounded-xl hover:bg-primary/10"
                >
                  Our Solutions
                  <svg className={`w-4 h-4 transition-transform duration-300 ${isMobileSolutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isMobileSolutionsOpen ? 'max-h-96' : 'max-h-0'}`}>
                  <div className="pl-4 space-y-1 mt-1">
                    {solutions.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => { setIsMobileMenuOpen(false); setIsMobileSolutionsOpen(false); }}
                        className="flex items-center space-x-3 px-4 py-2.5 rounded-xl hover:bg-primary/10 transition-all duration-200 group"
                      >
                        <span className="text-primary w-4 h-4 flex-shrink-0">{item.icon}</span>
                        <div>
                          <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">{item.name}</p>
                          <p className="text-xs text-muted-foreground">{item.subtitle}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link href="/business-model" className="text-muted-foreground hover:text-primary block px-4 py-3 text-base font-medium transition-all duration-300 rounded-xl hover:bg-primary/10" onClick={() => setIsMobileMenuOpen(false)}>
                Business Model
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary block px-4 py-3 text-base font-medium transition-all duration-300 rounded-xl hover:bg-primary/10" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
              <div className="pt-4">
                <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-[1.02] shadow-lg hover:shadow-primary/25">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}