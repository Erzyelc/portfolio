import Hero from '@/app/Homepage/Hero';
import Skills from '@/app/Homepage/Skills';
import ContactMe from '@/components/reusable/ContactMe';
import React from 'react';
import Services from './Homepage/Services';
import Experience from './Homepage/Experience';
import Featured from './Homepage/Featured';
import Testimonies from './Homepage/Testimonies';

const page = () => {
  return (
    <main>
      <Hero />
      <Skills />
      <Services />
      <Experience />
      <Featured />
      <Testimonies />
      <ContactMe />
    </main>
  );
};

export default page;
