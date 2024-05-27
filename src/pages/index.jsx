import { useLayoutEffect } from 'react';
import HelmetHead from '../components/helmet-head';
import ReactSlick from '../components/react-slick';
import { contentPage1, contentHero } from '../data/layout-01';
import { Fade, Reveal } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import HeroText from '../components/HeroText/index.jsx';
import ContactWsp from '../components/buttonContact/index.jsx';
const Home = () => {

  const steps = contentPage1.content.find((item) => item.section === 'Steps');

  const fadeInUp = keyframes`
  0% {
      opacity: 0;
      -webkit-transform: translateY(80px);
      transform: translateY(80px);
  }
  100% {
      opacity: 1;
      -webkit-transform: translateY(0);
      transform: translateY(0);
  }`;

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      {/* HEAD PAGE */}
      <HelmetHead
        titlePage="Inicio"
        contentPage="Sistema de canje, para que puedas gestionar tus propiedades a la vez que intercambias con otros corredores"
        keywords="Sistema de canje, Gestion de propiedades, Automatización de Procesos compra y venta, Seguimiento de propiedades, Herramienta de Análisis de Datos de Canje, Gestión Eficiente de Canje"
      />

      {/* HERO */}
      <div className='tw-grid tw-grid-cols-1 tw-flex-wrap-reverse lg:tw-grid-cols-2 xl:tw-grid-cols-3'>
          <div className='tw-col-span-1 xl:tw-col-span-1'>
            <Fade>
              <HeroText/>
            </Fade>
          </div>
          <div className='tw-col-span-1 xl:tw-col-span-2'>
              {/* <ReactSlick renderContent={contentPage1} /> */}
              <ReactSlick renderContent={contentHero} />
          </div>
      </div>

      <ContactWsp/>
    </>
  );
};

export default Home;
