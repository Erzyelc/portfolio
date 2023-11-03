import ContactMe from '@/components/reusable/ContactMe';
import React from 'react';
import CaseStudyCard from './CaseStudyCard';

const page = () => {
  return (
    <section className=''>
      <section className='flex h-[350px] w-full  flex-col items-center justify-center gap-8'>
        <h2 className='flex gap-3'>
          Recent
          <div className='relative w-fit'>
            <div className='relative z-10'>Case Studies</div>
            <div className='absolute bottom-0 z-0 h-5 w-full bg-accent' />
          </div>
        </h2>
        <p className='text-xl font-normal text-slate-500 dark:text-sky-50'>
          Dive into my recent success stories and discover how Ive helped <br />
          clients overcome challenges, innovate, and achieve their goals
        </p>
      </section>

      <section className='flex flex-col items-center  bg-white-900 py-20 dark:bg-gray-900'>
        <section className='grid grid-cols-2 gap-8'>
          <CaseStudyCard
            link={'/caseStudyDetails'}
            title='Morrent'
            description='Car Rental Application'
            img='./img/morrentlaptop.svg'
            styles='relative flex items-baseline justify-end rounded-2xl  bg-blue-400 px-[80px] pt-[72px]'
          />
          <CaseStudyCard
            link={'/caseStudyDetails/jobit'}
            title='Jobit'
            description='Job Finding Application'
            img='./img/jobitlaptop.svg'
            styles='relative flex items-baseline justify-end rounded-2xl  bg-emerald-500 px-[80px] pt-[72px]'
          />
          <CaseStudyCard
            link={'/caseStudyDetails/hipnode'}
            title='HipNode'
            description='Social Platform for Developers'
            img='./img/hipnodelaptop.svg'
            styles='relative flex items-baseline justify-end rounded-2xl  bg-orange-500  px-[80px] pt-[72px]'
          />
          {/* <CaseStudyCard
            link={'/caseStudyDetails/tripguide'}
            title='Trip Guide'
            description='Booking Platform'
            img='./img/tripguidelaptop.svg'
            styles='relative flex items-baseline justify-end rounded-2xl  bg-blue-600  px-[80px] pt-[72px]'
          />
          <CaseStudyCard
            link={'/caseStudyDetails/virtue'}
            title='Virtue'
            description='Crowdfunding Platform'
            img='./img/virtuelaptop.svg'
            styles='relative flex items-baseline justify-end rounded-2xl  bg-green-400  px-[80px] pt-[72px]'
          /> */}
          <CaseStudyCard
            link={'/caseStudyDetails/filmpire'}
            title='Filmpire'
            description='Ai-Powered Movie Application'
            img='./img/filmpirelaptop.svg'
            styles='relative flex items-baseline justify-end rounded-2xl bg-red-600 px-[80px] pt-[72px]'
          />
        </section>
      </section>

      <section>
        <ContactMe />
      </section>
    </section>
  );
};

export default page;
