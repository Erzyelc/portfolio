/* eslint-disable tailwindcss/no-custom-classname */
import React from 'react';
import Link from 'next/link';
import { FaExclamationTriangle } from 'react-icons/fa';

const NotFoundPage = () => {
  return (
    <section className='h-screen grow  bg-background-2 dark:bg-gray-800'>
      <div className='container mx-auto mt-[200px] max-w-2xl py-24'>
        <div className='m-4 rounded-md border bg-white-800 px-6 py-24 shadow-lg md:m-0'>
          <div className='flex justify-center'>
            <FaExclamationTriangle className='fa fa-exclamation-triangle fa-5x text-8xl text-yellow-400' />
          </div>
          <div className='text-center'>
            <h1 className='text-black-800 mb-2 mt-4 text-3xl font-bold'>
              Page Not Found
            </h1>
            <p className='mb-10 text-xl text-gray-500'>
              The page you are looking for does not exist.
            </p>
            <Link
              href='/'
              className='rounded bg-blue-700 px-6 py-4 font-bold text-white-800 hover:bg-blue-800'
            >
              Go Home
            </Link>
          </div>
        </div>
      </div>
      <div className='grow'></div>
    </section>
  );
};

export default NotFoundPage;
