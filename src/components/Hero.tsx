import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Download, Send, Code, Sparkles } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';
import AnimatedCube from './AnimatedCube';
import { useTheme } from '../context/ThemeContext';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* We already have the background in the App component */}
      {/* <div className="absolute inset-0 z-0 dark:block hidden">
        <ParticlesBackground />
      </div> */}
      
      {/* Floating elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="relative w-full h-full">
          {/* Light mode elements */}
          {theme === 'light' && (
            <>
              <motion.div 
                className="absolute top-20 left-[15%] w-16 h-16 rounded-lg bg-blue-100 opacity-60 float"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute top-[30%] right-[10%] w-12 h-12 rounded-full bg-purple-100 opacity-60 float float-delay-1"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute bottom-[25%] left-[20%] w-10 h-10 rounded-md transform rotate-45 bg-blue-200 opacity-50 float float-delay-2"
                animate={{ rotate: 45 + 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
            </>
          )}
          
          {/* Dark mode elements */}
          {theme === 'dark' && (
            <>
              <motion.div 
                className="absolute top-20 left-[15%] w-16 h-16 rounded-lg bg-neon-blue/10 border border-neon-blue/30 neon-glow float"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute top-[30%] right-[10%] w-12 h-12 rounded-full bg-neon-purple/10 border border-neon-purple/30 float float-delay-1"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              <motion.div 
                className="absolute bottom-[25%] left-[20%] w-10 h-10 rounded-md transform rotate-45 bg-neon-green/10 border border-neon-green/30 float float-delay-2"
                animate={{ rotate: 45 + 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
            </>
          )}
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glowing badge */}
            <motion.div
              className={`inline-block px-4 py-2 rounded-full relative overflow-hidden mb-6 ${
                theme === 'dark' ? 'dark:neon-border' : 'bg-blue-100 text-blue-700'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center gap-2">
                <Code className={`w-4 h-4 ${theme === 'dark' ? 'text-neon-blue' : 'text-blue-600'}`} />
                <span className={`relative z-10 font-medium ${theme === 'dark' ? 'text-neon-blue' : 'text-blue-700'}`}>
                  Web Developer
                </span>
                {theme === 'dark' && (
                  <Sparkles className="w-4 h-4 text-neon-purple animate-pulse" />
                )}
              </div>
              
              {theme === 'dark' && (
                <motion.div 
                  className="absolute inset-0 bg-dark-300/50 -z-10"
                  animate={{
                    background: ['rgba(26,26,26,0.5)', 'rgba(30,30,35,0.5)', 'rgba(26,26,26,0.5)']
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              )}
            </motion.div>
            
            {/* Heading */}
            <motion.h1
              className="text-5xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className={`inline-block ${theme === 'dark' ? 'dark:gradient-text dark:text-glow' : ''}`}>
                Hi, I'm Sathvik P D
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.p
              className="text-xl text-gray-700 dark:text-gray-300 mb-8 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              I'm passionate about web development, building scalable web apps, 
              data-driven solutions, and I'm a data analyst enthusiast.
              
              {theme === 'dark' && (
                <span className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-neon-blue via-neon-purple to-transparent rounded-full"></span>
              )}
            </motion.p>
            
            {/* Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.a
                href="/resume.pdf"
                download
                className={`button-primary ${theme === 'dark' ? 'dark:glow-effect dark:bg-transparent dark:border-2 dark:border-neon-blue dark:text-neon-blue dark:hover:bg-neon-blue/10' : 'bg-blue-600 hover:bg-blue-700'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5 mr-2 inline-block" />
                Download Resume
              </motion.a>
              
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <motion.button
                  className={`button-outline ${theme === 'dark' ? 'dark:glow-effect dark:border-neon-blue dark:text-neon-blue dark:hover:bg-neon-blue/10' : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-50'}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send className="w-5 h-5 mr-2 inline-block" />
                  Contact Me
                </motion.button>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Visual section (cube + profile) */}
          <motion.div
            className="relative h-[400px] lg:h-[600px] flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-full h-full">
              {/* Animated Cube */}
              <div className="absolute inset-0 z-10">
                <AnimatedCube />
              </div>
              
              {/* Profile Photo */}
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] md:w-[250px] md:h-[250px] z-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <img 
                  src="/profile.svg" 
                  alt="Profile" 
                  className={`w-full h-full object-cover rounded-full border-4 ${
                    theme === 'dark'
                      ? 'dark:border-neon-blue/30 dark:neon-glow'
                      : 'border-blue-300 shadow-lg shadow-blue-200/20'
                  }`}
                />
              </motion.div>
              
              {/* Decorative elements */}
              <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-r ${
                theme === 'dark' 
                  ? 'dark:from-neon-blue/20 dark:to-purple-500/20' 
                  : 'from-blue-400/20 to-purple-500/20'
              } rounded-full blur-3xl`}></div>
              <div className={`absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-r ${
                theme === 'dark'
                  ? 'dark:from-purple-500/20 dark:to-neon-blue/20'
                  : 'from-purple-500/20 to-blue-400/20'
              } rounded-full blur-3xl`}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;