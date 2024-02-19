import React from 'react';
import Hero from '../../components/features/hero';
import Author from '../../components/features/section1';
import About from '../../components/features/section2';
import Trusted from '../../components/features/section3';
import Callout from '../../components/features/section4';
import Learn from '../../components/features/section5';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Author />
      <About />
      <Trusted />
      <Callout />
      <Learn />
    </div>
  );
};

export default LandingPage;
