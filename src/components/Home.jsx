import React from "react";
import { FaArrowRight, FaGithub, FaLinkedin, } from "react-icons/fa";
import profileImage from "../assets/binit.png";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 lg:pt-0 bg-[#0d0d0d] text-white"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* ===== LEFT TEXT SECTION ===== */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Binit
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto lg:mx-0">
                A passionate{" "}
                <span className="text-cyan-400 font-semibold">
                  Full Stack Developer
                </span>{" "}
                seeking opportunities to apply and enhance my skills in front-end
                and back-end development.
              </p>
            </div>

            {/* ===== BUTTONS ===== */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="flex items-center gap-2 bg-cyan-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 transition-all"
              >
                See My Work
                <FaArrowRight className="inline-block transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all"
              >
                Connect With Me
              </a>
            </div>

            {/* ===== SOCIAL ICONS ===== */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <a
                href="https://github.com/Binit870"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-cyan-500 transition-colors"
              >
                <FaGithub className="h-5 w-5 hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/binit-patra-7a62b7262/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-800 hover:bg-cyan-500 transition-colors"
              >
                <FaLinkedin className="h-5 w-5 hover:scale-110 transition-transform" />
              </a>
              
            </div>
          </div>

          {/* ===== RIGHT IMAGE SECTION ===== */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-3xl"></div>
              <img
                src={profileImage}
                alt="Binit Patra"
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-cyan-500/30 shadow-lg shadow-cyan-500/30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
