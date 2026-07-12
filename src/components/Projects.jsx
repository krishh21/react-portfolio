import React from 'react';
import { FaGithub, FaArrowUpRightFromSquare } from 'react-icons/fa6';

const Projects = () => {
  const featuredProjects = [
    {
      title: 'Nagar Nigam Portal',
      description: 'A civic-tech platform with modern authentication and a polished dashboard experience for public service workflows.',
      tags: ['React', 'Full Stack', 'UI/UX','Express','Node.js','MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/krishh21/NAGAR-NIGAM-PORTAL',
      live: 'https://nagar-nigam-portal.vercel.app/login',
    },
    {
      title: 'Newplixx',
      description: 'A sleek product experience with a strong frontend focus and modern interface design.',
      tags: ['React', 'Frontend', 'API'],
      github: 'https://github.com/krishh21/newplixx',
      live: 'https://newplixx.vercel.app',
    },
    {
      title: 'AI Caption Generator',
      description: 'An AI-assisted content tool that generates captions with a smooth user experience.',
      tags: ['AI', 'Python', 'API','Pytorch','Tensorflow'],
      github: 'https://github.com/krishh21/ai-caption-genaretor',
      live :'https://ai-imag-caption-genrator-e9dteayrzyk8cx5njtwrsr.streamlit.app/',

    },
    {
      title: 'Netflix GPT',
      description: 'A smart streaming-inspired app combining search and recommendations with modern React patterns.',
      tags: ['React', 'API', 'UI', 'Firebase backend'],
      github: 'https://github.com/krishh21/Netflix-GPT',
      live: 'https://netflix-gpt-eight-tawny.vercel.app/',
    },
     {
      title: 'Employee Management System',
      description: 'A full-featured MERN stack admin workflow with attendance, leave, payroll, and role-based access.',
      tags: ['MERN', 'Admin Panel'],
      github: 'https://github.com/krishh21/Mern-stack-EMS-client',
      live: 'https://mern-stack-ems-client.vercel.app/',
    },
    {
      title: 'FoodHub',
      description: 'A hyperlocal food marketplace experience built to showcase modern commerce UI and flows.',
      tags: ['React', 'Marketplace', 'Swiggy API', 'Tailwind CSS', 'Firebase'],
      github: 'https://github.com/krishh21/FoodHub--Hyperlocal-Food-market-place',
    },
   
  ];

  const otherProjects = [
      { title: 'My Portfolio', github: 'https://github.com/krishh21/my_portfolio' },
    { title: 'Redux Learning Project', github: 'https://github.com/krishh21/Redux' },
    { title: 'Simple Quiz App', github: 'https://github.com/krishh21/Simple-Quiz-app' },
    { title: 'Climate Forecast App', github: 'https://github.com/krishh21/climate-forecast-apk' },
    { title: 'EMS Server', github: 'https://github.com/krishh21/Mern-stack-Ems-Server' },
    { title: 'React Node MySQL EMS', github: 'https://github.com/krishh21/React-Node-Mysql-ems' },
    { title: 'Java EMS', github: 'https://github.com/krishh21/Java-Ems' },
    { title: 'Flappy Bird', github: 'https://github.com/krishh21/FlappyBird' },
    { title: 'Tic Tac Toe', github: 'https://github.com/krishh21/TicTacToe' },
  
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Projects</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">Latest work and full project portfolio</h2>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            From civic-tech portals to AI tools and game projects, this collection reflects both practical product work and continuous learning.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="group rounded-3xl border border-gray-200 bg-white/90 p-6 shadow-lg shadow-blue-100/50 transition hover:-translate-y-1 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900/90 dark:shadow-gray-950/30"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-700 dark:bg-blue-950/40 dark:text-blue-300">
                  Project {index + 1}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{project.tags[0]}</span>
              </div>

              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-gray-700 dark:text-gray-300">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-800 transition hover:border-blue-500 hover:text-blue-600 dark:border-gray-700 dark:text-gray-200"
                >
                  <FaGithub /> GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
                  >
                    <FaArrowUpRightFromSquare /> Live
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-gray-200 bg-gray-50 p-8 dark:border-gray-800 dark:bg-gray-900/60">
          <h3 className="text-2xl font-semibold">More projects and experiments</h3>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
              <a
                key={project.title}
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition hover:border-blue-500 hover:text-blue-600 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300"
              >
                <span>{project.title}</span>
                <FaGithub />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
