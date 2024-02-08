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
        <Section className="tw-overflow-hidden tw-bg-white" id="servicios">
            <TitleSection
            className="tw-relative tw-z-10"
            subTitleClassName="tw-relative tw-z-10"
            title="Servicio de YoKanjeo"
            subtitle="Nuestras soluciones se adapta a tu negocio."
            position="center"
            />
            <Fade direction="up" triggerOnce={true}>
            <div className="tw-flex tw-justify-center tw-w-full tw-z-10 tw-relative">
                <div className="tw-grid tw-grid-cols-1 sm:tw-grid-cols-2 md:tw-grid-cols-2 lg:tw-grid-cols-3 xl:tw-grid-cols-3 2xl:tw-grid-cols-4  tw-mt-8 tw-gap-8 tw-max-w-[1450px]">
                {_renderedPlans}
                </div>
            </div>
            </Fade>
        </Section>
        {/* Seccion Del Formulario */}
        <Section className="tw-overflow-hidden tw-bg-gray-50">
            {/* <img
            src={ContactImg}
            alt=""
            className="tw-absolute tw-w-full tw-left-0 tw-top-0 tw-z-0 tw-object-cover"
            /> */}
            <Form renderContent={formContent}/>
        </Section>
        </>



    )

}

export default ServicesSect;