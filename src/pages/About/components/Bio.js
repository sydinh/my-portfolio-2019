import React from 'react';

import Portrait from 'images/portrait.jpg';

const Bio = () => (
  <div className="about__bio">
    <img src={Portrait} alt="My portrait" className="about__bio-img" />
    <div className="about__bio-content">
      <h2 className="about__bio-title text-brand">Bio</h2>
      <p className="about__bio-desc">
        I believe in "HTML for the content, CSS for the presentation, JavaScript for the
        interaction".
      </p>
      <p className="about__bio-desc">And, I am here to do all these interesting things.</p>
    </div>
  </div>
);

export default Bio;
