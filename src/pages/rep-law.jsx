import { useLayoutEffect } from 'react';
import HelmetHead from '../components/helmet-head';
import ReactSlick from '../components/react-slick';
import Section from '../components/section';
import TitleSection from '../components/title-section';
import { contentPage1 } from '../data/layout-04';
import { motion } from 'framer-motion';
import { scrollUpVariants } from '../utils';

const RepLaw = () => {
  const repLawContent = contentPage1.content.find(
    (item) => item.section === 'rep-law'
  );

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <HelmetHead
        titlePage="Ley REP"
        contentPage="Ley REP: Responsabilidad Extendida del Productor para la Gestión y Reciclaje de Residuos - Enfoque en Neumáticos Fuera de Uso (NFU) y Baterías"
        keywords="Ley REP, Responsabilidad Extendida del Productor, Gestión de residuos, Neumáticos Fuera de Uso (NFU)"
      />

      {/* HERO */}
      <ReactSlick renderContent={contentPage1} />

      {/* MAIN CONTENT */}
      <div className="">
        <Section>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.1 }}
            variants={scrollUpVariants}
          >
            <div className="tw-grid tw-gap-5 tw-grid-cols-1 md:tw-grid-cols-2">
              <div className="tw-flex tw-justify-center tw-items-center">
                <TitleSection
                  className="tw-primary"
                  subTitleClassName="tw-text-gray-700"
                  title={repLawContent.headings[0].content}
                  subtitle={repLawContent.texts[0].content}
                  position="start"
                />
              </div>
              <div className="tw-flex tw-mx-auto tw-justify-center tw-items-center tw-w-[80%]">
                <img
                  src={repLawContent.imgs[0].src}
                  alt={repLawContent.imgs[0].alt}
                  className="tw-object-fit tw-h-full tw-w-full"
                />
              </div>
            </div>
          </motion.div>
        </Section>
      </div>
    </>
  );
};

export default RepLaw;
