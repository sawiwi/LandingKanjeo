import { useEffect, useState } from "react";
import Section from "../components/section";
import TitleSection from "../components/title-section";

import { RubroServData } from "../data/extern-service"; 
import ExternalFolders from "../services/external-services/ExternFoldersServices";
import { useNavigate } from "react-router-dom";

const ExternalServices = () =>{
    const [folders, setFolders] = useState([]);
    const navigate = useNavigate();
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    };

    useEffect(() => {
        const servData = async () => {
            const { data } = await ExternalFolders.getExternServiceFolders();
            setFolders(data);
        };
        servData();
    }, []);
    
    const handleViewService = (id) => {
        navigate(`/servicios-externos/listado-servicios/${id}`)
    }
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
                    {folders.length !== 0 ? folders.map((service) => (
                        <article key={service.id} className="tw-relative tw-shadow-md tw-rounded-md tw-p-2 tw-h-auto tw-w-full xl:tw-w-[95%] hover:tw-scale-105 tw-duration-150">
                            <div className="tw-flex tw-flex-col md:tw-flex-row tw-gap-3 tw-items-center tw-my-2 ">
                                <img src={service.category.image || ''} 
                                    alt="imagen de servicio" 
                                    className="tw-rounded-full tw-p-3 tw-py-3 tw-w-[70px] xl:tw-w-20 tw-text-5xl md:tw-text-4xl tw-text-sky-800 tw-bg-sky-200"/>                       
                                <div className="tw-h-44 tw-mx-4">
                                    <h2 className="tw-font-bold tw-text-lg">{service.name}</h2>
                                    <small className="tw-font-normal">{service.category.name}</small>
                                    <p className="tw-mt-3 tw-font-medium">{truncate(service.description, 120)}</p>
                                </div>
                            </div>
                            <hr className="tw-mt-3"/>
                            <div className="tw-h-4 tw-my-2 tw-mx-2 tw-flex tw-justify-end">
                                <button 
                                onClick={() => handleViewService(service.id,)}
                                className="tw-text-secondary-light tw-font-semibold">Ver servicios</button>

                            </div>
                        </article>
                    )):'No hemos encontrado Servicios externos'}
                    
                </div>
            </Section>
    </>
    )
}

export default ExternalServices;