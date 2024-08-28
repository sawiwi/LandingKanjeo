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

      <div className=' z-50 bg-gray-100'>
        <div className='relative'>
          <ReactSlick renderContent={contentHero} />     
        </div>
        <div className='p-2 sm:hidden'>
        {contentHero.length !== 0 ? contentHero.map((item) => (
            <>
              <div className="mx-auto text-center m-2 mt-5">
                <h2 className='text-xl'>Explora más sobre {item.headings}</h2>
                <small>{item.texts}</small>
              </div> 
              <div key={item.id} className="flex flex-row mt-2 gap-6 ">
                  <div className='text-center grid grid-cols-2 gap-5 mt-8'>
                    <article className='flex flex-wrap flex-row overflow-hidden items-center justify-center gap-2 drop-shadow-xl bg-gray-100 text-secondary lg:h-44 lg:w-[190px] 2xl:h-48 2xl:w-[240px] mb-2 2xl:mb-4 p-2 py-3 hover:scale-110 hover:bg-secondary hover:text-gray-50 duration-200 rounded-md'>
                        <div className='text-2xl first-letter:my-4 mx-20'>{item.card[0].icon}</div>
                        <h5 className='opacity-100 font-semibold text-sm'>{item.card[0].info}</h5>
                    </article>
                    <article className='flex flex-wrap flex-row overflow-hidden items-center justify-center gap-2 drop-shadow-xl bg-gray-100 text-secondary lg:h-44 lg:w-[190px] 2xl:h-48 2xl:w-[240px] mb-2 2xl:mb-4 p-2 py-3 hover:scale-110 hover:bg-secondary hover:text-gray-50 duration-200 rounded-md'>
                        <div className='text-2xl my-4 mx-20 '>{item.card[1].icon}</div>
                        <h5 className='opacity-100 font-bold text-sm '>{item.card[1].info}</h5>
                    </article>
                    <article className='flex flex-wrap flex-row overflow-hidden items-center justify-center gap-2 drop-shadow-xl bg-gray-100 text-secondary lg:h-44 lg:w-[190px] 2xl:h-48 2xl:w-[240px] mb-2 2xl:mb-4 p-2 py-3 hover:scale-110 hover:bg-secondary hover:text-gray-50 duration-200 rounded-md'>              
                        <div className='text-2xl  my-4 mx-20 '>{item.card[2].icon}</div>
                        <h5 className='opacity-100 2xl:font-bold text-sm'>{item.card[2].info}</h5>                  
                    </article>
                    <article className='flex flex-wrap flex-row overflow-hidden items-center justify-center gap-2 drop-shadow-xl bg-gray-100 text-secondary lg:h-44 lg:w-[190px] 2xl:h-48 2xl:w-[240px] mb-2 2xl:mb-4 p-2 py-3 hover:scale-110 hover:bg-secondary hover:text-gray-50 duration-200 rounded-md'>
                        <div className='text-2xl my-4 mx-20 '>{item.card[3].icon}</div> 
                        <h5 className='opacity-100 font-semibold text-sm '>{item.card[3].info}</h5>
                    </article>
                    <article className='flex flex-wrap flex-row overflow-hidden items-center justify-center gap-2 drop-shadow-xl bg-gray-100 text-secondary lg:h-44 lg:w-[190px] 2xl:h-48 2xl:w-[240px] mb-2 2xl:mb-4 p-2 py-3 hover:scale-110 hover:bg-secondary hover:text-gray-50 duration-200 rounded-md'>
                        <div className='text-2xl  my-4 mx-20 '>{item.card[4].icon}</div> 
                        <h5 className='opacity-100 font-bold text-sm '>{item.card[4].info}</h5>
                    </article>
                    <article className='flex flex-wrap flex-row overflow-hidden items-center justify-center gap-2 drop-shadow-xl bg-gray-100 text-secondary lg:h-44 lg:w-[190px] 2xl:h-48 2xl:w-[240px] mb-2 2xl:mb-4 p-2 py-3 hover:scale-110 hover:bg-secondary hover:text-gray-50 duration-200 rounded-md'>
                        <div className='text-2xl my-4 mx-20'>{item.card[5].icon}</div>
                        <h5 className='opacity-100 font-bold text-sm'>{item.card[5].info}</h5>
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
      {/* <div className='grid grid-cols-1 flex-wrap-reverse lg:grid-cols-2 xl:grid-cols-3'>
          <div className='col-span-1 xl:col-span-1'>
            <Fade>
              <HeroText/>
            </Fade>
          </div>
          <div className='col-span-1 xl:col-span-2'>
              {/* <ReactSlick renderContent={contentPage1} /> 
              <ReactSlick renderContent={contentHero} />
          </div>
      </div> */}

      <ContactWsp/>
    </>
  );
};

export default Home;
