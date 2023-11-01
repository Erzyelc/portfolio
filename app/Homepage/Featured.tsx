import Image from 'next/image';
import Link from 'next/link';
import FeaturedCard from '../../components/reusable/FeaturedCard';

const Featured = () => {
  return (
    <section className='justify-between bg-white-900 pb-20 pt-24 dark:bg-gray-900'>
      <section className='padding-layout flex items-center justify-center'>
        <h2 className='flex gap-3'>
          Featured
          <div className='relative w-fit'>
            <div className='relative z-10'>Projects</div>
            <div className='absolute bottom-0 z-0 h-5 w-full bg-accent' />
          </div>
        </h2>
      </section>
      <section className='mt-14 flex h-full flex-col justify-between gap-12'>
        <FeaturedCard
          title='Morrent - A Car Rental Application'
          descriptionFE='ReactJS, Next.js'
          descriptionBE='Supabase, Nodejs'
          link='/caseStudyDetails'
          image='/img/morrent.svg'
          styles='relative flex h-[440px] w-full justify-around rounded-[20px] bg-blue-500'
        />
        <FeaturedCard
          title='JobIT - A Job Finding Application'
          descriptionFE='ReactJS, Next.js'
          descriptionBE='Supabase, Nodejs'
          link='/caseStudyDetails/jobit'
          image='/img/jobit.svg'
          styles='relative flex flex-row-reverse h-[440px] w-full justify-around rounded-[20px] bg-emerald-500'
        />
        <FeaturedCard
          title='Hipnode - A Social Media Application'
          descriptionFE='ReactJS, Next.js'
          descriptionBE='Supabase, Nodejs'
          link='/caseStudyDetails/hipnode'
          image='/img/hipnode.svg'
          styles='relative flex h-[440px] w-full justify-around rounded-[20px] bg-orange-500'
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
      </section>
    </section>
  );
};

export default Featured;
