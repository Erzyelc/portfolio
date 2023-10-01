import Image from 'next/image';
import React from 'react';

const Process = () => {
  return (
    <section className='flex flex-col flex-wrap items-center justify-center bg-white-900 py-24 dark:bg-gray-900'>
      <section className='flex max-w-[878px] flex-wrap items-center justify-between gap-12'>
        <section className='flex w-full flex-col gap-16'>
          <section className='flex flex-col gap-3'>
            <p className='text-sm font-semibold text-blue-700 dark:text-blue-500'>
              Way of work
            </p>
            <h2 className='text-[32px] font-semibold text-gray-900 dark:text-white-900'>
              My Process
            </h2>
          </section>
          <section className='flex gap-20'>
            <section className='flex flex-col items-center justify-center gap-8'>
              <section className='flex h-[100px] w-[100px] cursor-pointer flex-col items-center justify-center rounded-full bg-sky-50  transition-all hover:scale-110  hover:bg-white-900 hover:drop-shadow-md   dark:bg-gray-800 hover:dark:bg-gray-800'>
                <Image
                  src='/icons/pencil.svg'
                  alt='skill'
                  height={50}
                  width={50}
                  className=''
                />
              </section>
              <section>
                <h3 className='text-center text-xl font-semibold text-gray-800 dark:text-white-900'>
                  Definition
                </h3>
              </section>
            </section>

            <section className='flex flex-col items-center justify-center gap-8'>
              <section className='flex h-[100px] w-[100px] cursor-pointer flex-col items-center justify-center rounded-full bg-sky-50  transition-all hover:scale-110  hover:bg-white-900 hover:drop-shadow-md   dark:bg-gray-800 hover:dark:bg-gray-800'>
                <Image
                  src='/icons/portrait.svg'
                  alt='skill'
                  height={50}
                  width={50}
                  className=''
                />
              </section>
              <section>
                <h3 className='text-center text-xl font-semibold text-gray-800 dark:text-white-900'>
                  Design
                </h3>
              </section>
            </section>
            <section className='flex flex-col items-center justify-center gap-8'>
              <section className='flex h-[100px] w-[100px] cursor-pointer flex-col items-center justify-center rounded-full bg-sky-50  transition-all hover:scale-110  hover:bg-white-900 hover:drop-shadow-md   dark:bg-gray-800 hover:dark:bg-gray-800'>
                <Image
                  src='/icons/plan.svg'
                  alt='skill'
                  height={50}
                  width={50}
                  className=''
                />
              </section>
              <section>
                <h3 className='text-center text-xl font-semibold text-gray-800 dark:text-white-900'>
                  Planning
                </h3>
              </section>
            </section>
            <section className='flex flex-col items-center justify-center gap-8'>
              <section className='flex h-[100px] w-[100px] cursor-pointer flex-col items-center justify-center rounded-full bg-sky-50  transition-all hover:scale-110  hover:bg-white-900 hover:drop-shadow-md   dark:bg-gray-800 hover:dark:bg-gray-800'>
                <Image
                  src='/icons/dev.svg'
                  alt='skill'
                  height={50}
                  width={50}
                  className=''
                />
              </section>
              <section>
                <h3 className='text-center text-xl font-semibold text-gray-800 dark:text-white-900'>
                  Development
                </h3>
              </section>
            </section>
            <section className='flex flex-col items-center justify-center gap-8'>
              <section className='flex h-[100px] w-[100px] cursor-pointer flex-col items-center justify-center rounded-full bg-sky-50  transition-all hover:scale-110  hover:bg-white-900 hover:drop-shadow-md   dark:bg-gray-800 hover:dark:bg-gray-800'>
                <Image
                  src='/icons/deploy.svg'
                  alt='skill'
                  height={50}
                  width={50}
                  className=''
                />
              </section>
              <section>
                <h3 className='text-center text-xl font-semibold text-gray-800 dark:text-white-900'>
                  Deployment
                </h3>
              </section>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Process;
