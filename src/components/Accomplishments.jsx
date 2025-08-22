import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa'; // Icon for links

// --- Achievements Data ---
const achievements = [
  { title: 'Volunteer - Aarambh 2K23' },
  { title: 'Volunteer - Technika 2K24' },
  { title: 'Top 30 - HackHorizon 2K25' },
  { title: 'Rank -13 GeeksforGeeks - University' },
  { title: 'HackerRank - 3 Star in CPP' },
];

// --- UPDATED: Certificates Data with Platform Key ---
const certificates = [
  { title: 'API Bootcamp - GeeksforGeeks', link: 'https://media.geeksforgeeks.org/courses/certificates/98f6eb9b2c6dbbf0b240158e5c051397.pdf', platform: 'gfg' },
  { title: 'Responsive Web Design - freeCodeCamp', link: 'https://www.freecodecamp.org/certification/Binit870/responsive-web-design', platform: 'fcc' },
  { title: 'Full Stack Developer Bootcamp - GeeksforGeeks', link: 'https://media.geeksforgeeks.org/courses/certificates/3da899c272b31dc63847c2f08fff5fac.pdf', platform: 'gfg' },
  { title: 'CSS(Basic) - HackerRank', link: 'https://www.hackerrank.com/certificates/iframe/fe5bd579ce21', platform: 'hackerrank' },
  { title: 'Introduction to Cloud Computing - IBM', link: 'https://coursera.org/verify/GUQT8VFK302F', platform: 'ibm' },
  { title: 'Natural Language Processing - Coursera', link: 'https://coursera.org/verify/GUQT8VFK302F', platform: 'default' },
];

// --- NEW: Platform-specific color styles ---
const platformStyles = {
  gfg: 'bg-green-900/40 hover:shadow-green-500/30',
  fcc: 'bg-blue-900/40 hover:shadow-blue-500/30',
  hackerrank: 'bg-teal-900/40 hover:shadow-teal-500/30',
  ibm: 'bg-indigo-900/40 hover:shadow-indigo-500/30',
  default: 'bg-gray-900 hover:shadow-cyan-500/20', // Fallback color
};

// --- Animation Variants (unchanged) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 100 } },
};

const Accomplishments = () => {
  return (
    <section
      id="accomplishments"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center bg-gray-800 text-white"
    >
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-12 sm:mb-16"
        >
          My Accomplishments
        </motion.h2>

        {/* --- Achievements Sub-section (unchanged) --- */}
        <div>
          <h3 className="text-2xl font-semibold text-white mb-8">
            Awards & Achievements
          </h3>
          <motion.div
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
                className="bg-gray-900 text-gray-200 p-4 rounded-lg font-medium text-sm sm:text-base flex items-center justify-center min-h-[110px] sm:min-h-[120px] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105"
              >
                {item.title}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* --- Certificates Sub-section (UPDATED) --- */}
        <div className="mt-16 sm:mt-20">
          <h3 className="text-2xl font-semibold text-white mb-8">
            Certificates
          </h3>
          {/* UPDATED: Grid layout changed for larger cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {certificates.map((item) => {
              const style = platformStyles[item.platform] || platformStyles.default;
              return (
                <motion.a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  // UPDATED: Dynamic classes for size, color, and hover effects
                  className={`text-gray-200 p-6 rounded-lg font-semibold flex flex-col items-center justify-center min-h-[160px] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group ${style}`}
                >
                  <span className="flex-grow flex items-center text-center text-md">
                    {item.title}
                  </span>
                  <div className="flex items-center text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-3">
                    <span className="text-sm mr-2">View Certificate</span>
                    <FaExternalLinkAlt size={14} />
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Accomplishments;