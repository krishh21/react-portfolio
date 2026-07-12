import React from 'react';
import { FaReact, FaNodeJs, FaAws, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiRedux, SiMysql, SiReacthookform } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact size={28} /> },
    { name: 'React Native', icon: <SiReacthookform size={28} /> },
    { name: 'Node.js', icon: <FaNodeJs size={28} /> },
    { name: 'Express.js', icon: <SiExpress size={28} /> },
    { name: 'MongoDB', icon: <SiMongodb size={28} /> },
    { name: 'MySQL', icon: <SiMysql size={28} /> },
    { name: 'Redux', icon: <SiRedux size={28} /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={28} /> },
    { name: 'Java', icon: <FaJava size={28} /> },
    { name: 'AWS', icon: <FaAws size={28} /> },
    { name: 'Git & GitHub', icon: <FaGitAlt size={28} /> },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Skills</p>
        <h2 className="mt-2 text-3xl font-bold">Technologies I use to build real products</h2>
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-blue-400 dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="mb-2 text-blue-600 dark:text-blue-400">{skill.icon}</div>
              <p className="text-sm font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
