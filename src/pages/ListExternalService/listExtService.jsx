import Section from "../../components/section";
import TitleSection from "../../components/title-section";
import { externHero } from "../../data/extern-service/heroData";
import ReactSlickExtServ from "../../components/react-slick/slickExterServ";
import GridExtServ from "./gridExtServ"
import BannerExtServ from "./bannerExtSer";

const ListExtServices = () =>{
    return(
        <>
            <div className="tw-flex tw-flex-col xl:tw-grid 2xl:tw-grid-cols-1 tw-mt-7 tw-w-full ">
                <div className='tw-col-span-1'>
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