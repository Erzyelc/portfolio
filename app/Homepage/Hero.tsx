'use client';

import Image from 'next/image';
import { useCallback } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import tick from '@/public/icons/tick.svg';
// import frame from '@/public/icons/frame.svg';

const Hero = () => {
  // const [showTick, setShowTick] = useState(false);
  const copySuccess = () => toast.success('Email copied to clipboard');
  const copyFailure = () => toast.error('Unable to copy to clipboard');

  const handleCopyToClipboard = useCallback(() => {
    navigator.clipboard
      .writeText('ryanjcarpenter88@gmail.com')
      .then(() => {
        copySuccess();
        // setShowTick(true);
        // setTimeout(() => {
        //   setShowTick(false);
        // }, 3000);
        console.log('success');
      })
      .catch(() => {
        copyFailure();
      });
  }, []);

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
        <section className='md:padding-layout mb-10 flex h-screen flex-col items-center  md:mb-20 md:h-[600px] md:w-full md:flex-row'>
          <section className='flex w-[330px] flex-col gap-5 pt-16 md:w-1/2 md:gap-8 md:pt-14'>
            <h3 className='text-sm font-semibold uppercase text-blue-700 dark:text-blue-500 md:text-xl'>
              Hi, I am Ryan
            </h3>
            <h1 className=' text-[42px] font-bold text-gray-900 dark:text-white-900 md:text-[64px]'>
              Professional <br></br>
              <div className='relative w-fit'>
                <div className='relative z-10'>Web Developer</div>
                <div className='absolute bottom-0.5 z-0 h-6 w-full bg-gradient-to-b from-[#3536BB] to-[#35C9E280]' />
              </div>
              based in USA
            </h1>
            <p className='w-[338px] text-xs font-normal leading-[18.60px] text-slate-500 dark:text-sky-50 md:w-[511px] md:text-lg'>
              Transforming the web one line of code at a time: Crafting
              cutting-edge digital experiences with precision, passion, and a
              profound commitment to excellence
            </p>
            <div className='flex flex-col items-center gap-5 md:flex-row md:gap-8 '>
              {/* <button className='w-full rounded-full bg-blue-700 py-3 text-base font-semibold text-white-900 transition-all hover:scale-105 dark:bg-blue-500 md:w-fit md:px-12 md:py-5 md:text-lg'>
            <Link href='/caseStudies'>My Work</Link>
          </button> */}
              <button className='w-full rounded-full bg-gradient-to-b from-[#3536BB] to-[#35C9E280]  py-3 text-base font-semibold text-white-900 transition-all hover:scale-105 dark:bg-gradient-to-b dark:from-[#35C9E280] dark:to-[#3536BB] md:w-fit md:px-10 md:text-[18px] lg:py-5'>
                <Link href='/caseStudies' className=''>
                  My Work
                </Link>
              </button>
              {/* <div className='flex w-full md:w-fit'>
                <button className='flex w-full flex-row  justify-between gap-5 rounded-full bg-white-900 px-6 py-5  transition-all hover:scale-105 dark:bg-gray-900 dark:text-white-900 md:items-center md:text-lg'>
                  <p className='text-sm font-semibold text-slate-500'>
                    ryanjcarpenter88@gmail.com
                  </p>
                  <Image
                    src='./icons/frame.svg'
                    // src={showTick ? tick : frame}
                    alt='click to copy email'
                    height={21}
                    width={21}
                    onClick={handleCopyToClipboard}
                  />
                </button>
              </div> */}
              <div className='flex w-full flex-row justify-between  gap-5 rounded-full bg-white-900 px-6 py-5 transition-all  hover:scale-105 dark:bg-gray-900 dark:text-white-900 md:w-fit md:items-center md:text-lg'>
                <p className='text-sm font-semibold text-slate-500'>
                  ryanjcarpenter88@gmail.com
                </p>
                <button onClick={handleCopyToClipboard}>
                  <Image
                    src='./icons/frame.svg'
                    // src={showTick ? tick : frame}
                    alt='click to copy email'
                    height={21}
                    width={21}
                  />
                </button>
              </div>
            </div>
          </section>
          <section className='relative hidden h-[350px] w-1/2 items-center justify-center md:flex md:h-[550px]'>
            <Image
              src='./img/computer.svg'
              alt={'computer'}
              height={700}
              width={700}
              // fill
              // priority
              className='object-contain'
            />
          </section>

          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 384 512'
            className=' mt-20 h-10 w-10 animate-bounce dark:fill-white-800 sm:hidden'
          >
            <path d='M169.4 502.6c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 402.7 224 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 370.7L86.6 329.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128z' />
          </svg>
        </section>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
