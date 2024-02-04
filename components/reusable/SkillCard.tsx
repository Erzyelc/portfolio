import React from 'react';
import Image from 'next/image';

type Props = {
  image: string;
  styles?: string;
};

const SkillCard = ({ image, styles }: Props) => {
  return (
    <section className='flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-full bg-sky-50 transition-all hover:scale-110  hover:bg-white-900 hover:drop-shadow-md  dark:bg-gray-800 hover:dark:bg-gray-800   md:h-[100px] md:w-[100px]'>
      <Image
        src={image}
        alt='skill'
        height={30}
        width={30}
        className={styles}
      />
    </section>
  );
};

export default SkillCard;
