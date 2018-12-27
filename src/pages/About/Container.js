import React from 'react';
import { Helmet } from 'react-helmet';
import { compose } from 'recompose';

import withScrollToTopOnMount from 'utils/withScrollToTopOnMount';
import withMenu from 'utils/withMenu';
import SecondaryLayout from 'layouts/SecondaryLayout';

import Main from 'components/Main';
import Heading from 'components/Typographies/Heading';
import SubHeading from 'components/Typographies/SubHeading';

import Bio from './components/Bio';
import Jobs from './components/Jobs';

const AboutContainer = () => (
  <SecondaryLayout>
    <Helmet>
      <title>About Me</title>
    </Helmet>
    <Main hasFooter page="about">
      <Heading>
        About <span className="text-brand">Me</span>
      </Heading>
      <SubHeading>Let me tell you a few things...</SubHeading>
      <Bio />
      <Jobs />
    </Main>
  </SecondaryLayout>
);

export default compose(
  withScrollToTopOnMount,
  withMenu,
)(AboutContainer);
