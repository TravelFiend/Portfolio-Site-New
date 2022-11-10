import React, { useEffect } from 'react';
import useScrollPosition from '../hooks/scrollPosition';
import PropTypes from 'prop-types';
import HeroBanner from '../components/HeroBanner';
import HeroImageRow from '../components/HeroImageRow';


const Hero = () => {
  const { yPos } = useScrollPosition();

  useEffect(() => {
    console.log({ yPos });
  }, [yPos])

  return (
    <section className='section-hero'>
      <HeroBanner />
      <HeroImageRow />
    </section>
  )
};

Hero.propTypes = {
  yPos: PropTypes.number.isRequired
};

export default Hero;
