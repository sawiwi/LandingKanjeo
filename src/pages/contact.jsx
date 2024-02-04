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
        contentPage="Sistema de Gestión para Vehículos Contacto: Control Eficiente y Automatizado de Flotas de Transporte"
        keywords="Sistema de Gestión para Vehículos Contacto, Control de Flotas Contacto, Automatización de Procesos de Transporte Contacto, Monitoreo de Flota por GPS Contacto, Herramienta de Análisis de Datos de Vehículos Contacto, Aumento de Productividad en Transporte Contacto, Gestión Eficiente de Horarios de Conductores Contacto, Seguimiento en Tiempo Real de Servicios de Transporte Contacto"
      />

      <div className="tw-container tw-my-24 tw-mx-auto md:tw-px-6">
        <section className="tw-mb-32 tw-text-center">
          <ContactForm />
        </section>
      </div>
    </>
  );
};

export default Contact;
