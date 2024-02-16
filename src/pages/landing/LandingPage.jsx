import React from 'react';
import Hero from '../../components/features/hero';
import Author from '../../components/features/section1';
import About from '../../components/features/section2';
import Trusted from '../../components/features/section3';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Author />
      <About />
      <Trusted />
    </div>
  );
};

export default LandingPage;
