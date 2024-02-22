import React, { useEffect, useState } from 'react';
import Button from '../../../ui/button';
import { PiShoppingCartSimple } from 'react-icons/pi';
import { IoMdClose } from 'react-icons/io';
import BookData from '../../../../data/BookData.json';

const DetailBook = (props) => {
  const { id } = props;
  const [book, setBook] = useState();
  const [quantity, setQuantity] = useState(1);
  const [showCartModal, setShowCartModal] = useState(false);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const selectedBook = BookData.find((item) => item.id === parseInt(id));
        setBook(selectedBook);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBook();
  }, [id]);

  const closeModal = () => {
    setShowCartModal(false);
  };

  const calculateSubtotal = () => {
    if (!book) return 0;
    return quantity * parseFloat(book.price);
  };

  return (
    <div className='font-inter xl:px-[310px] xl:pt-[150px] xl:pb-[120px] flex justify-center'>
      <div className='mr-[86px]'>
        <img
          src={`${process.env.PUBLIC_URL}${book?.image}`}
          alt='book'
          className='w-[580px] h-[650px]'
        />
      </div>
      <div className='w-[635px] flex flex-col justify-center'>
        <div className='font-bold font-cardo text-[32px] text-navy-blue'>
          {book?.title}
        </div>
        <div className='font-extrabold text-[30px] text-dark-yellow mb-[26px]'>
          {book?.proce}
        </div>
        <div className='text-thin-grey text-[19px] mb-5'>
          Making this the first true generator on the Internet. It uses a
          dictionary of over 200 Latin words, combined with a handful of model
          sentence structures, to generate Lorem Ipsum which looks reasonable.
          The generated Lorem Ipsum.
        </div>
        <div className='flex gap-5 text-thin-grey mb-[34px]'>
          <ul className='flex flex-col gap-5 text-justify'>
            <li>Publisher :</li>
            <li>Language :</li>
            <li>Paperback :</li>
            <li>ISBN-10 :</li>
            <li>Dimensions :</li>
          </ul>
          <ul className='flex flex-col gap-5'>
            <li>Learning Private Limited (1 January 2021)</li>
            <li>English</li>
            <li>212 pages</li>
            <li>9788120345799</li>
            <li>20 x 14 x 4 cm</li>
          </ul>
        </div>
        <div className='flex gap-[10px]'>
          <input
            type='number'
            onChange={(e) => setQuantity(e.target.value)}
            placeholder='1'
            className='border-[1px] border-dark-yellow text-navy-blue text-center w-[120px]'
          />
          <Button
            buttonText='Add to Cart'
            className='flex items-center gap-3 bg-dark-yellow text-navy-blue'
            iconButton={<PiShoppingCartSimple />}
            onClick={() => setShowCartModal(true)}
          />
        </div>
      </div>

      {showCartModal && (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50'>
          <div className='w-full max-w-[801px] bg-white text-navy-blue'>
            <div className='bg-dark-yellow  mb-[62px] px-[76px] py-[35px] flex justify-between items-center'>
              <div className='font-cardo font-bold  text-[50px]'>Your Cart</div>
              <IoMdClose
                onClick={() => closeModal()}
                className='cursor-pointer size-10'
              />
            </div>
            <div className='flex justify-between px-[76px]'>
              <div className='flex'>
                <img
                  src={`${process.env.PUBLIC_URL}${book?.image}`}
                  alt='book'
                  className='w-[133px] h-[178px] mr-[38px]'
                />
                <div>
                  <div className='font-bold font-cardo text-[24px]'>
                    {book?.title}
                  </div>
                  <div className='text-thin-grey text-[20px] mb-[44px]'>
                    ${book?.price} USD
                  </div>
                  <div className='font-bold font-cardo text-[35px]'>Remove</div>
                </div>
              </div>
              <input
                type='number'
                onChange={(e) => setQuantity(e.target.value)}
                placeholder={quantity.toString()}
                className='border-[1px] border-[#E8E8E8] w-[120px] h-[62px] text-thin-grey text-[20px] text-center'
              />
            </div>
            <div className='border-t-[1px] border-navy-blue mt-[65px] mb-[25px]'></div>
            <div className='flex justify-between px-[71px]'>
              <div className='font-bold font-cardo text-navy-blue text-[24px]'>
                Sub-Total
              </div>
              <div className='font-bold text-navy-blue text-[24px]'>
                $ {calculateSubtotal().toFixed(2)} USD
              </div>
            </div>
            <div className='px-[77px] py-[61px]'>
              <Button
                buttonText='Continue to Checkout'
                className='bg-dark-yellow w-[647px] text-navy-blue'
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailBook;
