import React from 'react';
import {
  Linkedin,
  Facebook,
  Instagram,
  Github
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-6 px-4 sm:px-6 bg-gray-200 dark:bg-gray-900 text-sm text-gray-800 dark:text-gray-300 border-t border-gray-300 dark:border-gray-700">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Copyright Text */}
        <div className="font-semibold text-center md:text-left text-xs sm:text-sm">
          © {new Date().getFullYear()} Binit Patra | All Rights Reserved
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-5">
          {/* NOTE: Remember to replace placeholder URLs for Facebook and Instagram */}
          <a
            href="https://www.linkedin.com/in/binit-patra-762040276"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://www.facebook.com/your-profile" 
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook Profile"
            className="text-gray-600 dark:text-gray-400 hover:text-blue-700 dark:hover:text-blue-500 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Facebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram Profile"
            className="text-gray-600 dark:text-gray-400 hover:text-pink-500 dark:hover:text-pink-400 transition-all duration-300 transform hover:-translate-y-1"
          >
            <Instagram size={24} />
          </a>
          <a
            href="https://github.com/Binit870"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all duration-300 transform hover:-translate-y-1"
          >
            <Github size={24} />
          </a>
          <a
            href="https://technologiawithai.blogspot.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Blogger Profile"
            className="text-gray-600 dark:text-gray-400 hover:text-orange-500 dark:hover:text-orange-400 transition-all duration-300 transform hover:-translate-y-1"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 512 512"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M447.9 256c0 105.9-85.9 191.9-191.9 191.9S64.1 361.9 64.1 256 150 64.1 256 64.1c5.6 0 11.1.2 16.6.6 16.5 1.2 31.5 11.4 38.3 26.3 3.8 8.1 5.6 17.5 5.6 29.1 0 12.8 3.8 18.9 6.6 22.6 4.4 5.8 11.2 8.5 23.7 8.5h11.8c24.7 0 39.4 8.7 45.6 27.1 1.6 4.9 2.5 9.8 2.5 14.7V256zm-215.4-58.3H181c-9.3 0-16.9 7.6-16.9 16.9v1.3c0 9.3 7.6 16.9 16.9 16.9h51.5c9.3 0 16.9-7.6 16.9-16.9v-1.3c.1-9.3-7.5-16.9-16.9-16.9zm100.3 115.6H180.7c-9.3 0-16.9 7.6-16.9 16.9v1.3c0 9.3 7.6 16.9 16.9 16.9h152.1c9.3 0 16.9-7.6 16.9-16.9v-1.3c0-9.3-7.6-16.9-16.9-16.9z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;