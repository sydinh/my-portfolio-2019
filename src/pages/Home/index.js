import React, { lazy, Suspense } from 'react';

import Loading from 'components/Loading';
import ErrorBoundary from 'components/ErrorBoundary';

const LazyLoadedContainer = lazy(() => import('./Container'));

const Home = () => (
  <ErrorBoundary>
    <Suspense fallback={<Loading />}>
      <LazyLoadedContainer />
    </Suspense>
  </ErrorBoundary>
);

export default Home;
