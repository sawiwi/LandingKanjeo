import React from 'react';
import { IoClose } from '../../icon';

const ButtonClose = ({ className = '', onClick = () => {} }) => {
  return (
    <button
      className={`${className} w-8 h-8 flex items-center justify-center rounded-full text-primary-light bg-secondary-light hover:bg-gray-200 border-none outline-none focus:outline-none`}
      onClick={onClick}
    >
      <IoClose className="w-5 h-5" />
    </button>
  );
};

export default ButtonClose;
