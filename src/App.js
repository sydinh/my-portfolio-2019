import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';
import About from 'pages/About';
import Work from 'pages/Work';
import Contact from 'pages/Contact';
import NotFound from 'pages/NotFound';

import * as routes from 'constants/routes';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={routes.HOME} component={Home} />
      <Route path={routes.ABOUT} component={About} />
      <Route path={routes.WORK} component={Work} />
      <Route path={routes.CONTACT} component={Contact} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
