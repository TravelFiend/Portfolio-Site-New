import { ParallaxBanner } from 'react-scroll-parallax';
import HeroName from './HeroName';
import { EmailSVG, GithubSVG, InstaSVG, LinkedInSVG } from '../svgs/icons';
import useDimensions from '../hooks/useDimensions';

const HeroBanner = () => {
  const { width } = useDimensions();
  const isMobile = width < 768;
  const stars = isMobile ? 'assets/milkyWay-small.webp' : 'assets/milkyWay.webp';

  return (
    <ParallaxBanner className='hero-banner' layers={[
      {
        image: stars,
        amount: -0.15
      },
      {
        image: 'assets/rocks.webp',
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
