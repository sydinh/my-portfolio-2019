import React from 'react';
import { Helmet } from 'react-helmet';
import { compose } from 'recompose';

import withScroll from 'utils/withScroll';
import withMenu from 'utils/withMenu';
import PrimaryLayout from 'layouts/PrimaryLayout';

import Main from 'components/Main';
import Heading from 'components/Typographies/Heading';
import SubHeading from 'components/Typographies/SubHeading';

import List from './components/List';

const HomeContainer = () => (
  <PrimaryLayout>
    <Helmet>
      <title>Welcome To My Portfolio</title>
    </Helmet>
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
)(HomeContainer);
