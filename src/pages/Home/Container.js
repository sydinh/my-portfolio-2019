import React from 'react';
import { compose } from 'recompose';

import withScroll from 'utils/withScroll';
import withMenu from 'utils/withMenu';
import withPageTitle from 'utils/withPageTitle';
import PrimaryLayout from 'layouts/PrimaryLayout';

import Main from 'components/Main';
import Heading from 'components/Typographies/Heading';
import SubHeading from 'components/Typographies/SubHeading';

import List from './components/List';

const HomeContainer = () => (
  <PrimaryLayout>
    <Main page="home">
      <Heading>
        Sy <span className="text-brand">Dinh</span>
      </Heading>
      <SubHeading>A front-end developer based in Viet Nam</SubHeading>
      <List />
    </Main>
  </PrimaryLayout>
);

export default compose(
  withScroll,
  withMenu,
  withPageTitle('Welcome To My Portfolio'),
)(HomeContainer);
