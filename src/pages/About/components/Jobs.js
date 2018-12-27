import React from 'react';

import JobCard from 'components/Cards/JobCard';
import { data as jobs } from './mockAPI';

const Jobs = () => (
  <div className="about__jobs">
    {jobs.map(job => (
      <div key={job.id} className="about__jobs-item">
        <JobCard title={job.worked_at} subtitle={job.worked_with_role} desc={job.description} />
      </div>
    ))}
  </div>
);

export default Jobs;
