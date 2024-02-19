import React from 'react';
import TitleHero from '../../components/ui/titleHero';
import AboutAuthor from '../../components/features/about/section1';
import History from '../../components/features/about/section2';

const AboutPage = () => {
  return (
    <div>
      <TitleHero
        titleText='About the Author'
        descText='There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form.'
      />
      <AboutAuthor />
      <History />
    </div>
  );
};

export default AboutPage;
