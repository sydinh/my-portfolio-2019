import React from 'react';
import { compose } from 'recompose';

import withScroll from 'utils/withScroll';
import withMenu from 'utils/withMenu';
import withPageTitle from 'utils/withPageTitle';
import SecondaryLayout from 'layouts/SecondaryLayout';

import Main from 'components/Main';
import Heading from 'components/Typographies/Heading';
import SubHeading from 'components/Typographies/SubHeading';

import List from './components/List';

const WorkContainer = () => (
  <SecondaryLayout>
    <Main hasFooter page="work">
      <Heading>
        My <span className="text-brand">Work</span>
      </Heading>
      <SubHeading>Check out some of my projects...</SubHeading>
      <List />
    </Main>
  </SecondaryLayout>
);

export default compose(
  withScroll,
  withMenu,
  withPageTitle('View My Work'),
)(WorkContainer);
