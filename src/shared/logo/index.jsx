import { Link, useLocation } from 'react-router-dom';

const Logo = () => {
  const { pathname } = useLocation();

  const getPathnameLogo = (pathname) => {
    switch (pathname) {
      case '/':
        return 'main-logo.png';
      default:
        return 'main-logo.png';
    }
  };

  return (
    <Link to="/" className="tw-flex tw-items-center">
      {/* <img
        src={`/images/logo/${getPathnameLogo(pathname)}`}
        alt="qrservice-logo"
        className="tw-relative tw-object-cover tw-block tw-cursor-pointer tw-w-[60px] tw-h-[60px] sm:tw-w-[65px] sm:tw-h-[65px] md:tw-w-[65px] md:tw-h-[65px]"
      /> */}
      <span className="tw-text-2xl lg:tw-block tw-pl-2 tw-font-extrabold lg:tw-text-4xl tw-text-secondary">
        Yokanjeo
      </span>
    </Link>
  );
};

export default Logo;
