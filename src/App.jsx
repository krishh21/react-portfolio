import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import CustomCursor from './components/CustomCursor';
import FloatingBubbles from './components/FloatingBubbles';
import ParticlesBackground from './components/ParticlesBackground';






function App() {
  return (
    <main className="bg-white dark:bg-gray-950 text-black dark:text-white font-sans">
      <Hero />
      <About />
      <Education />
      <Experience />
      <Navbar />
      <Skills />
      <FloatingBubbles />
    <CustomCursor />
      <Projects />
      <ContactForm />
      <Footer />
      <ScrollToTop />
       <ParticlesBackground />
    </main>
  );
}

export default App;
