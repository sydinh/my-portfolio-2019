import React from 'react';
import { Helmet } from 'react-helmet';
import { compose } from 'recompose';

import withScrollToTopOnMount from 'utils/withScrollToTopOnMount';
import withMenu from 'utils/withMenu';
import PrimaryLayout from 'layouts/PrimaryLayout';

import Main from 'components/Main';
import Heading from 'components/Typographies/Heading';
import SubHeading from 'components/Typographies/SubHeading';

import { ReactComponent as Twitter } from 'images/twitter.svg';
import { ReactComponent as Facebook } from 'images/facebook.svg';
import { ReactComponent as Linkedin } from 'images/linkedin.svg';
import { ReactComponent as Github } from 'images/github.svg';

const HomeContainer = () => {
  const props = {
    className: 'home__item',
    target: '_blank',
    rel: 'noopener noreferrer',
  };

  return (
    <PrimaryLayout>
      <Helmet>
        <title>Welcome To My Portfolio</title>
      </Helmet>
      <Main page="home">
        <Heading>
          Sy <span className="text-brand">Dinh</span>
        </Heading>
        <SubHeading>A front-end developer based in Viet Nam</SubHeading>
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
      </Main>
    </PrimaryLayout>
  );
};

export default compose(
  withScrollToTopOnMount,
  withMenu,
)(HomeContainer);
