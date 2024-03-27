import ContactMe from '@/components/reusable/ContactMe';
import React from 'react';
import CaseStudyHeader from '../CaseStudyHeader';
import Figma from '../Figma';
import ProblemStatement from '../ProblemStatement';
import Process from '../Process';
import ProjectDescription from '../ProjectDescription';
import RelatedDetails from '../RelatedDetails';
import RoleDetails from '../RoleDetails';
import { AnimatedTooltip } from '@/components/ui/animated-tooltip';

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
    id: 10,
    name: 'Tailwind',
    image: '/icons/tailwindColored.svg',
  },
  {
    id: 11,
    name: 'Framer Motion',
    image: '/icons/motionColored.svg',
  },
];

const Jobit = () => {
  return (
    <section>
      <CaseStudyHeader
        description='WEB DEV PROJECT'
        title='Jobit - A Job Finding Application'
        image='/img/jobit.svg'
        demoLink='https://job-it-job-finder.vercel.app/'
        sourceCodeLink='https://github.com/asakohayase/JobIt-JobFinder'
      />
      <RoleDetails
        role='Role'
        title='Frontend Developer'
        startDate='Start Date'
        endDate='End Date'
        startDateString='07/01/2023'
        endDateString='08/01/2023'
      />
      <section className=' bg-white-900 py-12 dark:bg-gray-900'>
        <div className='md:padding-layout flex flex-col items-center gap-10  xl:px-[5.31rem] xl:py-[4.5rem] 2xl:mx-auto 2xl:max-w-[90rem]'>
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
            <AnimatedTooltip items={skills} />
          </div>
        </div>
      </section>
      <section className='padding-layout flex justify-center py-20'>
        <ProjectDescription
          description='Jobit is a phenomenal app that gives users to ability to search and save and even directly apply to jobs in their area. '
          description2='My team and I also developed a way to filter jobs by location, job type, and salary. This is a great tool that gives flexibility to the user to find the perfect job for them.'
          description3=''
        />
      </section>
      <section>
        <ProblemStatement
          description='A huge problem when looking for a new job is where to start, what kind of job do I want, and how much do people make in this area? With Jobit all of your worries can be calmed with a few clicks.'
          image='/img/jobitproblem.png'
        />
      </section>
      <section className='flex w-full items-center justify-center bg-emerald-500 py-9 dark:bg-emerald-700 '>
        <h2 className='text-sm font-semibold text-white-900 md:text-[32px]'>
          High-Fidelity Figma Design
        </h2>
      </section>
      <section className='relative h-[210px]  w-full md:h-[767px]'>
        <Figma image='../img/jobitfigma.svg' />
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
            link='/caseStudyDetails/filmpire'
            image='/img/filmpirefigma2.svg'
            title='Filmpire'
            description='Filmpire, a cutting edge web app to help search and save your favorite movies on the web.'
          />
          <RelatedDetails
            link='/caseStudyDetails/hipnode'
            image='/img/devoverflowfigma.svg'
            title='DevOverflow'
            description='A web app made to help feel more connected on social media to fellow developers.'
          />
        </section>
      </section>

      <ContactMe />
    </section>
  );
};

export default Jobit;
