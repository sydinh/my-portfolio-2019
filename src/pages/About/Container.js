import React from 'react';
import { compose } from 'recompose';

import withScroll from 'utils/withScroll';
import withMenu from 'utils/withMenu';
import withPageTitle from 'utils/withPageTitle';
import SecondaryLayout from 'layouts/SecondaryLayout';

import Main from 'components/Main';
import Heading from 'components/Typographies/Heading';
import SubHeading from 'components/Typographies/SubHeading';

import Bio from './components/Bio';
import Jobs from './components/Jobs';

const AboutContainer = () => (
  <SecondaryLayout>
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
  withScroll,
  withMenu,
  withPageTitle('About Me'),
)(AboutContainer);
