import React from 'react';

const Form = () => {
  return (
    <section className='w-full'>
      <form className='flex flex-col gap-12'>
        <label className='flex flex-col gap-4 text-xl font-normal text-gray-800 dark:text-white-900'>
          Whats your name?
          <input
            type='text'
            className='relative h-20  rounded-[20px] border border-blue-200 bg-sky-50 dark:border-slate-700 dark:bg-gray-800'
          />
        </label>
        <label className='flex flex-col gap-4 text-xl font-normal text-gray-800 dark:text-white-900'>
          Whats your email?
          <input
            type='text'
            className='relative h-20 rounded-[20px] border border-blue-200 bg-sky-50 dark:border-slate-700 dark:bg-gray-800'
          />
        </label>
        <label className='flex flex-col gap-4 text-xl font-normal text-gray-800 dark:text-white-900 '>
          Write something about your project goals and timeframe
          <input
            type='text'
            className='relative h-[190px] rounded-[20px] border border-blue-200 bg-sky-50 dark:border-slate-700 dark:bg-gray-800'
          />
        </label>
        <label className='flex flex-col gap-4 text-xl font-normal text-gray-800 dark:text-white-900'>
          <div>
            How to reach back out to you?{' '}
            <span className='text-xl font-normal text-slate-500'>
              eg. phone number or email
            </span>
          </div>

          <input
            type='text'
            className='relative h-20 rounded-[20px] border border-blue-200 bg-sky-50 dark:border-slate-700 dark:bg-gray-800'
          />
        </label>
        <section className='flex md:justify-end '>
          <button className='w-full rounded-full bg-blue-700 px-16 py-5 text-lg font-semibold text-white-900 transition-all hover:scale-105 dark:bg-blue-500 md:w-fit'>
            Send
          </button>
        </section>
      </form>
    </section>
  );
};

export default Form;
