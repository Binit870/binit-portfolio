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
  },
  {
    title: 'Weather Forecast Application',
    desc: 'It is a 5-days weather forecast application which shows real time weather.',
    img: intm,
    link: 'https://forecast-application-check.netlify.app/',
  },
  {
    title: 'QR-Code Attendance App',
    desc: 'This is a QR code based Attendance app which is used to avoid proxy attendance.',
    img: advance,
    link: 'https://qr-code-attendace-app.netlify.app/',
  },
  {
    title: 'NoteLock',
    desc: 'This is an app which is used to save notes and passwords securely.',
    img: note,
    link: 'https://notelock-password.netlify.app/',
  },
  {
    title: 'Collab Edtech',
    desc: 'A website where learners and mentors can work on a project by connecting with each other.',
    img: collab,
    link: 'https://coledtech.netlify.app/',
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
    <section id="projects" className="py-20 bg-slate-50 text-center relative">
      <h2 className="text-3xl font-bold text-blue-700 mb-10">Projects</h2>

      {/* Left Arrow */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm hover:bg-white text-blue-600 rounded-full p-2 shadow-md"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm hover:bg-white text-blue-600 rounded-full p-2 shadow-md"
      >
        <ChevronRight size={24} />
      </button>

      {/* Scrollable Project Cards */}
      <div
        ref={scrollRef}
        className="overflow-x-auto px-4 pb-4 scroll-smooth scrollbar-hide"
      >
        <div className="flex gap-6 min-w-full">
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
              className="flex-shrink-0 w-[90vw] sm:w-[48vw] max-w-[480px] bg-white rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 border border-gray-200 flex flex-col"
            >
              {/* Image Section */}
              <div className="w-full h-[220px] p-4 flex items-center justify-center bg-white rounded-t-2xl">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="max-w-full max-h-full object-contain rounded-xl"
                />
              </div>

              {/* Content Section */}
              <div className="p-5 flex flex-col flex-grow">
                <h4 className="text-lg font-semibold text-blue-800 mb-2">
                  {proj.title}
                </h4>
                <p className="text-gray-700 text-sm mb-4 flex-grow">
                  {proj.desc}
                </p>
                <span className="inline-block self-start mt-auto text-sm px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium hover:bg-blue-600 hover:text-white transition">
                  View Project
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
