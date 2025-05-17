import React from 'react';
import { Helmet } from 'react-helmet-async';
import Projects from '../components/Projects';

const ProjectsPage = () => {
  return (
    <section id="projects" className="min-h-screen py-20">
      <Helmet>
        <title>Projects | Portfolio</title>
        <meta name="description" content="My portfolio projects" />
      </Helmet>
      <Projects />
    </section>
  );
};

export default ProjectsPage;