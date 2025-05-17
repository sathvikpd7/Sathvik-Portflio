import React from 'react';
import { Helmet } from 'react-helmet-async';
import About from '../components/About';

const AboutPage = () => {
  return (
    <section id="about" className="min-h-screen py-20">
      <Helmet>
        <title>About | Portfolio</title>
        <meta name="description" content="Learn more about me" />
      </Helmet>
      <About />
    </section>
  );
};

export default AboutPage;