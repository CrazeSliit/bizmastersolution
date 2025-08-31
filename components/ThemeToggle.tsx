'use client';

import { useEffect, useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by showing a placeholder until mounted
  if (!mounted) {
    return (
      <div className="relative p-2 rounded-lg bg-black/20 border border-yellow-400/30 w-9 h-9">
        <div className="w-5 h-5 opacity-0" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg bg-black/20 hover:bg-black/40 border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-300 group"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Sun Icon - visible in dark mode (when we can switch to light) */}
      <svg
        className={`w-5 h-5 text-yellow-400 transition-all duration-300 ${
          theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
        } absolute inset-2`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="5"></circle>
        <path d="m12 1 0 2m0 18 0 2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12l2 0m18 0 2 0M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
      </svg>

      {/* Moon Icon - visible in light mode (when we can switch to dark) */}
      <svg
        className={`w-5 h-5 text-white transition-all duration-300 ${
          theme === 'light' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
        } absolute inset-2`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        strokeWidth="2"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>

      {/* Invisible placeholder to maintain button size */}
      <div className="w-5 h-5 opacity-0" />
    </button>
  );
}