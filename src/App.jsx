import './sass/main.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Home';
import { ParallaxProvider } from 'react-scroll-parallax';
import SocialMenu from './components/SocialMenu';


const App = () => {
  return (
    <>
      <Header />
      <SocialMenu />
      <ParallaxProvider>
        <Home />
      </ParallaxProvider>
      <Footer />
    </>
  );
};

export default App;