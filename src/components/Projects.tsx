import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveLink?: string;
  githubLink?: string;
}

const Project: React.FC<ProjectProps> = ({ 
  title, 
  description, 
  image, 
  tech, 
  liveLink, 
  githubLink 
}) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative overflow-hidden h-48 md:h-56">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-300"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {githubLink && (
            <a 
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="GitHub Repository"
            >
              <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </a>
          )}
          {liveLink && (
            <a 
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              aria-label="Live Demo"
            >
              <ExternalLink className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const projects: ProjectProps[] = [
    {
      title: "E-Commerce Platform",
      description: "A fully-featured online store with cart, checkout, and payment integration",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      tech: ["React", "Node.js", "MongoDB"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/username/project"
    },
    {
      title: "Task Management App",
      description: "Organize and track your tasks with this intuitive task management solution",
      image: "https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      tech: ["React", "Firebase", "Tailwind CSS"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/username/project"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets with filtering capabilities",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      tech: ["D3.js", "React", "Node.js"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/username/project"
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">
            Featured Work
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Check out some of my recent projects that showcase my technical skills and problem-solving abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-primary-600 text-white hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5 mr-2" />
            View More Projects
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Projects;