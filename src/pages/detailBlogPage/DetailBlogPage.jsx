import React from 'react';
import TitleHero from '../../components/ui/titleHero';
import DetailBlog from '../../components/features/detailBlog/section1';
import { useParams } from 'react-router';

const DetailBlogPage = () => {
  const { blogId } = useParams();
  console.log(blogId);

  return (
    <div>
      <TitleHero
        titleText='Significant reading has more info number'
        className='w-[635px] text-center'
      />
      <DetailBlog id={blogId} />
    </div>
  );
};

export default DetailBlogPage;
