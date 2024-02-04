export const plansData = [
  {
    id: 1,
    name: 'Plan Starter',
    href: '/',
    category: 'Micro Empresa',
    description:
      'Ideal para micro empresas con hasta 4 vehículos que necesiten medir la geolocalización.',
  },
  {
    id: 2,
    name: 'Plan Medium',
    href: '/',
    category: 'Pequeña Empresa',
    description:
      'Ideal para empresas con al menos 5 vehículos que necesiten monitorear y controlar su flota.',
    itemList: [
      'Dispositivo GPS de última generación.',
      'Plataforma de gestión de cuenta y administración.',
      'App móvil ilimitado.',
      'Reporte (viajes, kms recorridos, uso de combustible, visitas, historial de viajes).',
    ],
  },
  {
    id: 3,
    name: 'Plan Pro',
    href: '/',
    category: 'Mediana Empresa',
    description:
      'Ideal para empresas con al menos 20 vehículos que necesiten optimizar su flota y reducir costos.',
    itemList: [
      'Los beneficios del plan Medium.',
      'Dispositivo GPS de ultima generación.',
      'Alertas configurables.',
      'Reporte Funcionalidad de Convoy.',
      'Puntaje conducción.',
      'Soporte de accesorios.',
      'Capacitación incluida.',
    ],
  },
  {
    id: 4,
    name: 'Plan Expert',
    href: '/',
    category: 'Gran Empresa',
    description:
      'Ideal para empresas con más de 100 vehículos que busquen gestionar el desempeño operacional de su flota.',
    itemList: [
      'Los beneficios del plan Pro',
      'Conector CAN.',
      'Permite funcionalidades adicionales como: Integraciones.',
    ],
  },
];
