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
};

const FeaturedCard = ({
  image,
  title,
  descriptionFE,
  descriptionBE,
  link,
  styles,
}: Props) => {
  return (
    <section className='padding-layout relative w-full'>
      <section className={styles}>
        <section className='flex w-1/2 flex-col justify-center gap-8  pl-20'>
          <h2 className='text-5xl font-bold text-white-900'>{title}</h2>
          <section className='flex w-full gap-5'>
            <button className='rounded-md bg-white-900/20 p-3 text-sm font-normal text-white-900 transition-all hover:scale-105'>
              {descriptionFE}
            </button>
            <button className='rounded-md bg-white-900/20 p-3 text-sm font-normal text-white-900 transition-all hover:scale-105'>
              {descriptionBE}
            </button>
          </section>
          <Link href='/'>
            <p className='flex flex-row items-center gap-2.5 text-lg font-semibold text-white-900'>
              {link}
              <Image
                src='./icons/arrowlarge.svg'
                width={35}
                height={0}
                alt='arrowlarge'
              />
            </p>
          </Link>
        </section>
        <section className='relative flex h-full w-1/2 justify-center '>
          <Image
            src='./img/laptop.svg'
            alt='laptop'
            width={564}
            height={330}
            className='relative'
          />
          <Image
            src={image}
            alt='laptop'
            width={460}
            height={0}
            className='absolute left-[125px] top-20 rounded-[8px]'
          />
        </section>
      </section>
    </section>
  );
};

export default FeaturedCard;
