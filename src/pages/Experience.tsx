import React from 'react';
import { Helmet } from 'react-helmet-async';

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen py-20">
      <Helmet>
        <title>Experience | Portfolio</title>
        <meta name="description" content="My professional experience" />
      </Helmet>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Professional Experience</h2>
        {/* Experience content will be added later */}
      </div>
    </section>
  );
};

export default Experience;