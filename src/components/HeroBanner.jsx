import { ParallaxBanner } from 'react-scroll-parallax';
import HeroName from './HeroName';
import { EmailSVG, GithubSVG, InstaSVG, LinkedInSVG } from '../svgs/icons';

const HeroBanner = () => {
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
        <div className="social">
          <LinkedInSVG />
          <GithubSVG />
          <EmailSVG />
          <InstaSVG />
        </div>
      </div>
    </ParallaxBanner>
  );
};

export default HeroBanner;
