/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react';
import CaseStudyHeader from './CaseStudyHeader';
import RoleDetails from './RoleDetails';

import SkillCard from '@/components/reusable/SkillCard';
import ProjectDescription from './ProjectDescription';
import ProblemStatement from './ProblemStatement';
import ContactMe from '@/components/reusable/ContactMe';
import Figma from './Figma';
import Process from './Process';
import RelatedDetails from './RelatedDetails';

const caseStudyDetails = () => {
  return (
    <section>
      <CaseStudyHeader
        description='WEB DEV PROJECT'
        title='Morrent - A Car Rental Website'
        image='/img/morrent.svg'
        demoLink='#'
        sourceCodeLink='https://github.com/Erzyelc/Morrent'
      />
      <RoleDetails
        role='Role'
        title='Fullstack Developer'
        startDate='Start Date'
        endDate='End Date'
        startDateString='08/01/2023'
        endDateString='09/01/2023'
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
          description='Morent, a cutting-edge car rental application that was developed using the MERN stack. The app boasts a dynamic homepage that showcases featured vehicles, along with convenient pickup & drop-off location options & a comprehensive list of available cars. '
          description2='My team and I also developed the car listing page which offers a search bar and various filtering options for users to find the perfect vehicle. Additionally, it has a car details page which provides users with detailed information along with suggestions for other recommended vehicles. '
          description3='Car owners are also able to list their cars for rent through our Add Car page, while users can easily track their rented and rented-out cars through their profile page. Overall, I have created an intuitive and user-friendly MVP version of the platform that will make renting a car a breeze.'
        />
      </section>
      <section>
        <ProblemStatement
          description='One of the main problems that people face when looking to rent a car is the hassle of finding a reliable and user-friendly platform to search for and book rental cars. In addition, car owners who want to rent out their vehicles often struggle to find a suitable platform to list their cars and manage their rentals.'
          image='/img/morrentproblem.svg'
        />
      </section>
      <section className='flex w-full items-center justify-center bg-blue-700 py-9 dark:bg-blue-500 '>
        <h2 className='text-sm font-semibold text-white-900 md:text-[32px]'>
          High-Fidelity Figma Design
        </h2>
      </section>
      <section className='relative h-[210px] w-full md:h-[767px]'>
        <Figma image='./img/morrentfigma.svg' />
      </section>
      <section>
        <Process />
      </section>
      <section className='flex flex-wrap items-center justify-center gap-8 px-10 pb-28 pt-16 md:px-0'>
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
            link='/caseStudyDetails/hipnode'
            image='/img/devoverflowfigma.svg'
            title='DevOverflow'
            description='A web app made to help feel more connected on social media to fellow developers.'
          />
          <RelatedDetails
            link='/caseStudyDetails/jobit'
            image='/img/jobitfigma2.svg'
            title='Jobit'
            description='Jobit, a web app made with React and JSearch API, links developers to millions of job openings. It offers easy job search by...'
          />
        </section>
      </section>
      <ContactMe />
    </section>
  );
};

export default caseStudyDetails;
