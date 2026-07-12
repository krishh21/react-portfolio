import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter, FaEnvelope } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="mt-10 border-t border-gray-200 bg-white/80 py-8 text-center dark:border-gray-800 dark:bg-gray-950/80">
      <p className="text-sm text-gray-600 dark:text-gray-400">© 2025 Krishna Yadav. Designed and developed with passion.</p>
      <div className="mt-4 flex justify-center gap-4 text-xl text-gray-600 dark:text-gray-300">
        <a href="https://github.com/krishh21" target="_blank" rel="noopener noreferrer" className="transition hover:text-blue-600"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/krishna-yadav-27aa8026a" target="_blank" rel="noopener noreferrer" className="transition hover:text-blue-600"><FaLinkedin /></a>
        <a href="https://www.instagram.com/_krishh_y/?igsh=eGpvcm5odGhxc2dy#" target="_blank" rel="noopener noreferrer" className="transition hover:text-blue-600"><FaInstagram /></a>
        <a href="https://x.com/_krishh_y" target="_blank" rel="noopener noreferrer" className="transition hover:text-blue-600"><FaXTwitter /></a>
        <a href="mailto:krishna1052004@gmail.com" className="transition hover:text-blue-600"><FaEnvelope /></a>
      </div>
    </footer>
  );
};

export default Footer;
