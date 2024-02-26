import Link from 'next/link';
import React from 'react';
import Instagram from '@/public/icons/instagram.svg';
import Linkedin from '@/public/icons/linkedin.svg';
import Github from '@/public/icons/github.svg';

const Footer = () => {
  return (
    <section className='bg-white-900 dark:bg-gray-900'>
      <section className='padding-layout flex w-full items-center justify-between  p-10'>
        <p className='text-lg font-normal text-slate-500 dark:text-sky-50'>
          © 2024 Ryan. Made with ❤️
        </p>
        <ul className='flex gap-5 '>
          <li>
            <Link
              href='https://www.instagram.com/ryanjcarpenter/'
              target='_blank'
            >
              <Instagram
                height={24}
                width={24}
                className='fill-[#778295] hover:opacity-50 dark:fill-white-900'
                alt='Instagram'
              />
            </Link>
          </li>
          <li>
            <Link
              href='https://www.linkedin.com/in/ryanjcarpenter'
              target='_blank'
            >
              <Linkedin
                height={24}
                width={24}
                className='fill-[#778295] hover:opacity-50 dark:fill-white-900'
                alt='Linkedin'
              />
            </Link>
          </li>
          <li>
            <Link href='https://github.com/Erzyelc' target='_blank'>
              <Github
                height={24}
                width={24}
                className='fill-[#778295] hover:opacity-50 dark:fill-white-900'
                alt='Github'
              />
            </Link>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default Footer;
