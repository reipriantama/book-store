import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ className, buttonText, iconButton, onClick, href }) => {
  return (
    <div>
      {/* conditional rendering a href */}
      {href ? (
        <Link
          className={` px-14 py-5 text-[19px] font-cardo ${className}`}
          to={href}
        >
          {iconButton}
          <span>{buttonText}</span>
        </Link>
      ) : (
        <button
          className={` px-14 py-5 text-[19px] font-cardo ${className}`}
          onClick={onClick}
        >
          {iconButton}
          <div>{buttonText}</div>
        </button>
      )}
    </div>
  );
};

export default Button;
