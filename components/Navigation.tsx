'use client';

import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <nav className="bg-background/80 backdrop-blur-xl border border-primary/30 rounded-2xl shadow-lg shadow-black/20 dark:shadow-primary/10 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20">
        <div className="px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center mr-3 shadow-lg">
                  <span className="text-primary-foreground font-bold text-lg">B</span>
                </div>
                <span className="text-xl font-bold text-foreground">
                  <span className="text-primary">Biz</span>Master
                </span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-2">
                <a
                  href="#home"
                  className="text-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-300 relative group rounded-xl hover:bg-primary/10"
                >
                  Home
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-6 rounded-full"></span>
                </a>
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-300 relative group rounded-xl hover:bg-primary/10"
                >
                  About
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-6 rounded-full"></span>
                </a>
                <a
                  href="#services"
                  className="text-muted-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-300 relative group rounded-xl hover:bg-primary/10"
                >
                  Services
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-6 rounded-full"></span>
                </a>
                <a
                  href="#experience"
                  className="text-muted-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-300 relative group rounded-xl hover:bg-primary/10"
                >
                  Experience
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-6 rounded-full"></span>
                </a>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary px-4 py-2 text-sm font-medium transition-all duration-300 relative group rounded-xl hover:bg-primary/10"
                >
                  Contact
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-6 rounded-full"></span>
                </a>
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
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
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
          <div className={`md:hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-80 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="px-4 pt-4 pb-6 space-y-2 bg-background/90 backdrop-blur-xl rounded-2xl border border-primary/30 shadow-lg">
              <a
                href="#home"
                className="text-foreground hover:text-primary block px-4 py-3 text-base font-medium transition-all duration-300 rounded-xl hover:bg-primary/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-muted-foreground hover:text-primary block px-4 py-3 text-base font-medium transition-all duration-300 rounded-xl hover:bg-primary/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#services"
                className="text-muted-foreground hover:text-primary block px-4 py-3 text-base font-medium transition-all duration-300 rounded-xl hover:bg-primary/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#experience"
                className="text-muted-foreground hover:text-primary block px-4 py-3 text-base font-medium transition-all duration-300 rounded-xl hover:bg-primary/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Experience
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-primary block px-4 py-3 text-base font-medium transition-all duration-300 rounded-xl hover:bg-primary/10"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
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