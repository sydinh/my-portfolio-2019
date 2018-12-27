import React from 'react';
import PropTypes from 'prop-types';

import Footer from 'components/Footer';

const SecondaryLayout = ({ children }) => (
  <React.Fragment>
    {React.Children.toArray(children)}
    <Footer />
  </React.Fragment>
);

SecondaryLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SecondaryLayout;
