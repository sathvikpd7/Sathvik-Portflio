import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <section id="home" className="min-h-screen">
      <Helmet>
        <title>Home | Portfolio</title>
        <meta name="description" content="Welcome to my portfolio" />
      </Helmet>
      <Hero />
    </section>
  );
};

export default Home;