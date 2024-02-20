import React from 'react';
import TitleHero from '../../components/ui/titleHero';
import DetailBook from '../../components/features/detailProduct/section1';

const DetailProduct = () => {
  return (
    <div>
      <TitleHero
        titleText='My Store'
        descText='There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form.'
      />
      <DetailBook />
    </div>
  );
};

export default DetailProduct;
