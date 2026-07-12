import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-gray-200 bg-white/80 p-8 shadow-[0_20px_60px_-20px_rgba(37,99,235,0.25)] backdrop-blur dark:border-gray-800 dark:bg-gray-900/70 dark:shadow-none">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">About Me</p>
          <h2 className="mt-2 text-3xl font-bold">Building products that feel polished and perform well</h2>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <p className="text-lg leading-8 text-gray-700 dark:text-gray-300">
            I’m <strong>Krishna Yadav</strong>, a passionate full-stack developer focused on creating fast, elegant, and practical digital experiences. My work spans modern web applications, admin dashboards, AI-powered features, mobile apps, and interactive learning projects.
          </p>

          <div className="space-y-3 rounded-2xl bg-gray-50 p-5 dark:bg-gray-800/70">
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Core Stack</span>
              <span className="font-semibold text-gray-900 dark:text-white">React • Node • MongoDB</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Also Skilled In</span>
              <span className="font-semibold text-gray-900 dark:text-white">React Native • MySQL • Java</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600 dark:text-gray-400">Focus</span>
              <span className="font-semibold text-gray-900 dark:text-white">Clean UI • Scalable Apps</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
