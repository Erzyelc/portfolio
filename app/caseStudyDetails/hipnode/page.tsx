import ContactMe from '@/components/reusable/ContactMe';
import SkillCard from '@/components/reusable/SkillCard';
import React from 'react';
import CaseStudyHeader from '../CaseStudyHeader';
import Figma from '../Figma';
import ProblemStatement from '../ProblemStatement';
import Process from '../Process';
import ProjectDescription from '../ProjectDescription';
import RelatedDetails from '../RelatedDetails';
import RoleDetails from '../RoleDetails';

const Hipnode = () => {
  return (
    <section>
      <CaseStudyHeader
        description='WEB DEV PROJECT'
        title='Hipnode - Social Platform for Developers'
        image='/img/hipnode.svg'
        demoLink='#'
        sourceCodeLink='https://github.com/Erzyelc/Hipnode'
      />
      <RoleDetails
        role='Role'
        title='Fulstack Developer'
        startDate='Start Date'
        endDate='End Date'
        startDateString='10/1/2023'
        endDateString='12/1/2023'
      />
      <section className='bg-white-900 py-12 dark:bg-gray-900'>
        <div className='flex flex-col items-center gap-10  xl:px-[5.31rem] xl:py-[4.5rem] 2xl:mx-auto 2xl:max-w-[90rem]'>
          <section className=' flex w-full flex-col gap-3 pl-12 md:pl-0'>
            <p className=' text-xs font-semibold text-blue-700 dark:text-blue-500 md:text-sm'>
              Technologies used
            </p>
            <h2 className='text-[28px] font-semibold text-gray-900 dark:text-white-900 md:text-[32px]'>
              Tech Stack
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
      <section className='padding-layout flex justify-center py-20'>
        <ProjectDescription
          description='Hipnode is a phenomenal app that takes social media to the next level. It gives users the ability to create a profile, add posts, and even comment on other users posts. '
          description2='My team and I also developed an amazing way to create groups and join other groups. This is a great tool that gives flexibility to the user to find the perfect group for them, so that the user can really hone in on their skills and find content that is relevant to them.'
          description3=''
        />
      </section>
      <section>
        <ProblemStatement
          description='Lets face it, social media is the problem! There is a lot of content that most people just do not care about to see, with Hipnode you can join groups and see more of the interesting content you want to see day to day.'
          image='/img/hipnodeproblem.svg'
        />
      </section>
      <section className='flex w-full items-center justify-center bg-orange-500 py-9 dark:bg-orange-700  '>
        <h2 className='text-sm font-semibold text-white-900 md:text-[32px]'>
          High-Fidelity Figma Design
        </h2>
      </section>
      <section className='relative h-[210px] w-full md:h-[767px]'>
        <Figma image='../img/hipnodefigma.svg' />
      </section>
      <section>
        <Process />
      </section>
      <section className='flex  flex-wrap items-center justify-center gap-8 px-10 pb-28 pt-16 md:px-0'>
        <section className='flex w-full max-w-[878px]  flex-col gap-8 '>
          <section className='flex flex-col gap-3'>
            <p className='text-xs font-semibold text-blue-700 dark:text-blue-500 md:text-sm'>
              Projects
            </p>
            <h2 className='text-[28px] font-semibold text-gray-900 dark:text-white-900 md:text-[32px]'>
              Other Case Studies
            </h2>
          </section>
        </section>
        <section className='flex flex-col gap-24 md:flex-row md:gap-6'>
          <RelatedDetails
            link='/caseStudyDetails'
            image='/img/morrentfigma.svg'
            title='Morrent'
            description='Morrent, a cutting-edge car rental application that was developed using the MERN stack...'
          />
          <RelatedDetails
            link='/caseStudyDetails/jobit'
            image='/img/jobitfigma.svg'
            title='jobit'
            description='Jobit, a web app made with React and JSearch API, links developers to millions of job openings. It offers easy job search by...'
          />
        </section>
      </section>

      <ContactMe />
    </section>
  );
};

export default Hipnode;
