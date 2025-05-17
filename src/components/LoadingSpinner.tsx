import React from 'react';
import { motion } from 'framer-motion';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-dark-100">
      <motion.div
        className="w-16 h-16 border-4 border-neon-blue rounded-full"
        animate={{
          rotate: 360,
          borderWidth: [4, 2, 4],
          borderColor: ['#00f2fe', '#b537f2', '#00ff87', '#00f2fe'],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default LoadingSpinner;