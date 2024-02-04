import { useLayoutEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { navigationRoutes } from '../data/navigation-routes';
import NotFound from '../pages/404';

const AppRoutes = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <Routes>
      {navigationRoutes.map(({ id, name, path, element }) => (
        <Route key={id} name={name} path={path} element={element} />
      ))}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
