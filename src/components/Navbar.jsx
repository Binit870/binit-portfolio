import React, { useEffect, useState } from 'react';
// ERROR FIX: Removed 'react-scroll' as it's not available in this environment.
// We will use standard anchor tags for navigation.
import { Terminal, Sun, Moon, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check for saved theme preference on initial load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = savedTheme === 'dark' || 
                       (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDark(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  // Function to toggle theme
  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  const navLinks = ['home', 'about', 'skills', 'projects', 'contact'];

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-md z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">

            {/* Left: Logo and Name */}
            <a href="#home" className="flex items-center space-x-3 cursor-pointer">
              <Terminal className="text-blue-600 dark:text-cyan-400 w-8 h-8" />
              <h1 className="text-xl font-bold text-blue-600 dark:text-cyan-400">DevBin</h1>
            </a>

            {/* Center: Desktop Navigation Links */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="cursor-pointer relative text-gray-700 dark:text-gray-100 font-medium hover:text-blue-500 dark:hover:text-cyan-400 
                  after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-4px] after:left-0 
                  after:bg-blue-500 dark:after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>

            {/* Right: Theme Toggle and Mobile Menu Button */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                {isDark ? <Sun className="text-yellow-400 w-5 h-5" /> : <Moon className="text-gray-800 w-5 h-5" />}
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Open menu"
                className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-xl p-6"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside menu
            >
              <div className="flex justify-end mb-8">
                <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="flex flex-col items-center space-y-8">
                {navLinks.map((section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    onClick={() => setIsMenuOpen(false)} // Close menu on link click
                    className="text-xl font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-cyan-400 transition"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
