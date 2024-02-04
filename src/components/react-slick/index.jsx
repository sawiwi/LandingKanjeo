import React from 'react';
import Slider from 'react-slick';
import Button from '../ui/button';

const ReactSlick = ({ renderContent }) => {
  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
    pauseOnHover: false,
  };

  return (
    <Slider {...settings} className="tw-relative w-full">
      {renderContent?.content[0]?.imgs.map((item) => (
        <div key={item.id} className="tw-relative">
          <img
            src={item.src}
            alt="hero"
            className="tw-bg-cover tw-h-[80vh] md:tw-h-[70vh] lg:tw-h-[80vh] tw-mx-auto tw-w-full tw-object-cover tw-object-center"
          />
          <div className="tw-absolute tw-z-50 tw-inset-0 tw-text-center tw-flex tw-flex-col tw-w-[90%] md:tw-w-[70%] lg:tw-w-[60%] xl:tw-w-[40%] tw-mx-auto tw-justify-center tw-items-center tw-z-100 tw-text-red-500">
            <h1 className="tw-text-white tw-opacity-100 tw-font-bold tw-text-2xl md:tw-text-4xl">
              {renderContent.content[0].headings[0].content}
            </h1>
            <p className="tw-text-white tw-opacity-100 tw-font-light tw-text-lg md:tw-text-xl tw-mt-2">
              {renderContent.content[0].texts[0].content}
            </p>
            <div className="tw-mt-8">
              <Button
                href={renderContent.content[0].buttons[0].path}
                className="tw-bg-primary hover:tw-bg-primary-light tw-shadow-md tw-text-sm"
              >
                {renderContent.content[0].buttons[0].content}
              </Button>
            </div>
          </div>
          <div className="tw-absolute tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-black tw-opacity-50"></div>
        </div>
      ))}
    </Slider>
  );
};

export default ReactSlick;
