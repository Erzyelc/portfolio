'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import ToggleTheme from './ToggleTheme';
import Share from '@/public/icons/share.svg';
import { usePathname } from 'next/navigation';

const NavDesktop = () => {
  const currentRoute = usePathname();
  return (
    <nav className='flex h-[80px] w-full justify-between border-b border-white-800/50 bg-white-800 dark:border-gray-900/50 dark:bg-gray-800'>
      <ul className='padding-layout flex w-full cursor-pointer flex-row items-center justify-between'>
        <Link href='/'>
          <Image src={'/img/logo.svg'} alt={'logo'} height={45} width={45} />
        </Link>
        <section className='flex items-center justify-between gap-9'>
          <li className='text-sm font-normal leading-snug text-slate-500 hover:text-blue-700 dark:text-sky-50'>
            <Link
              href='/'
              className={
                currentRoute === '/' ? 'text-blue-700 dark:text-blue-500' : ''
              }
            >
              Home
            </Link>
          </li>
          <li className='text-sm font-normal leading-snug text-slate-500  hover:text-blue-700 dark:text-sky-50'>
            <Link
              href='/caseStudies'
              className={
                currentRoute === '/caseStudies'
                  ? 'text-blue-700 dark:text-blue-500'
                  : ''
              }
            >
              Case Studies
            </Link>
          </li>
          <li className='text-sm font-normal leading-snug text-slate-500  hover:text-blue-700 dark:text-sky-50'>
            <Link
              href='/contact'
              className={
                currentRoute === '/contact'
                  ? 'text-blue-700 dark:text-blue-500'
                  : ''
              }
            >
              Contact
            </Link>
          </li>
          <li className='text-sm font-normal leading-snug text-gray-900 dark:text-white-900'>
            <Link
              href='https://docs.google.com/document/d/1VKJPgTiRczl6vK74tBNGTJ145L_yEcWp8xgYG8C3_40/edit?usp=sharing'
              target='_blank'
              className='flex items-center gap-1'
            >
              <Share
                height={20}
                width={20}
                alt={'download'}
                className='fill-gray-900 dark:fill-white-900'
              />
              Resume
            </Link>
          </li>
          <Image
            src={'/icons/line.svg'}
            height={36}
            width={2}
            alt={'line'}
            className='h-auto'
          />
          <ToggleTheme />
        </section>
      </ul>
    </nav>
  );
};

export default NavDesktop;
