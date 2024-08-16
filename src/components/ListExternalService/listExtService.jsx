import Section from "../section";
import TitleSection from "../title-section";
import { externHero } from "../../data/extern-service/heroData";
import ReactSlickExtServ from "../react-slick/slickExterServ";
import GridExtServ from "./gridExtServ"
import BannerExtServ from "./bannerExtSer";

import ExternalServices from "../../services/external-services/ExternServices";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ListExtServices = () =>{
    const {id} = useParams();
    const [services, setServices] = useState([]);

    useEffect(() => {
        const listService = async () => {
            const {data} = await ExternalServices.getExternServiceCategories(id);
            setServices(data);
        };
        listService();

    }, [id]);

    return(
        <>
            <div className="tw-flex tw-flex-col tw-mt-7 tw-w-full ">
                <div className=''>
                    <ReactSlickExtServ renderContent={externHero} />
                </div>
            </div>
            <Section>
                <div className="tw-flex tw-flex-col tw-text-center tw-justify-center">
                    <h2 className="tw-text-4xl xl:tw-text-5xl tw-mb-2 tw-text-secondary">
                            Listado de Empresas
                    </h2> 
                    <p>Encuentra la compañia que más se adapate a tus necesidades</p> 
                </div>
                <GridExtServ dataServ={services} />
                <BannerExtServ />

            </Section>
        </>   
        
    )
}

export default ListExtServices;