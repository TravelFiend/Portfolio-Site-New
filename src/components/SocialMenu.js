import React from 'react';
import useScrollPosition from '../hooks/useScrollPosition';
import { EmailSVG, GithubSVG, InstaSVG, LinkedInSVG } from '../svgs/icons';


const SocialMenu = () => {
  const { isScrolled } = useScrollPosition(220);

  return (
    <div className={`social-menu ${!isScrolled && 'social-menu__hide'}`}>
      <LinkedInSVG />
      <GithubSVG />
      <EmailSVG />
      <InstaSVG />
    </div>
  )
};

export default SocialMenu;
