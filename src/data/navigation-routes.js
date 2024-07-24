import Home from '../pages';
import About from '../pages/about';
// import Faq from '../pages/faq';
// import ServicesSect from '../pages/services';
import How from '../pages/howWork';
import Contact from '../pages/contact';
import Community from '../pages/community';
import PortalRealtor from '../pages/portalRealtors';
import PortalProperty from '../pages/portalProperties';
import ProfileRealtor from '../components/portalUsers/profileRealtor';
import PoliticaCookies from '../components/Politicas/politicasCookies';
import PoliticaPrivacidad from '../components/Politicas/politicasPriv';
import ExternalServices from '../pages/externalServices';
import ListExtServices from '../pages/ListExternalService/listExtService';
import HowUse from '../components/howUse/HowUse';


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
    id:9,
    name : 'Servicios Externos',
    path: '/servicios-externos',
    element:<ExternalServices/>
  },
  {
    id:10,
    name : 'Perfil Corredor',
    path: '/perfil-corredor',
    element:<ProfileRealtor/>
  },
  {
    id:11,
    name :'Politicas de Cookies',
    path: '/politicas-de-cookies',
    element:<PoliticaCookies/>
  },
  {
    id:12,
    name : 'Politicas de Privacidad',
    path: '/politicas-de-privacidad',
    element:<PoliticaPrivacidad/>
  },
  {
    id:13,
    name : 'Listado de servicos',
    path: '/servicios-externos/listado-servicios',
    element:<ListExtServices/>
  },
  {
    id:14,
    name : 'Portal Propiedades',
    path: '/portal-propiedades',
    element:<PortalProperty/>
  },
  {
    id:15,
    name:'Cómo Usar ProCanje',
    path:'/como-usar',
    element: <HowUse />
  },

];
