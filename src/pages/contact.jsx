import { useLayoutEffect } from 'react';
import ContactForm from '../components/form/contact-form';
import HelmetHead from '../components/helmet-head';

const Contact = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      <HelmetHead
        titlePage="Contacto"
        contentPage="Sistema de Kanje, para que puedas gestionar tus propiedades a la vez que intercambias con otros corredores"
        keywords="Sistema de Kanje, Gestion de propiedades, Automatización de Procesos compra y venta, Seguimiento de propiedade, Herramienta de Análisis de Datos de Kanje, Gestión Eficiente de Kanje"
      />

      <div className="tw-container tw-my-2 tw-mx-auto md:tw-px-6 xl:tw-px-24">
        <section className="tw-mb-32 tw-text-center">

          <ContactForm />
        </section>
      </div>
    </>
  );
};

export default Contact;
