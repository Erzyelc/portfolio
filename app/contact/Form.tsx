/* eslint-disable no-unused-vars */
'use client';
import React from 'react';
import { useForm } from '@formspree/react';

const Form = () => {
  const [state, handleSubmit, reset] = useForm('xdoqzzlq');
  if (state.succeeded) {
    return <div className=''>Thank you, I Will Reach Out Shortly!</div>;
  }
  return (
    <section className='w-full'>
      <form className='flex flex-col gap-12' onSubmit={handleSubmit}>
        <label
          htmlFor='name'
          className='flex flex-col gap-4 text-xl font-normal text-gray-800 dark:text-white-900'
        >
          Whats your name?
          <input
            type='text'
            id='name'
            name='name'
            className='relative line-clamp-1 h-20 rounded-[20px] border border-blue-200 bg-sky-50 pl-3 dark:border-slate-700 dark:bg-gray-800 md:pl-8'
          />
        </label>
        <label
          htmlFor='email'
          className='flex flex-col gap-4 text-xl font-normal text-gray-800 dark:text-white-900'
        >
          Whats your email?
          <input
            type='email'
            name='email'
            id='email'
            className='relative h-20 rounded-[20px] border border-blue-200 bg-sky-50 pl-3 dark:border-slate-700 dark:bg-gray-800 md:pl-8'
          />
        </label>
        <label
          htmlFor='goals'
          className='flex flex-col gap-4 text-xl font-normal text-gray-800 dark:text-white-900 '
        >
          Write something about your project goals and timeframe
          <input
            type='text'
            name='goals'
            id='goals'
            className='relative h-[190px] rounded-[20px] border border-blue-200 bg-sky-50 pl-3 dark:border-slate-700 dark:bg-gray-800 md:pl-8'
          />
        </label>
        <label
          htmlFor='contact'
          className='flex flex-col gap-4 text-xl font-normal text-gray-800 dark:text-white-900'
        >
          <div>
            How to reach back out to you?{' '}
            <span className='text-xl font-normal text-slate-500'>
              eg. phone number or email
            </span>
          </div>

          <input
            type='text'
            name='contact'
            id='contact'
            className='relative h-20  rounded-[20px] border border-blue-200 bg-sky-50 pl-3 dark:border-slate-700 dark:bg-gray-800 md:pl-8'
          />
        </label>
        <section className='flex md:justify-end '>
          <button
            className='w-full rounded-full bg-blue-700 px-16 py-5 text-lg font-semibold text-white-900 transition-all hover:scale-105 dark:bg-blue-500 md:w-fit'
            type='submit'
            disabled={state.submitting}
          >
            Send
          </button>
        </section>
      </form>
    </section>
  );
};

export default Form;

// import React from 'react';
// const Form = () => {
//   return (
//     <section className='w-full'>
//       <form className='flex flex-col gap-12'>
//         <label className='flex flex-col gap-4 text-xl font-normal text-gray-800 dark:text-white-900'>
//           Whats your name?
//           <input
//             type='text'
//             className='relative h-20  rounded-[20px] border border-blue-200 bg-sky-50 dark:border-slate-700 dark:bg-gray-800'
//           />
//         </label>
//         <label className='flex flex-col gap-4 text-xl font-normal text-gray-800 dark:text-white-900'>
//           Whats your email?
//           <input
//             type='text'
//             className='relative h-20 rounded-[20px] border border-blue-200 bg-sky-50 dark:border-slate-700 dark:bg-gray-800'
//           />
//         </label>
//         <label className='flex flex-col gap-4 text-xl font-normal text-gray-800 dark:text-white-900 '>
//           Write something about your project goals and timeframe
//           <input
//             type='text'
//             className='relative h-[190px] rounded-[20px] border border-blue-200 bg-sky-50 dark:border-slate-700 dark:bg-gray-800'
//           />
//         </label>
//         <label className='flex flex-col gap-4 text-xl font-normal text-gray-800 dark:text-white-900'>
//           <div>
//             How to reach back out to you?{' '}
//             <span className='text-xl font-normal text-slate-500'>
//               eg. phone number or email
//             </span>
//           </div>

//           <input
//             type='text'
//             className='relative h-20 rounded-[20px] border border-blue-200 bg-sky-50 dark:border-slate-700 dark:bg-gray-800'
//           />
//         </label>
//         <section className='flex md:justify-end '>
//           <button className='w-full rounded-full bg-blue-700 px-16 py-5 text-lg font-semibold text-white-900 transition-all hover:scale-105 dark:bg-blue-500 md:w-fit'>
//             Send
//           </button>
//         </section>
//       </form>
//     </section>
//   );
// };

// export default Form;
