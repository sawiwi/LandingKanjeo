import React from 'react';
import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import ButtonClose from '../../components/ui/button/button-close';
import Logo from '../logo';
import { MdOutlineArrowDropDown } from '../../components/icon';
import { navigationData } from '../../data/navigation';

const NavMobile = ({ data = navigationData, onClickClose }) => {
  const _renderMenuChild = (item) => {
    return (
      <ul className="tw-nav-mobile-sub-menu tw-pl-6 tw-pb-1 tw-text-base">
        {item.children?.map((i, index) => (
          <Disclosure key={i.href + index} as="li">
            <Link
              to={i.href || '/'}
              className="tw-flex tw-px-4 tw-py-2.5 tw-text-secondary-light tw-text-sm tw-font-medium tw-rounded-lg hover:tw-bg-gray-100 tw-mt-[2px]"
            >
              <span
                className={!i.children ? 'tw-block tw-w-full' : ''}
                onClick={onClickClose}
              >
                {i.name}
              </span>
              {i.children && (
                <span
                  className="tw-block tw-flex-grow "
                  onClick={(e) => e.preventDefault()}
                >
                  <Disclosure.Button
                    as="span"
                    className="tw-flex tw-justify-end tw-flex-grow"
                  ></Disclosure.Button>
                </span>
              )}
            </Link>
            {i.children && (
              <Disclosure.Panel>{_renderMenuChild(i)}</Disclosure.Panel>
            )}
          </Disclosure>
        ))}
      </ul>
    );
  };

  const _renderItem = (item) => {
    return (
      <Disclosure key={item.id} as="li" className="tw-text-secondary-light">
        <Link
          className="tw-flex tw-w-full itw-tems-center tw-py-3.5 tw-px-4 tw-font-semibold tw-uppercase tw-tracking-wide tw-text-md hover:tw-bg-gray-100 tw-rounded-lg"
          to={{
            pathname: item.href || undefined,
          }}
        >
          <span
            className={!item.children ? 'tw-block tw-w-full' : ''}
            onClick={onClickClose}
          >
            {item.name}
          </span>
          {item.children && (
            <span
              className="tw-block tw-flex-grow"
              onClick={(e) => e.preventDefault()}
            >
              <Disclosure.Button
                as="span"
                className="tw-flex tw-justify-end tw-flex-grow"
              >
                <MdOutlineArrowDropDown className="tw-text-2xl" />
              </Disclosure.Button>
            </span>
          )}
        </Link>
        {item.children && (
          <Disclosure.Panel>{_renderMenuChild(item)}</Disclosure.Panel>
        )}
      </Disclosure>
    );
  };

  return (
    <div className="tw-overflow-y-auto tw-flex tw-flex-col tw-w-full tw-max-w-sm tw-h-screen tw-py-2 tw-transition tw-transform tw-shadow-lg tw-bg-body  tw-divide-y-2 tw-divide-gray-100">
      <div className="tw-pb-2 tw-px-5">
        <Logo />
        <span className="tw-absolute tw-right-2 tw-top-5 tw-p-1">
          <ButtonClose onClick={onClickClose} />
        </span>
      </div>
      <ul className="tw-flex tw-flex-col tw-py-6 tw-px-2 tw-space-y-1">
        {data.map(_renderItem)}
      </ul>
    </div>
  );
};

export default NavMobile;
