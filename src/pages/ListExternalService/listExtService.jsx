import Section from "../../components/section";
import TitleSection from "../../components/title-section";
import { externHero } from "../../data/extern-service/heroData";
import ReactSlickExtServ from "../../components/react-slick/slickExterServ";
import GridExtServ from "./gridExtServ"
import BannerExtServ from "./bannerExtSer";

const ListExtServices = () =>{
    return(
        <>
            <div className="tw-flex tw-flex-col tw-mt-7 tw-w-full ">
                <div className=''>
                    <ReactSlickExtServ renderContent={externHero} />
                </div>
            </div>
            <Section>  
                <TitleSection
                    className='tw-mt-2'
                    title="Listado de servicios externos"
                    subtitle="Encuentra al corredor que más se adapate a tus necesidades"
                    position="center"
                />
                <GridExtServ />
                <BannerExtServ />

            </Section>
        </>   
        
    )
}

export default ListExtServices;