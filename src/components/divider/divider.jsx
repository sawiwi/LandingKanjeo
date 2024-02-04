import React from 'react'
import TitleSection from '../../components/title-section';

export const DividerTextLeft = ({ title = '', text = '', image = '', altImage = '' }) => {
  return (
    <div className='tw-mx-auto tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-max-w-[1100px] tw-gap-8'>
      <div className='tw-p-5 tw-rounded-2xl tw-shadow-lg lg:tw-shadow-2xl tw-h-max'>
        <TitleSection
          title={title}
          position="center"
        />
        <p className='tw-text-justify tw-my-4 tw-text-md md:tw-text-lg'>
          {text}
        </p>
      </div>
      <div className='tw-flex tw-justify-center tw-items-center'>
        <img
          src={image}
          alt={altImage}
          className="tw-m-auto tw-w-full"
        />
      </div>
    </div>
  )
};

export const DividerTextRight = ({ title = '', text = '', image = '', altImage = '', imageMax = '' }) => {
  return (
    <div className='tw-mx-auto tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-max-w-[1100px] tw-gap-8'>
      <div className='tw-flex tw-justify-center tw-items-center tw-rounded-2xl tw-overflow-hidden tw-p-4 tw-order-last lg:tw-order-first'>
        <img
          src={image}
          alt={altImage}
          className="tw-m-auto tw-w-full"
        />
      </div>
      <div className='tw-p-5 tw-rounded-2xl tw-shadow-lg lg:tw-shadow-2xl'>
        <TitleSection
          title={title}
          position="center"
        />
        <p className='tw-text-justify tw-my-4 tw-text-md md:tw-text-lg'>
          {text}
        </p>
      </div>

    </div>
  )
};

