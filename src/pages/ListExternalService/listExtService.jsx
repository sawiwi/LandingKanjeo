import Section from "../../components/section";
import TitleSection from "../../components/title-section";


const ListExtServices = () =>{
    return(
        <Section>
            <TitleSection 
               className="lg:tw-mt-20"
               title="Listado de Servicios Externos"
               subtitle="Los mejores Servicos de este rubro"
               position="center"/>
        <div className="tw-flex tw-flex-col xl:tw-grid xl:tw-grid-cols-2 2xl:tw-grid-cols-3 tw-gap-2 tw-mt-4 tw-w-full ">
            
        </div>
        </Section>
    )
}

export default ListExtServices;