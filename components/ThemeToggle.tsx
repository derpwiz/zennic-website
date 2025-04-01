'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun, Monitor } from 'lucide-react';

type Theme = 'light' | 'dark' | 'system';

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  // Function to get system theme
  const getSystemTheme = (): 'light' | 'dark' => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  // Function to apply theme
  const applyTheme = (newTheme: 'light' | 'dark') => {
    setResolvedTheme(newTheme);
    
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    // On mount, read the theme from localStorage or use system preference
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    
    if (storedTheme) {
      setTheme(storedTheme);
      
      if (storedTheme === 'system') {
        applyTheme(getSystemTheme());
      } else {
        applyTheme(storedTheme);
      }
    } else {
      setTheme('system');
      applyTheme(getSystemTheme());
    }

    // Add listener for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      if (theme === 'system') {
        applyTheme(getSystemTheme());
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, [theme]);

  const toggleTheme = () => {
    const themeRotation: Record<Theme, Theme> = {
      'light': 'dark',
      'dark': 'system',
      'system': 'light'
    };
    
    const newTheme = themeRotation[theme];
    setTheme(newTheme);
    
    // Update localStorage
    localStorage.setItem('theme', newTheme);
    
    // Apply the theme
    if (newTheme === 'system') {
      applyTheme(getSystemTheme());
    } else {
      applyTheme(newTheme);
    }
  };

  return (
    <div className="relative group">
      <button
        onClick={toggleTheme}
        className="rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        aria-label={`Switch theme, current theme is ${theme}`}
        title={`Current theme: ${theme}`}
      >
        {theme === 'light' && <Sun className="h-5 w-5 text-amber-500" />}
        {theme === 'dark' && <Moon className="h-5 w-5 text-indigo-400" />}
        {theme === 'system' && <Monitor className="h-5 w-5 text-gray-500" />}
      </button>
      <div className="absolute right-0 mt-2 hidden w-40 rounded-md bg-white p-2 text-xs text-gray-700 shadow-lg group-hover:block dark:bg-gray-800 dark:text-gray-300">
        Click to cycle through light, dark, and system themes
      </div>
    </div>
  );
}
