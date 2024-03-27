'use client';

import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

const ContactMe = () => {
  return (
    <motion.div
      // variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      id='home'
      className=''
    >
      <motion.div variants={fadeIn('up', 'tween', 0.2, 1)} className=''>
        <section className='bg-white-900 py-20 dark:bg-gray-900 md:px-10'>
          <section className='md:padding-layout relative mx-5 flex flex-col items-center justify-center rounded-[20px] bg-orange-300 py-24 md:mx-0 md:w-full md:flex-row md:justify-between'>
            <Image
              src='/img/eclipse118.svg'
              alt='eclipse'
              width={168}
              height={362}
              className='absolute left-0 top-0 z-0'
            />
            <section className='mx-8 md:mx-20 md:max-w-[520px]'>
              <h2 className='text-[30px] font-bold text-gray-900 md:text-5xl'>
                Have a project in mind that requires technical expertise?
              </h2>
            </section>
            <section className=' mt-16 md:mr-20'>
              <Link href='/contact' className='z-50'>
                <button className='z-50 flex cursor-pointer flex-row items-center gap-2.5 rounded-full bg-blue-700 px-10 py-5  text-lg font-semibold text-white-900 transition-all hover:scale-105 dark:bg-blue-500 md:px-8'>
                  Get in Touch with Me
                  <Image
                    src='/icons/arrowsmall.svg'
                    alt='arrowlarge'
                    width={16}
                    height={0}
                  />
                </button>
              </Link>
            </section>
          </section>
        </section>
      </motion.div>
    </motion.div>
  );
};

export default ContactMe;
