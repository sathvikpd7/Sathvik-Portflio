import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Activity, Globe } from 'lucide-react';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
          </motion.div>

          <div className="flex flex-col md:flex-row gap-8 items-center">
            <motion.div variants={itemVariants} className="w-full md:w-1/3">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Sathvik working on code" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-primary-500 opacity-20"></div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="w-full md:w-2/3">
              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                "I'm interested in web development. I love solving complex problems and delivering impactful solutions. Outside of work, I enjoy playing football."
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <User className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Problem Solver</h3>
                    <p className="text-gray-600 dark:text-gray-400">Tackling complex challenges with creative solutions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <Code2 className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Web Developer</h3>
                    <p className="text-gray-600 dark:text-gray-400">Building responsive and elegant web applications</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <Activity className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Data Enthusiast</h3>
                    <p className="text-gray-600 dark:text-gray-400">Analyzing data to derive meaningful insights</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900 rounded-lg">
                    <Globe className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Continuous Learner</h3>
                    <p className="text-gray-600 dark:text-gray-400">Always exploring new technologies and methodologies</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;