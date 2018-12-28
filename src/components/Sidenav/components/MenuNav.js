import React from 'react';
import { NavLink } from 'react-router-dom';

import * as routes from 'constants/routes';

const MenuNav = () => {
  const props = {
    className: 'menu__nav-link',
    activeClassName: 'active',
  };

  return (
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
  );
};

export default MenuNav;
