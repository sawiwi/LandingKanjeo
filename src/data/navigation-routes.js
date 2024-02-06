import Home from '../pages';
import About from '../pages/contact';
// import VehicleManagementSystem from '../pages/vehicle-management-system';
// import CertifiedTraceabilitySystem from '../pages/certified-traceability-system';
import RepLaw from '../pages/rep-law';
// import ReturnTravelPortal from '../pages/return-travel-portal';
import Faq from '../pages/faq';

export const navigationRoutes = [
  {
    id: 1,
    name: 'Inicio',
    path: '/',
    element: <Home />,
  },
  {
    id: 2,
    name: 'Contacto',
    path: '/contacto',
    element: <About />,
  },
  {
    id: 3,
    name: 'FAQ',
    path: '/faq',
    element: <Faq />,
  },
  // {
  //   id: 2,
  //   name: 'Contacto',
  //   path: '/contacto',
  //   element: <About />,
  // },
  // {
  //   id: 3,
  //   name: 'Sistema de Gestión para vehículos',
  //   path: '/sistema-de-gestion-para-vehiculos',
  //   element: <VehicleManagementSystem />,
  // },
  // {
  //   id: 4,
  //   name: 'Sistema de Trazabilidad Certificada',
  //   path: '/sistema-de-trazabilidad-certificada',
  //   element: <CertifiedTraceabilitySystem />,
  // },
  // {
  //   id: 5,
  //   name: 'Ley REP',
  //   path: '/ley-rep',
  //   element: <RepLaw />,
  // },

  // {
  //   id: 7,
  //   name: 'Mi cuenta',
  //   path: '/mi-cuenta',
  //   element: <RepLaw />,
  // },

  // {
  //   id: 8,
  //   name: 'portal viajes de retorno',
  //   path: '/portal-viajes-de-retorno',
  //   element: <ReturnTravelPortal />,
  // },
];
