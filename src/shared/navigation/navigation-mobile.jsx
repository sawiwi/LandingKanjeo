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
      <ul className="nav-mobile-sub-menu pl-6 pb-1 text-base">
        {item.children?.map((i, index) => (
          <Disclosure key={i.href + index} as="li">
            <a href={i.href}
              target={i.href === 'https://procanje.app/sign-in' ? '_blank' : ''}
              className="flex px-4 py-2.5 text-secondary-light text-sm font-medium rounded-lg hover:bg-gray-100 mt-[2px]"
              rel="noreferrer">
              <span
                className={!i.children ? 'block w-full' : ''}
                onClick={onClickClose}
              >
                {i.name}
              </span>
              {i.children && (
                <span
                  className="block flex-grow "
                  onClick={(e) => e.preventDefault()}
                >
                  <Disclosure.Button
                    as="span"
                    className="flex justify-end flex-grow"
                  ></Disclosure.Button>
                </span>
              )}
            </a>
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
      <Disclosure key={item.id} as="li" className="text-secondary-light">
        <a
          href={item.href}
          className="flex w-full itw-tems-center py-3.5 px-4 font-semibold uppercase tracking-wide text-md hover:bg-gray-100 rounded-lg"
          to={{
            pathname: item.href || undefined,
          }}
          target={item.href === 'https://procanje.app/sign-in' ? '_blank' : ''}
          rel='noreferrer'
        >
          <span
            className={!item.children ? 'block w-full' : ''}
            onClick={onClickClose}
          >
            {item.name}
          </span>
          {item.children && (
            <span
              className="block flex-grow"
              onClick={(e) => e.preventDefault()}
            >
              <Disclosure.Button
                as="span"
                className="flex justify-end flex-grow"
              >
                <MdOutlineArrowDropDown className="text-2xl" />
              </Disclosure.Button>
            </span>
          )}
        </a>
        {item.children && (
          <Disclosure.Panel>{_renderMenuChild(item)}</Disclosure.Panel>
        )}
      </Disclosure>
    );
  };

  return (
    <div className="overflow-y-auto flex flex-col w-full max-w-sm h-screen py-2 transition transform shadow-lg bg-body  divide-y-2 divide-gray-100">
      <div className="pb-2 px-5">
        <Logo />
        <span className="absolute right-2 top-5 p-1">
          <ButtonClose onClick={onClickClose} />
        </span>
      </div>
      <ul className="flex flex-col py-6 px-2 space-y-1">
        {data.map(_renderItem)}
      </ul>
    </div>
  );
};

export default NavMobile;
