// import Experience from '@/app/Homepage/Experience';
// import Featured from '@/app/Homepage/Featured';
import Hero from '@/app/Homepage/Hero';
import Skills from '@/app/Homepage/Skills';
// import Testimonies from '@/app/Homepage/Testimonies';
// import ContactMe from '@/components/reusable/ContactMe';
import React from 'react';
import Services from './Homepage/Services';

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
