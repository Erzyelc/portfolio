import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  link: string;
  title: string;
  description: string;
  img: string;
  styles?: string;
};

const CaseStudyCard = ({ link, title, description, img, styles }: Props) => {
  return (
    <Link href='#'>
      <section className='flex max-w-[550px] cursor-pointer flex-row flex-wrap transition-all hover:scale-105'>
        <Link href={link}>
          <section className={styles}>
            <Image src={img} alt='case study image' width={436} height={258} />
          </section>
          <section className='flex flex-col gap-2 rounded-b-[20px] bg-white-900 py-6  pl-10 shadow-md md:pl-20'>
            <h3 className='text-[20px] font-semibold text-gray-900 dark:text-white-900 md:text-[32px]'>
              {title}
            </h3>
            <p className='text-xs font-normal text-slate-500 dark:text-slate-500 md:text-xl'>
              {description}
            </p>
          </section>
        </Link>
      </section>
    </Link>
  );
};

export default CaseStudyCard;
