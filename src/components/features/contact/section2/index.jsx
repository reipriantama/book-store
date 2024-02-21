import React from 'react';

const Faq = () => {
  const frequentQuestions = [
    {
      name: 'Do you offer discounts for education?',
    },
    {
      name: 'Is Hack Producivity book available on the one stores?',
    },
    {
      name: 'What is Hack Productivity book about?',
    },
    {
      name: 'What is Hack Productivity book about?',
    },
    {
      name: 'Where can I get Hack Productivity book?',
    },
    {
      name: 'Where can I get Hack Productivity book?',
    },
    {
      name: 'Where can I get Hack Productivity book?',
    },
  ];

  return (
    <div
      className='font-inter 
    xl:px-[310px] xl:pt-[111px] xl:pb-[130px] bg-[#F5F8FC]'
    >
      <div className='flex flex-col items-center'>
        <div className='font-bold font-cardo text-[45px] text-navy-blue'>
          Frequent Questions?
        </div>
        <div className='w-[55px] border-t-[3px] border-dark-yellow mb-[27px]'></div>
      </div>
      <div className='flex gap-[82px]'>
        <div className='flex flex-col gap-3 w-[620px]'>
          <div className='flex items-center gap-4 text-2xl font-bold font-cardo text-navy-blue'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/contact/section2/iconDot.png`}
              alt='icon'
              className='size-[14px]'
            />
            Do you offer discounts for education?
          </div>
          <div className='mt-[16px] border-[1px] border-[#1B3764]'></div>
          <div className='flex items-center gap-4 text-2xl font-bold font-cardo text-navy-blue'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/contact/section2/iconDotBorder.png`}
              alt='icon'
              className='size-[14px]'
            />
            <div>Is Hack Producivity book available on the one stores?</div>
          </div>
          <div className='text-thin-grey text-[19px]'>
            Many desktop publishing packages and web page editors to now use
            Lorem Ipsum as their default model text, and angle uncover many web
            sites still in their infancy.
          </div>
          <div className='text-thin-grey text-[19px]'>
            There are many variations of of Lorem Ipsum available.
          </div>
          <div className='mt-[16px] border-[1px] border-[#1B3764]'></div>
          <div className='flex items-center gap-4 text-2xl font-bold font-cardo text-navy-blue'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/contact/section2/iconDot.png`}
              alt='icon'
              className='size-[14px]'
            />
            What is Hack Productivity book about?
          </div>
          <div className='mt-[16px] border-[1px] border-[#1B3764]'></div>
          <div className='flex items-center gap-4 text-2xl font-bold font-cardo text-navy-blue'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/contact/section2/iconDot.png`}
              alt='icon'
              className='size-[14px]'
            />
            Where can I get Hack Productivity book?
          </div>
          <div className='mt-[16px] border-[1px] border-[#1B3764]'></div>
          <div className='flex items-center gap-4 text-2xl font-bold font-cardo text-navy-blue'>
            <img
              src={`${process.env.PUBLIC_URL}/assets/contact/section2/iconDot.png`}
              alt='icon'
              className='size-[14px]'
            />
            Do you offer discounts for education?
          </div>
        </div>
        <div className='flex flex-col gap-3 w-[630px]'>
          {frequentQuestions.map((item, index) => (
            <div key={index}>
              <div className='flex items-center gap-4 text-2xl font-bold font-cardo text-navy-blue'>
                <img
                  src={`${process.env.PUBLIC_URL}/assets/contact/section2/iconDot.png`}
                  alt='icon'
                  className='size-[14px]'
                />
                {item.name}
              </div>
              <div className={index === frequentQuestions.length - 1 ? '' : 'mt-[30px] border-[1px] border-[#1B3764]'}></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
