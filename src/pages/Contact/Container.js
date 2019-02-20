import React from 'react';
import { Helmet } from 'react-helmet';
import { compose } from 'recompose';

import withScroll from 'utils/withScroll';
import withMenu from 'utils/withMenu';
import SecondaryLayout from 'layouts/SecondaryLayout';

import Main from 'components/Main';
import Heading from 'components/Typographies/Heading';
import SubHeading from 'components/Typographies/SubHeading';

import List from './components/List';

const ContactContainer = () => (
  <SecondaryLayout>
    <Helmet>
      <title>Contact Me</title>
    </Helmet>
    <Main hasFooter page="contact">
      <Heading>
        Contact <span className="text-brand">Me</span>
      </Heading>
      <SubHeading>This is how you can reach me...</SubHeading>
      <List />
    </Main>
  </SecondaryLayout>
);

export default compose(
  withScroll,
  withMenu,
)(ContactContainer);
