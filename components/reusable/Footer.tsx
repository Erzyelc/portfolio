import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <section className='bg-white-900 dark:bg-gray-900'>
      <section className='padding-layout flex w-full items-center justify-between  p-10'>
        <p className='text-lg font-normal text-slate-500 dark:text-sky-50'>
          © 2023 Adrian. All rights reserved.
        </p>
        <ul className='flex gap-5 '>
          <li>
            <Link href=''>
              <Image
                src='./icons/instagram.svg'
                height={24}
                width={24}
                alt='instagram'
              />
            </Link>
          </li>
          <li>
            <Link href=''>
              <Image
                src='./icons/x.svg'
                height={24}
                width={24}
                alt='instagram'
              />
            </Link>
          </li>
          <li>
            <Link href=''>
              <Image
                src='./icons/linkedin.svg'
                height={24}
                width={24}
                alt='instagram'
              />
            </Link>
          </li>
          <li>
            <Link href=''>
              <Image
                src='./icons/github.svg'
                height={24}
                width={24}
                alt='instagram'
              />
            </Link>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Footer;
