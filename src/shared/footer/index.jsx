import { Link } from 'react-router-dom';
import Logo from '../logo';
import {
  footerSMediaNavigation,
  footerNavigation,
} from '../../constants/footer';
import { getCurrentYear } from '../../utils';

const Footer = () => {
  return (
    <footer className="tw-bg-gray-dark tw-shadow tw-mt-[50px]">
      <div className="tw-aie tw-sm-12 tw-md-8 tw-lg-12">
        <div className="tw-gs ">
          <div className="tw-ab">
            <div className="tw-p-4 tw-flex md:tw-w-3/3 tw-flex-col tw-text-center tw-items-center">
              <div className="tw-flex tw-ml-2 md:tw-ml-8 lg:tw-ml-10 tw-justify-start tw-flex-grow tw-items-center tw-space-x-3 sm:tw-space-x-8 lg:tw-space-x-10 tw-mt-5">
                <Logo />
              </div>

              <div className="tw-flex-grow tw-mt-5">
                <p className="tw-text-white tw-text-lg tw-title-font tw-font-thin tw-mb-3">
                  "Aportamos tecnología e información valiosa para sus activos"
                </p>
              </div>
              <div className="tw-flex-shrink-0 tw-flex tw-items-center tw-justify-end tw-text-gray-600 tw-space-x-1 tw-mt-6 tw-mb-5">
                <div className="tw-items-center lg:tw-flex tw-space-x-2">
                  <ul className="tw-flex">
                    {footerSMediaNavigation.map((item) => (
                      <li key={item.id} className="tw-mx-2">
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer nofollow"
                          className={`tw-bg-white hover:tw-bg-gray-200 tw-text-white hover:tw-text-white tw-w-12 tw-h-12 tw-cursor-pointer tw-rounded-full tw-flex tw-items-center tw-justify-center tw-transform group-hover:tw-scale-110 tw-transition-transform`}
                        >
                          <span
                            className={`hover:${item.color} tw-text-gray-800 tw-text-2xl`}
                          >
                            {item.icon === '' ? (
                              <img
                                src={item.iconImg}
                                alt="logo-x"
                                height="23"
                                width="23"
                                className="text-gray-100"
                              />
                            ) : (
                              item.icon
                            )}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="tw-flex-shrink-0 tw-flex tw-items-center tw-justify-end tw-text-gray-600 tw-space-x-1 tw-mt-5">
                <div className="tw-items-center lg:tw-flex tw-space-x-2">
                  <ul className="tw-mr-10 2xl:tw-flex lg:tw-items-center lg:tw-space-x-3 tw-relative">
                    {footerNavigation.map((item) => (
                      <Link
                        key={item.id}
                        className="tw-outline-none hover:tw-text-primary tw-inline-flex tw-text-white tw-items-center tw-text-sm xl:tw-text-base tw-font-normal tw-py-2 tw-px-4 xl:tw-px-5"
                        to={item.href}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
              <hr className="tw-my-6 tw-border-gray-200 sm:tw-mx-auto lg:tw-my-8" />
              <span className="tw-block tw-text-sm tw-text-white sm:tw-text-center tw-border tw-w-full tw-p-3 tw-rounded tw-border-gray-700">
                © {getCurrentYear()}{' '}
                <a href="/" className="hover:tw-underline">
                  QR Service
                </a>
                . Todos los derechos reservados.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
