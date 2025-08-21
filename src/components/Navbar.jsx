import React, { useEffect, useState } from 'react';
import { Terminal, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Always enable dark mode
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const navLinks = ['home', 'about ', 'accomplishments', 'projects', 'contact'];

  return (
    <>
      <nav className="fixed top-0 w-full bg-gray-900/80 backdrop-blur-sm shadow-md z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">

            {/* Left: Logo and Name */}
            <a href="#home" className="flex items-center space-x-2 sm:space-x-3 cursor-pointer">
              <Terminal className="text-cyan-400 w-7 h-7 sm:w-8 sm:h-8" />
              {/* CHANGED: Responsive font size for the logo text */}
              <h1 className="text-lg sm:text-xl font-bold text-cyan-400">DevBin</h1>
            </a>

            {/* Center: Desktop Navigation Links */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((section) => (
                <a
                  key={section}
                  href={`#${section}`}
                  className="cursor-pointer relative text-gray-100 font-medium hover:text-cyan-400 
                  after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-4px] after:left-0 
                  after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              ))}
            </div>

            {/* Right: Mobile Menu Button */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Open menu"
                className="md:hidden p-2 rounded-full hover:bg-gray-700 transition"
              >
                <Menu className="w-6 h-6 text-gray-100" />
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
              className="fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-xl p-6"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside menu
            >
              <div className="flex justify-end mb-8">
                <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                  <X className="w-6 h-6 text-gray-100" />
                </button>
              </div>
              <div className="flex flex-col items-center space-y-8">
                {navLinks.map((section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    onClick={() => setIsMenuOpen(false)} // Close menu on link click
                    // CHANGED: Adjusted font size for mobile menu
                    className="text-lg font-semibold text-gray-200 hover:text-cyan-400 transition"
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