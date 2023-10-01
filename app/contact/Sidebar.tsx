import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

import Instagram from '@/public/icons/instagram.svg';
import X from '@/public/icons/x.svg';
import Linkedin from '@/public/icons/linkedin.svg';
import Github from '@/public/icons/github.svg';
import Phone from '@/public/icons/call.svg';
import Email from '@/public/icons/message.svg';

const Sidebar = () => {
  return (
    <section className='flex flex-col gap-20'>
      <section className='flex flex-col gap-6'>
        <h4 className='text-2xl font-normal text-gray-800 dark:text-white-900'>
          My Socials
        </h4>
        <ul className='flex gap-8'>
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
      <section className='flex flex-col gap-6'>
        <h4 className='text-2xl font-normal text-gray-800 dark:text-white-900'>
          Phone Number
        </h4>
        <section className='flex items-center gap-3'>
          <Phone
            height={30}
            width={30}
            alt='phone'
            className='fill-[#778295] dark:fill-white-900'
          />
          <p className='text-2xl font-semibold text-slate-500 dark:text-white-900'>
            (267) 670-6953
          </p>
        </section>
      </section>
      <section className='flex flex-col gap-6'>
        <h4 className='text-2xl font-normal text-gray-800 dark:text-white-900'>
          Email Address
        </h4>
        <section className='flex items-center gap-3'>
          <Email
            height={30}
            width={30}
            alt='email'
            className='fill-[#778295] dark:fill-white-900'
          />
          <p className='text-2xl font-semibold text-slate-500 dark:text-white-900'>
            ryanjcarpenter88@gmail.com
          </p>
        </section>
      </section>
    </section>
  );
};

export default Sidebar;
