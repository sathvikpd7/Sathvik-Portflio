import React from 'react';
import { Link } from 'react-scroll';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          {/* Quick Links */}
          <div className="mb-6">
            <h3 className="text-center font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {navLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="hover:text-blue-600 dark:hover:text-neon-blue transition-colors cursor-pointer"
                  >
                    {link.name}
                  </Link>
                  {index < navLinks.length - 1 && (
                    <span className="text-gray-400">|</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Copyright Notice */}
          <div className="text-center">
            <p className="flex items-center justify-center">
              © 2025 Sathvik P D. All rights reserved.
            </p>
            <p className="text-sm mt-2 flex items-center justify-center">
              <span>Made with</span>
              <Heart className="w-4 h-4 mx-1 text-red-500" />
              <span>using React & TailwindCSS</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;