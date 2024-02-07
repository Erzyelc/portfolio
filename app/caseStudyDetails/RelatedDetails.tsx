import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  link: string;
  image: string;
  title: string;
  description: string;
};

const RelatedDetails = ({ link, image, title, description }: Props) => {
  return (
    <section>
      <section className=' h-[385px] w-[345px] rounded-[10px] bg-white-900 shadow-lg dark:bg-gray-900 md:h-[481px] md:w-[430px]'>
        <Image
          src={image}
          alt={title}
          width={429}
          height={230}
          className='rounded-t-[10px]'
        />
        <section className='flex flex-col justify-center gap-8 rounded-[10px] bg-white-900 px-6 py-10 dark:bg-gray-900'>
          <section className='flex flex-col gap-4'>
            <h3 className='text-[20px] font-semibold text-blue-700 dark:text-blue-500 md:text-2xl'>
              {title}
            </h3>
            <p className='text-sm font-normal text-slate-500 dark:text-sky-50 md:text-lg'>
              {description}
            </p>
          </section>
          <Link href={link}>
            <button className='flex w-full cursor-pointer flex-row  items-center justify-center gap-2.5 rounded-full bg-blue-700 px-5 py-4 text-sm font-semibold text-white-900 transition-all hover:scale-105 dark:bg-blue-500'>
              See Case Study
            </button>
          </Link>
        </section>
      </section>
    </section>
  );
};

export default RelatedDetails;
