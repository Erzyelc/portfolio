import React from 'react';
import Image from 'next/image';

type Props = {
  description: string;
  image: string;
};

const ProblemStatement = ({ description, image }: Props) => {
  return (
    <section className='flex flex-col flex-wrap items-center justify-center bg-white-900 py-20 dark:bg-gray-900'>
      <section className='flex max-w-[878px] flex-wrap items-center justify-between gap-12'>
        <section className='flex w-full flex-col gap-8'>
          <section className='flex flex-col gap-3'>
            <p className='text-sm font-semibold text-blue-700 dark:text-blue-500'>
              Problem
            </p>
            <h2 className='text-[32px] font-semibold text-gray-900 dark:text-white-900'>
              Problem Statement
            </h2>
          </section>

          <p className='text-xl font-normal text-slate-500 dark:text-sky-50'>
            {description}
          </p>
        </section>
        <Image
          src={image}
          alt='problem image'
          height={880}
          width={880}
          className='rounded-[10px]'
        />
      </section>
    </section>
  );
};

export default ProblemStatement;
