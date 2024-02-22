import TestimonyCard from '../../components/reusable/TestimonyCard';

const Testimonies = () => {
  return (
    <div className='flex flex-col items-center'>
      <h2 className='flex flex-row gap-3  pt-20 text-center text-[32px] md:text-[48px]'>
        What
        <div className='relative w-fit'>
          <div className='relative z-10'> they say</div>
          <div className='absolute bottom-0.5 z-0 h-6 w-full bg-accent' />
        </div>
        about me
      </h2>
      <div className='carousel h-[808px] md:h-[500px]'>
        <div
          id='slide1'
          className='carousel-item relative flex w-full flex-col items-center justify-center px-6 md:px-0'
        >
          <section className='flex h-full w-full flex-col items-center justify-center gap-14  md:h-[590px]'>
            <TestimonyCard
              image='./img/profilepic.svg'
              name='Adrian Hajdin'
              description='Founder & CEO at JS Mastery'
              testimony='I have had the pleasure of working with Ryan as a Software Developer and can confidently say that he is a valuable asset to any team. He is highly skilled in ReactJS, NextJS, Javascript, Material UI, Tailwind CSS, Redux, and GitHub, and consistently delivers high-quality code. '
            />
          </section>
          <div className='absolute inset-x-64 top-36 flex gap-4  md:inset-x-5 md:top-1/2 md:-translate-y-1/2 md:justify-between md:gap-0 md:pl-0'>
            <a href='#slide3' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide2' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div
          id='slide2'
          className='carousel-item relative flex w-full flex-col items-center justify-center px-6 md:px-0'
        >
          <section className=' flex flex-col items-center justify-center gap-14 md:h-[590px]'>
            <TestimonyCard
              image='./img/profilepic.svg'
              name='Adrian Hajdin'
              description='Founder & CEO at JS Mastery'
              testimony='I have had the pleasure of working with Ryan as a Software Developer and can confidently say that he is a valuable asset to any team. He is highly skilled in ReactJS, NextJS, Javascript, Material UI, Tailwind CSS, Redux, and GitHub, and consistently delivers high-quality code. '
            />
          </section>
          <div className='absolute inset-x-64 top-36 flex gap-4  md:inset-x-5 md:top-1/2 md:-translate-y-1/2 md:justify-between md:gap-0 md:pl-0'>
            <a href='#slide1' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide3' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
        <div
          id='slide3'
          className='carousel-item relative flex w-full flex-col items-center justify-center px-6 md:px-0'
        >
          <section className='flex h-full flex-col items-center justify-center gap-14 md:h-[590px] '>
            <TestimonyCard
              image='./img/profilepic.svg'
              name='Adrian Hajdin'
              description='Founder & CEO at JS Mastery'
              testimony='I have had the pleasure of working with Ryan as a Software Developer and can confidently say that he is a valuable asset to any team. He is highly skilled in ReactJS, NextJS, Javascript, Material UI, Tailwind CSS, Redux, and GitHub, and consistently delivers high-quality code. '
            />
          </section>
          <div className='absolute inset-x-64 top-36 flex gap-4  md:inset-x-5 md:top-1/2 md:-translate-y-1/2 md:justify-between md:gap-0 md:pl-0'>
            <a href='#slide2' className='btn btn-circle'>
              ❮
            </a>
            <a href='#slide1' className='btn btn-circle'>
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonies;
