import TestimonyCard from '../../components/reusable/TestimonyCard';

const Testimonies = () => {
  return (
    <section className=' padding-layout flex h-[590px] flex-col items-center justify-center gap-14'>
      <h2 className='flex flex-row gap-3'>
        What
        <div className='relative w-fit'>
          <div className='relative z-10'> they say</div>
          <div className='absolute bottom-0.5 z-0 h-6 w-full bg-accent' />
        </div>
        about me
      </h2>

      <TestimonyCard
        image='./img/profilepic.svg'
        name='Adrian Hajdin'
        description='Founder & CEO at JS Mastery'
        testimony='I have had the pleasure of working with Ryan as a Software Developer and can confidently say that he is a valuable asset to any team. He is highly skilled in ReactJS, NextJS, Javascript, Material UI, Tailwind CSS, Redux, and GitHub, and consistently delivers high-quality code. '
      />
    </section>
  );
};

export default Testimonies;
