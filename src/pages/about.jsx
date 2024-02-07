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
        title={whyWeContent.headings[0].content}
        subtitle="Data-Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure culpa inventore dicta voluptatum fuga,"
        position="center"
      />
      <WhywE renderContent={whyWeContent} />
    </Reveal>
  </Section>
)
}

export default About;