import React from 'react';

const simpleInput = ({
  error = false,
  placeholder = '',
  id,
  value,
  onChange = () => {},
  type,
}) => {
  return (
    <div className="tw-my-7 tw-relative">
      <input
        className={` ${
          error ? `tw-border-red-500` : `focus:tw-border-primary-light`
        } tw-max-h-[40px] tw-mb-1 tw-shadow tw-appearance-none tw-placeholder-transparent tw-border tw-rounded-full tw-w-full tw-py-3 tw-px-4 tw-peer tw-text-gray-700 tw-leading-tight focus:tw-outline-none focus:tw-shadow-outline`}
        name={id}
        id={id}
        placeholder={placeholder}
        type={type}
        step="any"
        value={value}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className="tw-absolute tw-left-1 tw-top-[-1.6rem] tw-text-gray-600 tw-font-bold tw-text-base tw-transition-all 
                peer-placeholder-shown:tw-text-base 
                peer-placeholder-shown:tw-text-gray-400 
                peer-placeholder-shown:tw-font-normal
                peer-placeholder-shown:tw-left-4
                peer-placeholder-shown:tw-top-2 
                peer-focus:tw-top-[-1.6rem] 
                peer-focus:tw-left-1 
                peer-focus:tw-text-gray-600 
                peer-focus:tw-font-bold
                hover:tw-cursor-text"
      >
        {placeholder}
      </label>
      {error ? (
        <p className="tw-text-red-500 tw-text-xs tw-italic tw-ml-3">
          Completa este campo Obligatorio.
        </p>
      ) : (
        ''
      )}
    </div>
  );
};

export default simpleInput;
