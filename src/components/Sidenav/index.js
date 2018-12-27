import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import Portrait from 'images/portrait.jpg';
import * as routes from 'constants/routes';

const Sidenav = ({ active }) => {
  const menuClass = classNames({ menu: true, active });
  const props = {
    className: 'menu__nav-link',
    activeClassName: 'active',
  };

  return (
    <section className={menuClass}>
      <div className="menu__brand">
        <img src={Portrait} alt="My portrait" className="menu__brand-img" />
      </div>
      <ul className="menu__nav">
        <li className="menu__nav-item">
          <NavLink exact to={routes.HOME} {...props}>
            Home
          </NavLink>
        </li>
        <li className="menu__nav-item">
          <NavLink to={routes.ABOUT} {...props}>
            About Me
          </NavLink>
        </li>
        <li className="menu__nav-item">
          <NavLink to={routes.WORK} {...props}>
            My Work
          </NavLink>
        </li>
        <li className="menu__nav-item">
          <NavLink to={routes.CONTACT} {...props}>
            How To Reach Me
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Sidenav;
