import Home from '../pages';
import About from '../pages/about';
import Faq from '../pages/faq';
import ServicesSect from '../pages/services';
import How from '../pages/howWork';
import Contact from '../pages/contact';

export const navigationRoutes = [
  {
    id: 1,
    name: 'Inicio',
    path: '/',
    element: <Home />,
  },
  {
    id: 2,
    name: 'Servicios',
    path: '/servicios',
    element: <ServicesSect />,
  },
  {
    id: 3,
    name: 'Cómo funciona',
    path: '/como-funciona',
    element: <How />,
  },
  {
    id: 4,
    name: 'Nosotros',
    path: '/nosotros',
    element: <About />,
  },
  {
    id: 5,
    name: 'Contacto',
    path: '/contacto',
    element: <Contact />,
  },
  {
    id: 6,
    name: 'FAQ',
    path: '/faq',
    element: <Faq />,
  },

];
