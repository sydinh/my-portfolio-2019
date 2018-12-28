import React from 'react';
import classNames from 'classnames';

import MenuBrand from './components/MenuBrand';
import MenuNav from './components/MenuNav';

const Sidenav = ({ active }) => {
  const menuClass = classNames({ menu: true, active });

  return (
    <section className={menuClass}>
      <MenuBrand />
      <MenuNav />
    </section>
  );
};

export default Sidenav;
