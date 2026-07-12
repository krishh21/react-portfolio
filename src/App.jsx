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
    <main className="relative min-h-screen overflow-x-hidden bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.13),_transparent_30%),linear-gradient(135deg,_#ffffff_0%,_#f8fbff_100%)] text-black transition-colors duration-300 dark:bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_25%),linear-gradient(135deg,_#020617_0%,_#0f172a_100%)] dark:text-white font-sans">
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
