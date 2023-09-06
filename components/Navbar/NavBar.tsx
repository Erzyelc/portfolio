import React from 'react';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

const NavBar = () => {
  <section className='sticky top-0 z-50'>
    <section className='hidden lg:block'>
      <NavDesktop />
    </section>
    <section className='block lg:hidden'>
      <NavMobile />
    </section>
  </section>;
};

export default NavBar;
