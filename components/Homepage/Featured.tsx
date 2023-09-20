import Image from 'next/image';
import Link from 'next/link';

const Featured = () => {
  return (
    <section className=' justify-between bg-white-900 pt-28 dark:bg-gray-900'>
      <section className='padding-layout flex items-center justify-center '>
        <h2 className='flex gap-3'>
          Featured
          <div className='relative w-fit'>
            <div className='relative z-10'>Projects</div>
            <div className='absolute bottom-0 z-0 h-5 w-full bg-accent' />
          </div>
        </h2>
      </section>
      <section className='mt-10 flex h-full flex-col justify-between gap-10'>
        <section className='padding-layout relative w-full'>
          <section className='relative flex h-[440px] w-full justify-around rounded-[20px] bg-blue-500'>
            <section className='flex w-1/2 flex-col justify-center gap-8  pl-20'>
              <h2 className='text-5xl font-bold text-white-900'>
                Morrent - A Car <br /> Rental Application
              </h2>
              <section className='flex w-full gap-5'>
                <button className='rounded-md bg-white-900/20 p-3 text-sm font-normal text-white-900 transition-all hover:scale-105'>
                  ReactJS, Next.js
                </button>
                <button className='rounded-md bg-white-900/20 p-3 text-sm font-normal text-white-900 transition-all hover:scale-105'>
                  Supabase, Nodejs
                </button>
              </section>
              <Link href='/'>
                <p className='flex flex-row items-center gap-2.5 text-lg font-semibold text-white-900'>
                  See Project Details
                  <Image
                    src='./icons/arrowlarge.svg'
                    width={35}
                    height={0}
                    alt='arrowlarge'
                  />
                </p>
              </Link>
            </section>
            <section className='relative flex h-full w-1/2 justify-center '>
              <Image
                src='./img/laptop.svg'
                alt='laptop'
                width={564}
                height={330}
                className='relative'
              />
              <Image
                src='./img/morrent.svg'
                alt='laptop'
                width={460}
                height={0}
                className='absolute left-[125px] top-20 rounded-[8px]'
              />
            </section>
          </section>
        </section>
        <section className='padding-layout relative w-full'>
          <section className='relative flex h-[440px] w-full justify-around rounded-[20px] bg-emerald-500'>
            <section className='relative flex h-full w-1/2 justify-center '>
              <Image
                src='./img/laptop.svg'
                alt='laptop'
                width={564}
                height={330}
                className='relative'
              />
              <Image
                src='./img/jobit.svg'
                alt='laptop'
                width={460}
                height={0}
                className='absolute left-[125px] top-20 rounded-[8px]'
              />
            </section>
            <section className='flex w-1/2 flex-col justify-center gap-8  pl-20'>
              <h2 className='text-5xl font-bold text-white-900'>
                JobIT - A Job <br /> Finding Application
              </h2>
              <section className='flex w-full gap-5'>
                <button className='rounded-md bg-white-900/20 p-3 text-sm font-normal text-white-900 transition-all hover:scale-105'>
                  ReactJS, Next.js
                </button>
                <button className='rounded-md bg-white-900/20 p-3 text-sm font-normal text-white-900 transition-all hover:scale-105'>
                  Nodejs
                </button>
              </section>
              <Link href='/'>
                <p className='flex flex-row items-center gap-2.5 text-lg font-semibold text-white-900'>
                  See Project Details
                  <Image
                    src='./icons/arrowlarge.svg'
                    width={35}
                    height={0}
                    alt='arrowlarge'
                  />
                </p>
              </Link>
            </section>
          </section>
        </section>
        <section className='padding-layout relative w-full'>
          <section className='relative flex h-[440px] w-full justify-around rounded-[20px] bg-orange-500'>
            <section className='flex w-1/2 flex-col justify-center gap-8  pl-20'>
              <h2 className='text-5xl font-bold text-white-900'>
                Hipnode - A Social <br /> Media Application
              </h2>
              <section className='flex w-full gap-5'>
                <button className='rounded-md bg-white-900/20 p-3 text-sm font-normal text-white-900 transition-all hover:scale-105'>
                  ReactJS, Next.js
                </button>
                <button className='rounded-md bg-white-900/20 p-3 text-sm font-normal text-white-900 transition-all hover:scale-105'>
                  MongoDB, Nodejs
                </button>
              </section>
              <Link href='/'>
                <p className='flex flex-row items-center gap-2.5 text-lg font-semibold text-white-900 '>
                  See Project Details
                  <Image
                    src='./icons/arrowlarge.svg'
                    width={35}
                    height={0}
                    alt='arrowlarge'
                  />
                </p>
              </Link>
            </section>
            <section className='relative flex h-full w-1/2 justify-center '>
              <Image
                src='./img/laptop.svg'
                alt='laptop'
                width={564}
                height={330}
                className='relative'
              />
              <Image
                src='./img/hipnode.svg'
                alt='laptop'
                width={460}
                height={0}
                className='absolute left-[125px] top-20 rounded-[8px]'
              />
            </section>
          </section>
        </section>
        <section className='flex justify-center'>
          <Link href='/'>
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
