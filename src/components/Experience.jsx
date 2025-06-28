import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4 max-w-4xl mx-auto animate-fadeInUp">
      <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
      <div className="space-y-6">
        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="text-xl font-semibold">Full Stack Developer Intern</h3>
          <p className="text-gray-600 dark:text-gray-300">Eduskill — April 2025 - June 2025</p>
          <p className="text-sm text-gray-500">
            Designed and developed multiple client websites and hybrid apps using React, Tailwind,
            and Firebase. Focused on clean UI/UX and mobile-first performance.
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="text-xl font-semibold">Android Developer Intern</h3>
          <p className="text-gray-600 dark:text-gray-300"> Shivsys Inc . — May 2025 - Present</p>
          <p className="text-sm text-gray-500">
            Currently interning in software testing and app development (React Native).
            Gaining practical skills in React.js, React Native, advanced JavaScript, MongoDB,
            REST API design, DSA, and building my communication and leadership abilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
