import React from "react";
import { FileText } from "lucide-react";
import resumePDF from "../assets/Binit-Patra-CV.pdf"; // ✅ Imported from assets

const About = () => {
  const techStack = [
    "HTML5",
    "CSS",
    "JavaScript",
    "React.js",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "Git",
  ];

  const tools = [
    "GitHub",
    "VS Code",
    "Postman",
    "Netlify",
    "MongoDB Compass",
    "Render",
  ];

  return (
    <section id="about" className="py-20 lg:py-32 bg-gray-900 text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
            Know About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-xl text-center text-gray-400 mb-12">
            Student & Aspiring MERN Stack Developer
          </p>

          {/* Card */}
          <div className="bg-gray-800/40 border border-gray-700 rounded-2xl p-8 lg:p-12 space-y-8 shadow-lg">
            {/* Intro Text */}
            <div>
              <p className="text-lg leading-relaxed mb-4">
                I'm a{" "}
                <span className="text-cyan-400 font-semibold">
                  B.Tech Final Year student
                </span>{" "}
                in Computer Science and Engineering at Arka Jain University with
                a deep passion for full-stack web development and AI/ML. I
                thrive on building platforms that solve real-world problems and
                creating impactful tech solutions.
              </p>
              <p className="text-lg leading-relaxed">
                Currently, I'm deepening my expertise in Data Structures and
                Algorithms, contributing to open-source, and developing exciting
                projects like{" "}
                <span className="text-cyan-400">HealthXCure</span> and{" "}
                <span className="text-cyan-400">DevHub</span>.
              </p>
            </div>

            {/* Resume Button */}
            <div className="flex justify-center pt-4">
              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <FileText className="h-5 w-5" />
                View Resume
              </a>
            </div>

            {/* Tech Stack & Tools */}
            <div className="grid md:grid-cols-2 gap-8 pt-8">
              {/* Tech Stack Card */}
              <div className="bg-gray-900/70 border border-cyan-600/30 rounded-xl p-6 shadow-md hover:shadow-cyan-500/20 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400 text-center">
                  Tech Stack
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-gray-800 text-cyan-300 text-sm font-medium px-4 py-2 rounded-full transition-transform hover:scale-105 cursor-pointer border border-cyan-600/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools Card */}
              <div className="bg-gray-900/70 border border-cyan-600/30 rounded-xl p-6 shadow-md hover:shadow-cyan-500/20 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-cyan-400 text-center">
                  Tools Used
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-gray-800 text-cyan-300 text-sm font-medium px-4 py-2 rounded-full transition-transform hover:scale-105 cursor-pointer border border-cyan-600/20"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
