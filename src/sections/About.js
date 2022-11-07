import React from 'react';
import Composition from '../components/Composition';
import TextBlock from '../components/TextBlock';
import pic1 from '../../public/assets/nat-1-large.jpg';
import pic2 from '../../public/assets/nat-2-large.jpg';
import pic3 from '../../public/assets/nat-3-large.jpg';

const About = () => {
  return (
    <section id='about' className='section-about'>
      <TextBlock />
      <Composition pic1={pic1} pic2={pic2} pic3={pic3} />
    </section>
  );
}

export default About;
