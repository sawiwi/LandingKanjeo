import Logo from '../logo';
import Navigation from '../navigation/navigation';
import MenuBar from '../../components/menu-bar';

const MainNav = () => {
  return (
    <div className="tw-relative tw-flex tw-z-10 tw-py-2 tw-bg-white tw-rounded-full tw-shadow-xl">
      <div className="tw-flex tw-ml-2 md:tw-ml-8 lg:tw-ml-10 tw-justify-start tw-flex-grow tw-items-center tw-space-x-3 sm:tw-space-x-8 lg:tw-space-x-10">
        <Logo />
      </div>

      <div className="tw-flex-shrink-0 tw-flex tw-items-center tw-justify-end tw-text-gray-600 tw-space-x-1">
        <div className="tw-hidden tw-items-center lg:tw-flex tw-space-x-2">
          <Navigation />
        </div>
      </div>

      <div className="tw-flex tw-items-center xl:tw-hidden tw-mr-4 md:tw-mr-8 lg:tw-mr-10">
        <MenuBar />
      </div>
    </div>
  );
};

export default MainNav;
