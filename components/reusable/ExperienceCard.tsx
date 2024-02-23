import Image from 'next/image';
import React from 'react';

type Props = {
  image: string;
  title: string;
  description: string;
};

const ExperienceCard = ({ image, title, description }: Props) => {
  return (
    // px-8 py-16 w-full items-start
    <section className='mt-[40px] flex h-[210px] w-[345px] cursor-pointer flex-col justify-center gap-5 rounded-[10px] border border-sky-50 bg-white-900 px-8 transition-all  hover:scale-105 hover:border-none hover:shadow-lg dark:border-none dark:border-gray-900 dark:bg-black-200 dark:hover:bg-black-300 md:mt-0 md:h-[122px] md:w-[607px] md:flex-row md:items-center md:justify-start md:px-6 md:hover:ml-10'>
      <section>
        <Image
          src={image}
          alt='skill'
          height={20}
          width={50}
          className='md:h-[70px] md:w-[70px]'
        />
      </section>
      <div className='flex flex-col gap-[0.56rem]'>
        <h3 className='line-clamp-1 text-2xl font-semibold text-gray-900 dark:text-white-900'>
          {title}
        </h3>
        <p className='line-clamp-1 text-sm font-normal text-slate-500 dark:text-sky-50'>
          {description}
        </p>
      </div>
    </section>
  );
};

export default ExperienceCard;
