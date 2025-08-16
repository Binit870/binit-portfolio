import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section 
      id="about" 
      // Added horizontal padding for mobile (px-6)
      className="py-20 px-6 text-center"
    >
      <motion.h2
        // Smoother "pulse" animation on view
        whileInView={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 0.6 }}
        // Responsive font size: larger on small screens and up
        className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-cyan-400 mb-8"
      >
        About Me
      </motion.h2>

      <motion.p
        // Add a subtle entrance animation for the paragraph
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        // Responsive font size and improved line height for readability
        className="max-w-3xl mx-auto text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-300"
      >
        I'm a student pursuing B.Tech in Computer Science and Engineering from Arka Jain University.
        I'm exploring the MERN stack, AI projects, and building platforms that solve real-world problems.
        I'm passionate about full-stack web development, cloud computing, and creating impactful tech solutions.
        Currently learning advanced JavaScript, contributing to open-source, and working on projects like a resume/job
        matcher app using AI and a QR-Code based Attendance app.
      </motion.p>
    </section>
  );
};

export default About;