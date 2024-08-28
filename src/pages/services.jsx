import Section from '../components/section';
import TitleSection from '../components/title-section';
import { Fade } from 'react-awesome-reveal';
import { plansData } from '../constants/plans';
import Card01 from '../components/card/card-01';

import Form from '../components/form/index.jsx';
import { contentPage1 } from '../data/layout-01';



const ServicesSect = ()=>{

    const _renderedPlans = plansData.map((plan) => (
        <Card01 key={plan.id} plan={plan} />
      ));

     
    const formContent = contentPage1.content.find(
        (item) => item.section === 'form-area'
    ); 
    return(
        <>
        <Section className="overflow-hidden bg-white" id="servicios">
            <TitleSection
            className="relative z-10 lg:mt-20"
            subTitleClassName="relative z-10"
            title="Servicio de YoKanjeo"
            subtitle="Nuestras soluciones se adapta a tu negocio."
            position="center"
            />
            <Fade direction="up" triggerOnce={true}>
            <div className="flex justify-center w-full z-10 relative">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4  mt-8 gap-8 max-w-[1450px]">
                {_renderedPlans}
                </div>
            </div>
            </Fade>
        </Section>
        {/* Seccion Del Formulario */}
        <Section className="overflow-hidden bg-gray-50">
            {/* <img
            src={ContactImg}
            alt=""
            className="absolute w-full left-0 top-0 z-0 object-cover"
            /> */}
            <Form renderContent={formContent}/>
        </Section>
        </>



    )

}

export default ServicesSect;