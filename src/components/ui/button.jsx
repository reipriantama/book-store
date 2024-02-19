import React from 'react';

const Button = ({ className, buttonText }) => {
  return (
    <div>
      <button className={` px-14 py-5 text-[19px] font-cardo ${className}`}>
        <div>{buttonText}</div>
      </button>
    </div>
  );
};

export default Button;
