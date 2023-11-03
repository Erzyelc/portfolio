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

const Jobit = () => {
  return (
    <section>
      <CaseStudyHeader
        description='WEB DEV PROJECT'
        title='Jobit - A Job Finding Application'
        image='/img/jobit.svg'
        demoLink='#'
        sourceCodeLink='#'
      />
      <RoleDetails
        role='Role'
        title='Frontend Developer'
        startDate='Start Date'
        endDate='End Date'
        startDateString='07/01/2023'
        endDateString='08/01/2023'
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
        <h2 className='text-[32px] font-semibold text-white-900'>
          High-Fidelity Figma Design
        </h2>
      </section>
      <section className='relative h-[767px] w-full'>
        <Figma image='../img/jobitfigma.svg' />
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
            link='/caseStudyDetails'
            image='/img/morrentfigma.svg'
            title='Morrent'
            description='Morrent, a cutting-edge car rental application that was developed using the MERN stack...'
          />
          <RelatedDetails
            link='/caseStudyDetails/hipnode'
            image='/img/hipnodefigma.svg'
            title='Hipnode'
            description='Hipnode, a web app made with React and JSearch API, links developers to millions of job openings. It offers easy job search by...'
          />
        </section>
      </section>

      <ContactMe />
    </section>
  );
};

export default Jobit;
