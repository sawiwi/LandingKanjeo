import { FaTruckMoving, AiFillSafetyCertificate } from '../components/icon';

export const navigationData = [
  {
    id: 1,
    name: 'Inicio',
    href: '/',
  },
  {
    id: 2,
    name: '¿Qué Resolvemos?',
    children: [
      {
        id: 1,
        name: 'Sistema de Gestión para vehículos',
        href: '/sistema-de-gestion-para-vehiculos',
        icon: <FaTruckMoving />,
      },
      {
        id: 2,
        name: 'Sistema de Trazabilidad Certificada',
        href: '/sistema-de-trazabilidad-certificada',
        icon: <AiFillSafetyCertificate />,
      },
      {
        id: 3,
        name: 'Ley REP',
        href: '/ley-rep',
        icon: <AiFillSafetyCertificate />,
      },
    ],
  },
  {
    id: 5,
    name: 'FAQ',
    href: '/faq',
  },
  {
    id: 5,
    name: 'Portal de Viajes',
    href: '/portal-viajes-de-retorno',
  },
  {
    id: 6,
    name: 'Mi cuenta',
    href: 'https://qr-service-dashboard.netlify.app/auth-login',
  },
];
