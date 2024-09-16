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
          <Popover.Button className="inline-flex items-center text-sm xl:text-base font-normal outline-none py-2 px-4 xl:px-3 rounded-full text-gray-800 hover:text-primary">
            <span className="pr-2">{name}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
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
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
          >
            <Popover.Panel className="absolute left-1/2 z-10 mt-2 w-56 border-0 rounded-2xl max-w-56 [-translate-x-1/2] transform px-4 sm:px-0 lg:max-w-3xl">
              <div className="overflow-hidden rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 w-50">
                <div className="relative grid gap-1 p-2 px-2 lg:grid-cols-1 bg-white w-auto rounded-xl">
                  {children?.map(({ name, href, icon, status }) => (
                    <a
                      key={name}
                      href={href}
                      className={`${
                        pathname === href
                          ? 'bg-primary text-white flex items-center rounded-lg transition duration-150 ease-in-out hover:bg-primary focus:outline-none focus-visible:ring'
                          : 'flex items-center rounded-lg transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring'
                      }`}
                    >
                      <div className="ml-3">
                        <p className="flex items-center text-sm py-2 font-normal">
                          <span className="pr-2 text-slate-500">
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
        href === 'https://procanje.app/sign-up'
          ? '_blank'
          : ''
      }
      className={`inline-flex items-center text-sm xl:text-base font-normal outline-none py-2 px-4 xl:px-3 hover:text-secondary-light ${
        pathname === href
          ? 'inline-flex text-secondary items-center text-sm xl:text-base font-normal py-2 px-4 xl:px-5 '
          : name === 'Registrate aquí'
          ? 'bg-secondary border rounded-full inline-flex items-center text-sm xl:text-base font-normal py-2 px-4 xl:px-5  text-primary hover:bg-secondary-light hover:text-white hover:border hover:border-secondary-light duration-200'
          : 'inline-flex items-center text-sm xl:text-base font-normal py-2 px-4 xl:px-5  text-secondary  hover:text-secondary-light'
      }`}
      rel="noreferrer"

    >
      {/* {console.log(href)} */}
      {name === 'Registrate aquí' && <AiOutlineUser />} {name}
    </a>
  );
};

export default NavigationItem;
