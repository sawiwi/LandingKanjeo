import Logo from '../logo';
import Navigation from '../navigation/navigation';
import MenuBar from '../../components/menu-bar';

const MainNav = () => {
  return (
    <div className="relative flex z-10 py-3 xl:py-5 bg-white rounded-sm shadow-xl">
      <div className="flex ml-2 md:ml-8 lg:ml-10 justify-start flex-grow items-center space-x-3 sm:space-x-8 lg:space-x-10">
        <Logo />
      </div>

      <div className="flex-shrink-0 flex items-center justify-end text-gray-600 space-x-1">
        <div className="hidden items-center lg:flex space-x-2">
          <Navigation />
        </div>
      </div>

      <div className="flex items-center xl:hidden mr-4 md:mr-8 lg:mr-10">
        <MenuBar />
      </div>
    </div>
  );
};

export default MainNav;
