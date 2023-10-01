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
    <section className='flex justify-center bg-white-900 py-14 dark:bg-gray-900'>
      <section className=' flex max-w-[878px]  gap-44 '>
        <section className='flex flex-col gap-3'>
          <p className='text-lg font-semibold text-slate-500'>{role}</p>
          <h4 className='text-2xl font-semibold text-gray-900 dark:text-white-900'>
            {title}
          </h4>
        </section>
        <section className='flex flex-col gap-3'>
          <p className='text-lg font-semibold text-slate-500'>{startDate}</p>
          <h4 className='text-2xl font-semibold text-gray-900 dark:text-white-900'>
            {startDateString}
          </h4>
        </section>
        <section className='flex flex-col gap-3'>
          <p className='text-lg font-semibold text-slate-500'>{endDate}</p>
          <h4 className='text-2xl font-semibold text-gray-900 dark:text-white-900'>
            {endDateString}
          </h4>
        </section>
      </section>
    </section>
  );
};

export default RoleDetails;
