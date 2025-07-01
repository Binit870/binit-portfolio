import React from 'react';
import { motion } from 'framer-motion';
import binitImage from '../assets/binit.jpg'; // Adjust path if needed

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex flex-col md:flex-row items-center justify-center px-4"
    >
      {/* Left: Centered Text Block */}
      <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left px-8 md:pl-24 space-y-6">


        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-blue-600"
        >
          Hi, I'm Binit 👋
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl max-w-md"
        >
          A passionate software developer working on AI, Web Development, Content Creation and UI/UX designing.
        </motion.p>
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
