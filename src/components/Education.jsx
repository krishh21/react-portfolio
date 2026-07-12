import React from 'react';

const Education = () => {
  const items = [
    { title: 'Bachelor of Technology (CSE)', institute: 'Invertis University', period: '2022 - 2026', detail: 'CGPA: 8.1' },
    { title: 'Senior Secondary (Class 12)', institute: 'B.K. Kawle Jr. College', period: '2021 - 2022', detail: 'Percentage: 72%' },
    { title: 'High School', institute: 'New English School', period: '2019 - 2020', detail: 'Percentage: 89%' },
  ];

  return (
    <section id="education" className="py-20 px-4">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Education</p>
          <h2 className="mt-2 text-3xl font-bold">A strong academic foundation behind my work</h2>
        </div>

        <div className="mt-10 space-y-5">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-gray-200 bg-white/80 p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900/70">
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{item.institute}</p>
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  <p>{item.period}</p>
                  <p className="font-medium text-blue-600">{item.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
