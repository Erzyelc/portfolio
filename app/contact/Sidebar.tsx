import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

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
              <Image
                src='./icons/instagram.svg'
                height={24}
                width={24}
                alt='instagram'
                className='hover:opacity-50'
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
                className='hover:opacity-50'
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
                className='hover:opacity-50'
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
                className='hover:opacity-50'
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
          <Image src='./icons/call.svg' alt='phone' width={30} height={30} />
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
          <Image src='./icons/message.svg' alt='phone' width={30} height={30} />
          <p className='text-2xl font-semibold text-slate-500 dark:text-white-900'>
            ryanjcarpenter88@gmail.com
          </p>
        </section>
      </section>
    </section>
  );
};

export default Sidebar;
