import React, { useState, Fragment } from 'react';
import { Transition, Dialog } from '@headlessui/react';
import NavMobile from '../../shared/navigation/navigation-mobile';

const MenuBar = () => {
  const [isVisable, setIsVisable] = useState(false);
  const handleOpenMenu = () => setIsVisable(true);
  const handleCloseMenu = () => setIsVisable(false);

  const renderContent = () => {
    return (
      <Transition appear show={isVisable} as={Fragment}>
        <Dialog
          as="div"
          className="tw-fixed tw-inset-0 tw-z-50 tw-overflow-y-auto"
          onClose={handleCloseMenu}
        >
          <div className="tw-fixed tw-left-0 tw-top-0 tw-bottom-0 tw-w-full tw-z-max tw-outline-none focus:tw-outline-none">
            <React.Fragment>
              <Transition.Child
                as={Fragment}
                enter="tw-transition tw-duration-100 tw-transform"
                enterFrom="tw-opacity-0 -translate-x-14" //aca
                enterTo="tw-opacity-100 tw-translate-x-0"
                leave="tw-transition tw-duration-150 tw-transform"
                leaveFrom="tw-opacity-100 tw-translate-x-0"
                leaveTo="tw-opacity-0 -translate-x-14" //aca
              >
                <div className="tw-z-10 tw-relative">
                  <NavMobile onClickClose={handleCloseMenu} />
                </div>
              </Transition.Child>

              <Transition.Child
                as={Fragment}
                enter="tw-duration-300"
                enterFrom="tw-opacity-0"
                enterTo="tw-opacity-100"
                leave=" tw-duration-200"
                leaveFrom="tw-opacity-100"
                leaveTo="tw-opacity-0"
              >
                <Dialog.Overlay className="tw-fixed tw-inset-0 tw-bg-gray-900 tw-bg-opacity-50" />
              </Transition.Child>
            </React.Fragment>
          </div>
        </Dialog>
      </Transition>
    );
  };

  return (
    <Fragment>
      <button
        onClick={handleOpenMenu}
        className="tw-pl-2.5 tw-rounded-lg tw-text-gray-700 focus:tw-outline-none tw-flex tw-items-center tw-justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="tw-h-7 tw-w-7"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {renderContent()}
    </Fragment>
  );
};

export default MenuBar;
