import React from 'react';
import '../../assets/css/components/map/map-img.css';

const WhywE = ({ renderContent }) => {
  return (
    <div className="text-gray-600 body-font mt-10">
      <div className="container px-2">
        <div className="flex flex-col text-center w-full mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 sm:mx-6 md:mx-0">
          {renderContent.card.map((e, idx) => (
                <div key={idx} className=" mb-16 group flex flex-col justify-start ittems-start gap-2 w-80 lg:w-96 h-56 duration-500 relative rounded-lg p-4 bg-gray-200 hover:-translate-y-2 hover:shadow-xl shadow-gray-300">
                    <img src={e.img} loading='lazy' className="absolute duration-700 shadow-md group-hover:-translate-y-4 group-hover:-translate-x-4 -bottom-6 -right-1  md:-right-3 w-1/2 h-1/2 rounded-lg bg-primary-light" alt='imageHere'/>
                  <div className="">
                    <h2 className="text-2xl font-bold mb-2 text-secondary">{e.title}</h2>
                    <p className="text-gray-800 line-clamp-3">
                    {e.content}
                    </p>
                  </div>
                </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default WhywE;
