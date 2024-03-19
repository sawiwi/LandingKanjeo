import {
  AiOutlineDatabase,
  TbReportSearch,
  TfiSignal,
  BsCheck,
  BsCheck2Circle,
  FiUsers,

} from '../../components/icon';



import heroImgOne from '../../assets/img/Hero/hero1.webp';
import heroImgTwo from '../../assets/img/Hero/hero2.webp';
import heroImgThree from '../../assets/img/Hero/hero3.webp';

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
            'Cómo funciona',
        },
        {
          id: 2,
          content:
            'Nuestra comunidad',
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

export const contentHero = [
  {
    id:1,
    imgHero: heroImgOne,
    icon:'',
    headings: '¿Cómo funciona?',
    texts:'Nuestras soluciones hacen más agil tu negocio', 
    card: [
    {
      id:1,
      info:'Nuestras soluciones hacen más agil tu negocio',
    },
    {
      id:2,
      info:'Data-Lorem ipsum dolor, sit amet consectetur adipisicing ',
    },
    {
      id:3,
      info:'Nuestras soluciones hacen más agil tu negocio',
    },
    {
      id:4,
      info:'Data-Lorem ipsum dolor, sit amet consectetur adipisicing ',
    },
    {
      id:5,
      info:'Nuestras soluciones hacen más agil tu negocio',
    },
    {
      id:6,
      info:'Data-Lorem ipsum dolor, sit amet consectetur adipisicing ',
    },
  ]
  },
  {
    id:2,
    imgHero:heroImgTwo,
    icon:'',
    headings: 'Comunidad',
    texts:'Como es nuestra comunidad.', 
    card: [
      {
        id:1,
        info:'Data-Lorem ipsum dolor, sit amet consectetur adipisicing ',
      },
      {
        id:2,
        info:'Data-Lorem ipsum dolor, sit amet consectetur adipisicing ',
      },
      {
        id:3,
        info:'Nuestras soluciones hacen más agil tu negocio',
      },
      {
        id:4,
        info:'Data-Lorem ipsum dolor, sit amet consectetur adipisicing ',
      },
      {
        id:5,
        info:'Nuestras soluciones hacen más agil tu negocio',
      },
      {
        id:6,
        info:'Data-Lorem ipsum dolor, sit amet consectetur adipisicing ',
      },
    ]
  },
  {
    id:3,
    imgHero: heroImgThree,
    icon:'',
    headings: 'Nosotros',
    texts:'Quienes somos.', 
    card: [
      {
        id:1,
        info:'Data-Lorem ipsum dolor, sit amet consectetur adipisicing ',
      },
      {
        id:2,
        info:'Data-Lorem ipsum dolor, sit amet consectetur adipisicing ',
      },
      {
        id:3,
        info:'Nuestras soluciones hacen más agil tu negocio',
      },
      {
        id:4,
        info:'Data-Lorem ipsum dolor, sit amet consectetur adipisicing ',
      },
      {
        id:5,
        info:'Nuestras soluciones hacen más agil tu negocio',
      },
      {
        id:6,
        info:'Data-Lorem ipsum dolor, sit amet consectetur adipisicing ',
      },
    ]
  },

]
