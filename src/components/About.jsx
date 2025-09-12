import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa'; // Import an icon for the button

// You can replace this with the actual path to your professional photo
import profilePic from '../assets/binit.jpg'; 
// Make sure to place your resume in the public folder or import it
import resumePDF from '../assets/Binit_patra_cv.pdf'; // Example: import resume

const About = () => {
  // --- Data Separated for Clarity ---
  const techStack = [
    'JavaScript', 'React.js', 'Node.js', 'Express', 'MongoDB', 'HTML5', 'CSS', 'Tailwind CSS','Git'
  ];

  const tools = [
    'GitHub', 'VS Code', 'Postman', 'Netlify','MongoDB Compass','Render'
  ];

  // Animation variants for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

return (
    // CHANGED: Adjusted padding for smaller screens
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-12 bg-gray-900 min-h-screen flex items-center">
      <div className="container mx-auto max-w-6xl">
        {/* CHANGED: Smoother font scaling for the main title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-cyan-400 mb-12">
          Know About Me
        </h2>
        {/* Flex container for the two-column layout */}
        {/* CHANGED: Adjusted gap for better spacing on mobile */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 lg:gap-24">
          
          {/* Left Column: Image and Resume Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/3 flex-shrink-0 flex flex-col items-center gap-8"
          >
            <img 
              src={profilePic}
              alt="A professional headshot of Binit" 
              // CHANGED: Image size is now more optimized for small screens
              className="rounded-full shadow-2xl w-2/3 sm:w-3/4 md:w-full mx-auto ring-4 ring-offset-8 ring-offset-gray-900 ring-cyan-500"
            />
            {/* --- RESUME BUTTON --- */}
            <motion.a
              href={resumePDF} 
              download="Binit_Patra_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              See My Resume
            </motion.a>
          </motion.div>

          {/* Right Column: Text Content with a "Card" */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            // CHANGED: Card padding is now responsive
            className="w-full md:w-2/3 text-left bg-gray-800/30 p-6 sm:p-8 rounded-lg shadow-lg"
          >
            {/* CHANGED: Smoother font scaling for the card title */}
            <motion.h3 variants={itemVariants} className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Student & Aspiring <br/>
              <span className="text-cyan-400">MERN Stack Developer</span>
            </motion.h3>

            <motion.p variants={itemVariants} className="text-base md:text-lg leading-relaxed text-gray-300 mb-6">
              I'm a B.Tech Final Year student in Computer Science and Engineering at Arka Jain University with a deep passion for full-stack web development and AI/ML. I thrive on building platforms that solve real-world problems and creating impactful tech solutions.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-base md:text-lg leading-relaxed text-gray-300 mb-8">
              Currently, I'm deepening my expertise in Data Structures and Algorithms, contributing to open-source, and developing exciting projects like a HealthCure and Course Hub.
            </motion.p>
            
            <motion.div variants={itemVariants}>
              {/* --- Tech Stack Section --- */}
              <h4 className="text-xl font-semibold text-white mb-4">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-3">
                {techStack.map((skill) => (
                  <span key={skill} className="bg-gray-900 text-cyan-300 text-sm font-medium px-4 py-2 rounded-full transition-transform hover:scale-105 cursor-pointer">
                    {skill}
                  </span>
                ))}
              </div>

              {/* --- Tools Section --- */}
              <h4 className="text-xl font-semibold text-white mt-8 mb-4">
                Tools Used
              </h4>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span key={tool} className="bg-gray-900 text-cyan-300 text-sm font-medium px-4 py-2 rounded-full transition-transform hover:scale-105 cursor-pointer">
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;