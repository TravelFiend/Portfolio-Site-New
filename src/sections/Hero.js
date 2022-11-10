import React from 'react';
import HeroBanner from '../components/HeroBanner';
import HeroImageRow from '../components/HeroImageRow';


const Hero = () => {return (
    <section className='section-hero'>
      <HeroBanner />
      <HeroImageRow />
    </section>
  )
};

export default Hero;
