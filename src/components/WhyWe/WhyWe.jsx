import React from 'react';
import '../../assets/css/components/map/map-img.css';

const WhywE = ({ renderContent }) => {
  return (
    <div className="tw-text-gray-600 tw-body-font tw-mt-10">
      <div className="tw-container tw-px-5 tw-mx-auto">
        <div className="tw-flex tw-flex-col tw-text-center tw-w-full tw-mb-6"></div>
        <div className="tw-grid tw-grid-cols-1 xl:tw-grid-cols-3 ">
          {/* {renderContent.card.map((e, idx) => (
            <div key={idx} className="tw-w-full sm:tw-w-1/2 lg:tw-w-1/4 tw-p-4">
              <div className="tw-border-0 tw-text-white bg-card-whywee tw-px-4 tw-py-6 tw-rounded-xl tw-h-full">
                {e.icon}
                <h2 className="tw-title-font tw-font-medium tw-text-xl tw-text-white tw-h-12">
                  {e.title}
                </h2>
                <p className="tw-leading-relaxed tw-h-20 tw-overflow-hidden">
                  {e.content}
                </p>
              </div>
            </div>
          ))} */}
          {renderContent.card.map((e, idx) => (
                <div key={idx} className=" tw-mb-16 tw-group tw-flex tw-flex-col tw-justify-start tw-ittems-start tw-gap-2 tw-w-96 tw-h-56 tw-duration-500 tw-relative tw-rounded-lg tw-p-4 tw-bg-gray-200 hover:-tw-translate-y-2 hover:tw-shadow-xl tw-shadow-gray-300">
                    <img src={e.img} className="tw-absolute tw-duration-700 tw-shadow-md tw-group-hover:-tw-translate-y-4 group-hover:-tw-translate-x-4 -tw-bottom-6 -tw-right-3 tw-w-1/2 tw-h-1/2 tw-rounded-lg tw-bg-primary-light" />
                  
                
                  <div className="">
                    <h2 className="tw-text-2xl tw-font-bold tw-mb-2 tw-text-secondary">{e.title}</h2>
                    <p className="tw-text-secondary-light tw-line-clamp-3">
                    {e.content}
                    </p>
                  </div>
                  {/* <button
                    className="hover:tw-bg-gray-300 tw-bg-gray-200 tw-text-gray-800 tw-mt-6 tw-rounded tw-p-2 tw-px-6"
                  >
                    Explore
                  </button> */}
                </div>
          ))}

        </div>
      </div>
    </div>
  );
};
export default WhywE;
