import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  title: string;
  description: string;
  img: string;
  jobImage: string;
  styles?: string;
};

const CaseStudyCard = ({
  title,
  description,
  img,
  jobImage,
  styles,
}: Props) => {
  return (
    <Link href='/caseStudies'>
      <section className='flex max-w-[550px] cursor-pointer flex-row flex-wrap gap-8 transition-all hover:scale-105'>
        <section className={styles}>
          <Image src={img} alt='case study image' width={436} height={258} />
          <Image
            src={jobImage}
            alt='case study image'
            width={318}
            height={0}
            className='absolute bottom-8 right-[115px]'
          />
        </section>
        <section className=' flex flex-col gap-3 pl-20'>
          <h3 className='text-[32px] font-semibold text-gray-900 dark:text-white-900'>
            {title}
          </h3>
          <p className='text-xl font-normal text-slate-500 dark:text-slate-500'>
            {description}
          </p>
        </section>
      </section>
    </Link>
  );
};

export default CaseStudyCard;
