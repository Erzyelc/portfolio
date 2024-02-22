import TestimonyCard from '../../components/reusable/TestimonyCard';

const Testimonies = () => {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex px-10 pt-20'>
        <h1 className='text-center text-[36px] font-bold text-black-200  dark:text-white-900'>
          What <span className='highlight'>they say</span> about me
        </h1>
      </div>
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
