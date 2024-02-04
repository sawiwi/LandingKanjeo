import React from 'react';
import Button from '../ui/button';
const Business = ({ renderContent }) => {
  return (
    <div className="tw-lg:pt-[120px] tw-pb-12 tw-lg:pb-[90px]">
      <div className="tw-container">
        <div className="tw-flex tw-flex-wrap tw-mx-4">
          <div className="tw-w-full tw-px-4">
            <div className="tw-text-center tw-mx-auto tw-mb-12 tw-lg:mb-20 tw-max-w-[510px]"></div>
          </div>
        </div>
        <div className="tw-grid tw-grid-cols-1 md:tw-grid-cols-2 lg:tw-grid-cols-2 tw-gap-4">
          {renderContent.firstCard.map((e, idx) => (
            <div key={idx} className="tw-flex tw-flex-col">
              <div className="tw-p-10 md:tw-px-7 tw-xl:tw-px-10 tw-rounded-[20px] tw-bg-white tw-shadow-md tw-hover:tw-shadow-lg tw-mb-8">
                <div className="tw-w-[70px] tw-h-[70px] tw-flex tw-items-center tw-justify-center tw-bg-primary-light/20 tw-text-primary tw-rounded-full tw-mb-8">
                  {e.icon}
                </div>
                <div className="tw-flex tw-flex-col tw-h-[250px]">
                  <h4 className="tw-font-semibold tw-text-xl tw-text-dark tw-mb-3">
                    {e.title}
                  </h4>
                  <p className="tw-text-body-color tw-overflow-hidden tw-overflow-ellipsis">
                    {e.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="tw-mt-8 tw-flex tw-justify-center">
        <Button href="/" className="tw-bg-primary tw-shadow-md tw-text-sm">
          Ver planes
        </Button>
      </div>
    </div >
  );
};

export default Business;
