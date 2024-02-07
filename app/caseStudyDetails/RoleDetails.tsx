import React from 'react';

type Props = {
  role: string;
  title: string;
  startDate: string;
  endDate: string;
  startDateString: string;
  endDateString: string;
};

const RoleDetails = ({
  role,
  title,
  startDate,
  endDate,
  startDateString,
  endDateString,
}: Props) => {
  return (
    <section className='flex bg-white-900 py-10 pl-12 dark:bg-gray-900 md:justify-center md:py-14 md:pl-0'>
      <section className='flex max-w-[878px] flex-col gap-14  md:flex-row  md:gap-44 '>
        <section className='flex flex-col gap-3'>
          <p className='text-lg font-semibold text-slate-500'>{role}</p>
          <h4 className='text-[20px] font-semibold text-gray-900 dark:text-white-900 md:text-2xl'>
            {title}
          </h4>
        </section>
        <section className='flex flex-col gap-3'>
          <p className='text-lg font-semibold text-slate-500'>{startDate}</p>
          <h4 className='text-[20px]  font-semibold text-gray-900 dark:text-white-900 md:text-2xl'>
            {startDateString}
          </h4>
        </section>
        <section className='flex flex-col gap-3'>
          <p className='text-lg font-semibold text-slate-500'>{endDate}</p>
          <h4 className='text-[20px]  font-semibold text-gray-900 dark:text-white-900 md:text-2xl'>
            {endDateString}
          </h4>
        </section>
      </section>
    </section>
  );
};

export default RoleDetails;
