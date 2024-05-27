import { Link, useLocation } from 'react-router-dom';

const Logo = () => {
  const { pathname } = useLocation();

  const getPathnameLogo = (pathname) => {
    switch (pathname) {
      case '/':
        return 'procanje-lg.png';
      default:
        return 'procanje-lg.png';
    }
  };

  return (
    <Link to="/" className="tw-flex tw-items-center">
      <img
        src={`/images/logo/${getPathnameLogo(pathname)}`}
        alt="qrservice-logo"
        className="tw-relative tw-object-cover tw-block tw-cursor-pointer tw-w-36 tw-h-auto sm:tw-w-40 sm:tw-h-auto md:tw-w-auto md:tw-h-10"
      />
      {/* <span className="tw-text-2xl lg:tw-block tw-pl-2 tw-font-extrabold lg:tw-text-4xl tw-text-secondary">
        ProCanje
      </span> */}
    </Link>
  );
};

export default Logo;
