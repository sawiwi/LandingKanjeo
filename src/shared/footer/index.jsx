import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo/procanje-lg.png';
import {
  footerSMediaNavigation,
  footerNavigation,
} from '../../constants/footer';
import { getCurrentYear } from '../../utils';

const Footer = () => {
  return (
    <footer className="bg-gray-medium shadow ">
      <div className="aie sm-12 md-8 lg-12">
        <div className="gs">
          <div className="ab">
            <div className='p-4 grid grid-cols-1 lg:grid-cols-3'>
              <div className='col-span-1 py-3'>
                <div className="flex  justify-center flex-grow items-center space-x-3  lg:space-x-10 mt-5 ">
                    <Link to="/" className="flex items-center">
                    <img
                      src={Logo}
                      alt="procanje-logo"
                      className="relative object-cover block cursor-pointer w-56 h-full sm:w-60 sm:h-full md:w-80 md:h-full"
                    />
                    {/* <span className="text-5xl lg:block py-3 font-extrabold lg:text-6xl text-primary hover:scale-105 duration-200">
                      ProCanje
                    </span> */}
                  </Link>
                </div>
                <p className="text-white text-lg title-font font-thin  text-center mb-3 tracking-wider">
                  "Realiza Canjes con nosotros de forma eficiente"
                </p>
              </div>
              <div className='col-span-1 py-3 lg:py-12 lg:mx-28'>
                <div className="flex-shrink-0 flex lg:flex-wrap items-center justify-center text-gray-600 space-x-1 mt-6 mb-5">
                  <div className="items-center lg:flex  space-x-2 ">
                    <ul className="flex">
                      {footerSMediaNavigation.map((item) => (
                        <li key={item.id} className="mx-2">
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noreferrer nofollow"
                            className={`bg-primary hover:bg-gray-200 text-white hover:text-white w-10 h-10  lg:w-11 lg:h-11 hover:scale-105  cursor-pointer rounded-ss-xl rounded-ee-xl duration-150 flex items-center justify-center transform group-hover:scale-110 transition-transform`}
                          >
                            <span
                              className={`hover:${item.color} text-secondary text-2xl`}
                            >
                              {item.icon === '' ? (
                                <img
                                  src={item.iconImg}
                                  alt="logo-x"
                                  height="20"
                                  width="20"
                                  className="text-secondary"
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
              </div>
              <div className='col-span-1 py-3 lg:py-12 '>
                <div className="flex-shrink-0 flex items-center justify-center text-gray-600 space-x-1 mt-5">
                  <div className="items-center flex justify-center space-x-2">
                    <ul className="flex flex-wrap justify-center 2xl:flex lg:items-center lg:space-x-3 relative">
                      {footerNavigation.map((item) => (
                        <Link
                          key={item.id}
                          className="outline-none hover:text-primary-light inline-flex text-primary items-center text-sm xl:text-base font-normal py-2 px-4 xl:px-5"
                          to={item.href}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
              <hr className="my-6 sm:mx-auto lg:my-3" />
              <span className="block text-sm text-white sm:text-center w-full p-3 rounded ">
                © {getCurrentYear()}{' '}
                <a href="/" className="underline">
                  ProCanje
                </a>
                . Todos los derechos reservados.
              </span>
              <span className="block text-sm text-white sm:text-center w-full pb-1 rounded ">
                Diseñado y creado por {' '}
                <a href="https://bidata.cl/" target="_blank" rel='noreferrer' className="underline">
                 Bidata
                </a>
              </span>



            {/* <div className="p-4 flex md:w-3/3 flex-col text-center items-center"> */}
              {/* <div className="flex ml-2 md:ml-8 lg:ml-10 justify-start flex-grow items-center space-x-3 sm:space-x-8 lg:space-x-10 mt-5">
                <Logo/>
              </div>

              <div className="flex-grow mt-5">
                <p className="text-white text-lg title-font font-thin mb-3 tracking-wider">
                  "Realiza Canjes con nosotros de forma eficiente"
                </p>
              </div>
              <div className="flex-shrink-0 flex items-center justify-end text-gray-600 space-x-1 mt-6 mb-5">
                <div className="items-center lg:flex space-x-2">
                  <ul className="flex">
                    {footerSMediaNavigation.map((item) => (
                      <li key={item.id} className="mx-2">
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noreferrer nofollow"
                          className={`bg-white hover:bg-gray-200 text-white hover:text-white w-12 h-12 cursor-pointer rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform`}
                        >
                          <span
                            className={`hover:${item.color} text-gray-800 text-2xl`}
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
              </div> */}
              {/* <div className="flex-shrink-0 flex items-center justify-end text-gray-600 space-x-1 mt-5">
                <div className="items-center lg:flex space-x-2">
                  <ul className="mr-10 2xl:flex lg:items-center lg:space-x-3 relative">
                    {footerNavigation.map((item) => (
                      <Link
                        key={item.id}
                        className="outline-none hover:text-primary-light inline-flex text-primary items-center text-sm xl:text-base font-normal py-2 px-4 xl:px-5"
                        to={item.href}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </ul>
                </div>
              </div> */}
              {/* <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
              <span className="block text-sm text-white sm:text-center border w-full p-3 rounded border-t-primary">
                © {getCurrentYear()}{' '}
                <a href="/" className="hover:underline">
                YoKanjeo
                </a>
                . Todos los derechos reservados.
              </span> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
