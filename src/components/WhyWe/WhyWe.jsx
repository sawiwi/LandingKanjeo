import React from 'react';
import '../../assets/css/components/map/map-img.css';

const WhywE = ({ renderContent }) => {
  return (
    <div className="tw-text-gray-600 tw-body-font tw-mt-10">
      <div className="tw-container tw-px-2 tw-mx-auto">
        <div className="tw-flex tw-flex-col tw-text-center tw-w-full tw-mb-6"></div>
        <div className="tw-grid tw-grid-cols-1 xl:tw-grid-cols-2 2xl:tw-grid-cols-3  ">
          {renderContent.card.map((e, idx) => (
                <div key={idx} className=" tw-mb-16 tw-group tw-flex tw-flex-col tw-justify-start tw-ittems-start tw-gap-2 tw-w-80 lg:tw-w-96 tw-h-56 tw-duration-500 tw-relative tw-rounded-lg tw-p-4 tw-bg-gray-200 hover:-tw-translate-y-2 hover:tw-shadow-xl tw-shadow-gray-300">
                    <img src={e.img} className="tw-absolute tw-duration-700 tw-shadow-md tw-group-hover:-tw-translate-y-4 group-hover:-tw-translate-x-4 -tw-bottom-6 -tw-right-3 tw-w-1/2 tw-h-1/2 tw-rounded-lg tw-bg-primary-light" alt='imageHere'/>
                  <div className="">
                    <h2 className="tw-text-2xl tw-font-bold tw-mb-2 tw-text-secondary">{e.title}</h2>
                    <p className="tw-text-gray-800 tw-line-clamp-3">
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
