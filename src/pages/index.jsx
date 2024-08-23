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
      {/* NEW HERO */}

      <div className=' tw-z-50 tw-bg-gray-100'>
        <div className='tw-relative'>
          <ReactSlick renderContent={contentHero} />     
        </div>
        <div className='tw-p-2 sm:tw-hidden'>
        {contentHero.length !== 0 ? contentHero.map((item) => (
            <>
              <div className="tw-mx-auto tw-text-center tw-m-2 tw-mt-5">
                <h2 className='tw-text-xl'>Explora más sobre {item.headings}</h2>
                <small>{item.texts}</small>
              </div> 
              <div key={item.id} className="tw-flex tw-flex-row tw-mt-2 tw-gap-6 ">
                  <div className='tw-text-center tw-grid tw-grid-cols-2 tw-gap-5 tw-mt-8'>
                    <article className='tw-flex tw-flex-wrap tw-flex-row tw-overflow-hidden tw-items-center tw-justify-center tw-gap-2 tw-drop-shadow-xl tw-bg-gray-100 tw-text-secondary lg:tw-h-44 lg:tw-w-[190px] 2xl:tw-h-48 2xl:tw-w-[240px] tw-mb-2 2xl:tw-mb-4 tw-p-2 tw-py-3 hover:tw-scale-110 hover:tw-bg-secondary hover:tw-text-gray-50 tw-duration-200 tw-rounded-md'>
                        <div className='tw-text-2xl first-letter:my-4 tw-mx-20'>{item.card[0].icon}</div>
                        <h5 className='tw-opacity-100 tw-font-semibold tw-text-sm'>{item.card[0].info}</h5>
                    </article>
                    <article className='tw-flex tw-flex-wrap tw-flex-row tw-overflow-hidden tw-items-center tw-justify-center tw-gap-2 tw-drop-shadow-xl tw-bg-gray-100 tw-text-secondary lg:tw-h-44 lg:tw-w-[190px] 2xl:tw-h-48 2xl:tw-w-[240px] tw-mb-2 2xl:tw-mb-4 tw-p-2 tw-py-3 hover:tw-scale-110 hover:tw-bg-secondary hover:tw-text-gray-50 tw-duration-200 tw-rounded-md'>
                        <div className='tw-text-2xl my-4 tw-mx-20 '>{item.card[1].icon}</div>
                        <h5 className='tw-opacity-100 tw-font-bold tw-text-sm '>{item.card[1].info}</h5>
                    </article>
                    <article className='tw-flex tw-flex-wrap tw-flex-row tw-overflow-hidden tw-items-center tw-justify-center tw-gap-2 tw-drop-shadow-xl tw-bg-gray-100 tw-text-secondary lg:tw-h-44 lg:tw-w-[190px] 2xl:tw-h-48 2xl:tw-w-[240px] tw-mb-2 2xl:tw-mb-4 tw-p-2 tw-py-3 hover:tw-scale-110 hover:tw-bg-secondary hover:tw-text-gray-50 tw-duration-200 tw-rounded-md'>              
                        <div className='tw-text-2xl  my-4 tw-mx-20 '>{item.card[2].icon}</div>
                        <h5 className='tw-opacity-100 2xl:tw-font-bold tw-text-sm'>{item.card[2].info}</h5>                  
                    </article>
                    <article className='tw-flex tw-flex-wrap tw-flex-row tw-overflow-hidden tw-items-center tw-justify-center tw-gap-2 tw-drop-shadow-xl tw-bg-gray-100 tw-text-secondary lg:tw-h-44 lg:tw-w-[190px] 2xl:tw-h-48 2xl:tw-w-[240px] tw-mb-2 2xl:tw-mb-4 tw-p-2 tw-py-3 hover:tw-scale-110 hover:tw-bg-secondary hover:tw-text-gray-50 tw-duration-200 tw-rounded-md'>
                        <div className='tw-text-2xl my-4 tw-mx-20 '>{item.card[3].icon}</div> 
                        <h5 className='tw-opacity-100 tw-font-semibold tw-text-sm '>{item.card[3].info}</h5>
                    </article>
                    <article className='tw-flex tw-flex-wrap tw-flex-row tw-overflow-hidden tw-items-center tw-justify-center tw-gap-2 tw-drop-shadow-xl tw-bg-gray-100 tw-text-secondary lg:tw-h-44 lg:tw-w-[190px] 2xl:tw-h-48 2xl:tw-w-[240px] tw-mb-2 2xl:tw-mb-4 tw-p-2 tw-py-3 hover:tw-scale-110 hover:tw-bg-secondary hover:tw-text-gray-50 tw-duration-200 tw-rounded-md'>
                        <div className='tw-text-2xl  my-4 tw-mx-20 '>{item.card[4].icon}</div> 
                        <h5 className='tw-opacity-100 tw-font-bold tw-text-sm '>{item.card[4].info}</h5>
                    </article>
                    <article className='tw-flex tw-flex-wrap tw-flex-row tw-overflow-hidden tw-items-center tw-justify-center tw-gap-2 tw-drop-shadow-xl tw-bg-gray-100 tw-text-secondary lg:tw-h-44 lg:tw-w-[190px] 2xl:tw-h-48 2xl:tw-w-[240px] tw-mb-2 2xl:tw-mb-4 tw-p-2 tw-py-3 hover:tw-scale-110 hover:tw-bg-secondary hover:tw-text-gray-50 tw-duration-200 tw-rounded-md'>
                        <div className='tw-text-2xl my-4 tw-mx-20'>{item.card[5].icon}</div>
                        <h5 className='tw-opacity-100 tw-font-bold tw-text-sm'>{item.card[5].info}</h5>
                    </article>
                  </div>
            </div>
            </>
   
        )):''}
  
        </div>
        {/* <div className=''>
          <Fade>
            <HeroText/>
          </Fade>
        </div> */}
      </div>

      {/* HERO */}
      {/* <div className='tw-grid tw-grid-cols-1 tw-flex-wrap-reverse lg:tw-grid-cols-2 xl:tw-grid-cols-3'>
          <div className='tw-col-span-1 xl:tw-col-span-1'>
            <Fade>
              <HeroText/>
            </Fade>
          </div>
          <div className='tw-col-span-1 xl:tw-col-span-2'>
              {/* <ReactSlick renderContent={contentPage1} /> 
              <ReactSlick renderContent={contentHero} />
          </div>
      </div> */}

      <ContactWsp/>
    </>
  );
};

export default Home;
