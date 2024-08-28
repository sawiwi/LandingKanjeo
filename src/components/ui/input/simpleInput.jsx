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
    <div className="my-7 relative">
      <input
        className={` ${
          error ? `border-secondary` : `focus:border-primary-light`
        } max-h-[40px] mb-1 shadow appearance-none placeholder-transparent border rounded-full w-full py-3 px-4 peer text-secondary leading-tight focus:outline-none focus:shadow-outline`}
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
        className="absolute left-1 top-[-1.6rem] text-secondary/70 font-normal text-base transition-all duration-500
                peer-placeholder-shown:text-base 
                peer-placeholder-shown:text-gray-400 
                peer-placeholder-shown:font-normal
                peer-placeholder-shown:left-4
                peer-placeholder-shown:top-2 
                peer-focus:top-[-1.6rem] 
                peer-focus:left-1 
                peer-focus:text-secondary 
                peer-focus:font-normal
                hover:cursor-text"
      >
        {placeholder}
      </label>
      {error ? (
        <p className="text-secondary text-xs italic ml-3">
          Completa este campo Obligatorio.
        </p>
      ) : (
        ''
      )}
    </div>
  );
};

export default simpleInput;
