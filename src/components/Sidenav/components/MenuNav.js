import React from 'react';
import { NavLink } from 'react-router-dom';

import * as ROUTES from 'constants/routes';

const MenuNav = () => {
  const props = {
    className: 'menu__nav-link',
    activeClassName: 'active',
  };

  return (
    <ul className="menu__nav">
      <li className="menu__nav-item">
        <NavLink exact to={ROUTES.HOME} {...props}>
          Home
        </NavLink>
      </li>
      <li className="menu__nav-item">
        <NavLink to={ROUTES.ABOUT} {...props}>
          About Me
        </NavLink>
      </li>
      <li className="menu__nav-item">
        <NavLink to={ROUTES.WORK} {...props}>
          My Work
        </NavLink>
      </li>
      <li className="menu__nav-item">
        <NavLink to={ROUTES.CONTACT} {...props}>
          How To Reach Me
        </NavLink>
      </li>
    </ul>
  );
};

export default MenuNav;
