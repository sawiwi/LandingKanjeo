import NavigationItem from './navigation-item';
import { navigationData } from '../../data/navigation';

const Navigation = () => {
  return (
    <ul className=" mr-8 2xl:flex lg:items-center lg:space-x-3 relative">
      {navigationData?.length > 0 &&
        navigationData.map((item) => (
          <NavigationItem key={item?.id} menuItem={item} />
        ))}
    </ul>
  );
};

export default Navigation;
