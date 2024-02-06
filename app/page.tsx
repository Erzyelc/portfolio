import Hero from '@/app/Homepage/Hero';
import Skills from '@/app/Homepage/Skills';
// import Testimonies from '@/app/Homepage/Testimonies';
// import ContactMe from '@/components/reusable/ContactMe';
import React from 'react';
import Services from './Homepage/Services';
import Experience from './Homepage/Experience';
import Featured from './Homepage/Featured';

const page = () => {
  return (
    <main>
      <Hero />
      <Skills />
      <Services />
      <Experience />
      <Featured />
      {/* }
      <Testimonies />
      <ContactMe /> */}
    </main>
  );
};

export default page;
