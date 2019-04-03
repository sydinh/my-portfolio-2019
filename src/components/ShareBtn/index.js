import React from 'react';

import { ReactComponent as IconFacebook } from 'images/facebook-brands.svg';
import { ReactComponent as IconTwitter } from 'images/twitter.svg';
import { ReactComponent as IconLinkedin } from 'images/linkedin-brands.svg';

const ShareBtn = () => {
  const url = 'my-portfolio-2019.firebaseapp.com';

  return (
    <ul className="share-btn">
      <li className="share-btn__item">
        <a
          href={`https://www.facebook.com/sharer.php?u=${url}`}
          className="share-btn__link is-facebook"
        >
          <IconFacebook className="share-btn__icon" />
        </a>
      </li>
      <li className="share-btn__item">
        <a
          href={`https://twitter.com/intent/tweet?url=${url}&text=SyDinh&via=sydinhhiep&hashtags=Twitter`}
          className="share-btn__link is-twitter"
        >
          <IconTwitter className="share-btn__icon" />
        </a>
      </li>
      <li className="share-btn__item">
        <a
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${url}`}
          className="share-btn__link is-linkedin"
        >
          <IconLinkedin className="share-btn__icon" />
        </a>
      </li>
    </ul>
  );
};

export default ShareBtn;
