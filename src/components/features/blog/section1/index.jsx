import React from 'react';

const BlogList = () => {
  const dataBlog = [
    {
      image: '/assets/blog/section1/imageBlog1.png',
      title: 'Significant reading has more info number',
      description:
        'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.',
      date: '23.05.2022',
    },
    {
      image: '/assets/blog/section1/imageBlog2.png',
      title: 'Release of Letraset sheets tools containing passages',
      description:
        'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.',
      date: '23.05.2022',
    },
    {
      image: '/assets/blog/section1/imageBlog3.png',
      title: 'The energy efficiency offers hydrotherapy or swim',
      description:
        'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.',
      date: '23.05.2022',
    },
    {
      image: '/assets/blog/section1/imageBlog4.png',
      title: 'The energy efficiency offers hydrotherapy or swim',
      description:
        'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.',
      date: '23.05.2022',
    },
    {
      image: '/assets/blog/section1/imageBlog5.png',
      title: 'Release of Letraset sheets tools containing passages',
      description:
        'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.',
      date: '23.05.2022',
    },
    {
      image: '/assets/blog/section1/imageBlog6.png',
      title: 'The energy efficiency offers hydrotherapy or swim',
      description:
        'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.',
      date: '23.05.2022',
    },
    {
      image: '/assets/blog/section1/imageBlog7.png',
      title: 'The energy efficiency offers hydrotherapy or swim',
      description:
        'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.',
      date: '23.05.2022',
    },
    {
      image: '/assets/blog/section1/imageBlog8.png',
      title: 'Release of Letraset sheets tools containing passages',
      description:
        'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.',
      date: '23.05.2022',
    },
    {
      image: '/assets/blog/section1/imageBlog9.png',
      title: 'The energy efficiency offers hydrotherapy or swim',
      description:
        'The point of using Lorem Ipsum hiter of that using making it look like others readable will get end.',
      date: '23.05.2022',
    },
  ];
  return (
    <div
      className='font-inter bg-[#F5F8FC] grid grid-cols-3 gap-x-[34px] gap-y-[60px]
    xl:px-[310px] xl:pt-[111px] xl:pb-[130px]'
    >
      {dataBlog.map((item, index) => (
        <div key={index} className='shadow-lg w-[410px]'>
          <img src={`${process.env.PUBLIC_URL}${item.image}`} alt='' />
          <div className='p-[28px]'>
            <div className='text-2xl font-bold font-cardo text-navy-blue mb-[14px]'>
              {item.title}
            </div>
            <div className='text-[19] text-thin-grey mb-[27px]'>
              {item.description}
            </div>
            <div className='flex justify-between'>
              <div className='font-bold font-cardo text-[18px] cursor-pointer text-navy-blue underline underline-offset-8'>
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
