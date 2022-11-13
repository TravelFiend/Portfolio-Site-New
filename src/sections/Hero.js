import React, { useRef } from 'react';
import HeroBanner from '../components/HeroBanner';
import HeroImageRow from '../components/HeroImageRow';
import useIntersect from '../hooks/useIntersect';


const Hero = () => {
  const ref = useRef();
  const isIntersecting = useIntersect(ref);

  console.log({ isIntersecting });

  return (
    <section className='section-hero'>
      <HeroBanner />
      <HeroImageRow ref={ref} />
    </section>
  )
};

export default Hero;
