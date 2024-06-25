import React from 'react';
import Slider from 'react-slick';
import CardSystem from '../card/card-02';
import Button from '../ui/button';


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
    <Slider {...settings} className="tw-relative tw-w-96">
      {renderContent.length !== 0 ? renderContent.map((item) => (
        <div key={item.id} className="tw-relative">
          <img
            src={item.imgHero}
            alt="hero"
            className="tw-bg-cover tw-object-top tw-h-[80vh] md:tw-h-[70vh] lg:tw-h-[99vh] 2xl:tw-h-[98vh] tw-mx-auto tw-w-full tw-object-cover tw-bg-gray-50"
          />
          <div className="tw-absolute tw-z-50 tw-inset-0 tw-text-center tw-flex tw-flex-col tw-w-[90%] md:tw-w-[70%] lg:tw-w-[60%] xl:tw-w-[80%] tw-mx-auto tw-justify-center tw-items-center tw-z-100 ">
            <h1 className="tw-text-white lg:tw-mt-16 2xl:tw-mt-8 tw-opacity-100 tw-font-bold tw-text-3xl 2xl:tw-text-4xl ">
              {item.headings}
            </h1>
            <p className="tw-text-white tw-opacity-100 tw-font-light tw-text-md md:tw-text-xl tw-mt-2">
              {item.texts}
            </p>
            <div className="tw-grid tw-grid-cols-1  2xl:tw-grid-cols-3 lg:tw-mt-4 2xl:tw-mt-4 tw-gap-4 2xl:tw-gap-6">
              <div className='tw-block 2xl:tw-hidden lg:tw-col-span-1 tw-mt-10 lg:tw-mt-12 2xl:tw-mt-16'>
                <a href={item.card[6].href} className='tw-cursor-pointer'>
                  <article className='tw-flex tw-flex-wrap tw-flex-row tw-overflow-hidden tw-items-center tw-justify-center tw-gap-2 tw-drop-shadow-xl tw-bg-gray-100 lg:tw-h-40 lg:tw-w-96 2xl:tw-h-52 2xl:tw-w-full tw-mb-2 2xl:tw-mb-4 tw-p-2 tw-py-3 xl:tw-py-4 hover:tw-scale-110 hover:tw-bg-secondary hover:tw-text-white tw-duration-200 tw-rounded-md'>
                      <div className='tw-text-4xl'>{item.card[6].icon}</div>
                      <h5 className='tw-mt-2 tw-opacity-100 2xl:tw-font-bold tw-text-sm lg:tw-text-lg 2xl:tw-text-xl'>{item.card[6].info}</h5>
                  </article>
                </a>
              </div>
              <div className='tw-hidden 2xl:tw-block lg:tw-col-span-1 xl:tw-col-span-2 2xl:tw-col-span-1 lg:tw-mt-12 2xl:tw-mt-16'>
                <article className='tw-flex tw-flex-wrap tw-flex-row tw-overflow-hidden tw-items-center tw-justify-center tw-gap-2 tw-drop-shadow-xl tw-bg-gray-100 tw-text-secondary lg:tw-h-32 lg:tw-w-full 2xl:tw-h-48 2xl:tw-w-full tw-mb-2 2xl:tw-mb-4 tw-p-2 tw-py-3 hover:tw-scale-110 hover:tw-bg-secondary hover:tw-text-gray-50 tw-duration-200 tw-rounded-md'>
                    <div className='tw-text-4xl'>{item.card[0].icon}</div>
                    <h5 className='tw-opacity-100 2xl:tw-font-bold tw-text-md lg:tw-text-base 2xl:tw-text-lg'>{item.card[0].info}</h5>
                </article>
                <article className='tw-flex tw-flex-wrap tw-flex-row tw-overflow-hidden tw-items-center tw-justify-center tw-gap-2 tw-drop-shadow-xl tw-bg-gray-100 tw-text-secondary lg:tw-h-32 lg:tw-w-full 2xl:tw-h-48 2xl:tw-w-full tw-mb-2 2xl:tw-mb-4 tw-p-2 tw-py-3 hover:tw-scale-110 hover:tw-bg-secondary hover:tw-text-gray-50 tw-duration-200 tw-rounded-md'>
                    <div className='tw-text-4xl'>{item.card[1].icon}</div>
                    <h5 className='tw-opacity-100 2xl:tw-font-bold tw-text-md lg:tw-text-base 2xl:tw-text-lg'>{item.card[1].info}</h5>
                    {/* <small className=''>{item.card[1].smallInfo}</small> */}
                </article>
              </div>
              <div className='tw-hidden 2xl:tw-block lg:tw-col-span-1 xl:tw-col-span-2 2xl:tw-col-span-1'>
                <article className='tw-flex tw-flex-wrap tw-flex-row tw-overflow-hidden tw-items-center tw-justify-center tw-gap-2 tw-drop-shadow-xl tw-bg-gray-100 tw-text-secondary lg:tw-h-32 lg:tw-w-full 2xl:tw-h-48 2xl:tw-w-full tw-mb-2 2xl:tw-mb-4 tw-p-2 tw-py-3 hover:tw-scale-110 hover:tw-bg-secondary hover:tw-text-gray-50 tw-duration-200 tw-rounded-md'>
                    
                    <div className='tw-text-4xl'>{item.card[2].icon}</div>
                    <h5 className='tw-opacity-100 2xl:tw-font-bold tw-text-md lg:tw-text-base 2xl:tw-text-lg'>{item.card[2].info}</h5>
                    {/* <small className=''>{item.card[2].smallInfo}</small> */}
                </article>
                <article className='tw-flex tw-flex-wrap tw-flex-row tw-overflow-hidden tw-items-center tw-justify-center tw-gap-2 tw-drop-shadow-xl tw-bg-gray-100 tw-text-secondary lg:tw-h-32 lg:tw-w-full 2xl:tw-h-48 2xl:tw-w-full tw-mb-2 2xl:tw-mb-4 tw-p-2 tw-py-3 hover:tw-scale-110 hover:tw-bg-secondary hover:tw-text-gray-50 tw-duration-200 tw-rounded-md'>
                    <div className='tw-text-4xl'>{item.card[3].icon}</div> 
                    <h5 className='tw-opacity-100 2xl:tw-font-bold tw-text-md lg:tw-text-base 2xl:tw-text-lg'>{item.card[3].info}</h5>
                    {/* <small className=''>{item.card[3].smallInfo}</small> */}
                </article>
              </div>
              <div className='tw-hidden 2xl:tw-block lg:tw-col-span-1 xl:tw-col-span-2 2xl:tw-col-span-1 lg:tw-mt-12 2xl:tw-mt-16 '>
                <article className='tw-flex tw-flex-wrap tw-flex-row tw-overflow-hidden tw-items-center tw-justify-center tw-gap-2 tw-drop-shadow-xl tw-bg-gray-100 tw-text-secondary lg:tw-h-32 lg:tw-w-full 2xl:tw-h-48 2xl:tw-w-full tw-mb-2 2xl:tw-mb-4 tw-p-2 tw-py-3 hover:tw-scale-110 hover:tw-bg-secondary hover:tw-text-gray-50 tw-duration-200 tw-rounded-md'>
                    <div className='tw-text-4xl'>{item.card[4].icon}</div> 
                    <h5 className='tw-opacity-100 2xl:tw-font-bold tw-text-md lg:tw-text-base 2xl:tw-text-lg'>{item.card[4].info}</h5>
                    {/* <small className=''>{item.card[4].smallInfo}</small> */}
                </article>
                <article className='tw-flex tw-flex-wrap tw-flex-row tw-overflow-hidden tw-items-center tw-justify-center tw-gap-2 tw-drop-shadow-xl tw-bg-gray-100 tw-text-secondary lg:tw-h-32 lg:tw-w-full 2xl:tw-h-48 2xl:tw-w-full tw-mb-2 2xl:tw-mb-4 tw-p-2 tw-py-3 hover:tw-scale-110 hover:tw-bg-secondary hover:tw-text-gray-50 tw-duration-200 tw-rounded-md'>
                    <div className='tw-text-4xl'>{item.card[5].icon}</div>
                    <h5 className='tw-opacity-100 2xl:tw-font-bold tw-text-md lg:tw-text-base 2xl:tw-text-lg'>{item.card[5].info}</h5>
                    {/* <small className=''>{item.card[5].smallInfo}</small> */}
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
