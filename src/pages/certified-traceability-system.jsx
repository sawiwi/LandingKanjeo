import { useLayoutEffect } from 'react';
import HelmetHead from '../components/helmet-head';
import ReactSlick from '../components/react-slick';
import Section from '../components/section';
import TitleSection from '../components/title-section';
import Steps from '../components/ui/steps/stepsY.jsx';
/* import { DividerTextLeft } from '../components/divider/divider.jsx'; */
import { contentPage1 } from '../data/layout-03';

import { Fade, Reveal } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

import { BsQrCode } from '../components/icon/index.js';
import TireIcon from '../components/icon/code/tireIcon';

import Blob from '../components/svgBackground/blob';
import Circle from '../components/svgBackground/circle';
import Circle2 from '../components/svgBackground/circle2';

const CertifiedTraceabilitySystem = () => {
  const systemContent = contentPage1.content.find(
    (item) => item.section === 'System-Management'
  );
  const challengeContent = contentPage1.content.find(
    (item) => item.section === 'Current-Challenge'
  );
  const collectionContent = contentPage1.content.find(
    (item) => item.section === 'Sustainable-Collection'
  );
  const advantagesContent = contentPage1.content.find(
    (item) => item.section === 'advantages'
  );
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
      <HelmetHead
        titlePage="Sistema de Trazabilidad ertificada"
        contentPage="Ley REP: Responsabilidad Extendida del Productor y los Sistemas de Gestión para la Valorización de Neumáticos y Baterías"
        keywords="Responsabilidad Extendida del Productor, Neumáticos Fuera de Uso (NFU), Valorización de residuos, Logística inteligente"
      />

      {/* HERO */}
      <ReactSlick renderContent={contentPage1} />

      {/* MAIN CONTENT */}
      <Section>
        <div className=" tw-max-w-[800px] tw-m-auto  tw-relative">
          <div className="tw-bg-[#F3F4F6] tw-p-10 tw-pb-0 tw-shadow-xl tw-rounded-xl tw-relative tw-z-10">
            <TitleSection
              title={systemContent.headings[0].content}
              position="center"
            />
            <p className="tw-text-justify tw-my-4 tw-text-md md:tw-text-lg">
              {systemContent.texts[0].content}
            </p>
            <img
              src={systemContent.imgs[0].src}
              alt={systemContent.imgs[0].alt}
              className="tw-max-w-[800px] tw-m-auto tw-my-7 tw-w-full"
            />
          </div>

          <Circle2 className="tw-absolute tw-top-[-42%] tw-right-[-40%] tw-max-w-[600px] tw-z-0 tw-blur-[10px] tw-opacity-50"></Circle2>
          <Circle2 className="tw-absolute tw-bottom-[-30%] tw-left-[-60%] tw-max-w-[800px] tw-z-0 tw-blur-[10px] tw-opacity-70"></Circle2>
        </div>
      </Section>

      <Section className="tw-bg-[#F3F4F6]">
        <div className="tw-max-w-[650px] tw-mx-auto tw-relative tw-my-16">
          <Blob className="tw-scale-[2.2] tw-rotate-[-30deg] tw-absolute tw-top-0 tw-left-0 tw-h-full tw-w-full tw-opacity-80"></Blob>
          <Blob className="tw-scale-[2] tw-rotate-[-65deg] tw-absolute tw-top-0 tw-left-0 tw-h-full tw-w-full tw-opacity-70 tw-blur-[5px]"></Blob>
          <img
            src={challengeContent.imgs[0].src}
            alt={challengeContent.imgs[0].alt}
            className="tw-bottom-0 tw-rounded-t-3xl tw-relative tw-z-10"
          />
          <Reveal
            keyframes={fadeInUp}
            delay={200}
            duration={400}
            triggerOnce={true}
          >
            <div className="tw-bg-[#F3F4F6] tw-p-10 tw-relative tw-z-10 tw-rounded-b-3xl">
              <TitleSection
                title={challengeContent.headings[0].content}
                position="center"
              />
              <p className=" tw-text-justify tw-my-4 tw-text-md md:tw-text-lg">
                {challengeContent.texts[0].content}
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="tw-my-0">
        <Reveal
          keyframes={fadeInUp}
          delay={300}
          duration={600}
          triggerOnce={true}
          className="tw-max-w-[900px] tw-m-auto"
        >
          <TitleSection
            title={collectionContent.headings[0].title}
            position="center"
          />
          <p className=" tw-text-justify tw-my-4 tw-text-md md:tw-text-lg">
            {collectionContent.headings[0].content}
          </p>
        </Reveal>

        <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 lg:tw-grid-cols-4 2xl:tw-grid-rows-2 tw-gap-4 tw-rounded-3xl tw-p-5">
          <div className="tw-row-start-2 sm:tw-col-span-2 sm:tw-col-start-1 lg:tw-row-start-1 lg:tw-col-span-2 lg:tw-row-span-2 tw-flex tw-justify-center tw-items-center tw-relative">
            <Circle className="tw-absolute tw-z-0 tw-blur-[2px] tw-opacity-70 tw-scale-[1]"></Circle>
            <Fade direction="left" triggerOnce={true}>
              <img
                src="/images/certified/icono2.png"
                alt={collectionContent.imgs[0].alt}
                className="tw-max-w-[730px] tw-w-full tw-relative tw-z-10"
              />
            </Fade>
          </div>
          <div className="tw-row-start-1 sm:tw-col-span-2 sm:tw-col-start-1 lg:tw-col-span-2 lg:tw-col-start-3 tw-flex tw-flex-col tw-justify-center tw-items-center lg:tw-my-10">
            <div className="tw-p-5 lg:tw-p-10">
              <TitleSection
                title={collectionContent.headings[1].title}
                position="center"
              />
              <p className="tw-text-center tw-text-md md:tw-text-lg">
                {collectionContent.headings[1].content}
              </p>
            </div>
          </div>

          <Reveal
            keyframes={fadeInUp}
            delay={300}
            duration={600}
            triggerOnce={true}
            className="sm:tw-row-start-3 lg:tw-col-start-3 lg:tw-row-start-2 tw-shadow-xl tw-rounded-xl tw-bg-[#fff]"
          >
            <div className="tw-p-4 tw-flex tw-flex-col tw-text-center tw-items-center ">
              <div className="tw-w-20 tw-h-20 tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-bg-primary-light/20 tw-text-primary tw-mb-5 tw-flex-shrink-0">
                <BsQrCode className="tw-w-10 tw-h-10" />
              </div>
              <div className="tw-flex-grow">
                <h2 className="tw-text-gray-900 tw-text-lg tw-title-font tw-font-medium tw-mb-3">
                  {collectionContent.cards[0].title}
                </h2>
                <p className="tw-leading-relaxed tw-text-base">
                  {collectionContent.cards[0].content}
                </p>
              </div>
            </div>
          </Reveal>
          <Reveal
            keyframes={fadeInUp}
            delay={300}
            duration={600}
            triggerOnce={true}
            className="sm:tw-row-start-3 lg:tw-col-start-4 lg:tw-row-start-2 tw-shadow-xl tw-rounded-xl tw-bg-[#fff]"
          >
            <div className="tw-p-4 tw-flex tw-flex-col tw-text-center tw-items-center">
              <div className="tw-w-20 tw-h-20 tw-inline-flex tw-items-center tw-justify-center tw-rounded-full tw-bg-primary-light/20 tw-text-primary tw-mb-5 tw-flex-shrink-0">
                <TireIcon className="tw-w-12 tw-h-12" />
              </div>
              <div className="tw-flex-grow">
                <h2 className="tw-text-gray-900 tw-text-lg tw-title-font tw-font-medium tw-mb-3">
                  {collectionContent.cards[1].title}
                </h2>
                <p className="tw-leading-relaxed tw-text-base">
                  {collectionContent.cards[1].content}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section className="">
        <img
          src={advantagesContent.imgs[1].src}
          alt={advantagesContent.imgs[1].alt}
          className="tw-absolute tw-w-full tw-left-0 tw-bottom-0"
        />
        <TitleSection
          title={advantagesContent.headings[0].content}
          position="center"
        />
        <div className="tw-mx-auto tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-max-w-[1300px] tw-gap-8 tw-my-10">
          <ul>
            {advantagesContent.benefit.length > 0 &&
              advantagesContent.benefit.map((item, index) => (
                <Fade direction="left" triggerOnce={true} key={index}>
                  <Steps
                    elements={advantagesContent.benefit}
                    data={item}
                    index={index}
                  />
                </Fade>
              ))}
          </ul>
          <Reveal
            keyframes={fadeInUp}
            delay={300}
            duration={600}
            triggerOnce={true}
            className="tw-flex tw-justify-center tw-items-center"
          >
            <img
              src={advantagesContent.imgs[0].src}
              alt={advantagesContent.imgs[0].alt}
              className="tw-m-auto tw-w-full tw-rounded-2xl"
            />
          </Reveal>
        </div>
      </Section>
    </>
  );
};

export default CertifiedTraceabilitySystem;
