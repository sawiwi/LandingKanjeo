import '../../assets/css/components/map/map-img.css';

const CardSystem = ({ renderContent }) => {
  return (
    <div className="container px-5 py-12 mx-auto">
      <div className="text-center mb-5">
        <div className="flex mt-6 justify-center"></div>
      </div>

      <div className="flex flex-wrap flex-row items-center justify-center w-full gap-5">
        {renderContent.card1.map((e, idx) => (
          <div
            key={idx}
            className="w-full sm:w-1/2 lg:w-1/3 mb-8 sm:mb-0"
          >
            <div className="h-[140px] bg-card flex justify-center items-center text-center max-w-xl bg-white rounded-lg overflow-hidden shadow-md">
              <div className="p-4">
                <p className="text-xl font-normal text-white">
                  {e.text}{' '}
                  <span className="text-white pb-4">{e.resalt}</span>{' '}
                  {e.text1}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex m-4 flex-wrap mx-4 mb-10 mt-10 md:space-y-0 md:flex md:space-x-6">
        {renderContent.card2.map((e, idx) => (
          <div
            key={idx}
            className="w-full md:w-1/3 p-4 flex flex-col text-center items-center"
          >
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-primary-light/20  mb-5 flex-shrink-0">
              <div className="text-white w-10 h-10">{e.icon}</div>
            </div>
            <div className="flex-grow">
              <h2 className="text-gray-600 text-lg title-font font-medium mb-3">
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
