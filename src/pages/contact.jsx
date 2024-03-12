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

      <div className="tw-grid tw-grid-cols-1 xl:tw-grid-cols-3">
        <div className='tw-relative tw-col-span-1 tw-hidden md:tw-block tw-bg-secondary tw-z-0'>
          <div className='xl:tw-absolute 2xl:tw-top-36 2xl:tw-py-10 xl:tw-mt-44  2xl:tw-mt-56 tw-p-5 xl:tw-px-8 2xl:tw-px-20'>
              <h2 className="tw-text-primary tw-text-4xl lg:text-2xl xl:tw-text-4xl tw-font-semibold tw-mb-3 lg:tw-mb-1 xl:tw-mb-4 tw-text-center">
                YoKanjeo
              </h2>
              <span className='tw-text-white tw-opacity-100 tw-font-light tw-text-md md:tw-text-md tw-mt-2 md:tw-mt-3 tw-flex tw-justify-center tw-text-center'>Optimiza tu tiempo con el sistema eficiente de corretaje de propiedades. 
                Alcanza la máxima rentabilidad con nuestra solución integral.</span>
          </div>
          <div className='xl:tw-absolute xl:tw-bottom-0 tw-py-1 tw-p-5 xl:tw-px-14 2xl:tw-px-32'>
              <span className="tw-block tw-text-sm tw-text-white sm:tw-text-center tw-w-full tw-p-3 tw-rounded ">
                © {getCurrentYear()}{' '}
                <a href="/" className="hover:tw-underline">
                YoKanjeo
                </a>
                . Todos los derechos reservados.
              </span>
          </div>    
        </div>
        <div className='tw-col-span-2'>
          <div className=" tw-text-center ">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
