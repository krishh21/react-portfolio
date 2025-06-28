import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: 'transparent' } },
        particles: {
          number: { value: 60, density: { enable: true, value_area: 800 } },
          color: { value: '#60a5fa' },
          shape: { type: 'circle' },
          opacity: { value: 0.2 },
          size: { value: 3 },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            outModes: { default: 'out' },
          },
        },
      }}
      className="absolute top-0 left-0 w-full h-full z-[-1]"
    />
  );
};

export default ParticlesBackground;
