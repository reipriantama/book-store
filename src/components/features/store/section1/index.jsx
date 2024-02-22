import React from 'react';
import Button from '../../../ui/button';
import { useNavigate } from 'react-router';
import BookData from '../../../../data/BookData.json';

const StoreCard = () => {
  const navigate = useNavigate();

  const navigateToDetail = (id) => {
    navigate(`/detail-product/${id}`);
  };

  return (
    <div
      className='font-inter 
    xl:px-[310px] xl:pt-[150px]'
    >
      <div className='grid grid-cols-3 gap-[50px]'>
        {BookData.map((item, index) => (
          <div key={index} className='w-[401px]'>
            <div>
              <img
                src={`${process.env.PUBLIC_URL}${item.image}`}
                alt='book'
                className='mb-[20px]'
              />
            </div>
            <div className='flex items-center justify-between'>
              <div className='font-cardo font-bold text-[32px] text-navy-blue'>
                {item.title}
              </div>
              <div className='text-dark-yellow text-[22px] font-bold'>
                ${item.price}
              </div>
            </div>
            <div className='text-thin-grey text-[19px] mb-[24px]'>
              {item.description}
            </div>
            <div className='flex gap-[13px] items-center font-cardo font-bold text-[24px] text-navy-blue mb-[25px]'>
              <img
                src={`${process.env.PUBLIC_URL}/assets/store/section1/iconDot.png`}
                alt='book'
                className='size-4'
              />
              Printed Books
            </div>
            <div>
              <Button
                buttonText='Order Today'
                className='border-[1px] border-dark-yellow'
                onClick={() => navigateToDetail(item.id)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreCard;
