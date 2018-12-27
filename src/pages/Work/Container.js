import React from 'react';
import { Helmet } from 'react-helmet';
import { compose } from 'recompose';

import withScrollToTopOnMount from 'utils/withScrollToTopOnMount';
import withMenu from 'utils/withMenu';
import SecondaryLayout from 'layouts/SecondaryLayout';

import Main from 'components/Main';
import Heading from 'components/Typographies/Heading';
import SubHeading from 'components/Typographies/SubHeading';

import Projects from './components/Projects';

const WorkContainer = () => (
  <SecondaryLayout>
    <Helmet>
      <title>View My Work</title>
    </Helmet>
    <Main hasFooter page="work">
      <Heading>
        My <span className="text-brand">Work</span>
      </Heading>
      <SubHeading>Check out some of my projects...</SubHeading>
      <Projects />
    </Main>
  </SecondaryLayout>
);

export default compose(
  withScrollToTopOnMount,
  withMenu,
)(WorkContainer);
