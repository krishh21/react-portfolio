import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter, FaEnvelope } from 'react-icons/fa6';
import profileImage from '../assets/my photo.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-24">
      <img
        src={profileImage}
        alt="Krishna Yadav"
        className="w-40 h-40 object-cover rounded-full border-4 border-blue-500 shadow-lg animate-fadeIn"
      />
      <h1 className="text-4xl font-bold mt-6 animate-fadeInUp">Krishna Yadav</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mt-2 animate-fadeInUp">
        Full Stack Developer
      </p>

      <div className="flex gap-4 mt-4 animate-fadeInUp">
        <a href="https://github.com/krishh21" target="_blank" rel="noopener noreferrer"><FaGithub size={25} /></a>
        <a href="https://www.linkedin.com/in/krishna-yadav-27aa8026a" target="_blank" rel="noopener noreferrer"><FaLinkedin size={25} /></a>
        <a href="https://www.instagram.com/_krishh_y/?igsh=eGpvcm5odGhxc2dy#" target="_blank" rel="noopener noreferrer"><FaInstagram size={25} /></a>
        <a href="https://x.com/krish24" target="_blank" rel="noopener noreferrer"><FaXTwitter size={25} /></a>
        <a href="mailto:krishna1052004@gmail.com"><FaEnvelope size={25} /></a>
      </div>

      <a
        href="https://drive.google.com/file/d/1oZlltLX6JOn_yc5e9P-lPpVnDoVVMM0v/view"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all duration-300 animate-fadeInUp"
      >
        Download CV
      </a>
    </section>
  );
};

export default Hero;
