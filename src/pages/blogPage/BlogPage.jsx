import React from 'react';
import TitleHero from '../../components/ui/titleHero';
import BlogList from '../../components/features/blog/section1';

const BlogPage = () => {
  return (
    <div>
      <TitleHero
        titleText='Articles'
        descText='There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form.'
      />
      <BlogList />
    </div>
  );
};

export default BlogPage;
