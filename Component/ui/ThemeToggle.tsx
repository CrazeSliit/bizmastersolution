'use client';

import { useTheme } from '../../contexts/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-white/10 dark:bg-white/10 light:bg-gray-200/80 backdrop-blur-sm border border-white/20 dark:border-white/20 light:border-gray-300 hover:bg-white/20 dark:hover:bg-white/20 light:hover:bg-gray-300/80 transition-all duration-300 group"
      aria-label="Toggle theme"
    >
      {/* Sun Icon - visible in dark mode */}
      <svg
        className={`w-5 h-5 text-white light:text-gray-700 transition-all duration-300 ${
          theme === 'dark' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'
        } absolute inset-2`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="5"></circle>
        <path d="m12 1 0 2m0 18 0 2M4.22 4.22l1.42 1.42m12.72 12.72 1.42 1.42M1 12l2 0m18 0 2 0M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
      </svg>

      {/* Moon Icon - visible in light mode */}
      <svg
        className={`w-5 h-5 text-white light:text-gray-700 transition-all duration-300 ${
          theme === 'light' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'
        } absolute inset-2`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>

      {/* Invisible placeholder to maintain button size */}
      <svg className="w-5 h-5 opacity-0" viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="5"></circle>
      </svg>
    </button>
  );
}