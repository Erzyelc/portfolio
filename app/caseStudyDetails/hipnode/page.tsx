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
        sourceCodeLink='#'
      />
      <RoleDetails
        role='Role'
        title='Fulstack Developer'
        startDate='Start Date'
        endDate='End Date'
        startDateString='10/1/2023'
        endDateString='12/1/2023'
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
        <h2 className='text-[32px] font-semibold text-white-900'>
          High-Fidelity Figma Design
        </h2>
      </section>
      <section className='relative h-[767px] w-full'>
        <Figma image='../img/hipnodefigma.svg' />
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
