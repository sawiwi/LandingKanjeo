import Section from '../components/section';
import TitleSection from '../components/title-section';
import { contentPage1 } from '../data/layout-01';
import StepsIndex from '../components/ui/steps/StepsIndex';



const How = () => {
  const steps = contentPage1.content.find((item) => item.section === 'Steps');
  return(

        <Section className="overflow-hidden bg-gray-50" id='como-funciona'>
        {/* Steps CONTENT */}
              <TitleSection
                className='lg:mt-20'
                title="¿Cómo funciona?"
                subtitle="Nuestras soluciones hacen más agil tu negocio"
                position="center"
              />
            <StepsIndex renderContent={steps} />
        </Section>
    
  );


};

export default How;