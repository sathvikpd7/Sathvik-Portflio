import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import { useTheme } from '../context/ThemeContext';

const ParticlesBackground: React.FC = () => {
  const { theme } = useTheme();
  // @ts-ignore
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: theme === 'dark' ? ["#00f2fe", "#4facfe"] : ["#3b82f6", "#8b5cf6"],
          },
          links: {
            color: theme === 'dark' ? "#00f2fe" : "#3b82f6",
            distance: 150,
            enable: true,
            opacity: theme === 'dark' ? 0.2 : 0.1,
            width: 1,
          },
          move: {
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1.2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100,
          },
          opacity: {
            value: theme === 'dark' ? 0.5 : 0.3,
            random: true,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
            random: true,
          },
          twinkle: {
            particles: {
              enable: true,
              frequency: 0.05,
              opacity: 1,
            },
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  );
}

export default ParticlesBackground;