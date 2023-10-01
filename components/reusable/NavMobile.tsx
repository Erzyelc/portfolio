'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import ToggleTheme from './ToggleTheme';

import Menu from '@/public/icons/hamburger.svg';

const NavMobile = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen((isOpen) => !isOpen);
  return (
    <motion.div>
      <nav className='padding-layout flex h-[72px] items-center justify-between border-b border-white-800/50 bg-white-800 dark:border-gray-900/50 dark:bg-gray-800'>
        <Link href='/'>
          <Image src='/img/logo.svg' alt={'logo'} height={45} width={45} />
        </Link>
        <Menu
          alt={'menu'}
          height={24}
          width={24}
          className='cursor-pointer fill-black-0 dark:fill-white-900'
          onClick={toggle}
        />
      </nav>
      <AnimatePresence mode='sync'>
        {open && (
          <>
            <div className='fixed left-0 top-0 h-[100vh] w-full bg-stone-500/25 dark:bg-gray-900/60' />
            <motion.div
              className='absolute left-[15px] top-7 z-50 flex w-[93%] flex-col justify-around  rounded-[10px] bg-background-2 px-6 dark:bg-slate-800 sm:left-[17px] sm:w-[96%]'
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.3 }}
            >
              <section className=' z-40 flex w-full items-center justify-between pt-5'>
                <ToggleTheme />
                <Image
                  src='/icons/close.svg'
                  alt={'close'}
                  height={24}
                  width={24}
                  onClick={toggle}
                  className='cursor-pointer'
                />
              </section>
              <section className='h-1/2'>
                <ul className='flex h-full flex-col items-center justify-center py-8'>
                  <div className='flex h-full w-full flex-col justify-around '>
                    <li className='flex h-[50px] cursor-pointer items-center rounded pl-3 text-sm font-medium text-slate-500 hover:bg-blue-700 hover:text-white-900 dark:text-white-900'>
                      <Link href='/'>Home</Link>
                    </li>
                    <li className='flex h-[50px] cursor-pointer items-center rounded pl-3 text-sm font-medium text-slate-500 hover:bg-blue-700 hover:text-white-900 dark:text-white-900'>
                      <Link href='/'>Case Studies</Link>
                    </li>
                    <li className='flex h-[50px] cursor-pointer items-center rounded pl-3 text-sm font-medium text-slate-500 hover:bg-blue-700 hover:text-white-900 dark:text-white-900'>
                      <Link href='/'>Contact</Link>
                    </li>
                    <li className='flex h-[50px] cursor-pointer items-center rounded pl-3 text-sm font-medium text-slate-500 hover:bg-blue-700 hover:text-white-900 dark:text-white-900'>
                      <Link
                        href='https://docs.google.com/document/d/1VKJPgTiRczl6vK74tBNGTJ145L_yEcWp8xgYG8C3_40/edit?usp=sharing'
                        target='_blank'
                      >
                        Resume
                      </Link>
                    </li>
                  </div>
                </ul>
              </section>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NavMobile;
