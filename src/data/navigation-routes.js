import Home from '../pages';
import About from '../pages/about';
// import Faq from '../pages/faq';
// import ServicesSect from '../pages/services';
import How from '../pages/howWork';
import Contact from '../pages/contact';
import Community from '../pages/community';
import PortalRealtor from '../pages/portalRealtors';
import ProfileRealtor from '../components/profileRealtor';

export const navigationRoutes = [
  {
    id: 1,
    name: 'Inicio',
    path: '/',
    element: <Home />,
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
    id:7,
    name : 'Comunidad',
    path: '/comunidad',
    element:<Community/>
  },
  {
    id:8,
    name : 'Portal Corredores',
    path: '/portal-corredores',
    element:<PortalRealtor/>
  },

  {
    id:10,
    name : 'Perfil-corredor',
    path: '/perfil-corredor',
    element:<ProfileRealtor/>
  },

];
