import React, { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={toggleDarkMode}
        className="fixed top-4 right-4 z-[1000] text-xl p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-black dark:text-white hover:scale-110 transition"
      >
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>

      {/* Main Navbar */}
      <header className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-40">
        <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1
            onClick={() => scrollToSection('hero')}
            className="text-xl font-bold cursor-pointer text-blue-600"
          >
            Krishna Yadav
          </h1>
          <div className="hidden md:flex gap-6 text-sm font-medium">
            {['about', 'education', 'experience', 'skills', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="hover:text-blue-500 capitalize"
              >
                {item}
              </button>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
