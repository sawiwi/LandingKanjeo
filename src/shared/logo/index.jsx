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
    <Link to="/" className="flex items-center">
      <img
        src={`/images/logo/${getPathnameLogo(pathname)}`}
        alt="qrservice-logo"
        className="relative object-cover block cursor-pointer w-36 h-auto sm:w-40 sm:h-auto md:w-auto md:h-10"
      />
      {/* <span className="text-2xl lg:block pl-2 font-extrabold lg:text-4xl text-secondary">
        ProCanje
      </span> */}
    </Link>
  );
};

export default Logo;
