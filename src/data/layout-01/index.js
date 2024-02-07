import {
  AiOutlineDatabase,
  TbReportSearch,
  TfiSignal,
  BsCheck,
  BsCheck2Circle,
  FiUsers,

} from '../../components/icon';

import heroImgOne from '../../assets/img/Hero/pexels-luis-yanez-206172.webp';
import heroImgTwo from '../../assets/img/Hero/pexels-terry-magallanes-2631746.webp';
import heroImgThree from '../../assets/img/Hero/pexels-pixabay-259588.webp';

import About1 from '../../assets/img/about/casa1.jpg'
import About2 from '../../assets/img/about/casa2.jpg'
import About3 from '../../assets/img/about/casa3.jpg'

export const contentPage1 = {
  name: 'home',
  content: [
    {
      section: 'hero-area',
      headings: [
        {
          id: 1,
          content:
            'Sistema de Canje de propiedades.',
        },
      ],
      texts: [
        {
          id: 1,
          content:
            'Optimiza tu tiempo con el sistema eficiente de corretaje de propiedades. Alcanza la máxima rentabilidad con nuestra solución integral.',
        },
      ],
      buttons: [
        {
          id: 1,
          path: '/contacto',
          content: 'Registrate',
        },
        {
          id: 2,
          path: '/',
          content: 'Mas Info',
        },
      ],
      imgs: [
        {
          id: 1,
          // src: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1690390166/Projects/qr-service/imgs/hero/1_vdulpg.png',
          src: heroImgOne,
          alt: 'hero-img-1',
        },
        {
          id: 2,
          // src: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1690390166/Projects/qr-service/imgs/hero/4_emim5h.png',
          src: heroImgTwo,
          alt: 'hero-img-2',
        },
        {
          id: 3,
          // src: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1690510365/Projects/qr-service/imgs/hero/12_b56jw4.png',
          src: heroImgThree,
          alt: 'hero-img-3',
        },
      ],
    },
    {
      section: 'main-area',
      headings: [
        {
          id: 1,
          content:
            'Innovación y simpleza a la hora de gestionar tu flota vehicular',
        },
      ],
      texts: [
        {
          id: 1,
          content:
            'Sumamos una solución de analítica avanzada que brinda indicadores claros de la operación, así como los convierte en reportes gerenciales para la toma de mejores decisiones en la gestión de flotas.',
        },
      ],
      buttons: [
        {
          id: 1,
          path: '/',
          content: 'Me interesa',
        },
      ],
      imgs: [
        {
          id: 1,
          src: 'https://entelocean.com/hubfs/Recursos%20Marketing/Banner%20Sitio%20web/Onway%20-%20Banner/1.jpg',
          alt: 'hero-img-1',
        },
      ],
    },
    {
      section: 'form-area',
      headings: [
        {
          id: 1,
          content: '¿Quieres cotizar?',
        },
      ],
      texts: [
        {
          id: 1,
          content:
            'Completa el formulario para contactarnos a la brevedad.',
        },
      ],
    },
    {
      section: 'Process',
      headings: [
        {
          id: 1,
          content: 'Our Services Data',
        },
      ],

      subText: [
        {
          id: 1,
          content:
            'DATA-Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        },
      ],

      text: [
        {
          id: 1,
          content:
            'DATA-Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus aperiam nulla minima.',
        },
      ],

      firstCard: [
        {
          id: 1,
          title: 'Data-Lorem1',
          icon: <BsCheck className="tw-w-12 tw-h-12" />,
          content:
            'Data-Lorem ipsum lorem lorem lorem lorem loremlloremdolor sit amet consectetur adipisicing elit. Omnis, fugit repudiandae? Ipsum porro provident quos doloribus facere rem adipisci molestiae, voluptatem nostrum recusandae accusantium possimus expedita mollitia repellendus labore veritatis..',
        },

        {
          id: 2,
          title: 'Data-Lorem2',
          icon: <BsCheck className="tw-w-12 tw-h-12" />,
          content:
            'Data-Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, fugit repudiandae? Ipsum porro provident quos doloribus facere rem adipisci molestiae, voluptatem nostrum recusandae accusantium possimus expedita mollitia repellendus labore veritatis..',
        },

        {
          id: 3,
          title: 'Data-Lorem3',
          icon: <BsCheck className="tw-w-12 tw-h-12" />,
          content:
            'Data-Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, fugit repudiandae? Ipsum porro provident quos doloribus facere rem adipisci molestiae, voluptatem nostrum recusandae accusantium possimus expedita mollitia repellendus labore veritatis..',
        },

        {
          id: 4,
          title: 'Data-Lorem4',
          icon: <BsCheck className="tw-w-12 tw-h-12" />,
          content:
            'Data-Lorem ipsum dolor lorem lorem lorem lorem lorem llorem lorem llo rem lorem  amet sit amet consectetur adipisicing elit. Omnis, fugit repudiandae? Ipsum porro provident quos doloribus facere rem adipisci molestiae, voluptatem nostrum recusandae accusantium possimus expedita mollitia repellendus labore veritatis..',
        },
      ],
    },

    {
      section: 'Steps',
      headings: [
        {
          id: 1,
          title: 'En pasos sencillos',
          subtitle: 'Podras gestionar tu cartera',
          img: 'https://res.cloudinary.com/dvdb33uyj/image/upload/v1690570027/Projects/qr-service/imgs/personCheck.webp',
        },
      ],

      step: [
        {
          id: 1,
          icon: <BsCheck2Circle   />,
          content:
            'Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag',
        },

        {
          id: 2,
          icon: <BsCheck2Circle   />,
          content:
            'Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag',
        },

        {
          id: 3,
          icon: <BsCheck2Circle  />,
          content:
            'Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag',
        },

        {
          id: 4,
          icon: <BsCheck2Circle  />,
          content:
            'Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag',
        },

        {
          id: 5,
          icon: <BsCheck2Circle  />,
          content:
            'Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag',
        },
      ],
    },

    {
      section: 'WhyWe',
      headings: [
        {
          id: 1,
          content: 'Nosotros',
        },
      ],

      subText: [
        {
          id: 1,
          content:
            'Data-Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure culpa inventore dicta voluptatum fuga, cumque voluptate harum quae? Voluptate quod dignissimos voluptas atque et reprehenderit nihil asperiores architecto fugit exercitationem?.',
        },
      ],

      card: [
        {
          id: 1,
          title: 'Compromiso',
 
          img:About1,
          content:
            'Data-Lorem ipsum dolor sit, amet consectetur adipisicing elit Data-Lorem ipsum dolor sit, amet consectetur adipisicing elit. .',
        },

        {
          id: 2,
          title: 'Dedicación',
    
          img:About2,
          content:
            'Data-Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        },

        {
          id: 3,
          title: 'Seguridad',
 
          img:About3,
          content:
            'Data-Lorem ipsum dolor sit, amet consectetur adipisicing elit. Data-Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        },

      ],
    },
  ],
};
