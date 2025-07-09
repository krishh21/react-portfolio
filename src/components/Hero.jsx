import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
  FaEnvelope,
} from 'react-icons/fa6';
import profileImage from '../assets/Adobe Express - file.png';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-12 px-4 pt-24">
      {/* ✅ LEFT SIDE: Text */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl">
        <h2 className="text-2xl mb-2 animate-fadeInUp">
          Hi <span className="wave-hand">👋</span>
        </h2>
        <h1 className="text-4xl md:text-5xl font-bold animate-fadeInUp">
          I'm <span className="text-blue-600">Krishna Yadav</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mt-2 animate-fadeInUp">
          A Full Stack Developer
        </p>

        {/* ✅ Social links directly under text */}
        <div className="flex gap-4 mt-4 animate-fadeInUp">
          <a href="https://github.com/krishh21" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} />
          </a>
          <a href="https://www.linkedin.com/in/krishna-yadav-27aa8026a" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
          <a href="https://www.instagram.com/_krishh_y/?igsh=eGpvcm5odGhxc2dy#" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="https://x.com/krish24" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={30} />
          </a>
          <a href="mailto:krishna1052004@gmail.com">
            <FaEnvelope size={30} />
          </a>
        </div>

        {/* ✅ Download CV under social links */}
        <a
          href="https://drive.google.com/file/d/1oZlltLX6JOn_yc5e9P-lPpVnDoVVMM0v/view"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-all duration-300 animate-fadeInUp"
        >
          Download CV
        </a>
      </div>

      {/* ✅ RIGHT SIDE: Pose image */}
      <div className="flex-shrink-0">
        <img
          src={profileImage}
          alt="Krishna Yadav"
          className="w-[280px] md:w-[400px] object-contain shadow-2xl animate-fadeInUp"
        />
      </div>
    </section>
  );
};

export default Hero;
