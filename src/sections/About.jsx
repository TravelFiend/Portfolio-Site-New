import Composition from '../components/Composition';
import TextBlock from '../components/TextBlock';
import mikeMountain from '../../public/assets/mike-in-mountain.jpg';
import mikeLaos from '../../public/assets/mike-in-laos.jpg';
import mikeCamel from '../../public/assets/mike-on-a-camel.jpg';


const About = () => {
  const textContent = {
    header: 'Building Cool Stuff, One Line at a Time',
    body: 'Hey, I\'m Mike Grace, a full-stack software engineer hooked on front-end magic. Since 2020, I\'ve built NextJS apps that flow, Shopify stores that pop, and Python scripts that save time. I\'ve helped launch mobile apps that clinched million-dollar deals and kept e-commerce projects rocking. Messy problems? I make them clean and simple.<br /><br />Off-duty, I\'m biking trails, fishing, or eating my way through new places. I can get by speaking German, love a good challenge, and pour heart into every project. Let\'s build something incredible together!'
  };

  return (
    <section id='about' className='section-about'>
      <TextBlock header={textContent.header} description={textContent.body} />
      <Composition
        pic1={{ image: mikeCamel, alt: 'Mike on a Camel' }}
        pic2={{ image: mikeMountain, alt: 'Mike in the mountains' }}
        pic3={{ image: mikeLaos, alt: 'Mike in Laos' }}
      />
    </section>
  );
};

export default About;
