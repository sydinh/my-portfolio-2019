import React from 'react';

import ProjectCard from 'components/Cards/ProjectCard';
import { data as projects } from './mockAPI';

const Projects = () => (
  <div className="work__list">
    {projects.map(project => (
      <div key={project.id} className="work__item">
        <ProjectCard live={project.live} source={project.source} />
      </div>
    ))}
  </div>
);

export default Projects;
