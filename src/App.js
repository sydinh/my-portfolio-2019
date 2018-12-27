import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';
import About from 'pages/About';
import Work from 'pages/Work';
import Contact from 'pages/Contact';
import NotFound from 'pages/NotFound';

import * as routes from 'constants/routes';

class App extends Component {
  componentDidMount() {
    document.body.classList.remove('menu-active');
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path={routes.HOME} component={Home} />
          <Route path={routes.ABOUT} component={About} />
          <Route path={routes.WORK} component={Work} />
          <Route path={routes.CONTACT} component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
