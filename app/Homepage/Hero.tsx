import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='md:padding-layout flex flex-col items-center md:mb-20 md:w-full md:flex-row'>
      <section className='md:padding-layout flex w-[400px] flex-col gap-5 pt-16 md:w-1/2 md:gap-8 md:pt-14'>
        <h3 className='text-sm font-semibold uppercase text-blue-700 dark:text-blue-500 md:text-xl'>
          Hi, I am Ryan
        </h3>
        <h1 className=' text-[42px] font-bold text-gray-900 dark:text-white-900 md:text-[64px]'>
          Professional <br></br>
          <div className='relative w-fit'>
            <div className='relative z-10'>Web Developer</div>
            <div className='absolute bottom-0.5 z-0 h-6 w-full bg-accent' />
          </div>
          based in USA
        </h1>
        <p className='w-[338px] text-xs font-normal leading-[18.60px] text-slate-500 dark:text-sky-50 md:w-[511px] md:text-lg'>
          Transforming the web one line of code at a time: Crafting cutting-edge
          digital experiences with precision, passion, and a profound commitment
          to excellence
        </p>
        <div className='flex flex-col items-center gap-5 md:flex-row md:gap-8 '>
          <button className='w-full rounded-full bg-blue-700 py-5 text-lg font-semibold text-white-900 transition-all hover:scale-105 dark:bg-blue-500 md:w-fit md:px-12'>
            <Link href='/caseStudies'>My Work</Link>
          </button>
          <div className='flex'>
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
      <section className='relative flex h-[350px] w-1/2 items-center justify-center md:h-[550px]'>
        <Image
          src='./img/computer.svg'
          alt={'computer'}
          height={700}
          width={700}
          // fill
          // priority
          className='object-contain'
        />
      </section>
    </section>
  );
};

export default Hero;
