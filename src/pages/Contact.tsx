import React from 'react';
import { Helmet } from 'react-helmet-async';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <section id="contact" className="min-h-screen py-20">
      <Helmet>
        <title>Contact | Portfolio</title>
        <meta name="description" content="Get in touch with me" />
      </Helmet>
      <Contact />
    </section>
  );
};

export default ContactPage;