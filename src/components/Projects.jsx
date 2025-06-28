import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Employee Management System (EMS)',
      description:
        'A full-featured MERN stack app with login, role-based access (Admin/Leader/Employee), attendance, leave, salary management.',
      link: 'https://github.com/krishh21/Mern-stack-EMS-client',
    },
    {
      title: 'Climate Forecast APK',
      description:
        'Built a cross-platform weather app using React Native and Expo. Integrated the OpenWeatherMap API to fetch real-time weather data and display it with a clean, responsive UI.”',
      link: 'https://github.com/krishh21/weather-app',
    },
    {
      title: 'AI Image Caption Generator',
      description:
        'Built an app that takes an image and generates meaningful captions using deep learning models.',
      link: 'https://github.com/krishh21/Image_caption_generator',
    },
    {
      title: 'React Quiz App',
      description:
        'Interactive quiz app with timer, progress bar, score calculation, feedback, and responsive UI.',
      link: 'https://github.com/krishh21/Simple-Quiz-app',
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 max-w-5xl mx-auto animate-fadeInUp">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              View Project ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
