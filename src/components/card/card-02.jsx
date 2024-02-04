import '../../assets/css/components/map/map-img.css';

const CardSystem = ({ renderContent }) => {
  return (
    <div className="tw-container tw-px-5 tw-py-12 tw-mx-auto">
      <div className="tw-text-center tw-mb-5">
        <div className="tw-flex tw-mt-6 tw-justify-center"></div>
      </div>

      <div className="tw-flex tw-flex-wrap tw-flex-row tw-items-center tw-justify-center tw-w-full tw-gap-5">
        {renderContent.card1.map((e, idx) => (
          <div
            key={idx}
            className="tw-w-full sm:tw-w-1/2 lg:tw-w-1/3 tw-mb-8 sm:tw-mb-0"
          >
            <div className="tw-h-[140px] bg-card tw-flex tw-justify-center tw-items-center tw-text-center tw-max-w-xl tw-bg-white tw-rounded-lg tw-overflow-hidden tw-shadow-md">
              <div className="tw-p-4">
                <p className="tw-text-xl tw-font-normal tw-text-white">
                  {e.text}{' '}
                  <span className="tw-text-white tw-pb-4">{e.resalt}</span>{' '}
                  {e.text1}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="tw-flex tw-m-4 tw-flex-wrap tw-mx-4 tw-mb-10 tw-mt-10 md:tw-space-y-0 md:tw-flex md:space-x-6">
        {renderContent.card2.map((e, idx) => (
          <div
            key={idx}
            className="tw-w-full md:tw-w-1/3 tw-p-4 tw-flex tw-flex-col tw-text-center tw-items-center"
          >
            <div className="tw-w-20 tw-h-20 tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-bg-primary-light/20  tw-mb-5 tw-flex-shrink-0">
              <div className="tw-text-white tw-w-10 tw-h-10">{e.icon}</div>
            </div>
            <div className="tw-flex-grow">
              <h2 className="tw-text-gray-600 tw-text-lg tw-title-font tw-font-medium tw-mb-3">
                {e.texts}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CardSystem;
