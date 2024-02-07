import Image from 'next/image';
import React from 'react';

const Process = () => {
  return (
    <section className='flex flex-col flex-wrap items-center justify-center bg-white-900 py-24 dark:bg-gray-900'>
      <section className='flex max-w-[878px] flex-wrap items-center justify-between gap-12 px-10 md:px-0'>
        <section className='flex w-full flex-col gap-16'>
          <section className='flex flex-col gap-3'>
            <p className='text-xs font-semibold text-blue-700 dark:text-blue-500 md:text-sm'>
              Way of work
            </p>
            <h2 className='text-[28px] font-semibold text-gray-900 dark:text-white-900 md:text-[32px]'>
              My Process
            </h2>
          </section>
          {/* flex flex-col gap-20 md:flex-row */}
          <section className='grid grid-cols-3 gap-16 md:flex  md:flex-wrap md:justify-center lg:gap-[4rem] xl:gap-x-[2.8916rem] xl:gap-y-[4.13rem]'>
            <section className='flex flex-col items-center justify-center gap-8'>
              <section className='flex h-[70px] w-[70px] cursor-pointer flex-col items-center justify-center rounded-full bg-sky-50 transition-all hover:scale-110  hover:bg-white-900 hover:drop-shadow-md  dark:bg-gray-800 hover:dark:bg-gray-800   md:h-[100px] md:w-[100px]'>
                <Image
                  src='/icons/pencil.svg'
                  alt='skill'
                  height={36}
                  width={36}
                  className='md:h-[50px] md:w-[50px]'
                />
              </section>
              <section>
                <h3 className='text-center text-sm font-semibold text-gray-800 dark:text-white-900 md:text-xl'>
                  Definition
                </h3>
              </section>
            </section>

            <section className='flex flex-col items-center justify-center gap-8'>
              <section className='flex h-[70px] w-[70px] cursor-pointer flex-col items-center justify-center rounded-full bg-sky-50 transition-all hover:scale-110  hover:bg-white-900 hover:drop-shadow-md  dark:bg-gray-800 hover:dark:bg-gray-800   md:h-[100px] md:w-[100px]'>
                <Image
                  src='/icons/portrait.svg'
                  alt='skill'
                  height={36}
                  width={36}
                  className='md:h-[50px] md:w-[50px]'
                />
              </section>
              <section>
                <h3 className='text-center text-sm font-semibold text-gray-800 dark:text-white-900 md:text-xl'>
                  Design
                </h3>
              </section>
            </section>
            <section className='flex flex-col items-center justify-center gap-8'>
              <section className='flex h-[70px] w-[70px] cursor-pointer flex-col items-center justify-center rounded-full bg-sky-50 transition-all hover:scale-110  hover:bg-white-900 hover:drop-shadow-md  dark:bg-gray-800 hover:dark:bg-gray-800   md:h-[100px] md:w-[100px]'>
                <Image
                  src='/icons/plan.svg'
                  alt='skill'
                  height={36}
                  width={36}
                  className='md:h-[50px] md:w-[50px]'
                />
              </section>
              <section>
                <h3 className='text-center text-sm font-semibold text-gray-800 dark:text-white-900 md:text-xl'>
                  Planning
                </h3>
              </section>
            </section>
            <section className='flex flex-col items-center justify-center gap-8'>
              <section className='flex h-[70px] w-[70px] cursor-pointer flex-col items-center justify-center rounded-full bg-sky-50 transition-all hover:scale-110  hover:bg-white-900 hover:drop-shadow-md  dark:bg-gray-800 hover:dark:bg-gray-800   md:h-[100px] md:w-[100px]'>
                <Image
                  src='/icons/dev.svg'
                  alt='skill'
                  height={36}
                  width={36}
                  className='md:h-[50px] md:w-[50px]'
                />
              </section>
              <section>
                <h3 className='text-center text-sm font-semibold text-gray-800 dark:text-white-900 md:text-xl'>
                  Development
                </h3>
              </section>
            </section>
            <section className='flex flex-col items-center justify-center gap-8'>
              <section className='flex h-[70px] w-[70px] cursor-pointer flex-col items-center justify-center rounded-full bg-sky-50 transition-all hover:scale-110  hover:bg-white-900 hover:drop-shadow-md  dark:bg-gray-800 hover:dark:bg-gray-800   md:h-[100px] md:w-[100px]'>
                <Image
                  src='/icons/deploy.svg'
                  alt='skill'
                  height={36}
                  width={36}
                  className='md:h-[50px] md:w-[50px]'
                />
              </section>
              <section>
                <h3 className='text-center text-sm font-semibold text-gray-800 dark:text-white-900 md:text-xl'>
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
