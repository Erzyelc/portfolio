import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const NavMobile = () => {
  return (
    <nav>
      <ul>
        <Link href='/'>
          <Image src='/img/logo.svg' alt={'logo'} height={45} width={45} />
        </Link>
      </ul>
      <div className='h-5 w-10 bg-black-400'>test</div>
    </nav>
  );
};

export default NavMobile;
