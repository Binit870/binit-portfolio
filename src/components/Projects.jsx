import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Importing images...
import dairyFarmImage from '../assets/plp.jpg';
import weatherAppImage from '../assets/weather-forecast.jpg';
import qrAttendanceImage from '../assets/qr-code.jpg';
import noteLockImage from '../assets/note.jpg';
import collabEdtechImage from '../assets/collab.jpg';
import healthCureImage from '../assets/healthcure.jpg';

// Updated project data with a 'status' field
const projectData = [
  {
    
   title: 'HealthCure',
    desc: 'A Smart Healthcare assitance website with multiple features.',
    img: healthCureImage,
    link: 'https://healthxcure.netlify.app/',
    tech: ['React', 'MongoDB', 'Express.js', 'Tailwind CSS'],
    status: 'In Progress',
  },
   {
    title: 'NoteLock',
    desc: 'A secure application for saving personal notes and passwords with encryption.',
    img: noteLockImage,
    link: 'https://notelock-password.netlify.app/',
    tech: ['React', 'MongoDB', 'Express.js', 'Tailwind CSS'],
    status: 'Complete',
  },
  {
    title: 'QR-Code Attendance App',
    desc: 'A QR code-based attendance system designed to prevent proxy attendance.',
    img: qrAttendanceImage,
    link: 'https://qr-code-attendace-app.netlify.app/',
    tech: ['React', 'Tailwind CSS', 'QR Scanner'],
    status: 'Complete',
  },
   {
    title: 'Weather Forecast App',
    desc: 'A 5-day weather forecast application that provides real-time weather data for any city.',
    img: weatherAppImage,
    link: 'https://forecast-application-check.netlify.app/',
    tech: ['React', 'OpenWeather API', 'Tailwind CSS'],
    status: 'Complete',
  },
  {
    title: 'Product Landing Page',
    desc: 'A product landing page for a dairy farm, showcasing various milk products and their details.',
    img: dairyFarmImage,
    link: 'https://milan-dairy-farm.netlify.app/',
    tech: ['HTML', 'CSS', 'JavaScript'],
    status: 'Complete',
  },
//  {
//     title: 'Course Hub',
//     desc: 'A collaborative platform connecting learners and mentors to work on real-world projects together.',
//     img: ,
//     link: '',
//     tech: ['React', 'MongoDB', 'Express.js', 'Tailwind CSS'],
//     status: 'In Progress',
//   },
  
 
  {
    title: 'Collab Edtech',
    desc: 'A collaborative platform connecting learners and mentors to work on real-world projects together.',
    img: collabEdtechImage,
    link: 'https://coledtech.netlify.app/',
    tech: ['React', 'MongoDB', 'Express.js', 'Tailwind CSS'],
    status: 'In Progress',
  },
];

const Projects = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true); // Start with right scroll enabled

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const checkScrollability = () => {
      setCanScrollLeft(container.scrollLeft > 0);
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      // Use a small tolerance to handle precision issues
      setCanScrollRight(container.scrollLeft < maxScrollLeft - 5);
    };

    checkScrollability();
    container.addEventListener('scroll', checkScrollability);
    window.addEventListener('resize', checkScrollability);

    return () => {
      container.removeEventListener('scroll', checkScrollability);
      window.removeEventListener('resize', checkScrollability);
    };
  }, []);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const card = container.querySelector('a');
      if (card) {
        const scrollAmount = card.offsetWidth + 24; // Card width + gap
        container.scrollBy({
          left: direction === 'left' ? -scrollAmount : scrollAmount,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <section id="projects" className="py-20 text-center overflow-hidden bg-gray-900 text-white">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-12"
      >
        My Projects
      </motion.h2>

      <div className="relative max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8">
        {canScrollLeft && (
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-gray-800/70 backdrop-blur-sm hover:scale-110 transition p-2 rounded-full shadow-lg text-cyan-400"
          >
            <ChevronLeft size={32} />
          </button>
        )}
        {canScrollRight && (
          <button
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-gray-800/70 backdrop-blur-sm hover:scale-110 transition p-2 rounded-full shadow-lg text-cyan-400"
          >
            <ChevronRight size={32} />
          </button>
        )}

        <div
          ref={scrollRef}
          className="overflow-x-auto pb-8 scroll-smooth hide-scrollbar"
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
                className="group flex-shrink-0 w-[80vw] sm:w-[60vw] md:w-[45vw] lg:basis-[calc((100%-3rem)/3)] bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 ease-in-out border border-gray-700 flex flex-col overflow-hidden"
                style={{ scrollSnapAlign: 'start' }}
              >
                <div className="w-full h-60 overflow-hidden">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow text-left">
                  <h4 className="text-xl font-semibold text-cyan-400 mb-2">{proj.title}</h4>
                  <p className="text-base text-gray-300 mb-4 flex-grow">{proj.desc}</p>
                  
                  <div className="flex gap-2 flex-wrap mb-4">
                    {proj.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-700 text-gray-200 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex items-center justify-between">
                    <span className="inline-block text-sm px-4 py-2 bg-cyan-600 text-white rounded-full font-medium group-hover:bg-cyan-700 transition">
                      View Project
                    </span>
                    
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${
                      proj.status === 'Complete'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {proj.status}
                    </span>
                  </div>
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
