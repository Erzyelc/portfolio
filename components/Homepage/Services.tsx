import React from 'react';
import ServicesCard from '../reusable/ServicesCard';

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
          image='/icons/design.svg'
          title='Analytics & SEO'
          description='Implement tracking & analytics tools to monitor website performance & improve SEO.'
        />
        <ServicesCard
          image='/icons/mouse.svg'
          title='Front-End Dev'
          description='Front-end dev includes creating the user interface and interactive elements of websites and apps.'
        />
        <ServicesCard
          image='/icons/code.svg'
          title='Back-End Dev'
          description='Back-end includes creating the database and server-side of websites and apps.'
        />
        <ServicesCard
          image='/icons/optimization.svg'
          title='Web Optimization'
          description='Web optimization focuses on improving website performance for a smoother user experience'
        />
      </section>
    </section>
  );
};

export default Services;
