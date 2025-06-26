'use client';

import { useEffect } from 'react';

const ThemeScript = () => {
  useEffect(() => {
    // This script will run before hydration to prevent flash
    const script = `
      (function() {
        function getThemePreference() {
          if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
            return localStorage.getItem('theme');
          }
          return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        
        const theme = getThemePreference();
        document.documentElement.classList.toggle('dark', theme === 'dark');
        document.documentElement.style.colorScheme = theme;
      })();
    `;
    
    const scriptElement = document.createElement('script');
    scriptElement.innerHTML = script;
    document.head.appendChild(scriptElement);
    
    return () => {
      document.head.removeChild(scriptElement);
    };
  }, []);
  
  return null;
};

export default ThemeScript;