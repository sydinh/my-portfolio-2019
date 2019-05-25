import React from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'recompose';

import withScroll from 'utils/withScroll';
import withPageTitle from 'utils/withPageTitle';
import PrimaryLayout from 'layouts/PrimaryLayout';
import * as ROUTES from 'constants/routes';

import Main from 'components/Main';

const NotFoundContainer = () => (
  <PrimaryLayout>
    <Main page="notfound">
      <div className="notfound__logo">404</div>
      <h1 className="notfound__title text-brand">Sorry, page not found!</h1>
      <h4 className="notfound__subtitle">It seems like you are heading in the wrong direction</h4>
      <Link to={ROUTES.HOME} className="text-brand">
        Go to the homepage
      </Link>
    </Main>
  </PrimaryLayout>
);

export default compose(
  withScroll,
  withPageTitle('Not Found'),
)(NotFoundContainer);
