import React from 'react';
import Button from '../../../ui/button';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { useNavigate } from 'react-router';

const AboutAuthor = () => {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/contact');
  };

  const cardData = [
    {
      name: 'Country :',
      value: 'United Kingdom',
    },
    {
      name: 'Language :',
      value: 'English',
    },
    {
      name: 'Genre :',
      value: 'Historiography',
    },
    {
      name: 'Publication date :',
      value: '1991',
    },
  ];

  return (
    <div
      className='font-inter bg-[#F4F8FF]
    xl:px-[310px] xl:py-[151px]'
    >
      <div className='mb-[80px]'>
        <img
          src={`${process.env.PUBLIC_URL}/assets/about/section1/imageAuthor.png`}
          alt='author'
          className='shadow-lg'
        />
      </div>
      <div className='flex'>
        <div className='w-[519px] flex flex-col gap-5 xl:mr-[108px] py-[45px] px-[66px] bg-white border-2'>
          {cardData.map((item, index) => (
            <div key={index} className='flex'>
              <div className='w-[219px] '>
                <div className='text-2xl font-bold font-cardo text-navy-blue'>
                  {item.name}
                </div>
              </div>
              <div className='w-[162px]'>
                <div className='pt-1 text-[19px] text-thin-grey'>
                  {item.value}
                </div>
              </div>
            </div>
          ))}
          <div className='flex'>
            <div className='w-[219px] '>
              <div className='text-2xl font-bold font-cardo text-navy-blue'>
                Share us on :
              </div>
            </div>
            <div className='w-[162px] '>
              <div className='pt-1 flex gap-[22px] text-[19px] text-navy-blue'>
                <FaFacebookF /> <FaTwitter /> <FaLinkedinIn />
              </div>
            </div>
          </div>
        </div>
        <div className='w-[607px]'>
          <div>
            <div className='font-bold font-cardo text-[45px] text-navy-blue'>
              About Dr. John Abraham
            </div>
            <div className='w-[55px] border-t-[3px] border-dark-yellow mb-[27px]'></div>
          </div>
          <div className='text-[19px] text-thin-grey mb-[34px]'>
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words, that
            can combined with a handful of model sentence structures.
          </div>
          <div>
            <Button
              buttonText='Contact now'
              className='bg-dark-yellow'
              onClick={() => navigateToContact()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutAuthor;
