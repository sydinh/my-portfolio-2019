import React from 'react';
import { HashRouter, BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';
import About from 'pages/About';
import Work from 'pages/Work';
import Contact from 'pages/Contact';
import NotFound from 'pages/NotFound';

import * as routes from 'constants/routes';

let Router = null;
const Routes = (
  <Switch>
    <Route exact path={routes.HOME} component={Home} />
    <Route path={routes.ABOUT} component={About} />
    <Route path={routes.WORK} component={Work} />
    <Route path={routes.CONTACT} component={Contact} />
    <Route component={NotFound} />
  </Switch>
);

if (process.env.NODE_ENV === 'production') {
  Router = <HashRouter>{Routes}</HashRouter>;
} else {
  Router = <BrowserRouter>{Routes}</BrowserRouter>;
}

export default Router;
