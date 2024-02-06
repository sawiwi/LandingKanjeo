import NavigationItem from './navigation-item';
import { navigationData } from '../../data/navigation';

const Navigation = () => {
  return (
    <ul className="tw-hidden tw-mr-8 2xl:tw-flex lg:tw-items-center lg:tw-space-x-3 tw-relative">
      {navigationData?.length > 0 &&
        navigationData.map((item) => (
          <NavigationItem key={item?.id} menuItem={item} />
        ))}
    </ul>
  );
};

export default Navigation;
