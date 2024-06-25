import {
  BsCheck2Circle,
} from '../../components/icon';

import heroImgOne from '../../assets/img/Hero/hero1.webp';
import heroImgTwo from '../../assets/img/Hero/hero2.webp';
import heroImgThree from '../../assets/img/Hero/hero3.webp';

import compromiso from '../../assets/img/about/compromiso.webp'
import equipo from '../../assets/img/about/equipo.webp'
import innovacion from '../../assets/img/about/innovacion.webp'
import tecnologia from '../../assets/img/about/tecnologia.webp'
import valores from '../../assets/img/about/valores.webp'
import colaboracion from '../../assets/img/about/colaboracion.webp'
import impactSocial from '../../assets/img/about/impact-social.webp'

import { LuPackageSearch } from "react-icons/lu";
import { MdSecurity, MdOutlineRealEstateAgent, MdOutlineConnectWithoutContact   } from "react-icons/md";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaHouseLaptop, FaEarListen  } from "react-icons/fa6";
import { FaBoxes, FaHandsHelping, FaRegLightbulb, FaMedal, FaTools } from "react-icons/fa";
import { TiGroup } from "react-icons/ti";
import { TbClockCheck , TbHomeSearch } from "react-icons/tb";
import { BiSolidUserPlus } from "react-icons/bi";
import { GiStarsStack } from "react-icons/gi";

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
            'Participa en la comunidad de canjes de propiedades y corredores, registrate en nuestra página web. Se solicita información básica como nombre, dirección de correo electrónico y contraseña para crear una cuenta.',

        },

        {
          id: 2,
          icon: <BsCheck2Circle   />,
          content:
            'Una vez iniciado sesión, pueden explorar las propiedades disponibles para el intercambio. Pueden filtrar las propiedades según sus preferencias, como ubicación, tipo de propiedad, tamaño, etc.',

        },
        {
          id: 3,
          icon: <BsCheck2Circle  />,
          content:
            'Intercambia tus propiedades, pueden publicar detalles de las mismas en la plataforma. Agregar fotos, descripciones detalladas y cualquier requisito específico que tengan para el canje.',
  
        },

        {
          id: 4,
          icon: <BsCheck2Circle  />,
          content:
            'Conectate con corredores que participan en la comunidad. Pueden enviar mensajes directos o programar reuniones para discutir sus necesidades y objetivos de intercambio de propiedades.',

        },
        {
          id: 5,
          icon: <BsCheck2Circle  />,
          content:
            'La plataforma proporciona herramientas para facilitar la comunicación y la negociación entre ambas partes. los usuarios pueden coordinar los detalles del canje, como inspecciones de la propiedad, trámites legales, etc.',
      
        },
        {
          id: 6,
          icon: <BsCheck2Circle  />,
          content:
            'Los usuarios tienen la opción de evaluar su experiencia y proporcionar comentarios sobre la plataforma y los corredores involucrados.  Ayudando a mantener la calidad de la comunidad y a mejorar continuamente la plataforma.',

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
      card: [
        {
          id: 1,
          title: 'Compromiso',
          img:compromiso,
          content:
            'Comprometidos a construir y apoyar una comunidad vibrante de propietarios, potenciales clientes y corredores, donde puedan beneficiarse mutuamente y compartir conocimientos',
        },

        {
          id: 2,
          title: 'Equipo',  
          img:equipo,
          content:
            'Cada miembro aporta una amplia experiencia y un compromiso inquebrantable con la misión de nuestra empresa',
        },

        {
          id: 3,
          title: 'Valores',
          img:valores,
          content:
            'Nos guiamos por la transparencia, la integridad y la excelencia en el servicio al cliente.',
        },
        {
          id: 4,
          title: 'Innovación',
          img:innovacion,
          content:
            'Tecnología de vanguardia para proporciona herramientas avanzadas para la búsqueda, comparación y negociación de propiedades.',
        },
        {
          id: 5,
          title: 'Impacto Social',
          img:impactSocial,
          content:
            'Promovemos la equidad en el acceso a la vivienda y apoyar el desarrollo sostenible en nuestras comunidades.',
        },
        {
          id: 6,
          title: 'Colaboración',
 
          img:colaboracion,
          content:
            'Buscamos oportunidades para colaborar con organizaciones que compartan nuestros valores y objetivos.',
        },

      ],
    },
  ],
};

export const contentHero = [
  {
    id:1,
    imgHero: heroImgOne,
    icon:<BiSolidUserPlus />,
    headings: '¿Cómo funciona?',
    texts:'Nuestras soluciones hacen más agil tu negocio', 
    card: [
    {
      id:1,
      icon:<BiSolidUserPlus />,
      info:'Participa en la comunidad de canjes de propiedades y corredores, registrate en nuestra página web. ',
      smallInfo:'Se solicita información básica como nombre, correo electrónico y contraseña para crear una cuenta.'
    },
    {
      id:2,
      icon:<TbHomeSearch  />,
      info:'Explora las propiedades disponibles para el intercambio.',
      smallInfo:'Pueden filtrar las propiedades según sus preferencias, como ubicación, tipo de propiedad, tamaño, etc.'

    },
    {
      id:3,
      icon:<MdOutlineRealEstateAgent />,
      info:'Intercambia tus propiedades, publica detalles de las mismas en la plataforma.',
      smallInfo:'Agregar fotos, descripciones detalladas y cualquier requisito específico que tengan para el canje.'

    },
    {
      id:4,
      icon:<MdOutlineConnectWithoutContact  />,
      info:'Conectate con corredores que participan en la comunidad.',
      smallInfo:'Envia mensajes directos o programa reuniones para discutir sus necesidades y objetivos de intercambio de propiedades.'

    },
    {
      id:5,
      icon:<FaTools  />,
      info:'Herramientas para la comunicación y la negociación entre ambas partes.',
      smallInfo:'Los usuarios pueden coordinar los detalles del canje, como inspecciones de la propiedad, trámites legales, etc.'
    },
    {
      id:6,
      icon:<GiStarsStack />,
      info:'Evalua tu experiencia y proporcionar comentarios sobre los corredores involucrados.',
      smallInfo:'Ayudando a mantener la calidad de la comunidad y a mejorar continuamente la plataforma.'
    },
    {
      id:10,
      icon:<BiSolidUserPlus />,
      info:'Participa en la comunidad de canjes de propiedades y corredores, registrate en nuestra página web. ',
      smallInfo:'Se solicita información básica como nombre, correo electrónico y contraseña para crear una cuenta.',
      href:'/como-funciona'
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
        icon:<LuPackageSearch/>,
        info:'Corredores asociados',
        smallInfo:'Encuentra socios similares.',
      },
      {
        id:2,
        icon:<FaHouseLaptop/>,
        info:'Portal de propiedades',
        smallInfo:'Portal inmobiliario acorde a tus necesidades',
      },
      {
        id:3,
        icon:<AiOutlineUsergroupAdd/>,
        info:'Oportunidad de clientes',
        smallInfo:'Encuentra nuevas oportunidades de clientes ',
      },
      {
        id:4,
        icon:<LuPackageSearch/>,
        info:'Servicios Externos',
        smallInfo:'Conoce todos los servicios que tenemos',
      },
      {
        id:5,
        icon:<MdSecurity/>,
        info:'Politicas y Seguridad',
        smallInfo:'Actualizaciones importantes sobre las politicas de seguridad',
      },
      {
        id:6,
        icon:<FaBoxes/>,
        info:'Producto y carácteristicas ',
        smallInfo:'Revisa nuestro producto, carácteristicas y funciones',
      },
      {
        id:10,
        icon:<LuPackageSearch/>,
        info:'Corredores asociados',
        smallInfo:'Encuentra socios similares.',
        href:'/comunidad'

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
        icon:<TbClockCheck/>,
        info:'Compromiso',
        smallInfo:'Comprometidos a construir y apoyar una comunidad vibrante de propietarios, potenciales clientes y corredores, donde puedan beneficiarse mutuamente y compartir conocimientos'
      },
      {
        id:2,
        icon:<TiGroup/>,
        info:'Equipo',
        smallInfo:'Cada miembro aporta una amplia experiencia y un compromiso inquebrantable con la misión de nuestra empresa'

      },
      {
        id:3,
        icon:<FaMedal />,
        info:'Valores',
        smallInfo:'Nos guiamos por la transparencia, la integridad y la excelencia en el servicio al cliente..'
      },
      {
        id:4,
        icon:<FaRegLightbulb />,
        info:'Innovación',
        smallInfo:'Tecnología de vanguardia para proporciona herramientas avanzadas para la búsqueda, comparación y negociación de propiedades.'

      },
      {
        id:5,
        icon:<FaEarListen />,
        info:'Impacto social',
        smallInfo:'Promovemos la equidad en el acceso a la vivienda y apoyar el desarrollo sostenible en nuestras comunidades.'

      },
      {
        id:6,
        icon:<FaHandsHelping/>,
        info:'Colaboración',
        smallInfo:'Buscamos oportunidades para colaborar con organizaciones que compartan nuestros valores y objetivos.'
      },
      {
        id:10,
        icon:<TbClockCheck/>,
        info:'Compromiso',
        smallInfo:'Comprometidos a construir y apoyar una comunidad vibrante de propietarios, potenciales clientes y corredores, donde puedan beneficiarse mutuamente y compartir conocimientos',
        href:'/nosotros'

      },
    ],
  },

]
