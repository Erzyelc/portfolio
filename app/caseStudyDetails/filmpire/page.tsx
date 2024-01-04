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

const Filmpire = () => {
  return (
    <section>
      <CaseStudyHeader
        description='WEB DEV PROJECT'
        title='Filmpire - Ai-Powered Movie Application'
        image='/img/Filmpire (1).svg'
        demoLink='https://filmpirerjc.netlify.app/'
        sourceCodeLink='https://github.com/Erzyelc/Filmpire'
      />
      <RoleDetails
        role='Role'
        title='Fullstack Developer'
        startDate='Start Date'
        endDate='End Date'
        startDateString='4/10/2023'
        endDateString='06/03/2023'
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
          description='Filmpire combines the desire to unleash powerful creativity with the industrys most advanced JavaScript tools including React.js, Material UI, Alan AI, and more. As a way to provide hands on, practical experience for intermediate to expert software developers seeking fulfilling opportunities within their career.'
          description2='This app is a great option to have your own personal imdb that was built with a great UI and utilizes all of the best modern technology.'
          description3=''
        />
      </section>
      <section>
        <ProblemStatement
          description='One of the main problems people face today is trying to find every movie and actor immediately at the tip of the fingers. Filmpire gives users the ability to search for any movie or actor and get the information they need.'
          image='/img/filmpireproblem.jpg'
        />
      </section>
      <section className='flex w-full items-center justify-center bg-red-600 py-9 dark:bg-red-700 '>
        <h2 className='text-[32px] font-semibold text-white-900'>
          High-Fidelity Figma Design
        </h2>
      </section>
      <section className='relative h-[767px] w-full'>
        <Figma image='/img/filmpirefigma.png' />
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
            title='Jobit'
            description='Jobit, a web app made with React and JSearch API, links developers to millions of job openings. It offers easy job search by...'
          />
        </section>
      </section>

      <ContactMe />
    </section>
  );
};

export default Filmpire;
