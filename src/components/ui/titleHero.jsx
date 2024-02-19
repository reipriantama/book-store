import React from 'react';

const TitleHero = () => {
  return (
    <div
      className='font-inter bg-navy-blue text-white
    xl:px-[310px] xl:pb-[95px] mt-[-1px] flex flex-col items-center'
    >
      <div className='flex flex-col items-center gap-[22px] mb-[50px]'>
        <div className='font-bold font-cardo text-white text-[45px]'>
          About the Author
        </div>
        <div className='w-[55px] border-t-[3px] border-dark-yellow'></div>
      </div>
      <div className='w-[633px] flex justify-center text-center text-[19px] text-[#B4C7E7]'>
        There are many variations of passages of Lorem Ipsum available, have
        suffered alteration in some form.
      </div>
    </div>
  );
};

export default TitleHero;
