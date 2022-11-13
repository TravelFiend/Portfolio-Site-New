import React, { useEffect, useRef } from 'react';
import useScrollPosition from '../hooks/useScrollPosition';
import { ParallaxBanner } from 'react-scroll-parallax';
import HeroName from './HeroName';
import { EmailSVG, GithubSVG, InstaSVG, LinkedInSVG } from '../svgs/icons';


const HeroBanner = () => {
  const renderCounter = useRef(0);
  const { isScrolled } = useScrollPosition(150);

  let doneItOnce = false;
  useEffect(() => {
    if (isScrolled && !doneItOnce) {
      if (renderCounter.current === 0) {
        renderCounter.current = renderCounter.current + 1;
      }
      doneItOnce = true;
    }
  }, [isScrolled])

  return (
    <ParallaxBanner className='hero-banner' layers={[
      {
        image: 'assets/milkyWay.jpg',
        amount: -0.15
      },
      {
        image: 'assets/rocks.png',
        amount: 0.2
      }]} style={{ height: '86vh' }}
    >
      <div className="hero-banner__text">
        <HeroName />
        <h2>Software Developer</h2>
        <div className={`${renderCounter.current === 0 && 'showSocial'} ${isScrolled ? '' : ''}`}>
          <LinkedInSVG />
          <GithubSVG />
          <EmailSVG />
          <InstaSVG />
        </div>
      </div>
    </ParallaxBanner>
  )
}

export default HeroBanner;
