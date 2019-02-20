import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import withScroll from 'utils/withScroll';
import PrimaryLayout from 'layouts/PrimaryLayout';
import * as ROUTES from 'constants/routes';

import Main from 'components/Main';

const NotFoundContainer = () => (
  <PrimaryLayout>
    <Helmet>
      <title>Not Found</title>
    </Helmet>
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

export default withScroll(NotFoundContainer);
