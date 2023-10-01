import Link from 'next/link';
import React from 'react';
import Instagram from '@/public/icons/instagram.svg';
import X from '@/public/icons/x.svg';
import Linkedin from '@/public/icons/linkedin.svg';
import Github from '@/public/icons/github.svg';

const Footer = () => {
  return (
    <section className='bg-white-900 dark:bg-gray-900'>
      <section className='padding-layout flex w-full items-center justify-between  p-10'>
        <p className='text-lg font-normal text-slate-500 dark:text-sky-50'>
          © 2023 Ryan. All rights reserved.
        </p>
        <ul className='flex gap-5 '>
          <li>
            <Link href=''>
              <Instagram
                height={24}
                width={24}
                className='fill-[#778295] hover:opacity-50 dark:fill-white-900'
                alt='instagram'
              />
            </Link>
          </li>
          <li>
            <Link href=''>
              <X
                height={24}
                width={24}
                className=' hover:opacity-50 '
                alt='instagram'
              />
            </Link>
          </li>
          <li>
            <Link href=''>
              <Linkedin
                height={24}
                width={24}
                className='fill-[#778295] hover:opacity-50 dark:fill-white-900'
                alt='instagram'
              />
            </Link>
          </li>
          <li>
            <Link href=''>
              <Github
                height={24}
                width={24}
                className='fill-[#778295] hover:opacity-50 dark:fill-white-900'
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
