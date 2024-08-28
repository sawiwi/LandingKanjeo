// import { useLayoutEffect } from 'react';
import ContactForm from '../components/form/contact-form';
import HelmetHead from '../components/helmet-head';
import { getCurrentYear } from '../utils/index';
const Contact = () => {
  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0);
  // });
  return (
    <>
      <HelmetHead
        titlePage="Contacto"
        contentPage="Sistema de Kanje, para que puedas gestionar tus propiedades a la vez que intercambias con otros corredores"
        keywords="Sistema de Kanje, Gestion de propiedades, Automatización de Procesos compra y venta, Seguimiento de propiedade, Herramienta de Análisis de Datos de Kanje, Gestión Eficiente de Kanje"
      />

      <div className="grid grid-cols-1 xl:grid-cols-3">
        <div className='relative col-span-1 hidden md:block bg-secondary z-0'>
          <div className='xl:absolute 2xl:top-36 2xl:py-10 xl:mt-44  2xl:mt-56 p-5 xl:px-8 2xl:px-20'>
              <h2 className="text-primary text-4xl lg:text-2xl xl:text-4xl font-semibold mb-3 lg:mb-1 xl:mb-4 text-center">
                YoKanjeo
              </h2>
              <span className='text-white opacity-100 font-light text-md md:text-md mt-2 md:mt-3 flex justify-center text-center'>Optimiza tu tiempo con el sistema eficiente de corretaje de propiedades. 
                Alcanza la máxima rentabilidad con nuestra solución integral.</span>
          </div>
          <div className='xl:absolute xl:bottom-0 py-1 p-5 xl:px-14 2xl:px-32'>
              <span className="block text-sm text-white sm:text-center w-full p-3 rounded ">
                © {getCurrentYear()}{' '}
                <a href="/" className="hover:underline">
                YoKanjeo
                </a>
                . Todos los derechos reservados.
              </span>
              <span className="block text-sm text-white sm:text-center w-full pb-1 rounded ">
                Diseñado y creado por {' '}
                <a href="https://bidata.cl/" target="_blank" rel='noreferrer' className="hover:underline">
                 Bidata
                </a>
              </span>

          </div>    
        </div>
        <div className='col-span-2'>
          <div className=" text-center ">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
