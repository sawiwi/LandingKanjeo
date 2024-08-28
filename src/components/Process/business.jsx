import React from 'react';
import Button from '../ui/button';
const Business = ({ renderContent }) => {
  return (
    <div className="lg:pt-[120px] pb-12 lg:pb-[90px]">
      <div className="container">
        <div className="flex flex-wrap mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-12 lg:mb-20 max-w-[510px]"></div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {renderContent.firstCard.map((e, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="p-10 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg mb-8">
                <div className="w-[70px] h-[70px] flex items-center justify-center bg-primary-light/20 text-primary rounded-full mb-8">
                  {e.icon}
                </div>
                <div className="flex flex-col h-[250px]">
                  <h4 className="font-semibold text-xl text-dark mb-3">
                    {e.title}
                  </h4>
                  <p className="text-body-color overflow-hidden overflow-ellipsis">
                    {e.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <Button href="/" className="bg-primary shadow-md text-sm">
          Ver planes
        </Button>
      </div>
    </div >
  );
};

export default Business;
