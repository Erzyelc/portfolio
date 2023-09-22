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
    <section className='flex w-full items-center justify-center gap-10'>
      <section className=''>
        <Image src={image} alt='profile pic' height={328} width={328} />
      </section>
      <section className='flex w-1/2 flex-col gap-8'>
        <p className='text-2xl font-normal text-slate-500 dark:text-sky-50'>
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
