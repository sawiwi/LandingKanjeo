import React from 'react';
import Slider from 'react-slick';
import CardSystem from '../card/card-02';
import Button from '../ui/button';

// import Button from '../ui/button';

const ReactSlickExtServ = ({ renderContent }) => {
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
    <Slider {...settings} className="tw-relative tw-w-full">
      {renderContent.length !== 0 ? renderContent.map((item) => (
        <div key={item.id} className="tw-relative">
          <img
            src={item.imgHero}
            alt="hero"
            className="tw-bg-cover tw-h-[80vh] md:tw-h-[70vh] lg:tw-h-[99vh] 2xl:tw-h-[60vh] tw-w-auto tw-object-cover tw-bg-gray-50"
          />
          <div className="tw-absolute tw-z-50 tw-inset-0 tw-text-center tw-flex tw-flex-col tw-w-[90%] md:tw-w-[70%] lg:tw-w-[60%] xl:tw-w-[80%] tw-mx-auto tw-justify-center tw-items-center tw-z-100 ">
            <h1 className="tw-text-white lg:tw-mt-16 2xl:tw-mt-2 tw-opacity-100 tw-font-bold tw-text-3xl 2xl:tw-text-4xl">
              {item.headings}
            </h1>
            <p className="tw-text-white tw-opacity-100 tw-font-light tw-text-md md:tw-text-xl tw-mt-2">
              {item.texts}
            </p>
          </div>
          <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-black tw-opacity-60"></div>
        </div>
      )): ''}
    </Slider>
  );
};

export default ReactSlickExtServ;
