'use client';

import TestimonyCard from '../../components/reusable/TestimonyCard';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/motion';

const Testimonies = () => {
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
        <div className='flex flex-col items-center'>
          <div className='flex px-10 pt-20'>
            <h1 className='text-center text-[36px] font-bold text-black-200  dark:text-white-900'>
              What <span className='highlight'>they say</span> about me
            </h1>
          </div>
          <div className=' carousel h-[808px] md:h-[500px]'>
            <div
              id='slide1'
              className=' carousel-item relative flex w-full flex-col items-center justify-center '
            >
              <section className=' flex h-full w-full flex-col items-center justify-center md:h-[590px]'>
                <TestimonyCard
                  image='./img/profilepic.svg'
                  name='Adrian Hajdin'
                  description='Founder & CEO at JS Mastery'
                  testimony='I have had the pleasure of working with Ryan as a Software Developer and can confidently say that he is a valuable asset to any team. He is highly skilled in ReactJS, NextJS, Javascript, Material UI, Tailwind CSS, Redux, and GitHub, and consistently delivers high-quality code. '
                />
              </section>
              <div className='absolute inset-x-64 top-24 flex gap-3  md:inset-x-5 md:top-1/2 md:-translate-y-1/2 md:justify-between md:gap-0 md:pl-0'>
                <a href='#slide3' className='btn btn-circle'>
                  ❮
                </a>
                <a href='#slide2' className='btn btn-circle'>
                  ❯
                </a>
              </div>
            </div>
            <div
              id='slide2'
              className='carousel-item relative flex w-full flex-col items-center justify-center  '
            >
              <section className='flex h-full w-full flex-col items-center justify-center md:h-[590px]'>
                <TestimonyCard
                  image='/img/pam.jpg'
                  name='Pamela Price'
                  description='Founder of PamTech'
                  testimony='I had the privilege of teaching Ryan at the Mimo Coding Bootcamp. Ryans commitment to his personal and professional development was evident from the outset. He meticulously created a learning schedule that not only allowed him to effectively manage his time but also ensured he maximized his understanding of the course material. This level of organization and discipline speaks volumes about his dedication to his career in technology.'
                />
              </section>
              <div className='absolute inset-x-64 top-24 flex gap-3  md:inset-x-5 md:top-1/2 md:-translate-y-1/2 md:justify-between md:gap-0 md:pl-0'>
                <a href='#slide1' className='btn btn-circle'>
                  ❮
                </a>
                <a href='#slide3' className='btn btn-circle'>
                  ❯
                </a>
              </div>
            </div>
            <div
              id='slide3'
              className='carousel-item relative flex w-full flex-col items-center justify-center'
            >
              <section className='flex h-full w-full flex-col items-center justify-center  md:h-[590px]'>
                <TestimonyCard
                  image='/img/asako.jpeg'
                  name='Asako Hayase'
                  description='Team member at JS Masterclass'
                  testimony='Working alongside Ryan in a coding program was an excellent experience. We collaborated closely on two major projects, joined by two other teammates. Ryan proved himself to be an invaluable team member, always willing to take on any task while maintaining positive communication with everyone.  I would be delighted to have the opportunity to work with Ryan again on future coding endeavors.'
                />
              </section>
              <div className='absolute inset-x-64 top-24 flex gap-3  md:inset-x-5 md:top-1/2 md:-translate-y-1/2 md:justify-between md:gap-0 md:pl-0'>
                <a href='#slide2' className='btn btn-circle'>
                  ❮
                </a>
                <a href='#slide1' className='btn btn-circle'>
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Testimonies;
