import { Fragment, useLayoutEffect } from 'react';
import HelmetHead from '../components/helmet-head';
import ReactSlick from '../components/react-slick';
import { Tooltip } from 'react-tooltip';
import { motion } from 'framer-motion';
import Section from '../components/section';
import TitleSection from '../components/title-section';
import { contentPage1 } from '../data/layout-02';
import { scrollUpVariants } from '../utils';
import { BsCheckCircleFill } from '../components/icon';

import '../assets/css/components/map/map-img.css';

const VehicleManagementSystem = () => {
  const safePlatform = contentPage1.content.find(
    (item) => item.section === 'safe-platform'
  );

  const driverScore = contentPage1.content.find(
    (item) => item.section === 'driver-score'
  );

  const controlAdmin = contentPage1.content.find(
    (item) => item.section === 'control-admin'
  );

  const intelligentMaintenance = contentPage1.content.find(
    (item) => item.section === 'intelligent-maintenance'
  );

  const dataTracking = contentPage1.content.find(
    (item) => item.section === 'data-tracking'
  );

  const advantages = contentPage1.content.find(
    (item) => item.section === 'advantages'
  );

  const circularTrip = contentPage1.content.find(
    (item) => item.section === 'circular-trip'
  );

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      {/* HEAD PAGE */}
      <HelmetHead
        titlePage="Sistema de gestión para vehículos"
        contentPage="Sistema de Gestión para Vehículos: Control Eficiente y Automatizado de Flotas de Transporte"
        keywords="Sistema de Gestión para Vehículos, Control de Flotas, Automatización de Procesos de Transporte, Monitoreo de Flota por GPS, Herramienta de Análisis de Datos de Vehículos, Aumento de Productividad en Transporte, Gestión Eficiente de Horarios de Conductores, Seguimiento en Tiempo Real de Servicios de Transporte"
      />

      {/* HERO */}
      <ReactSlick renderContent={contentPage1} />

      {/* MAIN CONTENT */}
      <div className="bg-img tw-h-[500px] tw-bg-[#F6F6F6] sm:tw-h-[500px] lg:tw-h-[600px] xl:tw-h-[1000px] tw-flex tw-items-center">
        <Section>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            variants={scrollUpVariants}
            className="tw-w-[80%] sm:tw-w-[80%] lg:tw-w-[60%] xl:tw-w-[45%]"
          >
            <TitleSection
              title={safePlatform.headings[0].content}
              subtitle={safePlatform.texts[0].content}
              position="left"
            />
          </motion.div>
        </Section>
      </div>

      <Section>
        <div className="tw-grid tw-gap-4 tw-grid-cols-1 sm:tw-grid-cols-1 md:tw-grid-cols-2">
          <div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
              variants={scrollUpVariants}
              className="tw-flex tw-items-center tw-justify-center"
            >
              <img
                src={driverScore.imgs[0].src}
                alt={`img-${driverScore.imgs[0].alt}`}
              />
            </motion.div>
          </div>
          <div className="tw-flex tw-flex-col tw-p-5 tw-rounded-xl tw-items-center tw-justify-center">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
              variants={scrollUpVariants}
            >
              <TitleSection
                title={driverScore.headings[0].content}
                subtitle={driverScore.texts[0].content}
                position="left"
              />
            </motion.div>
          </div>
        </div>
      </Section>

      <div className="tw-w-full bg-img-desitions">
        <Section>
          <div className="tw-grid tw-gap-4 tw-grid-cols-1 sm:tw-grid-cols-1 md:tw-grid-cols-2">
            <div className="tw-flex tw-flex-col tw-p-5 tw-items-center tw-justify-center">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.1 }}
                variants={scrollUpVariants}
              >
                <TitleSection
                  title={controlAdmin.headings[0].content}
                  subtitle={controlAdmin.texts[0].content}
                  position="left"
                  className="tw-text-white"
                  subTitleClassName="tw-text-gray-100"
                />
                <ul className="tw-ml-4">
                  {controlAdmin.texts[0]?.children?.map((item, idx) => (
                    <li
                      key={idx}
                      className="tw-flex tw-items-center tw-my-3 tw-text-gray-400"
                    >
                      <BsCheckCircleFill className="tw-w-[5%] tw-mr-2 tw-text-green-500" />
                      <p className="tw-w-[95%]">{item}</p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="tw-flex tw-items-center tw-justify-center">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.1 }}
                variants={scrollUpVariants}
                className="tw-flex tw-items-center tw-justify-center"
              >
                <img
                  src={controlAdmin.imgs[0].src}
                  alt={`img-${controlAdmin.imgs[0].alt}`}
                  className="tw-h-full tw-w-full"
                />
              </motion.div>
            </div>
          </div>
        </Section>
      </div>

      <div className="tw-w-full">
        <Section>
          <div className="tw-grid tw-gap-4 tw-grid-cols-1 sm:tw-grid-cols-1 md:tw-grid-cols-2">
            <div className="tw-flex tw-items-center tw-justify-center">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.1 }}
                variants={scrollUpVariants}
                className="tw-flex tw-items-center tw-justify-center"
              >
                <img
                  src={intelligentMaintenance.imgs[0].src}
                  alt={`img-${intelligentMaintenance.imgs[0].alt}`}
                  className="tw-h-full tw-w-full tw-rounded-xl"
                />
              </motion.div>
            </div>

            <div className="tw-flex tw-flex-col tw-p-5 tw-items-center tw-justify-center">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.1 }}
                variants={scrollUpVariants}
              >
                <TitleSection
                  title={intelligentMaintenance.headings[0].content}
                  subtitle={intelligentMaintenance.texts[0].content}
                  position="left"
                />
                <ul className="tw-ml-4">
                  {intelligentMaintenance.texts[0]?.children?.map(
                    (item, idx) => (
                      <li
                        key={idx}
                        className="tw-flex tw-w-full s tw-items-center tw-justify-start tw-my-3 tw-text-gray-400"
                      >
                        <BsCheckCircleFill className="tw-text-lg tw-w-[5%] tw-mr-3 tw-text-green-600" />
                        <p className="tw-w-[95%]">
                          {item.span}: {item.text}
                        </p>
                      </li>
                    )
                  )}
                </ul>
              </motion.div>
            </div>
          </div>
        </Section>
      </div>

      <div className="tw-w-full bg-img-desitions">
        <Section>
          <div className="tw-grid tw-gap-4 tw-grid-cols-1 sm:tw-grid-cols-1 md:tw-grid-cols-2">
            <div className="tw-flex tw-flex-col tw-p-5 tw-items-center tw-justify-center">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.1 }}
                variants={scrollUpVariants}
              >
                <TitleSection
                  title={dataTracking.headings[0].content}
                  subtitle={dataTracking.texts[0].content}
                  position="left"
                  className="tw-text-white"
                  subTitleClassName="tw-text-gray-100"
                />
              </motion.div>
            </div>

            <div className="tw-flex tw-items-center tw-justify-center">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.1 }}
                variants={scrollUpVariants}
                className="tw-flex tw-items-center tw-justify-center"
              >
                <img
                  src={dataTracking.imgs[0].src}
                  alt={`img-${dataTracking.imgs[0].alt}`}
                  className="tw-h-full tw-w-full tw-rounded-xl"
                />
              </motion.div>
            </div>
          </div>
        </Section>
      </div>

      <Section>
        <div className="tw-grid tw-gap-4 tw-grid-cols-1 sm:tw-grid-cols-1 md:tw-grid-cols-2">
          <div className="tw-flex tw-flex-col tw-p-5 tw-items-center tw-justify-center">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
              variants={scrollUpVariants}
            >
              <TitleSection
                title={advantages.headings[0].content}
                subtitle={''}
                position="left"
              />
              <ul className="tw-ml-0 tw-bg-dark tw-px-5 tw-py-1 tw-rounded-lg tw-shadow-lg tw-border-l-4 tw-border-opacity-100 tw-border-primary">
                {advantages.textsItems.map((item, idx) => (
                  <li key={idx} className="tw-my-5 tw-text-gray-500">
                    <BsCheckCircleFill className=" tw-text-green-500 tw-text-opacity-100" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <div className="tw-flex tw-items-center tw-justify-center">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
              variants={scrollUpVariants}
              className="tw-flex tw-items-center tw-justify-center"
            >
              <img
                src={advantages.imgs[0].src}
                alt={`img-${advantages.imgs[0].alt}`}
                className="tw-h-full tw-w-full tw-rounded-xl"
              />
            </motion.div>
          </div>
        </div>

        <div className="tw-flex tw-justify-center tw-items-center tw-text-center tw-mt-10">
          <h3 className="tw-text-gray-600 tw-border-b-2 tw-border-primary tw-text-lg md:tw-text-xl">
            Beneficios
          </h3>
        </div>
        <div className="tw-flex tw-items-center tw-my-10 tw-w-[100%] md:tw-w-[70%] tw-mx-auto">
          {advantages.texts[0].children.map((item, idx) => (
            <Fragment key={idx}>
              <Tooltip id={item.dataTooltipId} />
              <div
                data-tooltip-id={item.dataTooltipId}
                data-tooltip-content={item.dataTooltipConten}
                data-tooltip-place="top"
                className="tw-transform tw-my-2 tw-text-center tw-font-semibold tw-border-2 tw-border-orange-200 tw-shadow-lg hover:tw-scale-110 hover:tw-shadow-xl tw-transition tw-duration-0 tw-cursor-pointer tw-w-10 tw-h-10 md:tw-w-14 md:tw-h-14 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-bg-primary-light/20 tw-text-primary hover:tw-bg-primary-light/30"
              >
                {item.content}
              </div>
              {item.id < 6 && (
                <div className="tw-flex-1 tw-h-[.5px] tw-bg-gray-300 tw-mx-1 md:tw-mx-4"></div>
              )}
            </Fragment>
          ))}
        </div>
      </Section>

      <div className="bg-img-circular-trip">
        <Section>
          <div className="tw-grid tw-gap-4 tw-grid-cols-1 sm:tw-grid-cols-1 md:tw-grid-cols-2">
            <div className="tw-flex tw-items-center tw-justify-center">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.1 }}
                variants={scrollUpVariants}
                className="tw-flex tw-items-center tw-justify-center"
              ></motion.div>
            </div>

            <div className="tw-flex tw-flex-col tw-p-5 tw-items-center tw-justify-center">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.1 }}
                variants={scrollUpVariants}
              >
                <TitleSection
                  title={circularTrip.headings[0].content}
                  subtitle={''}
                  position="left"
                  className="tw-text-white"
                />
                <ul className="tw-ml-0 tw-px-5 tw-py-1 tw-border-l-4 tw-border-opacity-100 tw-border-primary">
                  {circularTrip.textsItems.map((item, idx) => (
                    <li
                      key={idx}
                      className="tw-my-5 tw-text-white tw-text-lg md:tw-text-xl"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          <div className="tw-flex tw-items-center tw-my-10 tw-w-[80%] md:tw-w-[70%] tw-mx-auto">
            {circularTrip.texts[0].children.map((item, idx) => (
              <Fragment key={idx}>
                <Tooltip id={item.dataTooltipId} />
                <div
                  data-tooltip-id={item.dataTooltipId}
                  data-tooltip-content={item.dataTooltipConten}
                  data-tooltip-place="top"
                  className="tw-transform tw-my-2 tw-text-center tw-border-2 tw-border-white hover:tw-scale-110 tw-shadow-2xl hover:tw-shadow-xl tw-transition tw-duration-0 tw-text-white hover:tw-bg-primary-light tw-cursor-pointer tw-w-12 tw-h-12 md:tw-w-14 md:tw-h-14 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-bg-primary"
                >
                  {item.content}
                </div>
                {item.id < 3 && (
                  <div className="tw-flex-1 tw-h-[.5px] tw-bg-white tw-mx-4"></div>
                )}
              </Fragment>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
};

export default VehicleManagementSystem;
