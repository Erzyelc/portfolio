import Image from 'next/image';
import React from 'react';

type Props = {
  image: string;
  title: string;
  description: string;
};

const ExperienceCard = ({ image, title, description }: Props) => {
  return (
    <section className='mt-[40px] flex w-full cursor-pointer items-center gap-5 rounded-[10px] border border-sky-50 bg-white-900 px-10 py-20 transition-all hover:scale-105 hover:shadow-lg dark:border-gray-900  dark:bg-gray-900 dark:hover:bg-gray-800 md:mt-0 md:w-[607px] md:px-5 md:py-8 md:hover:ml-10'>
      <section>
        <Image src={image} alt='skill' height={70} width={70} />
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
