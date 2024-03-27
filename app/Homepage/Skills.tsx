/* eslint-disable tailwindcss/no-custom-classname */
'use client';

import { AnimatedTooltip } from '../../components/ui/animated-tooltip';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

const skills = [
  {
    id: 1,
    name: 'Javascript',
    image: '/icons/jsColored.svg',
  },
  {
    id: 2,
    name: 'React',
    image: '/icons/react.svg',
  },
  {
    id: 3,
    name: 'Redux',
    image: '/icons/reduxColored.svg',
  },
  {
    id: 4,
    name: 'Next.js',
    image: '/icons/nextColored.svg',
  },
  {
    id: 5,
    name: 'Typescript',
    image: '/icons/tsColored.svg',
  },
  {
    id: 6,
    name: 'HTML',
    image: '/icons/htmlColored.svg',
  },
  {
    id: 7,
    name: 'CSS',
    image: '/icons/cssColored.svg',
  },
  {
    id: 8,
    name: 'Supabase',
    image: '/icons/supabase.png',
  },
  {
    id: 9,
    name: 'Material UI',
    image: '/icons/muiColored.svg',
  },
  {
    id: 10,
    name: 'Tailwind',
    image: '/icons/tailwindColored.svg',
  },
  {
    id: 11,
    name: 'Framer Motion',
    image: '/icons/motionColored.svg',
  },
  {
    id: 12,
    name: 'Node.js',
    image: '/icons/nodejsColored.svg',
  },
  {
    id: 13,
    name: 'MongoDB',
    image: '/icons/mongodbColored.svg',
  },
];

const Skills = () => {
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
        <section className='bg-white-900  py-12 dark:bg-gray-900'>
          <div className='flex flex-col items-center gap-10  xl:px-[5.31rem] xl:py-[4.5rem] 2xl:mx-auto 2xl:max-w-[90rem]'>
            <section className='flex justify-center'>
              <h2 className='relative w-fit text-gray-900 dark:text-white-900'>
                <div className='relative z-10'>My Skills</div>
                <div className='absolute bottom-0.5 z-0 h-3.5 w-full bg-accent' />
              </h2>
            </section>
            <div
              className='grid grid-cols-4 gap-x-[2.5rem] gap-y-12 md:flex md:flex-wrap 
            md:justify-center lg:gap-[4rem] xl:gap-x-[2.8916rem] xl:gap-y-[4.13rem]'
            >
              <AnimatedTooltip items={skills} />
            </div>
          </div>
        </section>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
