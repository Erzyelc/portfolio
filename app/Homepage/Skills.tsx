/* eslint-disable tailwindcss/no-custom-classname */
'use client';

import SkillCard from '../../components/reusable/SkillCard';

const Skills = () => {
  return (
    <section className='bg-white-900  py-12 dark:bg-gray-900'>
      <div className='flex flex-col items-center gap-10  xl:px-[5.31rem] xl:py-[4.5rem] 2xl:mx-auto 2xl:max-w-[90rem]'>
        <section className='flex justify-center'>
          <h2 className='relative w-fit text-gray-900 dark:text-white-900'>
            <div className='relative z-10'>My Skills</div>
            <div className='absolute bottom-0.5 z-0 h-3.5 w-full bg-accent' />
          </h2>
        </section>
        <div
          className='grid grid-cols-4 gap-x-[2.5rem] gap-y-12 md:flex md:flex-wrap md:justify-center lg:gap-[4rem] 
            xl:gap-x-[2.8916rem] xl:gap-y-[4.13rem]'
        >
          <SkillCard
            image='/icons/jsColored.svg'
            styles={'md:h-[50px] md:w-[50px]'}
          />
          <SkillCard
            image='/icons/react.svg'
            styles={'md:h-[50px] md:w-[50px]'}
          />
          <SkillCard
            image='/icons/reduxColored.svg'
            styles={'md:h-[50px] md:w-[50px]'}
          />
          <SkillCard
            image='/icons/nextColored.svg'
            styles={'md:h-[50px] md:w-[50px]'}
          />
          <SkillCard
            image='/icons/tsColored.svg'
            styles={'md:h-[50px] md:w-[50px]'}
          />
          <SkillCard
            image='/icons/htmlColored.svg'
            styles={'md:h-[50px] md:w-[50px]'}
          />
          <SkillCard
            image='/icons/cssColored.svg'
            styles={'md:h-[50px] md:w-[50px]'}
          />
          <SkillCard
            image='/icons/supabase.png'
            styles={'md:h-[50px] md:w-[50px]'}
          />
          <SkillCard
            image='/icons/muiColored.svg'
            styles={'md:h-[50px] md:w-[50px]'}
          />
          <SkillCard
            image='/icons/tailwindColored.svg'
            styles={'md:h-[50px] md:w-[50px]'}
          />
          <SkillCard
            image='/icons/motionColored.svg'
            styles={'md:h-[50px] md:w-[50px]'}
          />
          <SkillCard
            image='/icons/nodejsColored.svg'
            styles={'md:h-[50px] md:w-[50px]'}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
