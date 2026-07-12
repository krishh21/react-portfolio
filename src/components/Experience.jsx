import React from 'react';

const Experience = () => {
  const experiences = [
     {
      title: 'Software Engineer Trainee',
      company: 'Shivsys Group * Lorgan Technologies.',
      period: 'March 2026- Present',
      description: 'Working on App development using React Native and software testing automation using Detox, while strengthening my skills in JavaScript, MongoDB, REST APIs, and problem solving. also working  on devops  and firebase as a multiple services for backend and hosting.',
    },
       {
      title: 'Frontend Developer',
      company: 'Shivsys Inc.',
      period: 'May 2025 - July 2025',
      description: 'Working on MERN stack applications, focusing on frontend development with React, while enhancing skills in JavaScript, MongoDB, REST APIs, and problem-solving.',
    },
      
    {
      title: 'Full Stack Developer Intern',
      company: 'Eduskill',
      period: 'April 2025 - June 2025',
      description: 'Built polished client websites and hybrid apps using React, Tailwind, and Firebase while focusing on responsive UI and performance.',
    },
 
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Experience</p>
          <h2 className="mt-2 text-3xl font-bold">Hands-on internships and Trainee experiences shaping my developer journey</h2>
        </div>

        <div className="mt-10 space-y-5">
          {experiences.map((item) => (
            <div key={item.title} className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/70">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.company}</p>
                </div>
                <p className="text-sm font-medium text-blue-600">{item.period}</p>
              </div>
              <p className="mt-4 text-gray-700 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
