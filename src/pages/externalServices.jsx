import Section from "../components/section";
import TitleSection from "../components/title-section";

// import imgServices from '../assets/img/perfil/perfil.png'

import { RubroServData } from "../data/extern-service"; 


const ExternalServices = () =>{
    return(
    <>
            <Section className="tw-overflow-hidden tw-bg-white">
                <TitleSection
                    className="lg:tw-mt-20"
                    title="Servicios Externos"
                    subtitle="Encuentra el servicios que más necesites."
                    position="center"

                />
                <div className="tw-flex tw-flex-col xl:tw-grid xl:tw-grid-cols-2 2xl:tw-grid-cols-3 tw-gap-2 tw-mt-4 tw-w-full ">
                    {RubroServData.length !== 0 ? RubroServData.map((item) => (
                         <article key={item.id} className="tw-relative tw-shadow-md tw-rounded-md tw-p-2 tw-h-auto tw-w-full xl:tw-w-[95%] hover:tw-scale-105 tw-duration-150">
                            <div className="tw-flex tw-flex-col md:tw-flex-row tw-gap-3 tw-items-center tw-my-2 ">
                                <i alt="imagen de servicio" className="tw-rounded-full tw-p-3 tw-py-3 tw-w-[70px]  xl:tw-w-20 tw-text-5xl md:tw-text-4xl tw-text-sky-800 tw-bg-sky-200">{item.icon}</i>
                                <div className="tw-h-44 tw-mx-4">
                                    <h2 className="tw-font-bold tw-text-lg">{item.title}</h2>
                                    <small className="tw-font-normal">{item.category}</small>
                                    <p className="tw-mt-3 tw-font-medium">{item.description}</p>
                                </div>
                            </div>
                            <hr className="tw-mt-3"/>
                            <div className="tw-h-4 tw-my-2 tw-mx-2 tw-flex tw-justify-end">
                                <a alt="" href="/servicios-externos/listado-servicios" className="tw-text-secondary-light">Ver servicios</a>
                            </div>
                     </article>
                    )):'No hemos encontrado Servicios externos'}
                       


                        
                        
           
                   
                   

                </div>
            </Section>
    </>
    )
}

export default ExternalServices;