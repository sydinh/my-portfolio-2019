import React from 'react';
import PropTypes from 'prop-types';

const JobCard = props => (
  <div className="job">
    <h4 className="job__title">{props.title}</h4>
    <h6 className="job__subtitle">{props.subtitle}</h6>
    <p className="job__desc">{props.desc}</p>
  </div>
);

JobCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default JobCard;
