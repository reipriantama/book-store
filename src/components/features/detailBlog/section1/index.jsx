import React, { useEffect, useState } from 'react';
import BlogData from '../../../../data/BlogData.json';

const DetailBlog = (props) => {
  const { id } = props;
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const selectedBlog = BlogData.find((item) => item.id === parseInt(id));
        setBlog(selectedBlog);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBlog();
  }, [id]);

  return (
    <div
      className='font-inter 
    xl:px-[310px] xl:pt-[111px] xl:pb-[120px] '
    >
      <div className=''>
        {blog && (
          <>
            <img
              src={`${process.env.PUBLIC_URL}${blog.image}`}
              alt='img'
              className='w-[1299px] h-[700px] object-cover mb-[15px]'
            />
            <div className='text-2xl font-bold font-cardo text-navy-blue mb-[26px]'>
              October 6, 2021 / Classics
            </div>
            <div className='text-[19px] text-thin-grey mb-[44px]'>
              There are many variations of passages of Lorem Ipsum available,
              but the majorithave suffered alteration in some form, by injected
              humour, or randomised words whicdon't look even slightly
              believable. If you are going to use a passage of Lorem Ipsum, need
              to be sure there isn't anything embarrassing hidden in the middle
              of text. All thLorem Ipsum generators on the Internet tend.
            </div>
            <div className='text-2xl font-bold font-cardo text-navy-blue mb-[11px]'>
              The perfect book for all
            </div>
            <div className='text-[19px] text-thin-grey mb-[22px]'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has less normal distribution
              of letters, as opposed.
            </div>
            <ul className='flex flex-col gap-[12px] pl-[14px] text-navy-blue text-[19px] mb-[44px]'>
              <li className='flex items-center gap-[21px]'>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/detailBlog/section1/iconDot.png`}
                  alt='icon'
                  className='size-[15px]'
                />
                It has roots in a piece of classical Latin literature from 45
                BC,
              </li>
              <li className='flex items-center gap-[21px]'>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/detailBlog/section1/iconDot.png`}
                  alt='icon'
                  className='size-[15px]'
                />
                To generate Lorem Ipsum which looks reasonable
              </li>
              <li className='flex items-center gap-[21px]'>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/detailBlog/section1/iconDot.png`}
                  alt='icon'
                  className='size-[15px]'
                />
                The first line of Lorem Ipsum, "Lorem ipsum” dolor sit amet
              </li>
            </ul>
            <div className='bg-navy-blue px-[200px] py-[53px] relative text-white text-[18px] mb-[44px]'>
              “Crowdsource term sheet freemium beta stealth responsive web
              design niche market rock star channels.”
              <img
                src={`${process.env.PUBLIC_URL}/assets/detailBlog/section1/iconQuote.png`}
                alt='icon'
                className='absolute top-0 left-6'
              />
            </div>
            <div className='text-2xl font-bold font-cardo text-navy-blue mb-[11px]'>
              The perfect book for all
            </div>
            <div className='text-[19px] text-thin-grey mb-[22px]'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has less normal distribution
              of letters, as opposed.
            </div>
            <ul className='flex flex-col gap-[12px] pl-[14px] text-navy-blue text-[19px] mb-[44px] list-inside list-decimal'>
              <li>
                It has roots in a piece of classical Latin literature from 45
                BC,
              </li>
              <li>To generate Lorem Ipsum which looks reasonable</li>
              <li>
                The first line of Lorem Ipsum, "Lorem ipsum” dolor sit amet
              </li>
              <li>Be standard chunk of Lorem used since the 1500s</li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default DetailBlog;
