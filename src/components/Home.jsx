import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import binitImage from '../assets/binit.jpg'; // Make sure path is correct

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row items-center justify-center px-4 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Left: Text Block */}
      <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left px-8 md:pl-24 space-y-6">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-blue-600 dark:text-cyan-400"
        >
          Hi, I'm Binit 👋
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl max-w-md text-gray-800 dark:text-gray-200 mx-auto md:mx-0"
        >
          A passionate software developer working on AI, Web Development, Content Creation and UI/UX designing.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex justify-center md:justify-start space-x-4 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <Link
            to="projects"
            smooth
            duration={500}
            className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-cyan-400 dark:hover:bg-cyan-500 font-semibold py-2 px-6 rounded transition duration-300 cursor-pointer"
          >
            See My Projects
          </Link>

          <Link
            to="contact"
            smooth
            duration={500}
            className="border border-blue-600 dark:border-cyan-400 text-blue-600 dark:text-cyan-400 hover:bg-blue-100 dark:hover:bg-cyan-900 font-semibold py-2 px-6 rounded transition duration-300 cursor-pointer"
          >
            Contact Me
          </Link>
        </motion.div>
      </div>

      {/* Right: Image */}
      <motion.div
        className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        initial={{ scale: 0.8, opacity: 0, x: 50 }}
        animate={{ scale: 1, opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <img
          src={binitImage}
          alt="Binit"
          className="w-60 h-60 object-cover rounded-full shadow-lg"
        />
      </motion.div>
    </section>
  );
};

export default Home;
