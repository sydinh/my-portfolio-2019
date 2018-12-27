import React from 'react';

import Main from 'components/Main';
import { ReactComponent as TailSpin } from 'images/tail-spin.svg';

const Loading = () => (
  <Main page="loading">
    <TailSpin />
  </Main>
);

export default Loading;
