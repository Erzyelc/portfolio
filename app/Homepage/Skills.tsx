'use client';

import Link from 'next/link';
import SkillCard from '../../components/reusable/SkillCard';
import * as HoverCard from '@radix-ui/react-hover-card';

const Skills = () => {
  return (
    <section className='mt-32 flex h-[500px] flex-col items-center justify-center gap-10 bg-white-900 dark:bg-gray-900'>
      <section className='flex justify-center'>
        <h2 className='relative w-fit text-gray-900 dark:text-white-900'>
          <div className='relative z-10'>My Skills</div>
          <div className='absolute bottom-0.5 z-0 h-3.5 w-full bg-accent' />
        </h2>
      </section>
      <section className='flex h-64 w-[1270px] flex-wrap items-center justify-center gap-10'>
        <HoverCard.Root>
          <HoverCard.Trigger>
            <SkillCard
              image='/icons/jsColored.svg'
              styles={'grayscale hover:grayscale-0'}
            />
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content className='data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade flex w-[300px] flex-col justify-center  gap-6 rounded-[10px] bg-white-900 p-20 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all'>
              <HoverCard.Arrow />
              <h4 className='text-[32px] font-semibold text-gray-900'>
                JavaScript
              </h4>
              <Link href='/caseStudies'>
                <h5 className='text-sm font-thin text-gray-800'>
                  View Projects With JavaScript
                </h5>
              </Link>
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
        <HoverCard.Root>
          <HoverCard.Trigger>
            <SkillCard
              image='/icons/react.svg'
              styles={'grayscale hover:grayscale-0'}
            />
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content className='data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade flex w-[300px] flex-col justify-center  gap-6 rounded-[10px] bg-white-900 p-20 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all'>
              <HoverCard.Arrow />
              <h4 className='text-[32px] font-semibold text-gray-900'>React</h4>
              <Link href='/caseStudies'>
                <h5 className='text-sm font-thin text-gray-800'>
                  View Projects With React
                </h5>
              </Link>
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
        <HoverCard.Root>
          <HoverCard.Trigger>
            <SkillCard
              image='/icons/reduxColored.svg'
              styles={'grayscale hover:grayscale-0'}
            />
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content className='data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade flex w-[300px] flex-col justify-center  gap-6 rounded-[10px] bg-white-900 p-20 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all'>
              <HoverCard.Arrow />
              <h4 className='text-[32px] font-semibold text-gray-900'>Redux</h4>
              <Link href='/caseStudies'>
                <h5 className='text-sm font-thin text-gray-800'>
                  View Projects With Redux
                </h5>
              </Link>
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
        <HoverCard.Root>
          <HoverCard.Trigger>
            <SkillCard
              image='/icons/nextColored.svg'
              styles={'grayscale hover:grayscale-0'}
            />
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content className='data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade flex w-[300px] flex-col justify-center  gap-6 rounded-[10px] bg-white-900 p-20 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all'>
              <HoverCard.Arrow />
              <h4 className='text-[32px] font-semibold text-gray-900'>
                Next.JS
              </h4>
              <Link href='/caseStudies'>
                <h5 className='text-sm font-thin text-gray-800'>
                  View Projects With Next.JS
                </h5>
              </Link>
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
        <HoverCard.Root>
          <HoverCard.Trigger>
            <SkillCard
              image='/icons/tsColored.svg'
              styles={'grayscale hover:grayscale-0'}
            />
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content className='data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade flex w-[300px] flex-col justify-center  gap-6 rounded-[10px] bg-white-900 p-20 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all'>
              <HoverCard.Arrow />
              <h4 className='text-[32px] font-semibold text-gray-900'>
                TypeScript
              </h4>
              <Link href='/caseStudies'>
                <h5 className='text-sm font-thin text-gray-800'>
                  View Projects With Typescript
                </h5>
              </Link>
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
        <HoverCard.Root>
          <HoverCard.Trigger>
            <SkillCard
              image='/icons/htmlColored.svg'
              styles={'grayscale hover:grayscale-0'}
            />
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content className='data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade flex w-[300px] flex-col justify-center  gap-6 rounded-[10px] bg-white-900 p-20 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all'>
              <HoverCard.Arrow />
              <h4 className='text-[32px] font-semibold text-gray-900'>HTML</h4>
              <Link href='/caseStudies'>
                <h5 className='text-sm font-thin text-gray-800'>
                  View Projects With HTML
                </h5>
              </Link>
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
        <HoverCard.Root>
          <HoverCard.Trigger>
            <SkillCard
              image='/icons/cssColored.svg'
              styles={'grayscale hover:grayscale-0'}
            />
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content className='data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade flex w-[300px] flex-col justify-center  gap-6 rounded-[10px] bg-white-900 p-20 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all'>
              <HoverCard.Arrow />
              <h4 className='text-[32px] font-semibold text-gray-900'>CSS</h4>
              <Link href='/caseStudies'>
                <h5 className='text-sm font-thin text-gray-800'>
                  View Projects With CSS
                </h5>
              </Link>
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
        <HoverCard.Root>
          <HoverCard.Trigger>
            <SkillCard
              image='/icons/sassColored.svg'
              styles={'grayscale hover:grayscale-0'}
            />
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content className='data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade flex w-[300px] flex-col justify-center  gap-6 rounded-[10px] bg-white-900 p-20 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all'>
              <HoverCard.Arrow />
              <h4 className='text-[32px] font-semibold text-gray-900'>SASS</h4>
              <Link href='/caseStudies'>
                <h5 className='text-sm font-thin text-gray-800'>
                  View Projects With SASS
                </h5>
              </Link>
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
        <HoverCard.Root>
          <HoverCard.Trigger>
            <SkillCard
              image='/icons/muiColored.svg'
              styles={'grayscale hover:grayscale-0'}
            />
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content className='data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade flex w-[300px] flex-col justify-center  gap-6 rounded-[10px] bg-white-900 p-20 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all'>
              <HoverCard.Arrow />
              <h4 className='text-[32px] font-semibold text-gray-900'>
                Material UI
              </h4>
              <Link href='/caseStudies'>
                <h5 className='text-sm font-thin text-gray-800'>
                  View Projects With Material UI
                </h5>
              </Link>
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
        <HoverCard.Root>
          <HoverCard.Trigger>
            <SkillCard
              image='/icons/tailwindColored.svg'
              styles={'grayscale hover:grayscale-0'}
            />
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content className='data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade flex w-[300px] flex-col justify-center  gap-6 rounded-[10px] bg-white-900 p-20 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all'>
              <HoverCard.Arrow />
              <h4 className='text-[32px] font-semibold text-gray-900'>
                Tailwind
              </h4>
              <Link href='/caseStudies'>
                <h5 className='text-sm font-thin text-gray-800'>
                  View Projects With Tailwind
                </h5>
              </Link>
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
        <HoverCard.Root>
          <HoverCard.Trigger>
            <SkillCard
              image='/icons/motionColored.svg'
              styles={'grayscale hover:grayscale-0'}
            />
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content className='data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade flex w-[300px] flex-col justify-center  gap-6 rounded-[10px] bg-white-900 p-20 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all'>
              <HoverCard.Arrow />
              <h4 className='text-[32px] font-semibold text-gray-900'>
                Framer Motion
              </h4>
              <Link href='/caseStudies'>
                <h5 className='text-sm font-thin text-gray-800'>
                  View Projects With Framer Motion
                </h5>
              </Link>
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
        <HoverCard.Root>
          <HoverCard.Trigger>
            <SkillCard
              image='/icons/gitColored.svg'
              styles={'grayscale hover:grayscale-0'}
            />
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content className='data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade flex w-[300px] flex-col justify-center  gap-6 rounded-[10px] bg-white-900 p-20 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all'>
              <HoverCard.Arrow />
              <h4 className='text-[32px] font-semibold text-gray-900'>Git</h4>
              <Link href='/caseStudies'>
                <h5 className='text-sm font-thin text-gray-800'>
                  View Projects using Git
                </h5>
              </Link>
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
        <HoverCard.Root>
          <HoverCard.Trigger>
            <SkillCard
              image='/icons/githubColored.svg'
              styles={'grayscale hover:grayscale-0'}
            />
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content className='data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade z-50 flex w-[300px] flex-col justify-center  gap-6 rounded-[10px] bg-white-900 p-20 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all'>
              <HoverCard.Arrow />
              <h4 className='text-[32px] font-semibold text-gray-900'>
                Github
              </h4>
              <Link href='/caseStudies'>
                <h5 className='text-sm font-thin text-gray-800'>
                  View Projects On Github
                </h5>
              </Link>
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
        <HoverCard.Root>
          <HoverCard.Trigger>
            <SkillCard
              image='/icons/nodejsColored.svg'
              styles={'grayscale hover:grayscale-0'}
            />
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content className='data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade flex w-[300px] flex-col justify-center  gap-6 rounded-[10px] bg-white-900 p-20 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all'>
              <HoverCard.Arrow />
              <h4 className='text-[32px] font-semibold text-gray-900'>
                Node.JS
              </h4>
              <Link href='/caseStudies'>
                <h5 className='text-sm font-thin text-gray-800'>
                  View Projects With Node.JS
                </h5>
              </Link>
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
        <HoverCard.Root>
          <HoverCard.Trigger>
            <SkillCard
              image='/icons/exColored.svg'
              styles={'grayscale hover:grayscale-0'}
            />
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content className='data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade flex w-[300px] flex-col justify-center  gap-6 rounded-[10px] bg-white-900 p-20 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all'>
              <HoverCard.Arrow />
              <h4 className='text-[32px] font-semibold text-gray-900'>
                Express
              </h4>
              <Link href='/caseStudies'>
                <h5 className='text-sm font-thin text-gray-800'>
                  View Projects With Express
                </h5>
              </Link>
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
        <HoverCard.Root>
          <HoverCard.Trigger>
            <SkillCard
              image='/icons/mongodbColored.svg'
              styles={'grayscale hover:grayscale-0'}
            />
          </HoverCard.Trigger>
          <HoverCard.Portal>
            <HoverCard.Content className='data-[side=bottom]:animate-slideUpAndFade data-[side=right]:animate-slideLeftAndFade data-[side=left]:animate-slideRightAndFade data-[side=top]:animate-slideDownAndFade flex w-[300px] flex-col justify-center  gap-6 rounded-[10px] bg-white-900 p-20 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] data-[state=open]:transition-all'>
              <HoverCard.Arrow />
              <h4 className='text-[32px] font-semibold text-gray-900'>
                MongoDB
              </h4>
              <Link href='/caseStudies'>
                <h5 className='text-sm font-thin text-gray-800'>
                  View Projects With MongoDB
                </h5>
              </Link>
            </HoverCard.Content>
          </HoverCard.Portal>
        </HoverCard.Root>
      </section>
    </section>
  );
};

export default Skills;
