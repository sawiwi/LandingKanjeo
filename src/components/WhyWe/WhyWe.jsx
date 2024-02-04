import React from 'react';
import '../../assets/css/components/map/map-img.css';

const WhywE = ({ renderContent }) => {
  return (
    <div className="tw-text-gray-600 tw-body-font">
      <div className="tw-container tw-px-5 tw-mx-auto">
        <div className="tw-flex tw-flex-col tw-text-center tw-w-full tw-mb-6"></div>
        <div className="tw-flex tw-flex-wrap tw-justify-center">
          {renderContent.card.map((e, idx) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};
export default WhywE;
