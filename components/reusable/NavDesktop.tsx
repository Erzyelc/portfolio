import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import ToggleTheme from '../ToggleTheme';

const NavDesktop = () => {
  return (
    <nav className='flex h-[80px] w-full justify-between'>
      <ul className='padding-layout flex w-full flex-row items-center justify-between'>
        <Link href='/'>
          <Image src={'/img/logo.svg'} alt={'logo'} height={45} width={45} />
        </Link>
        <section className='flex items-center justify-between gap-9'>
          <li className='text-sm font-normal leading-snug text-slate-500 hover:leading-tight hover:text-blue-700 dark:text-sky-50'>
            <Link href='/'>Home</Link>
          </li>
          <li className='text-sm font-normal leading-snug text-slate-500  hover:leading-tight hover:text-blue-700 dark:text-sky-50'>
            <Link href='/casestudies'>Case Studies</Link>
          </li>
          <li className='text-sm font-normal leading-snug text-slate-500 hover:leading-tight hover:text-blue-700 dark:text-sky-50'>
            <Link href='/contact'>Contact</Link>
          </li>
          <li className='text-sm font-normal leading-snug text-gray-900 dark:text-white-900'>
            <Link href='/resume'>Resume</Link>
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
