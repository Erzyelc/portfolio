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
      <section className='flex flex-col flex-wrap items-center justify-center bg-white-900 py-20 dark:bg-gray-900'>
        <section className='flex max-w-[878px] flex-wrap items-center justify-between gap-12'>
          <section className='flex w-full flex-col'>
            <p className='text-sm font-semibold text-blue-700 dark:text-blue-500'>
              Technologies used
            </p>
            <h2 className='text-[32px] font-semibold text-gray-900 dark:text-white-900'>
              Tech Stack
            </h2>
          </section>
          <SkillCard image='/icons/react.svg' />
          <SkillCard image='/icons/nextColored.svg' />
          <SkillCard image='/icons/tsColored.svg' />
          <SkillCard image='/icons/tailwindColored.svg' />
          <SkillCard image='/icons/nodejsColored.svg' />
          <SkillCard image='/icons/htmlColored.svg' />
          <SkillCard image='/icons/cssColored.svg' />
          <SkillCard image='/icons/jsColored.svg' />
          <SkillCard image='/icons/gitColored.svg' />
          <SkillCard image='/icons/githubColored.svg' />
          <SkillCard image='/icons/mongodbColored.svg' />
          <SkillCard image='/icons/exColored.svg' />
        </section>
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
        <h2 className='text-[32px] font-semibold text-white-900'>
          High-Fidelity Figma Design
        </h2>
      </section>
      <section className='relative h-[767px] w-full'>
        <Figma image='./img/morrentfigma.svg' />
      </section>
      <section>
        <Process />
      </section>
      <section className='flex  flex-wrap items-center justify-center gap-8 pb-28 pt-16'>
        <section className='flex w-full max-w-[878px] flex-col gap-8'>
          <section className='flex flex-col gap-3'>
            <p className='text-sm font-semibold text-blue-700 dark:text-blue-500'>
              Projects
            </p>
            <h2 className='text-[32px] font-semibold text-gray-900 dark:text-white-900'>
              Other Case Studies
            </h2>
          </section>
        </section>
        <section className='flex flex-row gap-6'>
          <RelatedDetails
            link='/caseStudyDetails/hipnode'
            image='/img/hipnodefigma.svg'
            title='Hipnode'
            description='Hipnode, a web app made with React and JSearch API, links developers to millions of job openings. It offers easy job search by...'
          />
          <RelatedDetails
            link='/caseStudyDetails/jobit'
            image='/img/jobitfigma.svg'
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
