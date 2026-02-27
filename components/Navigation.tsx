'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '../contexts/ThemeContext';

const solutions = [
  {
    name: 'BIZtech Hub',
    subtitle: 'IT & Technology Solutions',
    href: '/biztech-hub',
  },
  {
    name: 'BIZ Creative Forge',
    subtitle: 'Branding & Digital Marketing',
    href: '/biz-creative-forge',
  },
  {
    name: 'BIZ Strategic Growth Center',
    subtitle: 'Strategy & Execution',
    href: '/biz-strategic-growth-center',
  },
  {
    name: 'BIZ Advisor',
    subtitle: 'Back-Office & Legal Support',
    href: '/biz-advisor',
  },
  {
    name: 'BIZ Investor & Venture Hub',
    subtitle: 'Investment & Partnerships',
    href: '/biz-investor-venture-hub',
  },
  {
    name: 'BIZ Academy & Forum',
    subtitle: 'Education & Community',
    href: '/biz-academy-forum',
  },
];

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Business Model', href: '/business-model' },
  { name: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (href: string) => pathname === href;

  return (
    <nav className="w-full z-50 fixed top-0 left-0" style={{ backgroundColor: '#5D0E8B' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30">
              <img src="/loggggo.jpg" alt="BizMaster Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-0">
              <span className="text-2xl font-bold text-white tracking-wide leading-none">
                <span className="text-white-300">BIZ</span>master
              </span>
              <span className="text-2xl font-bold tracking-widest leading-none">solutions</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-4 text-sm font-semibold uppercase tracking-wide transition-colors duration-200 group"
                style={{ color: isActive(link.href) ? '#fff' : 'rgba(255,255,255,0.80)' }}
              >
                {link.name}
                {/* underline */}
                <span
                  className="absolute bottom-0 left-0 h-[3px] w-full transition-all duration-200"
                  style={{
                    backgroundColor: '#fff',
                    opacity: isActive(link.href) ? 1 : 0,
                    transform: isActive(link.href) ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'center',
                  }}
                />
                <span className="absolute bottom-0 left-0 h-[3px] w-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </Link>
            ))}

            {/* Our Solutions Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="relative flex items-center gap-1 px-4 py-4 text-sm font-semibold uppercase tracking-wide text-white/80 hover:text-white transition-colors duration-200 group"
              >
                Our Solutions
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute bottom-0 left-0 h-[3px] w-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-0 w-72 shadow-2xl overflow-hidden z-50" style={{ backgroundColor: '#5D0E8B', border: '1px solid rgba(255,255,255,0.15)' }}>
                  {solutions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsDropdownOpen(false)}
                      className="flex flex-col px-5 py-3 transition-colors duration-150 hover:bg-white/10 border-b border-white/10 last:border-0"
                    >
                      <span className="text-sm font-semibold text-white">{item.name}</span>
                      <span className="text-xs text-white/60 mt-0.5">{item.subtitle}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Theme Toggle — desktop */}
          <div className="hidden md:flex items-center">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/25 bg-white/10 hover:bg-white/20 transition-colors duration-200"
            >
              {theme === 'dark' ? (
                <>
                  <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 15a5 5 0 100-10 5 5 0 000 10zm8-4a1 1 0 110 2h-1a1 1 0 110-2h1zM4 13a1 1 0 110 2H3a1 1 0 110-2h1zm14.95-7.364a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM6.757 17.657a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM20 5.636a1 1 0 00-1.414 0l-.707.707a1 1 0 001.414 1.414l.707-.707A1 1 0 0020 5.636zM7.464 4.929a1 1 0 00-1.414 1.414l.707.707A1 1 0 008.17 5.636l-.707-.707zM12 20a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" />
                  </svg>
                  <span className="text-xs font-semibold text-yellow-300">Light</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                  </svg>
                  <span className="text-xs font-semibold text-white">Dark</span>
                </>
              )}
            </button>
          </div>

          {/* Mobile burger */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              {isMobileMenuOpen
                ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-[600px]' : 'max-h-0'}`}
        style={{ backgroundColor: '#4a0b70' }}
      >
        <div className="px-4 py-3 space-y-0.5">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 px-3 py-2.5 mb-1 w-full text-sm font-semibold uppercase tracking-wide text-white/80 hover:text-white hover:bg-white/10 rounded-sm transition-colors"
          >
            {theme === 'dark' ? (
              <>
                <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 15a5 5 0 100-10 5 5 0 000 10zm8-4a1 1 0 110 2h-1a1 1 0 110-2h1zM4 13a1 1 0 110 2H3a1 1 0 110-2h1zm14.95-7.364a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM6.757 17.657a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM20 5.636a1 1 0 00-1.414 0l-.707.707a1 1 0 001.414 1.414l.707-.707A1 1 0 0020 5.636zM7.464 4.929a1 1 0 00-1.414 1.414l.707.707A1 1 0 008.17 5.636l-.707-.707zM12 20a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" />
                </svg>
                <span className="text-yellow-300">Switch to Light</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
                <span>Switch to Dark</span>
              </>
            )}
          </button>

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2.5 text-sm font-semibold uppercase tracking-wide text-white/80 hover:text-white hover:bg-white/10 rounded-sm transition-colors"
            >
              {link.name}
            </Link>
          ))}

          {/* Mobile Solutions Accordion */}
          <div>
            <button
              onClick={() => setIsMobileSolutionsOpen(!isMobileSolutionsOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-semibold uppercase tracking-wide text-white/80 hover:text-white hover:bg-white/10 rounded-sm transition-colors"
            >
              Our Solutions
              <svg className={`w-3.5 h-3.5 transition-transform duration-200 ${isMobileSolutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isMobileSolutionsOpen ? 'max-h-80' : 'max-h-0'}`}>
              <div className="pl-4 border-l border-white/20 ml-3 mt-1 space-y-0.5">
                {solutions.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => { setIsMobileMenuOpen(false); setIsMobileSolutionsOpen(false); }}
                    className="block px-3 py-2 rounded-sm hover:bg-white/10 transition-colors"
                  >
                    <p className="text-sm font-medium text-white">{item.name}</p>
                    <p className="text-xs text-white/50">{item.subtitle}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
