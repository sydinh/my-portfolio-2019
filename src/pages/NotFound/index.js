import React, { lazy, Suspense } from 'react';

import Loading from 'components/Loading';
import ErrorBoundary from 'utils/ErrorBoundary';

const LazyLoadedContainer = lazy(() => import('./Container'));

const NotFound = () => (
  <ErrorBoundary>
    <Suspense fallback={<Loading />}>
      <LazyLoadedContainer />
    </Suspense>
  </ErrorBoundary>
);

export default NotFound;
