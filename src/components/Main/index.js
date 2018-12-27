import React, { Children } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Main = props => {
  const mainClass = classNames({
    page: true,
    'page--has-footer': props.hasFooter,
    [props.page]: props.page,
  });

  return (
    <main className={mainClass} role="main">
      {Children.toArray(props.children)}
    </main>
  );
};

Main.propTypes = {
  page: PropTypes.string.isRequired,
  hasFooter: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Main.defaultProps = {
  page: '',
  hasFooter: false,
};

export default Main;
