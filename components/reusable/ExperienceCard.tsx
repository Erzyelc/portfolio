import Image from 'next/image';
import React from 'react';

type Props = {
  image: string;
  title: string;
  description: string;
};

const ExperienceCard = ({ image, title, description }: Props) => {
  return (
    // <section className='flex w-full max-w-[607px] cursor-pointer items-center gap-5 rounded-[10px] border border-sky-50 bg-white-900 px-5 py-8  transition-all hover:ml-10 hover:scale-105 hover:shadow-lg dark:border-gray-900 dark:bg-gray-900 dark:hover:bg-gray-800'>
    //   <section>
    //     <Image src={image} alt='skill' height={70} width={70} />
    //   </section>
    //   <section>
    //     <h3 className='text-2xl font-semibold text-gray-900 dark:text-white-900'>
    //       {title}
    //     </h3>
    //     <p className='text-sm font-normal text-slate-500 dark:text-sky-50'>
    //       {description}
    //     </p>
    //   </section>
    // </section>
    <section className='flex w-full max-w-[607px] cursor-pointer items-center gap-5 rounded-[10px] border border-sky-50 bg-white-900 px-5 py-8  transition-all hover:ml-10 hover:scale-105 hover:shadow-lg dark:border-gray-900 dark:bg-gray-900 dark:hover:bg-gray-800'>
      <section>
        <Image src={image} alt='skill' height={70} width={70} />
      </section>
      <div className='flex flex-col gap-[0.56rem]'>
        <h3 className='line-clamp-1 text-2xl font-semibold text-gray-900 dark:text-white-900'>
          {title}
        </h3>
        <p className='text-sm font-normal text-slate-500 dark:text-sky-50'>
          {description}
        </p>
      </div>
    </section>
  );
};

export default ExperienceCard;
