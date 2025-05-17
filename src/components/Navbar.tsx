import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

// Background Animation Component
const AnimatedBackground: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  // Create an array of animated elements with different properties
  const elements = Array.from({ length: isDark ? 8 : 12 }, (_, i) => ({
    id: i,
    size: Math.random() * 120 + 50,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 40 + 50, // Slower movement
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className={`absolute rounded-full ${
            isDark 
              ? 'bg-gradient-to-r from-[#1a1a1a]/30 via-[#232836]/30 to-[#302828]/30 opacity-20 blur-3xl' 
              : 'bg-gradient-to-r from-[#ffb7c5]/15 via-[#a6d1ff]/15 to-[#f7d1e0]/15 opacity-30 blur-3xl'
          }`}
          style={{
            width: el.size,
            height: el.size,
            top: `${el.y}%`,
            left: `${el.x}%`,
          }}
          animate={{
            x: [
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
            ],
            y: [
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
              Math.random() * 100 - 50,
            ],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: el.duration,
            delay: el.delay,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Add geometric shapes that float around - more subtle in dark mode */}
      <motion.div 
        className={`absolute w-24 h-24 ${
          isDark ? 'border border-white/5' : 'border-2 border-black/10'
        }`}
        style={{ 
          top: '25%', 
          left: '15%',
          borderRadius: '0% 50% 50% 50%',
          transform: 'rotate(45deg)'
        }}
        animate={{
          x: [0, 60, 30, 0],
          y: [0, 30, 60, 0],
          rotate: [45, 60, 45],
          opacity: isDark ? [0.05, 0.1, 0.05] : [0.1, 0.2, 0.1]
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className={`absolute w-32 h-32 ${
          isDark ? 'border border-white/5' : 'border-2 border-black/10'
        }`}
        style={{ 
          top: '70%', 
          left: '85%',
          borderRadius: '50% 0% 50% 50%',
        }}
        animate={{
          x: [0, -40, -20, 0],
          y: [0, -20, -40, 0],
          rotate: [0, -15, 0],
          opacity: isDark ? [0.05, 0.1, 0.05] : [0.1, 0.2, 0.1]
        }}
        transition={{
          repeat: Infinity,
          duration: 50,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState('home');
  const { theme } = useTheme();
  
  const navItems = [
    { name: 'Home', to: 'home' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Certifications', to: 'certifications' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.to);
      const scrollPosition = window.scrollY;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop - 100;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveItem(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  return (
    <>
      <AnimatedBackground />
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'py-3 border-b border-black dark:border-white/20 backdrop-blur-md bg-gradient-to-r from-[#f7d1e0]/90 to-[#c8e7ff]/90 dark:from-[#1a1a1a]/90 dark:to-[#232836]/90 shadow-[0_4px_0_rgba(0,0,0,0.1)] dark:shadow-[0_4px_0_rgba(255,255,255,0.05)]' 
            : 'py-4 bg-transparent backdrop-blur-sm'
        } ${theme === 'dark' && scrolled ? 'dark-navbar-glow' : ''}`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo and Profile Image */}
            <div className="flex items-center space-x-3">
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="cursor-pointer relative group flex items-center"
              >
                {/* Profile Image */}
                <motion.div
                  className="relative border-2 border-black dark:border-white p-[2px] overflow-hidden"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)' }}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#ffb7c5] to-[#a6d1ff] dark:from-[#ff6b95] dark:to-[#4d8eff] opacity-0"
                    animate={{
                      opacity: [0, 0.5, 0],
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 3,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.img 
                    src="/profile.svg" 
                    alt="Profile" 
                    className="h-10 w-10 relative z-10"
                    whileHover={{
                      scale: 1.2,
                      rotate: 5,
                    }}
                  />
                </motion.div>
                
                {/* Logo */}
                <motion.div
                  className="ml-2 relative p-1 border-2 border-transparent overflow-hidden"
                  whileHover={{
                    borderColor: theme === 'dark' ? '#ffffff40' : '#00000040',
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                >
                  <motion.img 
                    src="/logo.svg" 
                    alt="Logo" 
                    className="h-10 relative z-10"
                    animate={{
                      filter: [
                        'drop-shadow(0 0 0 rgba(0,0,0,0))',
                        'drop-shadow(0 0 2px rgba(166,209,255,0.7))',
                        'drop-shadow(0 0 0 rgba(0,0,0,0))'
                      ]
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      ease: "easeInOut",
                    }}
                    whileHover={{
                      rotate: [0, -5, 0, 5, 0],
                      scale: 1.1,
                      transition: { duration: 0.5, repeat: 2, repeatType: "reverse" }
                    }}
                  />
                </motion.div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-2">
                {navItems.map((item) => (
                  <li key={item.name} className="relative">
                    <Link
                      to={item.to}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                      className="cursor-pointer block"
                      onSetActive={() => setActiveItem(item.to)}
                    >
                      <div className="relative px-3 py-2">
                        <span className={`relative block font-medium text-sm uppercase tracking-wider ${
                          activeItem === item.to 
                            ? 'text-black dark:text-white'
                            : 'text-gray-700 dark:text-gray-300'
                        } ${theme === 'dark' && activeItem === item.to ? 'neon-text' : ''}`}>
                          {item.name}
                        </span>
                        
                        {/* Simple underline for active item */}
                        {activeItem === item.to && (
                          <motion.div
                            layoutId="activeNavItem"
                            className="absolute bottom-0 left-0 w-full h-0.5 bg-black dark:bg-white"
                          />
                        )}
                      </div>
                    </Link>
                  </li>
                ))}
                
                {/* Theme Toggle */}
                <li className="ml-3">
                  <div className="p-1 border-2 border-black dark:border-white/40">
                    <ThemeToggle />
                  </div>
                </li>
              </ul>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              <div className="p-1 border-2 border-black dark:border-white/40">
                <ThemeToggle />
              </div>
              <button
                className={`p-2 border-2 border-black dark:border-white/40 focus:outline-none ${
                  isOpen ? 'bg-[#ffb7c5] dark:bg-[#302828]' : 'bg-transparent'
                }`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isOpen ? 'close' : 'open'}
                    initial={{ opacity: 0, rotate: isOpen ? -90 : 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: isOpen ? 90 : -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen ? (
                      <X className={`w-6 h-6 text-black dark:text-white ${theme === 'dark' ? 'neon-text' : ''}`} />
                    ) : (
                      <Menu className={`w-6 h-6 text-black dark:text-white ${theme === 'dark' ? 'neon-text' : ''}`} />
                    )}
                  </motion.div>
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden"
              >
                <div className="mt-4 py-2 px-2 border-2 border-black dark:border-white/20 bg-white/90 dark:bg-[#1a1a1a]/90 backdrop-blur-md">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="my-1"
                    >
                      <Link
                        to={item.to}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className={`relative flex items-center p-3 transition-all cursor-pointer overflow-hidden block ${
                          activeItem === item.to ? 'font-medium' : ''
                        }`}
                        onClick={() => {
                          setActiveItem(item.to);
                          setIsOpen(false);
                        }}
                      >
                        {/* Background for active item in mobile menu - simple version */}
                        {activeItem === item.to && (
                          <motion.div 
                            className="absolute inset-0 bg-[#ffb7c5]/30 dark:bg-[#302828]/30"
                            layoutId="mobileActiveItem"
                          />
                        )}
                        
                        <div className="flex items-center relative z-10 w-full">
                          <ChevronRight className={`w-4 h-4 mr-2 ${
                            activeItem === item.to ? 'text-black dark:text-white' : 'text-gray-600 dark:text-gray-400'
                          }`} />
                          <span className={`${
                            activeItem === item.to 
                              ? 'text-black dark:text-white' 
                              : 'text-gray-700 dark:text-gray-300'
                          }`}>
                            {item.name}
                          </span>
                          
                          {/* Simple active indicator */}
                          {activeItem === item.to && (
                            <div className="ml-auto h-1 w-6 bg-black/40 dark:bg-white/40 rounded-full" />
                          )}
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
    </>
  );
};

export default Navbar;