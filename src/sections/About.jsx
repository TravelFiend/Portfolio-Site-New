import Composition from '../components/Composition';
import TextBlock from '../components/TextBlock';
import mikeMountain from '../../public/assets/mike-in-mountain.jpg';
import mikeLaos from '../../public/assets/mike-in-laos.jpg';
import mikeCamel from '../../public/assets/mike-on-a-camel.jpg';


const About = () => {
  return (
    <section id='about' className='section-about'>
      <TextBlock header='Mike Grace' description='This is me, Me am I.'/>
      <Composition pic1={mikeCamel} pic2={mikeMountain} pic3={mikeLaos} />
    </section>
  );
}

export default About;
