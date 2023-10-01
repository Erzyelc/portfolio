import React from 'react';

import Image from 'next/image';

type Props = { image: string };

const Figma = ({ image }: Props) => {
  return (
    <section>
      <Image src={image} alt='laptop' fill priority className='object-cover' />
    </section>
  );
};

export default Figma;
