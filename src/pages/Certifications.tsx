import React from 'react';
import { Helmet } from 'react-helmet-async';
import Certifications from '../components/Certifications';

const CertificationsPage = () => {
  return (
    <section id="certifications" className="min-h-screen py-20">
      <Helmet>
        <title>Certifications | Portfolio</title>
        <meta name="description" content="My professional certifications" />
      </Helmet>
      <Certifications />
    </section>
  );
};

export default CertificationsPage;