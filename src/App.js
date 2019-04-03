import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';
import About from 'pages/About';
import Work from 'pages/Work';
import Contact from 'pages/Contact';
import NotFound from 'pages/NotFound';
import ShareBtn from 'components/ShareBtn';

import * as ROUTES from 'constants/routes';

class App extends Component {
  componentDidMount() {
    console.log(
      '%c Rainbowww!',
      'font-weight: 700; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)',
    );
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.ABOUT} component={About} />
            <Route path={ROUTES.WORK} component={Work} />
            <Route path={ROUTES.CONTACT} component={Contact} />
            <Route component={NotFound} />
          </Switch>
          <ShareBtn />
        </Fragment>
      </Router>
    );
  }
}

export default App;
