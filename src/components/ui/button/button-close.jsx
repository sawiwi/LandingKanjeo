import React from 'react';
import { IoClose } from '../../icon';

const ButtonClose = ({ className = '', onClick = () => {} }) => {
  return (
    <button
      className={`${className} tw-w-8 tw-h-8 tw-flex tw-items-center tw-justify-center tw-rounded-full tw-text-primary-light tw-bg-secondary-light hover:tw-bg-gray-200 tw-border-none tw-outline-none focus:tw-outline-none`}
      onClick={onClick}
    >
      <IoClose className="tw-w-5 tw-h-5" />
    </button>
  );
};

export default ButtonClose;
