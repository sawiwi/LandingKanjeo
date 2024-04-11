import Section from "../components/section";
import TitleSection from "../components/title-section";
import {Reveal } from 'react-awesome-reveal';
import { contentPage1 } from '../data/layout-01';

import { keyframes } from '@emotion/react';
import WhywE from '../components/WhyWe/WhyWe';


const About = () => {

    const whyWeContent = contentPage1.content.find(
        (item) => item.section === 'WhyWe'
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
return(
    <Section className="tw-overflow-hidden tw-bg-white">
    <Reveal
      keyframes={fadeInUp}
      delay={500}
      duration={800}
      triggerOnce={true}
    >
      <TitleSection
        className='lg:tw-mt-20'
        title={whyWeContent.headings[0].content}
        subtitle="Nuestra empresa nació de la visión de transformar la experiencia de intercambio de propiedades, haciéndola más accesible y eficiente para todos los involucrados. Surgió de la pasión por conectar a corredores e potenciales interesados en un proceso justo y transparente."
        position="center"
      />
      <WhywE renderContent={whyWeContent} />
    </Reveal>
  </Section>
)
}

export default About;