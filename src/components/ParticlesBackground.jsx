import React from 'react';

const ParticlesBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute left-[-10%] top-0 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl" />
      <div className="absolute right-[-8%] top-20 h-80 w-80 rounded-full bg-sky-300/20 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl" />
    </div>
  );
};

export default ParticlesBackground;
