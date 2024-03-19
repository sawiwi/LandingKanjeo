import React from 'react';
import Slider from 'react-slick';
import CardSystem from '../card/card-02';
// import Button from '../ui/button';

const ReactSlick = ({ renderContent }) => {
  const settings = {
    dots: false,
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 8000,
    cssEase: 'linear',
    pauseOnHover: true,
  };

  return (
    <Slider {...settings} className="tw-relative w-full">
      {renderContent.length !== 0 ? renderContent.map((item) => (
        <div key={item.id} className="tw-relative">
          <img
            src={item.imgHero}
            alt="hero"
            className="tw-bg-cover tw-h-[80vh] md:tw-h-[70vh] lg:tw-h-[99vh] 2xl:tw-h-[98vh] tw-mx-auto tw-w-full tw-object-cover tw-object-center tw-bg-gray-50"
          />
          <div className="tw-absolute tw-z-50 tw-inset-0 tw-text-center tw-flex tw-flex-col tw-w-[90%] md:tw-w-[70%] lg:tw-w-[60%] xl:tw-w-[80%] tw-mx-auto tw-justify-center tw-items-center tw-z-100 ">
            <h1 className="tw-text-white lg:tw-mt-16 2xl:tw-mt-2 tw-opacity-100 tw-font-bold tw-text-3xl 2xl:tw-text-4xl ">
              {item.headings}
            </h1>
            <p className="tw-text-white tw-opacity-100 tw-font-light tw-text-md md:tw-text-xl tw-mt-2">
              {item.texts}
            </p>
            <div className="tw-grid tw-grid-cols-2 xl:tw-grid-cols-3 lg:tw-mt-4 2xl:tw-mt-4 tw-gap-6">
              <div className='tw-col-span-1 tw-mt-16 '>
                <article className='tw-flex tw-flex-wrap tw-flex-row tw-items-center tw-justify-center tw-gap-2 tw-drop-shadow-xl tw-bg-gray-100 lg:tw-h-40 lg:tw-w-full 2xl:tw-h-56 2xl:tw-w-full tw-mb-2 tw-p-4 hover:tw-scale-110 hover:tw-bg-secondary hover:tw-text-white tw-duration-200 tw-rounded-md'>
                    <h5 className=' tw-mt-2 lg:tw-mt-4 tw-opacity-100 2xl:tw-font-bold tw-text-md lg:tw-text-base 2xl:tw-text-xl'>{item.card[0].info}</h5>
                    <small className=''>que bonito</small>
                </article>
                <article className='tw-flex tw-flex-wrap tw-flex-row tw-items-center tw-justify-center tw-gap-2 tw-drop-shadow-xl tw-bg-gray-100 lg:tw-h-40 lg:tw-w-full 2xl:tw-h-56 2xl:tw-w-full tw-mb-2 tw-p-4 hover:tw-scale-110 hover:tw-bg-secondary hover:tw-text-white tw-duration-200 tw-rounded-md'>
                    <h3 className=' tw-mt-2 lg:tw-mt-4 tw-opacity-100 2xl:tw-font-bold tw-text-md lg:tw-text-base 2xl:tw-text-xl'>{item.card[1].info}</h3>
                </article>
              </div>
              <div className='tw-col-span-1'>
                <article className='tw-flex tw-flex-wrap tw-flex-row tw-items-center tw-justify-center tw-gap-2 tw-drop-shadow-xl tw-bg-gray-100 lg:tw-h-40 lg:tw-w-full 2xl:tw-h-56 2xl:tw-w-full tw-mb-2 tw-p-4 hover:tw-scale-110 hover:tw-bg-secondary hover:tw-text-white tw-duration-200 tw-rounded-md'>
                    <h3 className=' tw-mt-2 lg:tw-mt-4 tw-opacity-100 2xl:tw-font-bold tw-text-md lg:tw-text-base 2xl:tw-text-xl'>{item.card[2].info}</h3>
                </article>
                <article className='tw-flex tw-flex-wrap tw-flex-row tw-items-center tw-justify-center tw-gap-2 tw-drop-shadow-xl tw-bg-gray-100 lg:tw-h-40 lg:tw-w-full 2xl:tw-h-56 2xl:tw-w-full tw-mb-2 tw-p-4 hover:tw-scale-110 hover:tw-bg-secondary hover:tw-text-white tw-duration-200 tw-rounded-md'>
                    <h3 className=' tw-mt-2 lg:tw-mt-4 tw-opacity-100 2xl:tw-font-bold tw-text-md lg:tw-text-base 2xl:tw-text-xl'>{item.card[3].info}</h3>
                </article>
              </div>
              <div className='tw-col-span-1 tw-mt-16 '>
                <article className='tw-flex tw-flex-wrap tw-flex-row tw-items-center tw-justify-center tw-gap-2 tw-drop-shadow-xl tw-bg-gray-100 lg:tw-h-40 lg:tw-w-full 2xl:tw-h-56 2xl:tw-w-full tw-mb-2 tw-p-4 hover:tw-scale-110 hover:tw-bg-secondary hover:tw-text-white tw-duration-200 tw-rounded-md'>
                    <h5 className=' tw-mt-2 lg:tw-mt-4 tw-opacity-100 2xl:tw-font-bold tw-text-md lg:tw-text-base 2xl:tw-text-xl'>{item.card[4].info}</h5>
                    <small className=''>que bonito</small>
                </article>
                <article className='tw-flex tw-flex-wrap tw-flex-row tw-items-center tw-justify-center tw-gap-2 tw-drop-shadow-xl tw-bg-gray-100 lg:tw-h-40 lg:tw-w-full 2xl:tw-h-56 2xl:tw-w-full tw-mb-2 tw-p-4 hover:tw-scale-110 hover:tw-bg-secondary hover:tw-text-white tw-duration-200 tw-rounded-md'>
                    <h3 className=' tw-mt-2 lg:tw-mt-4 tw-opacity-100 2xl:tw-font-bold tw-text-md lg:tw-text-base 2xl:tw-text-xl'>{item.card[5].info}</h3>
                </article>
              </div>
            </div>
          </div>
          <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-black tw-opacity-60"></div>
        </div>
      )): ''}
    </Slider>
  );
};

export default ReactSlick;
