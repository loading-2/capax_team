import React from 'react';
import Members from './components/Members/Members';
import Header from './components/Header/Header';
import About from './components/About/About';
import HeroSection from './components/HeroSection/Herosection';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
     <Header/>
     <HeroSection/>
     <Members/>
     <About/>

      <Footer/>
    </>
  );
};

export default App;