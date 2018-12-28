import React from 'react';

import { ReactComponent as Twitter } from 'images/twitter.svg';
import { ReactComponent as Facebook } from 'images/facebook.svg';
import { ReactComponent as Linkedin } from 'images/linkedin.svg';
import { ReactComponent as Github } from 'images/github.svg';

const List = () => {
  const props = {
    className: 'home__item',
    target: '_blank',
    rel: 'noopener noreferrer',
  };

  return (
    <div className="home__list">
      <a href="https://twitter.com/sydinhhiep" {...props}>
        <Twitter className="home__icon" />
      </a>
      <a href="https://www.facebook.com/sydinhhiep" {...props}>
        <Facebook className="home__icon" />
      </a>
      <a href="https://www.linkedin.com/in/sydinh/" {...props}>
        <Linkedin className="home__icon" />
      </a>
      <a href="https://github.com/sydinh" {...props}>
        <Github className="home__icon" />
      </a>
    </div>
  );
};

export default List;
