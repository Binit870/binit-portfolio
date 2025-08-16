import React from 'react';
import { motion } from 'framer-motion';

// This line now imports your local image. 
// Make sure you have an 'assets' folder inside 'src' with 'binit.jpg' in it.
import binitImage from '../assets/binit.jpg'; 

const Home = () => {
  return (
    <section
      id="home"
      // Use min-h-screen for flexibility and adjust padding for different screen sizes
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-8 px-4 sm:px-6 lg:px-8 pt-24 pb-12 md:pt-12"
    >
      {/* Left: Text Block */}
      {/* STYLE FIX: Added md:pl-16 to push the text block to the right on medium screens and up */}
      <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left items-center md:items-start md:pl-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          // Responsive font size for better visual hierarchy on all devices
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-blue-600 dark:text-cyan-400"
        >
          Hi, I'm Binit 👋
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          // Responsive text size and added margin-top for spacing
          className="mt-4 text-lg md:text-xl max-w-md text-gray-700 dark:text-gray-300"
        >
          A passionate software developer working on AI, Web Development, Content Creation and UI/UX designing.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          {/* UPDATED: Using standard <a> tag for scrolling */}
          <a
            href="#projects"
            className="w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-700 text-white dark:bg-cyan-500 dark:hover:bg-cyan-600 font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 cursor-pointer"
          >
            See My Projects
          </a>

          {/* UPDATED: Using standard <a> tag for scrolling */}
          <a
            href="#contact"
            className="w-full sm:w-auto text-center border-2 border-blue-600 dark:border-cyan-400 text-blue-600 dark:text-cyan-400 hover:bg-blue-600 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-gray-900 font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 cursor-pointer"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Right: Image */}
      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        // Using a spring animation for a bouncier, more lively effect
        transition={{ type: 'spring', stiffness: 120, delay: 0.8, duration: 1 }}
      >
        <img
          src={binitImage}
          alt="Binit Patra"
          // Responsive image size for better balance on all screens
          className="w-60 h-60 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-full shadow-2xl border-4 border-white dark:border-gray-700"
        />
      </motion.div>
    </section>
  );
};

export default Home;
