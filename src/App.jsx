// src/App.jsx

import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div
  className="App min-h-screen bg-gradient-to-br from-[#dbeafe] via-[#fef3c7] to-[#ecfccb]
             text-gray-800 transition-colors duration-300"
>

      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
