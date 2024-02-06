import { useLayoutEffect } from 'react';
import HelmetHead from '../components/helmet-head';
import ReactSlick from '../components/react-slick';
import Section from '../components/section';
import TitleSection from '../components/title-section';
import { contentPage1 } from '../data/layout-01';
// import Business from '../components/Process/business';
import WhywE from '../components/WhyWe/WhyWe';
import Form from '../components/form/index.jsx';
import Card01 from '../components/card/card-01';
import { plansData } from '../constants/plans';
// import Card02 from '../components/card/card-02';
import StepsIndex from '../components/ui/steps/StepsIndex';
import { Fade, Reveal } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

const Home = () => {
  const whyWeContent = contentPage1.content.find(
    (item) => item.section === 'WhyWe'
  );

  // const process = contentPage1.content.find(
  //   (item) => item.section === 'Process'
  // );

  const _renderedPlans = plansData.map((plan) => (
    <Card01 key={plan.id} plan={plan} />
  ));

  const formContent = contentPage1.content.find(
    (item) => item.section === 'form-area'
  );

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
        contentPage="Sistema de Kanje, para que puedas gestionar tus propiedades a la vez que intercambias con otros corredores"
        keywords="Sistema de Kanje, Gestion de propiedades, Automatización de Procesos compra y venta, Seguimiento de propiedade, Herramienta de Análisis de Datos de Kanje, Gestión Eficiente de Kanje"
      />

      {/* HERO */}
      <ReactSlick renderContent={contentPage1} />


      {/* Seccion de Planes */}
      <Section className="tw-overflow-hidden tw-bg-white" >
        {/* <img
          src="https://res.cloudinary.com/dvdb33uyj/image/upload/v1690573530/Projects/qr-service/imgs/Fondo2.webp"
          alt=""
          className="tw-absolute tw-w-full tw-left-0 tw-top-0 tw-z-0"
        /> */}
        <TitleSection
          className="tw-relative tw-z-10"
          subTitleClassName="tw-relative tw-z-10"
          title="Servicio de YoKanjeo"
          subtitle="Nuestras soluciones se adapta a tu negocio."
          position="center"
        />
        <Fade direction="up" triggerOnce={true}>
          <div className="tw-flex tw-justify-center tw-w-full tw-z-10 tw-relative">
            <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-3 2xl:tw-grid-cols-4 tw-mt-8 tw-gap-8 tw-max-w-[1450px]">
              {_renderedPlans}
            </div>
          </div>
        </Fade>
      </Section>

      {/* Steps CONTENT */}
      <Section className="tw-overflow-hidden tw-bg-gray-50">
        <TitleSection
          title="¿Cómo funciona?"
          subtitle="Nuestras soluciones hacen más agil tu negocio"
          position="center"
        />
        <StepsIndex renderContent={steps} />
      </Section>

      {/* Seccion de Por que nosotros? */}
      <Section className="tw-overflow-hidden tw-bg-white">
        <Reveal
          keyframes={fadeInUp}
          delay={500}
          duration={800}
          triggerOnce={true}
        >
          <TitleSection
            title={whyWeContent.headings[0].content}
            subtitle="Data-Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure culpa inventore dicta voluptatum fuga,"
            position="center"
          />
          <WhywE renderContent={whyWeContent} />
        </Reveal>
      </Section>

      {/* Seccion Del Formulario */}
      <Section className="tw-overflow-hidden tw-bg-gray-50">
        <Form renderContent={formContent} />
      </Section>
    </>
  );
};

export default Home;
