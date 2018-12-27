import React from 'react';
import PropTypes from 'prop-types';

const SubHeading = ({ children }) => (
  <h2 className="page__subtitle">{React.Children.toArray(children)}</h2>
);

SubHeading.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SubHeading;
