import React from 'react';
import Hero from '../../components/features/hero';
import Author from '../../components/features/section1';
import About from '../../components/features/section2';
import Trusted from '../../components/features/section3';
import Callout from '../../components/features/section4';
import Learn from '../../components/features/section5';
import Chapter from '../../components/features/section6';
import Testimonial from '../../components/features/section7';
import Blog from '../../components/features/section8';

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <Author />
      <About />
      <Trusted />
      <Callout />
      <Learn />
      <Chapter />
      <Testimonial />
      <Blog />
    </div>
  );
};

export default LandingPage;
