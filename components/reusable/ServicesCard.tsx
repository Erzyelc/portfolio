import React from 'react';
import Image from 'next/image';

type Props = {
  image: string;
  title: string;
  description: string;
};

const ServicesCard = ({ image, title, description }: Props) => {
  return (
    <section className='flex flex-col justify-around gap-7 rounded-[10px] bg-sky-50 p-8 text-gray-900  shadow-lg transition-all hover:scale-110 hover:bg-blue-700 hover:text-white-900 dark:bg-gray-800 dark:text-white-900 dark:hover:bg-blue-500'>
      <div className='w-fit rounded-[10px] bg-blue-700 p-4 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] dark:bg-blue-500'>
        <Image src={image} alt='skill' height={24} width={24} />
      </div>
      <h3 className='text-2xl font-semibold  '>{title}</h3>
      <p className='w-[233px] text-sm font-normal dark:text-sky-50'>
        {description}
      </p>
    </section>
  );
};

export default ServicesCard;
