import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import advance from '../assets/qr-code.jpg';
import basic1 from '../assets/plp.jpg';
import note from '../assets/note.jpg';
import intm from '../assets/weather-forecast.jpg';
import collab from '../assets/collab.jpg';

const projectData = [
  {
    title: 'Product Landing Page',
    desc: 'A product landing page of Milk Dairy Farm where various milk products details are provided.',
    img: basic1,
    link: 'https://milan-dairy-farm.netlify.app/',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Weather Forecast Application',
    desc: 'It is a 5-days weather forecast application which shows real time weather.',
    img: intm,
    link: 'https://forecast-application-check.netlify.app/',
    tech: ['React', 'OpenWeather API', 'Tailwind CSS'],
  },
  {
    title: 'QR-Code Attendance App',
    desc: 'This is a QR code based Attendance app which is used to avoid proxy attendance.',
    img: advance,
    link: 'https://qr-code-attendace-app.netlify.app/',
    tech: ['React', 'Tailwind CSS', 'QR Scanner'],
  },
  {
    title: 'NoteLock',
    desc: 'This is an app which is used to save notes and passwords securely.',
    img: note,
    link: 'https://notelock-password.netlify.app/',
    tech: ['React', 'MongoDB','Express.js', 'Tailwind CSS'],
  },
  {
    title: 'Collab Edtech',
    desc: 'A website where learners and mentors can work on a project by connecting with each other.',
    img: collab,
    link: 'https://coledtech.netlify.app/',
    tech: ['React', 'MongoDB','Express.js', 'Tailwind CSS'],
  },
];

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      container.scrollBy({
        left: direction === 'left' ? -400 : 400,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="projects"
      className="py-20 bg-slate-50 dark:bg-gray-900 text-center relative transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold text-blue-700 dark:text-cyan-400 mb-10">Projects</h2>

      {/* Scroll Arrows */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm hover:scale-110 transition p-2 rounded-full shadow-md text-blue-600 dark:text-cyan-400"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={() => scroll('right')}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-700/80 backdrop-blur-sm hover:scale-110 transition p-2 rounded-full shadow-md text-blue-600 dark:text-cyan-400"
      >
        <ChevronRight size={24} />
      </button>

      {/* Cards */}
      <div ref={scrollRef} className="overflow-x-auto px-4 pb-4 scroll-smooth scrollbar-hide">
        <div className="flex gap-4 sm:gap-6 min-w-full px-2 sm:px-4">
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
              className="group flex-shrink-0 w-[90vw] sm:w-[48vw] max-w-[480px] bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-transform border border-gray-200 dark:border-gray-700 flex flex-col"
            >
              {/* Image */}
              <div className="w-full h-[220px] p-4 flex items-center justify-center bg-white dark:bg-gray-900 rounded-t-2xl overflow-hidden">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="max-w-full max-h-full object-contain rounded-xl drop-shadow-md transition duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-grow text-left">
                <h4 className="text-lg font-semibold text-blue-800 dark:text-cyan-400 mb-2">{proj.title}</h4>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 flex-grow">{proj.desc}</p>

                {/* Tech Chips */}
                <div className="flex gap-2 flex-wrap mb-4">
                  {proj.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-blue-100 dark:bg-gray-700 text-blue-700 dark:text-white rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block self-start mt-auto text-sm px-4 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 dark:bg-cyan-600 dark:hover:bg-cyan-700 transition"
                >
                  View Project
                </a>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
