'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Show a placeholder during SSR to prevent layout shift
  if (!mounted) {
    return (
      <div className="p-2 w-9 h-9 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50" />
    );
  }
    console.log(theme);
    
  const isDark = resolvedTheme === 'dark';

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative p-2 w-9 h-9 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 hover:bg-muted transition-all duration-300 overflow-hidden"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 180 : 0,
          scale: isDark ? 0.8 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {isDark ? (
          <Sun size={16} className="text-yellow-500" />
        ) : (
          <Moon size={16} className="text-blue-600" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;