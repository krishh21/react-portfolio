import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  FaEnvelope,
} from 'react-icons/fa6';
import profileImage from '../assets/myimage.png';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col-reverse lg:flex-row justify-center items-center gap-10 px-4 pt-28 pb-16">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
          <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
          Available for exciting full-stack opportunities
        </div>

        <h2 className="mt-4 text-2xl md:text-3xl">Hi <span className="wave-hand">👋</span>, I’m</h2>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight">
          <span className="text-blue-600">Krishna Yadav</span>
        </h1>
        <p className="mt-3 text-lg md:text-xl text-gray-700 dark:text-gray-300">
          I build modern full-stack web apps, AI-powered tools, and mobile experiences with React, Node.js, MongoDB, MySQL, Java, and React Native.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
          >
            View Projects
          </a>
          <a
            href="mailto:krishna1052004@gmail.com"
            className="rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 transition hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:text-gray-200"
          >
            Let’s Connect
          </a>
        </div>

        <div className="mt-6 flex gap-4 text-gray-700 dark:text-gray-300">
          <a href="https://github.com/krishh21" target="_blank" rel="noopener noreferrer" className="transition hover:text-blue-600">
            <FaGithub size={24} />
          </a>
          <a href="https://www.linkedin.com/in/krishna-yadav-27aa8026a" target="_blank" rel="noopener noreferrer" className="transition hover:text-blue-600">
            <FaLinkedin size={24} />
          </a>
          <a href="https://www.instagram.com/_krishh_y/?igsh=eGpvcm5odGhxc2dy#" target="_blank" rel="noopener noreferrer" className="transition hover:text-blue-600">
            <FaInstagram size={24} />
          </a>
          <a href="https://x.com/_krishh_y" target="_blank" rel="noopener noreferrer" className="transition hover:text-blue-600">
            <FaXTwitter size={24} />
          </a>
          <a href="mailto:krishna1052004@gmail.com" className="transition hover:text-blue-600">
            <FaEnvelope size={24} />
          </a>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-3 w-full">
          <div className="rounded-2xl border border-gray-200 bg-white/80 p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900/70">
            <p className="text-2xl font-bold text-blue-600">15+</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Projects built</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white/80 p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900/70">
            <p className="text-2xl font-bold text-blue-600">Full Stack</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Frontend + Backend</p>
          </div>
          <div className="rounded-2xl border border-gray-200 bg-white/80 p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900/70">
            <p className="text-2xl font-bold text-blue-600">React / Node</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">Modern stack</p>
          </div>
        </div>
      </div>

      <div className="flex-shrink-0">
        <div className="rounded-[2rem] border border-gray-200 bg-white p-3 shadow-2xl dark:border-gray-800 dark:bg-slate-950 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
          <img
            src={profileImage}
            alt="Krishna Yadav"
            className="w-full max-w-[420px] rounded-[1.5rem] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
