import React from 'react';
import ServicesCard from '../../components/reusable/ServicesCard';

const Services = () => {
  return (
    <section className='flex flex-col items-center gap-10 bg-white-900 py-12 dark:bg-black-300 sm:bg-white-800 xl:px-[5.31rem] xl:pb-[8.9375rem] xl:pt-[4.5rem]'>
      <div className='flex'>
        <h1 className='text-center text-[36px] font-bold text-black-200  dark:text-white-900'>
          What <span className='highlight'>service</span> do I provide
        </h1>
      </div>
      <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 xl:grid xl:grid-cols-4 xl:gap-[2.51rem]'>
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
      </div>
    </section>
  );
};

export default Services;
