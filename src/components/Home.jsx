import binitImage from "../assets/binit.jpg";
import React from "react";
import { motion } from "framer-motion";

// The TypewriterText component remains the same, so it's omitted for brevity...
const TypewriterText = () => {
  const lines = ["Hi, I'm Binit 👋", "Full Stack Developer"];
  const [displayedLines, setDisplayedLines] = React.useState(["", ""]);
  const [lineIndex, setLineIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const [cursorLine, setCursorLine] = React.useState(0); // track which line has the cursor

  React.useEffect(() => {
    const typingSpeed = isDeleting ? 70 : 120;
    const pauseTime = 1500;

    const handleTyping = () => {
      if (!isDeleting) {
        if (charIndex < lines[lineIndex].length) {
          // Typing
          setDisplayedLines((prev) => {
            const newLines = [...prev];
            newLines[lineIndex] += lines[lineIndex][charIndex];
            return newLines;
          });
          setCharIndex((prev) => prev + 1);
          setCursorLine(lineIndex); // cursor stays on current typing line
        } else {
          if (lineIndex < lines.length - 1) {
            setTimeout(() => {
              setLineIndex((prev) => prev + 1);
              setCharIndex(0);
            }, pauseTime);
          } else {
            setTimeout(() => {
              setIsDeleting(true);
              setCursorLine(1); // start deleting from second line
            }, pauseTime);
          }
        }
      } else {
        // Deleting
        if (displayedLines[1].length > 0) {
          setDisplayedLines((prev) => [prev[0], prev[1].slice(0, -1)]);
          setCursorLine(1);
        } else if (displayedLines[0].length > 0) {
          setDisplayedLines((prev) => [prev[0].slice(0, -1), ""]);
          setCursorLine(0);
        } else {
          setIsDeleting(false);
          setLineIndex(0);
          setCharIndex(0);
          setCursorLine(0);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
    // ✅ CORRECTED DEPENDENCY ARRAY
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, lineIndex, isDeleting, displayedLines]);

  // Highlight words Binit & Developer
  const renderColoredText = (text) => {
    return text.split(" ").map((word, i) => {
      if (word.includes("Binit") || word.includes("Developer")) {
        return (
          <span key={i} className="text-cyan-400">
            {word}{" "}
          </span>
        );
      }
      return (
        <span key={i} className="text-white">
          {word}{" "}
        </span>
      );
    });
  };

  return (
    // CHANGED: Text alignment is now responsive
    <div className="text-center md:text-left">
      <motion.h1
        className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 leading-snug"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {renderColoredText(displayedLines[0])}
        {cursorLine === 0 && <span className="text-cyan-400 ml-1">|</span>}
      </motion.h1>

      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {renderColoredText(displayedLines[1])}
        {cursorLine === 1 && <span className="text-cyan-400 ml-1">|</span>}
      </motion.h2>
    </div>
  );
};


const Home = () => {
  return (
    <section
      id="home"
      // CHANGED: Added overflow-hidden and adjusted padding/gap for responsiveness
      className="overflow-hidden min-h-screen flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-8 px-4 sm:px-6 lg:px-8 pt-24 pb-12 md:pt-12"
    >
      {/* CHANGED: Text content now centers on mobile and aligns left on desktop */}
      <div className="md:w-1/2 flex flex-col justify-center items-center md:items-start">
        <TypewriterText />

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          // CHANGED: Text alignment is now responsive
          className="mt-4 text-lg md:text-xl max-w-md text-gray-300 text-center md:text-left"
        >
          A passionate Full Stack Developer seeking an opportunity to apply and enhance my skills in front-end and back-end development.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <a
            href="#projects"
            className="w-full sm:w-auto text-center bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 cursor-pointer"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto text-center border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 font-semibold py-3 px-8 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition duration-300 cursor-pointer"
          >
            Connect With Me
          </a>
        </motion.div>
      </div>

      <motion.div
        className="md:w-1/2 flex justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, delay: 0.8, duration: 1 }}
      >
        <img
          src={binitImage}
          alt="Binit Patra"
          // CHANGED: Adjusted image size for very small screens
          className="w-52 h-52 sm:w-72 sm:h-72 lg:w-80 lg:h-80 object-cover rounded-full border-4 border-gray-700 shadow-[0_0_20px_theme(colors.cyan.400)]"
        />
      </motion.div>
    </section>
  );
};

export default Home;