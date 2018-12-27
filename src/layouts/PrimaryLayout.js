import React from 'react';
import PropTypes from 'prop-types';

const PrimaryLayout = ({ children }) => React.Children.toArray(children);

PrimaryLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrimaryLayout;
