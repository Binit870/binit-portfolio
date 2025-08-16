import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// HOW TO ADD YOUR IMAGES:
// 1. Make sure your images are in the 'src/assets' folder.
// 2. Uncomment the import lines below.
// 3. In the projectData array, replace the 'img' placeholder URL with the variable name (e.g., img: dairyFarmImage).

import dairyFarmImage from '../assets/plp.jpg';
import weatherAppImage from '../assets/weather-forecast.jpg';
import qrAttendanceImage from '../assets/qr-code.jpg';
import noteLockImage from '../assets/note.jpg';
import collabEdtechImage from '../assets/collab.jpg';


const projectData = [
  {
    title: 'Product Landing Page',
    desc: 'A product landing page for a dairy farm, showcasing various milk products and their details.',
    // In your project, change this to: img: dairyFarmImage,
    img: dairyFarmImage,
    link: 'https://milan-dairy-farm.netlify.app/',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Weather Forecast App',
    desc: 'A 5-day weather forecast application that provides real-time weather data for any city.',
    // In your project, change this to: img: weatherAppImage,
    img: weatherAppImage,
    link: 'https://forecast-application-check.netlify.app/',
    tech: ['React', 'OpenWeather API', 'Tailwind CSS'],
  },
  {
    title: 'QR-Code Attendance App',
    desc: 'A QR code-based attendance system designed to prevent proxy attendance in classrooms.',
    // In your project, change this to: img: qrAttendanceImage,
    img: qrAttendanceImage,
    link: 'https://qr-code-attendace-app.netlify.app/',
    tech: ['React', 'Tailwind CSS', 'QR Scanner'],
  },
  {
    title: 'NoteLock',
    desc: 'A secure application for saving personal notes and passwords with encryption.',
    // In your project, change this to: img: noteLockImage,
    img: noteLockImage,
    link: 'https://notelock-password.netlify.app/',
    tech: ['React', 'MongoDB', 'Express.js', 'Tailwind CSS'],
  },
  {
    title: 'Collab Edtech',
    desc: 'A collaborative platform connecting learners and mentors to work on real-world projects together.',
    // In your project, change this to: img: collabEdtechImage,
    img: collabEdtechImage,
    link: 'https://coledtech.netlify.app/',
    tech: ['React', 'MongoDB', 'Express.js', 'Tailwind CSS'],
  },
];

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth * 0.8;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="projects"
      className="py-20 text-center relative overflow-hidden"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold text-blue-600 dark:text-cyan-400 mb-12"
      >
        My Projects
      </motion.h2>

      <div className="relative">
        <button
          onClick={() => scroll('left')}
          aria-label="Scroll left"
          className="absolute left-0 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm hover:scale-110 transition p-2 rounded-full shadow-lg text-blue-600 dark:text-cyan-400 hidden md:block"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          onClick={() => scroll('right')}
          aria-label="Scroll right"
          className="absolute right-0 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm hover:scale-110 transition p-2 rounded-full shadow-lg text-blue-600 dark:text-cyan-400 hidden md:block"
        >
          <ChevronRight size={28} />
        </button>

        <div 
          ref={scrollRef} 
          className="overflow-x-auto px-4 sm:px-8 pb-8 scroll-smooth hide-scrollbar"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          <div className="flex gap-6">
            {projectData.map((proj, index) => (
              <motion.a
                key={index}
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex-shrink-0 w-[85vw] sm:w-[60vw] md:w-[45vw] lg:w-[30vw] max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 ease-in-out border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-5 flex flex-col flex-grow text-left">
                  <h4 className="text-lg font-semibold text-blue-800 dark:text-cyan-400 mb-2">{proj.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 flex-grow">{proj.desc}</p>

                  <div className="flex gap-2 flex-wrap mb-4">
                    {proj.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-blue-100 dark:bg-gray-700 text-blue-700 dark:text-gray-200 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span
                    className="inline-block self-start mt-auto text-sm px-4 py-2 bg-blue-600 text-white rounded-full font-medium group-hover:bg-blue-700 dark:bg-cyan-600 dark:group-hover:bg-cyan-700 transition"
                  >
                    View Project
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
