import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa'; // Icon for links

// --- Updated Data Structure ---
const achievements = [
  { title: 'Hackathon Winner - Google Code Jam' },
  { title: 'Top 1% Rank - HackTheBox' },
  { title: 'Dean\'s List Scholar - University' },
  { title: 'Best Project Award - CS Dept.' }
];

const certificates = [
  { title: 'AWS Certified Cloud Practitioner', link: '#' },
  { title: 'Responsive Web Design - freeCodeCamp', link: '#' },
  { title: 'JavaScript Algorithms & Data Structures', link: '#' },
  { title: 'The Complete 2024 Web Development Bootcamp', link: '#' }
];

// Animation variants for container
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Animation variants for each item
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 },
  },
};

const Accomplishments = () => {
  return (
    <section 
      id="accomplishments" 
      // CHANGED: Adjusted vertical padding for responsiveness
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center bg-gray-800 text-white"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          // CHANGED: Adjusted bottom margin for responsiveness
          className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-12 sm:mb-16"
        >
          My Accomplishments
        </motion.h2>

        {/* --- Achievements Sub-section --- */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8">
            Awards & Achievements
          </h3>
          <motion.div 
            // CHANGED: Smoother grid transition for tablets
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {achievements.map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                // CHANGED: Responsive minimum height for cards
                className="bg-gray-900 text-gray-200 p-4 rounded-lg font-medium text-sm sm:text-base flex items-center justify-center min-h-[110px] sm:min-h-[120px] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105"
              >
                {item.title}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* --- Certificates Sub-section --- */}
        {/* CHANGED: Responsive top margin */}
        <div className="mt-16 sm:mt-20">
          <h3 className="text-2xl font-semibold text-white mb-8">
            Certificates
          </h3>
          <motion.div 
            // CHANGED: Smoother grid transition for tablets
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {certificates.map((item) => (
              <motion.a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                // CHANGED: Responsive minimum height for cards
                className="bg-gray-900 text-gray-200 p-4 rounded-lg font-medium text-sm sm:text-base flex flex-col items-center justify-center min-h-[110px] sm:min-h-[120px] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105 group"
              >
                <span className="flex-grow flex items-center text-center">{item.title}</span>
                <div className="flex items-center text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-2">
                  <span className="text-xs mr-2">View Certificate</span>
                  <FaExternalLinkAlt size={12} />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Accomplishments;