import React from 'react';
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaGitAlt,
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiReacthookform } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact size={30} /> },
    { name: 'React Native', icon: <SiReacthookform size={30} /> },
    { name: 'Node.js', icon: <FaNodeJs size={30} /> },
    { name: 'Express.js', icon: <SiExpress size={30} /> },
    { name: 'MongoDB', icon: <SiMongodb size={30} /> },
    { name: 'AWS', icon: <FaAws size={30} /> },
    { name: 'Version Control (Git)', icon: <FaGitAlt size={30} /> },
  ];

  return (
    <section id="skills" className="py-16 px-4 max-w-5xl mx-auto text-center animate-fadeInUp">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow hover:scale-105 transition transform"
          >
            <div className="mb-2 text-blue-600 dark:text-blue-400">{skill.icon}</div>
            <p className="text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
