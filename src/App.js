import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';
import About from 'pages/About';
import Work from 'pages/Work';
import Contact from 'pages/Contact';
import NotFound from 'pages/NotFound';

import * as routes from 'constants/routes';

class App extends Component {
  componentDidMount() {
    console.log(
      '%c Rainbowww!',
      'font-weight: 700; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)',
    );
  }

  render() {
    return (
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
  }
}

export default App;
