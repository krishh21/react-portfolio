import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-6 mt-10 text-center animate-fadeIn">
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">© 2025 Krishna Yadav. All rights reserved.</p>
      <div className="flex justify-center gap-4 text-xl text-gray-600 dark:text-gray-300">
        <a href="https://github.com/krishh21" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/krishna-yadav-27aa8026a" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.instagram.com/_krishh_y/?igsh=eGpvcm5odGhxc2dy#" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://x.com/_krishh_y" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a>
      </div>
    </footer>
  );
};

export default Footer;
