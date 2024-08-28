import React from 'react'
import TitleSection from '../../components/title-section';

export const DividerTextLeft = ({ title = '', text = '', image = '', altImage = '' }) => {
  return (
    <div className='mx-auto grid grid-cols-1 lg:grid-cols-2 max-w-[1100px] gap-8'>
      <div className='p-5 rounded-2xl shadow-lg lg:shadow-2xl h-max'>
        <TitleSection
          title={title}
          position="center"
        />
        <p className='text-justify my-4 text-md md:text-lg'>
          {text}
        </p>
      </div>
      <div className='flex justify-center items-center'>
        <img
          src={image}
          alt={altImage}
          className="m-auto w-full"
        />
      </div>
    </div>
  )
};

export const DividerTextRight = ({ title = '', text = '', image = '', altImage = '', imageMax = '' }) => {
  return (
    <div className='mx-auto grid grid-cols-1 lg:grid-cols-2 max-w-[1100px] gap-8'>
      <div className='flex justify-center items-center rounded-2xl overflow-hidden p-4 order-last lg:order-first'>
        <img
          src={image}
          alt={altImage}
          className="m-auto w-full"
        />
      </div>
      <div className='p-5 rounded-2xl shadow-lg lg:shadow-2xl'>
        <TitleSection
          title={title}
          position="center"
        />
        <p className='text-justify my-4 text-md md:text-lg'>
          {text}
        </p>
      </div>

    </div>
  )
};

