import React from 'react';
import './sass/main.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Home';
import { ParallaxProvider } from 'react-scroll-parallax';

const App = () => {
  return (
    <>
      <Header />
      <ParallaxProvider>
        <Home />
      </ParallaxProvider>
      <Footer />
    </>
  );
};

export default App;
