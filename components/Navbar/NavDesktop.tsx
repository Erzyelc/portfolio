import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const NavDesktop = () => {
  return (
    <nav>
      <ul>
        <Link href='/'>
          <Image src='/img/logo.svg' alt={'logo'} height={45} width={45} />
        </Link>
      </ul>
    </nav>
  );
};

export default NavDesktop;
