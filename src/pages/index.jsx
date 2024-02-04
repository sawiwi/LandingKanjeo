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
import Card02 from '../components/card/card-02';
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

  const idi = contentPage1.content.find((item) => item.section === 'Idi');

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
        contentPage="Sistema de Gestión para Vehículos: Control Eficiente y Automatizado de Flotas de Transporte"
        keywords="Sistema de Gestión para Vehículos, Control de Flotas, Automatización de Procesos de Transporte, Monitoreo de Flota por GPS, Herramienta de Análisis de Datos de Vehículos, Aumento de Productividad en Transporte, Gestión Eficiente de Horarios de Conductores, Seguimiento en Tiempo Real de Servicios de Transporte"
      />

      {/* HERO */}
      <ReactSlick renderContent={contentPage1} />

      {/* MAIN CONTENT */}
      {/* Services CONTENT */}
      {/* <Section>
        <img
          src="https://res.cloudinary.com/dvdb33uyj/image/upload/v1690573290/Projects/qr-service/imgs/Fondo1.webp"
          alt=""
          className="tw-absolute tw-max-w-[800] tw-m-auto tw-my-7 tw-w-full tw-left-0 tw-top-0 tw-z-0 tw-h-[65%]"
        />
        <div className="tw-relative tw-z-10">
          <Reveal
            keyframes={fadeInUp}
            delay={500}
            duration={800}
            triggerOnce={true}
          >
            <TitleSection
              className="tw-text-white"
              subTitleClassName="tw-text-white"
              title={process.headings[0].content}
              subtitle="Data-Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure culpa inventore dicta voluptatum fuga,"
              position="center"
            />
            <Business renderContent={process} />
          </Reveal>
        </div>
      </Section> */}

      {/* Steps CONTENT */}
      <Section className="tw-overflow-hidden tw-bg-gray-50">
        <TitleSection
          title="Una forma sencilla de gestionar"
          subtitle="Nuestras soluciones hacen más agil tu negocio"
          position="center"
        />
        <StepsIndex renderContent={steps} />
      </Section>

      {/* Seccion de Por que nosotros? */}
      <Section>
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

      {/* Seccion de I+D+I */}
      <Section className="tw-bg-gray-50">
        <Fade direction="left" triggerOnce={true}>
          <TitleSection
            title={idi.headings[0].content}
            subtitle="inteligencia Desarrollo Innovacion"
            position="center"
          />
          <Card02 renderContent={idi} />
        </Fade>
      </Section>

      {/* Seccion de Planes */}
      <Section className="tw-overflow-hidden">
        <img
          src="https://res.cloudinary.com/dvdb33uyj/image/upload/v1690573530/Projects/qr-service/imgs/Fondo2.webp"
          alt=""
          className="tw-absolute tw-w-full tw-left-0 tw-top-0 tw-z-0"
        />
        <TitleSection
          className="tw-relative tw-z-10"
          subTitleClassName="tw-relative tw-z-10"
          title="¿QR Service es para mi negocio?"
          subtitle="Nuestras soluciones se adaptan a tu negocio en múltiples industrias."
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

      {/* Seccion Del Formulario */}
      <Section>
        <Form renderContent={formContent} />
      </Section>
    </>
  );
};

export default Home;
