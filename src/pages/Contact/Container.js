import React from 'react';
import { Helmet } from 'react-helmet';
import { compose } from 'recompose';

import withScrollToTopOnMount from 'utils/withScrollToTopOnMount';
import withMenu from 'utils/withMenu';
import SecondaryLayout from 'layouts/SecondaryLayout';

import Main from 'components/Main';
import Heading from 'components/Typographies/Heading';
import SubHeading from 'components/Typographies/SubHeading';

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
      <div className="contact__list">
        <div className="contact__item">
          <span className="text-brand">Email:</span>
          sydinh.dev@gmail.com
        </div>
        <div className="contact__item">
          <span className="text-brand">Phone:</span>
          (+84) 348 019 521
        </div>
        <div className="contact__item">
          <span className="text-brand">Address:</span>
          Da nang, Viet nam
        </div>
      </div>
    </Main>
  </SecondaryLayout>
);

export default compose(
  withScrollToTopOnMount,
  withMenu,
)(ContactContainer);
