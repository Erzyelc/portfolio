import Link from 'next/link';
import React from 'react';

import Instagram from '@/public/icons/instagram.svg';
import Linkedin from '@/public/icons/linkedin.svg';
import Github from '@/public/icons/github.svg';
import Phone from '@/public/icons/Call.svg';
import Email from '@/public/icons/Message.svg';

const Sidebar = () => {
  return (
    <section className='flex flex-col gap-20'>
      <section className='flex flex-col gap-6'>
        <h4 className='text-[20px] font-normal text-gray-800 dark:text-white-900 md:text-2xl'>
          My Socials
        </h4>
        <ul className='flex gap-8'>
          <li>
            <Link
              href='https://www.instagram.com/ryanjcarpenter/'
              target='_blank'
            >
              <Instagram
                height={24}
                width={24}
                className='fill-[#778295] hover:opacity-50 dark:fill-white-900'
                alt='instagram'
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
      <section className='flex flex-col gap-6'>
        <h4 className='text-[20px] font-normal text-gray-800 dark:text-white-900 md:text-2xl'>
          Phone Number
        </h4>
        <section className='flex items-center gap-3'>
          <Phone
            height={30}
            width={30}
            alt='phone'
            className='fill-[#778295] dark:fill-white-900'
          />
          <p className='text-[20px] font-semibold text-slate-500 dark:text-white-900 md:text-2xl'>
            (267) 670-6953
          </p>
        </section>
      </section>
      <section className='flex flex-col gap-6'>
        <h4 className='text-[20px] font-normal text-gray-800 dark:text-white-900 md:text-2xl'>
          Email Address
        </h4>
        <section className='flex items-center gap-3'>
          <Email
            height={30}
            width={30}
            alt='email'
            className='fill-[#778295] dark:fill-white-900'
          />
          <p className='text-[20px] font-semibold text-slate-500 dark:text-white-900 md:text-2xl'>
            ryanjcarpenter88@gmail.com
          </p>
        </section>
      </section>
    </section>
  );
};

export default Sidebar;
