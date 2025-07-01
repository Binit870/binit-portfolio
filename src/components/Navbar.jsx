import React from 'react';
import { Link } from 'react-scroll';
import { Terminal } from 'lucide-react'; // Terminal icon for dev vibes

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-gray-800 shadow z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Left: Terminal icon + name */}
        <div className="flex items-center space-x-3">
          <Terminal className="text-blue-600 w-8 h-8" /> {/* Increased size here */}
          <h1 className="text-xl font-bold text-blue-600">Binit.AI</h1>
        </div>

        {/* Center: Navigation Links */}
        <div className="space-x-6 hidden md:block">
          {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
            <Link
              key={section}
              to={section}
              smooth
              duration={500}
              className="cursor-pointer relative text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
