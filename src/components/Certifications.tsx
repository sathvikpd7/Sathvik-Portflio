import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

interface CertificationProps {
  name: string;
  issuer: string;
  year: string;
  link?: string;
  image?: string;
}

const Certification: React.FC<CertificationProps> = ({ 
  name, 
  issuer, 
  year, 
  link,
  image 
}) => {
  return (
    <motion.div 
      className="flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-center p-4 bg-primary-50 dark:bg-gray-700 md:w-1/4">
        {image ? (
          <img src={image} alt={name} className="w-16 h-16 object-contain" />
        ) : (
          <Award className="w-12 h-12 text-primary-500" />
        )}
      </div>
      <div className="p-5 md:w-3/4">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{name}</h3>
        <div className="flex flex-wrap items-center mb-3">
          <span className="text-gray-600 dark:text-gray-400 mr-3">{issuer}</span>
          <span className="text-sm text-gray-500 dark:text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
            {year}
          </span>
        </div>
        {link && (
          <a 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:underline font-medium"
          >
            View Certificate <ExternalLink className="w-4 h-4 ml-1" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Certifications: React.FC = () => {
  const certifications: CertificationProps[] = [
    {
      name: "Full Stack Web Development",
      issuer: "Coursera",
      year: "2023",
      link: "https://example.com",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Data Analysis with Python",
      issuer: "Udemy",
      year: "2022",
      link: "https://example.com",
      image: "https://images.pexels.com/photos/7988079/pexels-photo-7988079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Advanced JavaScript",
      issuer: "freeCodeCamp",
      year: "2023",
      link: "https://example.com",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-heading text-gray-900 dark:text-white mb-4">
            Certifications & Learning
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm committed to continuous learning. Here are some of my recent certifications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Certification key={index} {...cert} />
          ))}
        </div>

        <motion.div 
          className="mt-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Learning Never Stops</h3>
          <p className="text-gray-600 dark:text-gray-400">
            I'm currently exploring advanced React patterns, GraphQL, and cloud architecture to further expand my skill set.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;