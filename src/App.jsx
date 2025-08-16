// src/App.js

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './index.css';

function App() {
  return (
    // The Router, Routes, and Route components are removed.
    <div className="App min-h-screen bg-gradient-to-br from-[#dbeafe] via-[#fef3c7] to-[#ecfccb] dark:from-gray-900 dark:via-gray-800 dark:to-slate-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Navbar />
      <main>
        {/* All components are rendered here directly */}
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;