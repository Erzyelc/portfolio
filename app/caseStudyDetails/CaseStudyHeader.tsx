import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CardBody, CardContainer, CardItem } from '../../components/ui/3d-card';

type Props = {
  title: string;
  description: string;
  image: string;
  demoLink: string;
  sourceCodeLink: string;
};

const CaseStudyHeader = ({
  title,
  description,
  image,
  demoLink,
  sourceCodeLink,
}: Props) => {
  return (
    <section className='flex flex-col items-center justify-center gap-12 pb-14 pt-20 md:gap-10'>
      <div className='flex flex-col items-center justify-center gap-3  text-center'>
        <h2 className='text-sm font-semibold text-blue-700 md:text-xl'>
          {description}
        </h2>
        <h1 className='px-10 text-[42px] font-bold text-gray-900 dark:text-white-900 md:px-0 md:text-[64px]'>
          <div className='relative w-fit'>
            <div className='relative z-10'>{title}</div>
            <div className='absolute bottom-0.5 z-0 hidden h-6 w-[262px] bg-accent lg:flex' />
          </div>
        </h1>
      </div>

      <section className='relative flex h-full w-1/2 justify-center'>
        <CardContainer>
          <CardBody>
            <CardItem>
              <Image src={image} alt='project-photo' height={700} width={700} />
            </CardItem>
          </CardBody>
        </CardContainer>
      </section>
      <section className='flex flex-row gap-8 px-10 text-sm font-semibold text-blue-700 md:gap-24 md:px-0 md:text-xl'>
        <Link
          href={demoLink}
          target='_blank'
          className='flex items-center gap-2'
        >
          <Image src='/icons/globe.svg' width={20} height={0} alt='globe' />
          Demo Site
          <Image src='/icons/arrowmini.svg' width={20} height={0} alt='arrow' />
        </Link>
        <Link
          href={sourceCodeLink}
          target='_blank'
          className='flex items-center gap-2'
        >
          <Image src='/icons/minigit.svg' width={20} height={0} alt='gitmini' />
          Source Code
          <Image src='/icons/arrowmini.svg' width={20} height={0} alt='arrow' />
        </Link>
      </section>
    </section>
  );
};

export default CaseStudyHeader;
