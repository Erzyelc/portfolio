import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Props = {
  image: string;
  title: string;
  descriptionFE: string;
  descriptionBE: string;
  link: string;
  styles?: string;
  index?: number;
};

const FeaturedCard = ({
  image,
  title,
  descriptionFE,
  descriptionBE,
  link,
  styles,
  index,
}: Props) => {
  return (
    <section className='padding-layout relative w-full'>
      <section className={styles}>
        <div className='flex  flex-col items-center justify-start gap-10 p-10 md:flex-row '>
          <div className='flex flex-col gap-10'>
            <div>
              <h2 className='text-[32px] font-bold text-white-900 md:text-5xl'>
                {title}
              </h2>
            </div>
            <div className='flex gap-5'>
              <button className=' rounded-md bg-white-900/20 p-3 text-sm font-normal text-white-900 shadow-sm transition-all hover:scale-105'>
                {descriptionFE}
              </button>
              <button className=' rounded-md bg-white-900/20 p-3 text-sm font-normal text-white-900 shadow-sm transition-all hover:scale-105'>
                {descriptionBE}
              </button>
            </div>
            <Link href={link}>
              <p className='flex flex-row items-center gap-2.5 text-lg font-semibold text-white-900'>
                See Project Details
                <Image
                  src='./icons/arrowlarge.svg'
                  width={35}
                  height={0}
                  alt='arrowlarge'
                />
              </p>
            </Link>
          </div>
          <div className='transition-all hover:scale-105'>
            <Image
              src={image}
              alt='laptop'
              width={500}
              height={500}
              className='object-contain md:h-[800px] md:w-[800px] '
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default FeaturedCard;
