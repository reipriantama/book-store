import React from 'react';
import { useNavigate } from 'react-router';
import BlogData from '../../../../data/BlogData.json';

const BlogList = () => {
  const navigate = useNavigate();

  const navigateToDetail = (id) => {
    navigate(`/detail-blog/${id}`);
  };

  return (
    <div
      className='font-inter bg-[#F5F8FC] grid grid-cols-3 gap-x-[34px] gap-y-[60px]
    xl:px-[310px] xl:pt-[111px] xl:pb-[130px]'
    >
      {BlogData.map((item, index) => (
        <div key={index} className='shadow-lg w-[410px]'>
          <img src={`${process.env.PUBLIC_URL}${item.image}`} alt='book' />
          <div className='p-[28px]'>
            <div className='text-2xl font-bold font-cardo text-navy-blue mb-[14px]'>
              {item.title}
            </div>
            <div className='text-[19] text-thin-grey mb-[27px]'>
              {item.description}
            </div>
            <div className='flex justify-between'>
              <div
                className='font-bold font-cardo text-[18px] cursor-pointer text-navy-blue underline underline-offset-8'
                onClick={() => navigateToDetail(item.id)}
              >
                Read more
              </div>
              <div className='text-navy-blue text-[17px]'>
                Author - {item.date}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
