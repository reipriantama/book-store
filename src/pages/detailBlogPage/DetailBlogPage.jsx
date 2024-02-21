import React from 'react';
import TitleHero from '../../components/ui/titleHero';
import DetailBlog from '../../components/features/detailBlog/section1';

const DetailBlogPage = () => {
  return (
    <div>
      <TitleHero
        titleText='Significant reading has more info number'
        className='w-[635px] text-center'
      />
      <DetailBlog />
    </div>
  );
};

export default DetailBlogPage;
