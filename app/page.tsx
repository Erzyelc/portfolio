import Experience from '@/components/Homepage/Experience';
import Featured from '@/components/Homepage/Featured';
import Hero from '@/components/Homepage/Hero';
import Services from '@/components/Homepage/Services';
import Skills from '@/components/Homepage/Skills';
import Testimonies from '@/components/Homepage/Testimonies';
import React from 'react';

const page = () => {
  return (
    <main className=''>
      <section>
        <Hero />
        <Skills />
        <Services />
        <Experience />
        <Featured />
        <Testimonies />
      </section>
    </main>
  );
};

export default page;
