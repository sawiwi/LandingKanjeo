import React from 'react';
import Slider from 'react-slick';

// import Button from '../ui/button';

const ReactSlickCommunity = ({ renderContent }) => {
  const settings = {
    dots: false,
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 8000,
    cssEase: 'linear',
    pauseOnHover: true,
  };

  return (
    <Slider {...settings} className="tw-relative tw-w-96 ">
      {renderContent.length !== 0 ? renderContent.map((item) => (
        <div key={item.id} className="tw-relative ">
          <img
            src={item.imgHero}
            alt="hero"
            className="tw-h-96 2xl:tw-h-[70vh] tw-mx-auto tw-w-full tw-object-cover tw-bg-gray-50  tw-rounded-3xl"
          />
          <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-black tw-opacity-50  tw-rounded-3xl"></div>
        </div>
      )): ''}
    </Slider>
  );
};

export default ReactSlickCommunity;
