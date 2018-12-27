import React from 'react';
import PropTypes from 'prop-types';

import Project from 'images/project.jpg';
import { ReactComponent as Eye } from 'images/eye.svg';
import { ReactComponent as Github } from 'images/github.svg';

const ProjectCard = ({ live, source }) => {
  const props = {
    target: '_blank',
    rel: 'noopener noreferrer',
  };

  return (
    <div className="project">
      <a href={live} className="project__img-container" {...props}>
        <img src={Project} alt="Project screenshot" className="project__img" />
      </a>
      <a href={live} className="project__btn project__btn-light" {...props}>
        <Eye className="project__btn-icon" />
        Project
      </a>
      <a href={source} className="project__btn project__btn-dark" {...props}>
        <Github className="project__btn-icon" />
        Github
      </a>
    </div>
  );
};

ProjectCard.propTypes = {
  live: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
};

export default ProjectCard;
