'use client';

import ExperienceCard from '../../components/reusable/ExperienceCard';
import Line from '@/public/img/line.svg';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

const Experience = () => {
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
        <section className=' bg-white-900 dark:bg-black-200'>
          <div
            className='flex flex-col justify-around px-6 py-12 md:px-0
        xl:flex-row xl:gap-[1.63rem] xl:px-[5.31rem] xl:py-[4.5rem] 2xl:mx-auto 2xl:max-w-[90rem]'
          >
            {/* bg-gray-900 dark:bg-sky-50  */}
            <section className='flex flex-col justify-center gap-5 rounded-2xl bg-white-800 p-[50px] drop-shadow-xl dark:bg-black-300 md:w-[45%] md:gap-10 md:p-[100px]'>
              <h2 className='text-black-200 dark:text-white-900'>
                Work
                <div className='relative w-full'>
                  <div className='relative z-10'>Experience</div>
                  <div className='absolute bottom-0.5 z-0 h-6 w-[270px] bg-accent' />
                </div>
              </h2>
              <p className='max-w-[320px] text-sm font-normal text-white-500 dark:text-white-800 md:text-lg'>
                Progress and milestones: A simple walkthrough of roles,
                projects, and achievements in my career.
              </p>
              <section className='flex items-center '>
                <Line
                  src='/img/line.svg'
                  width={400}
                  height={70}
                  alt='line'
                  className='stroke-current text-white-500 dark:text-white-800 md:h-[80px] md:w-[356px]'
                />
              </section>
            </section>
            <div className='flex w-full max-w-[37.9375rem] flex-col  gap-4 xl:w-auto xl:gap-[2.19rem]'>
              <ExperienceCard
                image='/img/servicewhale.svg'
                title='Servicewhale'
                description='Director of Customer Success - 4 Years Experience'
              />
              <ExperienceCard
                image='/img/jsm.png'
                title='JSM Masterclass'
                description='Full Stack Developer - 4 Month Experience'
              />
              <ExperienceCard
                image='/img/apple.svg'
                title='Apple'
                description='Applecare Advisor / Specialist - 3 Years Experience'
              />
              <ExperienceCard
                image='/img/raymour.svg'
                title='Raymour & Flanigan'
                description='Team Lead - 4 Years Experience'
              />
            </div>
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
