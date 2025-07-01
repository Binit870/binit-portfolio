import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 text-center">
      <motion.h2 whileInView={{ scale: 1.1 }} className="text-3xl font-bold text-blue-600 mb-6">About Me</motion.h2>
      <p className="max-w-3xl mx-auto">
        I'm a student pursuing B.Tech in Computer Science and Engineering from Arka Jain University. I'm exploring the MERN stack, AI projects, and building platforms that solve real-world problems. I'm passionate about full-stack web development, cloud computing, and creating impactful tech solutions. Currently learning advanced JavaScript, contributing to open-source, and working on projects like a resume/job matcher app using AI and QR-Code based Attendance app.


      </p>
    </section>
  );
};

export default About;
