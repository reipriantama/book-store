import React from 'react';
import TitleHero from '../../components/ui/titleHero';
import DetailBook from '../../components/features/detailProduct/section1';
import ProductDescription from '../../components/features/detailProduct/section2';
import Features from '../../components/features/detailProduct/section3';
import { useParams } from 'react-router';

const DetailProduct = () => {
  const { bookId } = useParams();
  console.log(bookId);

  return (
    <div>
      <TitleHero
        titleText='My Store'
        descText='There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form.'
      />
      <DetailBook id={bookId} />
      <ProductDescription />
      <Features />
    </div>
  );
};

export default DetailProduct;
