import Hero from '@/app/Homepage/Hero';
import Skills from '@/app/Homepage/Skills';
import ContactMe from '@/components/reusable/ContactMe';
import React from 'react';
import Services from './Homepage/Services';
import Experience from './Homepage/Experience';
import Featured from './Homepage/Featured';
import Testimonies from './Homepage/Testimonies';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RJC - Professional Web Development Services',
  description: 'Discover the exper web development services I provide.',
};

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
