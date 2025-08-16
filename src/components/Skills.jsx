import React from 'react';
import { motion } from 'framer-motion';

// It's good practice to define data outside the component if it doesn't change.
const skills = [
  'HTML', 'CSS', 'JavaScript', 'React',
  'Node.js', 'Express', 'MongoDB',
  'TailwindCSS', 'Github', 'C++'
];

// Animation variants for the container to orchestrate children animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Each child will animate 0.1s after the previous one
    },
  },
};

// Animation variants for each skill item
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const Skills = () => {
  return (
    <section 
      id="skills" 
      // Responsive padding
      className="py-20 px-4 sm:px-6 lg:px-8 text-center"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-cyan-400 mb-12"
      >
        My Tech Stack
      </motion.h2>

      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the grid is visible
      >
        {skills.map((skill) => (
          <motion.div
            key={skill}
            variants={itemVariants}
            className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 font-medium text-sm sm:text-base"
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;
