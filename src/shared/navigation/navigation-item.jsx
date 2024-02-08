import React, { Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react';
import { AiOutlineUser } from '../../components/icon';

const NavigationItem = ({ menuItem }) => {
  const { pathname } = useLocation();
  const { name, href, children } = menuItem;

  return children?.length > 0 ? (
    <Popover className="relative">
      {({ open }) => (
        <Fragment>
          <Popover.Button className="tw-inline-flex tw-items-center tw-text-sm xl:tw-text-base tw-font-normal tw-outline-none tw-py-2 tw-px-4 xl:tw-px-3 tw-rounded-full tw-text-gray-800 hover:tw-text-primary">
            <span className="tw-pr-2">{name}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="tw-w-3 tw-h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="tw-transition tw-ease-out tw-duration-200"
            enterFrom="tw-opacity-0 tw-translate-y-1"
            enterTo="tw-opacity-100 tw-translate-y-0"
            leave="tw-transition tw-ease-in tw-duration-150"
            leaveFrom="tw-opacity-100 tw-translate-y-0"
            leaveTo="tw-opacity-0 tw-translate-y-1"
          >
            <Popover.Panel className="tw-absolute left-tw-1/2 tw-z-10 tw-mt-2 tw-w-56 tw-border-0 tw-rounded-2xl tw-max-w-56 tw-[-translate-x-1/2] tw-transform tw-px-4 sm:tw-px-0 lg:tw-max-w-3xl">
              <div className="tw-overflow-hidden tw-rounded-xl tw-shadow-lg tw-ring-1 tw-ring-black tw-ring-opacity-5 tw-w-50">
                <div className="tw-relative tw-grid tw-gap-1 tw-p-2 tw-px-2 lg:tw-grid-cols-1 tw-bg-white tw-w-auto tw-rounded-xl">
                  {children?.map(({ name, href, icon, status }) => (
                    <a
                      key={name}
                      href={href}
                      className={`${
                        pathname === href
                          ? 'tw-bg-primary tw-text-white tw-flex tw-items-center tw-rounded-lg tw-transition tw-duration-150 tw-ease-in-out hover:tw-bg-primary focus:tw-outline-none focus-visible:tw-ring'
                          : 'tw-flex tw-items-center tw-rounded-lg tw-transition tw-duration-150 tw-ease-in-out hover:tw-bg-gray-100 focus:tw-outline-none focus-visible:tw-ring'
                      }`}
                    >
                      <div className="tw-ml-3">
                        <p className="tw-flex tw-items-center tw-text-sm tw-py-2 tw-font-normal">
                          <span className="tw-pr-2 tw-text-slate-500">
                            {icon}
                          </span>
                          {name}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Fragment>
      )}
    </Popover>
  ) : (
    <a
      href={href}
      target={
        href === 'https://qr-service-dashboard.netlify.app/auth-login'
          ? '_blank'
          : ''
      }
      className={`tw-inline-flex tw-items-center tw-text-sm xl:tw-text-base tw-font-normal tw-outline-none tw-py-2 tw-px-4 xl:tw-px-3 hover:tw-text-secondary-light ${
        pathname === href
          ? 'tw-inline-flex tw-text-secondary tw-items-center tw-text-sm xl:tw-text-base tw-font-normal tw-py-2 tw-px-4 xl:tw-px-5 '
          : name === 'Mi cuenta'
          ? 'tw-bg-secondary tw-border tw-rounded-full tw-inline-flex tw-items-center tw-text-sm xl:tw-text-base tw-font-normal tw-py-2 tw-px-4 xl:tw-px-5  tw-text-primary hover:tw-bg-secondary-light hover:tw-text-white hover:tw-border hover:tw-border-secondary-light tw-duration-200'
          : 'tw-inline-flex tw-items-center tw-text-sm xl:text-base tw-font-normal tw-py-2 tw-px-4 xl:tw-px-5  tw-text-secondary  hover:tw-text-secondary-light'
      }`}
      rel="noreferrer"

    >
      {/* {console.log(href)} */}
      {name === 'Mi cuenta' && <AiOutlineUser />} {name}
    </a>
  );
};

export default NavigationItem;
