import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react'; // optional, can use emoji or your own icons
import advance from '../assets/qr-code.jpg';
import basic1 from '../assets/plp.jpg';
import note from '../assets/note.jpg'
import intm from '../assets/weather-forecast.jpg';


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
    desc: 'This is a app which is used to save notes and passwords proxy .',
    img: note,
    link: 'https://notelock-password.netlify.app/',
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
    <section id="projects" className="py-20 bg-transparent text-center relative">
      <h2 className="text-3xl font-bold text-blue-600 mb-10">Projects</h2>

      {/* Left Arrow */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 backdrop-blur-sm hover:bg-white text-blue-600 rounded-full p-2 shadow-md"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={() => scroll('right')}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 backdrop-blur-sm hover:bg-white text-blue-600 rounded-full p-2 shadow-md"
      >
        <ChevronRight size={24} />
      </button>

      {/* Scrollable Project Cards */}
      <div
  ref={scrollRef}
  className="overflow-x-auto whitespace-nowrap px-4 pb-4 scroll-smooth scrollbar-hide"
>

        <div className="inline-flex space-x-6">
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
              className="w-[320px] md:w-[400px] rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition duration-300 overflow-hidden bg-white/40 backdrop-blur-md border border-white/30"
            >
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-[250px] object-cover"
              />
              <div className="p-4 text-left space-y-2">
                <h4 className="text-xl font-semibold text-blue-700">{proj.title}</h4>
                <p className="text-gray-700 text-sm">{proj.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
