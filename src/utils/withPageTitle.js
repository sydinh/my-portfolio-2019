/**
 * withPageTitle
 *
 * A Component Wrapper - Allow rendering page title flexiblely
 */

import React from 'react';

const withPageTitle = title => WrappedComponent => {
  class PageTitle extends React.Component {
    componentDidMount() {
      document.title = title;
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  return PageTitle;
};

export default withPageTitle;
