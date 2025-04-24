import Hero from '../sections/Hero';
import About from '../sections/About';
import Work from '../sections/Work';
import Technologies from '../sections/Technologies';


const Home = () => {
  return (
    <>
      <Hero />
      <div className='body-wrapper'>
        <Technologies />
        <About />
        <Work />
      </div>
    </>
  );
};

export default Home;
