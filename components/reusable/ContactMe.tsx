import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const ContactMe = () => {
  return (
    <section className='bg-white-900 py-20 dark:bg-gray-900'>
      <section className='padding-layout relative flex w-full items-center justify-between rounded-[20px] bg-orange-300 py-24'>
        <Image
          src='./img/eclipse118.svg'
          alt='eclipse'
          width={168}
          height={362}
          className='absolute left-0 top-0'
        />
        <section className='mx-20 max-w-[520px]'>
          <h2 className='text-5xl font-bold text-gray-900'>
            Have a project in mind that requires technical expertise?
          </h2>
        </section>
        <section className=' mr-20 mt-16'>
          <Link href='/contact' className='z-50'>
            <button className='z-50 flex cursor-pointer flex-row items-center gap-2.5 rounded-full bg-blue-700 px-8  py-5 text-lg font-semibold text-white-900 transition-all hover:scale-105 dark:bg-blue-500'>
              Get in Touch with Me
              <Image
                src='./icons/arrowsmall.svg'
                alt='arrowlarge'
                width={16}
                height={0}
              />
            </button>
          </Link>
        </section>
      </section>
    </section>
  );
};

export default ContactMe;
