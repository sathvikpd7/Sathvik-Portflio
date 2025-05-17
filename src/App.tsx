import React, { Suspense, useEffect, useState } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import LoadingSpinner from './components/LoadingSpinner';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/ThemeContext';

const AnimatedBackground: React.FC = () => {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <>
      {theme === 'light' && (
        <div className="fixed inset-0 z-[-2] overflow-hidden">
          <div 
            className="absolute w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-[120px]"
            style={{ 
              left: `${mousePosition.x * 60}%`, 
              top: `${mousePosition.y * 40}%`,
              transition: 'left 3s ease-out, top 3s ease-out'
            }}
          ></div>
          <div 
            className="absolute w-[400px] h-[400px] rounded-full bg-purple-100/30 blur-[100px]"
            style={{ 
              right: `${mousePosition.x * 40}%`, 
              top: `${mousePosition.y * 60}%`,
              transition: 'right 3.5s ease-out, top 3.5s ease-out'
            }}
          ></div>
          
          <div className="absolute inset-0 bg-grid-light opacity-[0.15]"></div>
        </div>
      )}
      
      {theme === 'dark' && (
        <div className="fixed inset-0 z-[-2] overflow-hidden">
          <div className="absolute inset-0 bg-dark-100 animated-gradient-bg"></div>
          
          <div 
            className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-r from-neon-blue/10 to-neon-purple/5 blur-[120px]"
            style={{ 
              left: `${mousePosition.x * 70}%`, 
              top: `${mousePosition.y * 30}%`,
              transform: 'translate(-50%, -50%)',
              transition: 'left 4s ease-out, top 4s ease-out'
            }}
          ></div>
          <div 
            className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-r from-neon-purple/10 to-neon-green/5 blur-[100px]"
            style={{ 
              right: `${mousePosition.x * 30}%`, 
              bottom: `${mousePosition.y * 70}%`,
              transform: 'translate(50%, 50%)',
              transition: 'right 4.5s ease-out, bottom 4.5s ease-out'
            }}
          ></div>
          
          <div className="absolute inset-0 bg-grid-dark opacity-[0.07]"></div>
        </div>
      )}
    </>
  );
};

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Skills = React.lazy(() => import('./pages/Skills'));
const Experience = React.lazy(() => import('./pages/Experience'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Certifications = React.lazy(() => import('./pages/Certifications'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  return (
    <ThemeProvider>
      <HelmetProvider>
        <div className="relative min-h-screen overflow-hidden bg-white dark:bg-dark-100 text-gray-900 dark:text-white transition-colors duration-700">
          <AnimatedBackground />
          
          <div className="relative z-[1]">
            <Navbar />
            <Suspense fallback={<LoadingSpinner />}>
              <main>
                <Home />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Certifications />
                <Contact />
              </main>
            </Suspense>
            <Footer />
          </div>
        </div>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;