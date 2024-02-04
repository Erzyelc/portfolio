import Experience from '@/app/Homepage/Experience';
import Featured from '@/app/Homepage/Featured';
import Hero from '@/app/Homepage/Hero';
import Services from '@/app/Homepage/Services';
import Skills from '@/app/Homepage/Skills';
import Testimonies from '@/app/Homepage/Testimonies';
import ContactMe from '@/components/reusable/ContactMe';
import React from 'react';

const page = () => {
  return (
    <main>
      <Hero />
      <Skills />
      <Services />
      {/* <Experience />
      <Featured />
      <Testimonies />
      <ContactMe /> */}
    </main>
  );
};

export default page;
