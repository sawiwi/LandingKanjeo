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
    <Slider {...settings} className="relative w-full">
      {renderContent.length !== 0 ? renderContent.map((item) => (
        <div key={item.id} className="relative">
          <img
            src={item.imgHero}
            alt="hero"
            className="bg-cover h-[80vh] md:h-[70vh] lg:h-[99vh] 2xl:h-[60vh] w-auto object-cover bg-gray-50"
          />
          <div className="absolute z-50 inset-0 text-center flex flex-col w-[90%] md:w-[70%] lg:w-[60%] xl:w-[80%] mx-auto justify-center items-center z-100 ">
            <h1 className="text-white lg:mt-16 2xl:mt-2 opacity-100 font-bold text-3xl 2xl:text-4xl">
              {item.headings}
            </h1>
            <p className="text-white opacity-100 font-light text-md md:text-xl mt-2">
              {item.texts}
            </p>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
        </div>
      )): ''}
    </Slider>
  );
};

export default ReactSlickExtServ;
