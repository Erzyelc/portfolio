import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className=' padding-layout flex flex-col  items-center md:flex-row'>
      <section className='flex  w-1/2 flex-col gap-8 pt-20 '>
        <h3 className='text-sm font-semibold uppercase text-blue-700 dark:text-blue-500'>
          Hi, I am Ryan
        </h3>
        <h1>
          Professional <br></br>
          <div className='relative w-fit'>
            <div className='relative z-10'>Web Developer</div>
            <div className='absolute bottom-0.5 z-0 h-6 w-full bg-accent' />
          </div>
          based in USA
        </h1>
        <p className='text-lg font-normal text-slate-500 dark:text-sky-50'>
          Transforming the web one line of code at a time: Crafting cutting-edge
          digital experiences with precision, passion, and a profound commitment
          to excellence
        </p>
        <div className='flex flex-row items-center gap-8 '>
          <button className='rounded-full bg-blue-700 px-12 py-5 text-lg font-semibold text-white-900 transition-all hover:scale-105 dark:bg-blue-500'>
            <Link href='/caseStudies'>My Work</Link>
          </button>
          <div className='relative flex flex-row'>
            <button className='flex flex-row items-center gap-5 rounded-full bg-white-900 px-12 py-5 text-lg font-semibold text-slate-500 transition-all hover:scale-105 dark:bg-gray-900 dark:text-white-900'>
              ryanjcarpenter88@gmail.com
              <Image
                src='./icons/frame.svg'
                alt='frame'
                height={21}
                width={21}
                className=''
              />
            </button>
          </div>
        </div>
      </section>
      <section className='relative flex h-[550px] w-1/2 items-center justify-center '>
        <Image
          src='./img/computer.svg'
          alt={'computer'}
          fill
          priority
          className='object-contain'
        />
      </section>
    </section>
  );
};

export default Hero;
