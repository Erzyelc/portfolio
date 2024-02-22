import React from 'react';
import Image from 'next/image';

type Props = {
  image: string;
  name: string;
  testimony: string;
  description: string;
};

const TestimonyCard = ({ image, name, testimony, description }: Props) => {
  return (
    <section className='flex w-full flex-col gap-16 md:flex-row md:items-center md:justify-center md:gap-10'>
      <section className=''>
        <Image
          src={image}
          alt='profile pic'
          height={200}
          width={200}
          className='md:h-[328px] md:w-[328px]'
        />
      </section>
      <section className=' flex w-full  flex-col justify-center gap-8 md:w-1/2'>
        <p className=' text-justify text-lg font-normal text-slate-500 dark:text-sky-50 md:text-2xl'>
          {testimony}
        </p>
        <section className='flex flex-col gap-1'>
          <h3 className='text-lg font-semibold text-gray-800 dark:text-white-900'>
            - {name}
          </h3>
          <p className='text-lg font-normal text-slate-500 dark:text-sky-50'>
            {description}
          </p>
        </section>
      </section>
    </section>
  );
};

export default TestimonyCard;
