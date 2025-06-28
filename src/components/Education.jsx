import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-16 px-4 max-w-4xl mx-auto animate-fadeInUp">
      <h2 className="text-3xl font-bold mb-10 text-center">Education</h2>
      <div className="space-y-6">
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-semibold">Bachelor of Technology (CSE)</h3>
          <p className="text-gray-600 dark:text-gray-300"> INVERTIS UNIVERSITY , 2022 - 2026</p>
          <p className="text-sm text-gray-500">CGPA: 8.1 </p>
        </div>
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-semibold">Senior Secondary (Class 12)</h3>
          <p className="text-gray-600 dark:text-gray-300">B.K.Kawle Jr . College, 2021- 2022</p>
          <p className="text-sm text-gray-500">Percentage: 72%</p>
        </div>
        <div className="border-l-4 border-blue-500 pl-4">
          <h3 className="text-xl font-semibold">High School</h3>
          <p className="text-gray-600 dark:text-gray-300">New English School, 2019 - 2020</p>
          <p className="text-sm text-gray-500">Percentage: 89 %</p>
        </div>
      </div>
    </section>
  );
};

export default Education;
