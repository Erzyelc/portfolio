import ExperienceCard from '../../components/reusable/ExperienceCard';
import Line from '@/public/img/line.svg';

const Experience = () => {
  return (
    <section className='flex h-[650px] bg-white-900 py-14 dark:bg-gray-900'>
      <section className='padding-layout flex w-full justify-around gap-8 '>
        <section className='flex w-[45%] flex-col justify-center gap-10 rounded-2xl bg-gray-900 p-[100px] dark:bg-sky-50 '>
          <h2 className='text-white-900 dark:text-gray-900'>
            Work
            <div className='relative w-fit'>
              <div className='relative z-10'>Experience</div>
              <div className='absolute bottom-0.5 z-0 h-6 w-1/2 bg-accent' />
            </div>
          </h2>
          <p className='max-w-[320px] text-lg font-normal text-sky-50 dark:text-slate-500'>
            Progress and milestones: A simple walkthrough of roles, projects,
            and achievements in my career.
          </p>
          <section className='flex items-center '>
            <Line
              src='/img/line.svg'
              width={356}
              height={80}
              alt='line'
              className=' stroke-current text-white-900 dark:text-gray-900'
            />
          </section>
        </section>
        <section className='flex w-1/2 flex-col justify-between'>
          <ExperienceCard
            image='/img/servicewhale.svg'
            title='Servicewhale'
            description='Director of Customer Success - 4 Years Experience'
          />
          <ExperienceCard
            image='/img/jsm.png'
            title='JSM Masterclass'
            description='Full Stack Developer - 4 Months Experience'
          />
          <ExperienceCard
            image='/img/apple.svg'
            title='Apple'
            description='Applecare Advisor / Specialist - 3 Years Experience'
          />
          <ExperienceCard
            image='/img/raymour.svg'
            title='Raymour & Flanigan'
            description='Team Lead - 4 Years Experience'
          />
        </section>
      </section>
    </section>
  );
};

export default Experience;
