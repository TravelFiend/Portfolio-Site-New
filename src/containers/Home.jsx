import Hero from '../sections/Hero';
import About from '../sections/About';
import Work from '../sections/Work';


const Home = () => {
  return (
    <>
      <Hero />
      <div className='body-wrapper'>
        <About />
        <Work />
      </div>
    </>
  );
};

export default Home;
