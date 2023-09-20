import ExperienceCard from '../reusable/ExperienceCard';

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
          <hr className='w-[60%] border border-white-900/50 dark:border-gray-900/40' />
        </section>
        <section className='flex w-1/2 flex-col justify-between'>
          <ExperienceCard
            image='./icons/slack.svg'
            title='Slack'
            description='Product Design - 4 Years Experience'
          />
          <ExperienceCard
            image='/icons/firefox.svg'
            title='FireFox'
            description='Sr. UI Design - 4 Years Experience'
          />
          <ExperienceCard
            image='/icons/digitalocean.svg'
            title='Digital Ocean'
            description='UI & Motion Designer - 4 Years Experience'
          />
          <ExperienceCard
            image='/icons/mailchimp.svg'
            title='Mailchimp'
            description='UI Designer - 4 Years Experience'
          />
        </section>
      </section>
    </section>
  );
};

export default Experience;
