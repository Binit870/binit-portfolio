import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { Terminal } from 'lucide-react';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  // Check saved theme on load
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDark(prefersDark);
    document.documentElement.classList.toggle('dark', prefersDark);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', newTheme);
  };

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">

        {/* Left: Terminal icon + name */}
        <div className="flex items-center space-x-3">
          <Terminal className="text-blue-600 dark:text-cyan-400 w-8 h-8" />
          <h1 className="text-xl font-bold text-blue-600 dark:text-cyan-400">Binit.AI</h1>
        </div>

        {/* Center: Navigation Links */}
        <div className="space-x-6 hidden md:block">
          {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
            <Link
              key={section}
              to={section}
              smooth
              duration={500}
              className="cursor-pointer relative text-gray-700 dark:text-gray-100 hover:text-blue-500 dark:hover:text-cyan-400 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-blue-500 dark:after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>

        {/* Right: Toggle theme button */}
        <button
          onClick={toggleTheme}
          className="ml-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
        >
          {isDark ? <Sun className="text-yellow-400 w-5 h-5" /> : <Moon className="text-gray-800 w-5 h-5" />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
