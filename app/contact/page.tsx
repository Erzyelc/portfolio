import React from 'react';
import Sidebar from './Sidebar';
import Form from './Form';

const Contact = () => {
  return (
    <section>
      <section className='flex h-[350px] w-full flex-col items-center justify-center gap-8'>
        <h2 className='flex  gap-3 text-[42px] md:text-[64px]'>
          <div className='relative w-fit'>
            <div className='relative z-10'>Get in Touch</div>
            <div className='absolute bottom-0 z-0 h-5 w-full bg-accent' />
          </div>
        </h2>
        <p className='text-xl font-normal text-slate-500 dark:text-sky-50'>
          Lets Collaborate on Your Next Project
        </p>
      </section>
      <section className='bg-white-900 py-28 dark:bg-gray-900'>
        <section className='flex w-full flex-col-reverse justify-around gap-20 md:flex-row'>
          <section className=''>
            <Sidebar />
          </section>
          <section className='px-10 md:w-1/2 md:px-0'>
            <Form />
          </section>
        </section>
      </section>
    </section>
  );
};

export default Contact;
