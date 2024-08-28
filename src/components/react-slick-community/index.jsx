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
    <Slider {...settings} className="relative w-96 ">
      {renderContent.length !== 0 ? renderContent.map((item) => (
        <div key={item.id} className="relative ">
          <img
            src={item.imgHero}
            alt="hero"
            className="h-96 xl:h-[60vh] 2xl:h-[50vh] mx-auto w-full object-cover bg-gray-50  rounded-3xl"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50  rounded-3xl"></div>
        </div>
      )): ''}
    </Slider>
  );
};

export default ReactSlickCommunity;
