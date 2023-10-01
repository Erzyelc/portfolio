import React from 'react';
import ServicesCard from '../../components/reusable/ServicesCard';

import Mouse from '@/public/icons/mouse.svg';
import Design from '@/public/icons/design.svg';
import Code from '@/public/icons/code.svg';
import Optimization from '@/public/icons/optimization.svg';

const Services = () => {
  return (
    <section className='flex h-[580px] flex-col justify-center gap-14'>
      <section className='flex justify-center'>
        <h2 className='flex gap-3'>
          What
          <div className='relative w-fit'>
            <div className='relative z-10'>service</div>
            <div className='absolute bottom-0.5 z-0 h-6 w-full bg-accent' />
          </div>
          do I provide
        </h2>
      </section>
      <section className='padding-layout flex flex-row gap-10'>
        <ServicesCard
          SvgIconComponent={Design}
          title='Analytics & SEO'
          description='Implement tracking & analytics tools to monitor website performance & improve SEO.'
        />
        <ServicesCard
          SvgIconComponent={Mouse}
          title='Front-End Dev'
          description='Front-end dev includes creating the user interface and interactive elements of websites and apps.'
        />
        <ServicesCard
          SvgIconComponent={Code}
          title='Back-End Dev'
          description='Back-end includes creating the database and server-side of websites and apps.'
        />
        <ServicesCard
          SvgIconComponent={Optimization}
          title='Web Optimization'
          description='Web optimization focuses on improving website performance for a smoother user experience'
        />
      </section>
    </section>
  );
};

export default Services;
