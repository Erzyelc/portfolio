import Image from 'next/image';
import Link from 'next/link';
import FeaturedCard from '../../components/reusable/FeaturedCard';

const Featured = () => {
  return (
    <section className='justify-between bg-white-900 pb-20 pt-28 dark:bg-gray-900'>
      <section id='featuredProjects' className='bg-white-900 dark:bg-black-200'>
        <section className='padding-layout flex items-center justify-center pt-20'>
          <h2 className='flex gap-3 text-[36px] md:text-[48px]'>
            Featured
            <div className='relative w-fit'>
              <div className='relative z-10'>Projects</div>
              <div className='absolute bottom-0 z-0 h-5 w-full bg-accent' />
            </div>
          </h2>
        </section>
        <div className='flex flex-col gap-9 px-6 py-12 lg:gap-12 lg:px-[5.31rem] lg:py-[4.5rem] min-[1440px]:mx-auto min-[1440px]:max-w-[90rem]'>
          <FeaturedCard
            title='Morrent - A Car Rental Application'
            descriptionFE='ReactJS, Next.js'
            descriptionBE='Supabase, Nodejs'
            link='/caseStudyDetails'
            image='/img/morrent.svg'
            styles='relative flex h-[514px] md:h-[440px] rounded-[20px] bg-blue-500'
          />
          <FeaturedCard
            title='JobIT - A Job Finding Application'
            descriptionFE='ReactJS, Next.js'
            descriptionBE='Supabase, Nodejs'
            link='/caseStudyDetails/jobit'
            image='/img/jobit.svg'
            styles='relative flex flex-row-reverse h-[514px] md:h-[440px] w-full justify-around rounded-[20px] bg-emerald-500'
          />
          <FeaturedCard
            title='Filmpire - Ai Powered Movie Application'
            descriptionFE='ReactJS, Next.js'
            descriptionBE='Nodejs'
            link='/caseStudyDetails/filmpire'
            image='/img/Filmpire (1).svg'
            styles='relative flex h-[514px] md:h-[440px] w-full justify-around rounded-[20px] bg-red-600'
          />
          <section className='flex justify-center'>
            <Link href='/caseStudies'>
              <button className='flex cursor-pointer flex-row items-center gap-2.5 rounded-full bg-blue-700 px-8  py-5 text-lg font-semibold text-white-900 transition-all hover:scale-105 dark:bg-blue-500'>
                See More Case Studies
                <Image
                  src='./icons/arrowsmall.svg'
                  alt='arrowlarge'
                  width={16}
                  height={0}
                />
              </button>
            </Link>
          </section>
        </div>
      </section>
    </section>
  );
};

export default Featured;
