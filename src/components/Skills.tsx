import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Star } from 'lucide-react';

interface SkillCardProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills, icon }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-primary-100 dark:bg-primary-900 rounded-lg mr-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Skills: React.FC = () => {
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

  const frontendSkills = ['HTML/CSS', 'JavaScript', 'React'];
  const backendSkills = ['Node.js', 'Python'];
  const databaseSkills = ['MongoDB', 'PostgreSQL', 'MySQL'];
  const softSkills = ['Problem-Solving', 'Agile Methodologies'];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">
              What I Do
            </h2>
            <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of the skills and technologies I work with to create impactful solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <SkillCard 
              title="Frontend" 
              skills={frontendSkills} 
              icon={<Code className="w-6 h-6 text-primary-600 dark:text-primary-400" />}
            />
            <SkillCard 
              title="Backend" 
              skills={backendSkills} 
              icon={<Server className="w-6 h-6 text-primary-600 dark:text-primary-400" />}
            />
            <SkillCard 
              title="Database" 
              skills={databaseSkills} 
              icon={<Database className="w-6 h-6 text-primary-600 dark:text-primary-400" />}
            />
            <SkillCard 
              title="Soft Skills" 
              skills={softSkills} 
              icon={<Star className="w-6 h-6 text-primary-600 dark:text-primary-400" />}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;