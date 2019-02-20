/**
 * withMenu
 *
 * A Component Wrapper - Reused Menu in all pages related
 */

import React from 'react';

import MenuBtn from 'components/MenuBtn';
import Sidenav from 'components/Sidenav';

const withMenu = WrappedComponent => {
  class Menu extends React.Component {
    static getDerivedStateFromProps(_, state) {
      if (state.isSidenavActive) {
        document.body.classList.add('menu-active');
      } else {
        document.body.classList.remove('menu-active');
      }
      return null;
    }

    constructor(props) {
      super(props);
      this.state = { isSidenavActive: false };
    }

    componentDidMount() {
      document.body.classList.remove('menu-active');
    }

    handleMenuBtnClick = () => {
      this.setState(prevState => {
        return { isSidenavActive: !prevState.isSidenavActive };
      });
    };

    render() {
      return (
        <React.Fragment>
          <MenuBtn onClick={this.handleMenuBtnClick} close={this.state.isSidenavActive} />
          <Sidenav active={this.state.isSidenavActive} />
          <WrappedComponent {...this.props} />
        </React.Fragment>
      );
    }
  }

  return Menu;
};

export default withMenu;
