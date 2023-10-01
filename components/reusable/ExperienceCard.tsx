import React from 'react';

type Props = {
  SvgIconComponent: React.ReactElement;
  title: string;
  description: string;
};

const ExperienceCard = ({ SvgIconComponent, title, description }: Props) => {
  const SvgIcon = { jsx: SvgIconComponent };

  return (
    <section className='flex w-full max-w-[607px] cursor-pointer gap-5 rounded-[10px] border border-sky-50 bg-white-900 px-5 py-8  transition-all hover:ml-10 hover:scale-105 hover:shadow-lg dark:border-gray-900 dark:bg-gray-900 dark:hover:bg-gray-800'>
      <section>
        <SvgIcon.jsx className='fill-gray-900 hover:fill-[#428DFF] dark:fill-white-900' />
      </section>
      <section>
        <h3 className='text-2xl font-semibold text-gray-900 dark:text-white-900'>
          {title}
        </h3>
        <p className='text-sm font-normal text-slate-500 dark:text-sky-50'>
          {description}
        </p>
      </section>
    </section>
  );
};

export default ExperienceCard;
