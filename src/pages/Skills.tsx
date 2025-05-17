import React from 'react';
import { Helmet } from 'react-helmet-async';
import Skills from '../components/Skills';

const SkillsPage = () => {
  return (
    <section id="skills" className="min-h-screen py-20">
      <Helmet>
        <title>Skills | Portfolio</title>
        <meta name="description" content="My technical skills and expertise" />
      </Helmet>
      <Skills />
    </section>
  );
};

export default SkillsPage;