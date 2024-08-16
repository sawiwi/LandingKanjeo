import { listServExt } from "../../data/extern-service/heroData";
import ModalExternServices from "../modal/ModalExterServicio";
import ResumeServices from "./components/resumeModal/ServicesExtResume";
import { useState } from "react";


const GridExtServ = ({dataServ}) => {

    const [openResume, setOpenResume] = useState(false);


    const handleOpenResume = () => {
        setOpenResume(true);
    };

    return(
        <div className="tw-relative tw-flex tw-flex-col md:tw-grid-cols-3 2xl:tw-grid-cols-4 tw-gap-4 tw-mt-12">
            {dataServ.length !== 0 ? dataServ.map((item)=>(

                <article key={item.id}
                onClick={() => handleOpenResume()} 
                className="tw-flex tw-flex-col tw-justify-center tw-w-full tw-p-2 tw-relative">
                    <div className="tw-flex tw-flex-col tw-gap-3 tw-items-center tw-my-2 ">
                        <div className='tw-rounded-full tw-text-sky-800 tw-bg-sky-200 hover:tw-scale-105 hover:tw-shadow-lg tw-duration-300 tw-w-44 tw-h-44 xl:tw-w-40 xl:tw-h-40 tw-p-5 xl:tw-p-6'>
                            <img src={item?.logo || ''} alt="imagen de servicio" className=" tw-py-3 tw-w-36 tw-h-full xl:tw-w-full  xl:tw-h-full"/>
                        </div>
                        <div className="tw-h-44 tw-mx-4 tw-text-center">
                            <h2 className="tw-font-bold tw-text-lg">{item?.name || ''}</h2>
                            <small className="tw-font-normal">{item?.description || ''}</small>
                            <div className='tw-my-2'>
                                <a href={item?.webPage || ''} className="tw-mt-3 tw-font-medium" target="_blank" rel="noreferrer">Ver sitio</a>
                            </div>
                        </div>
                    </div>
                </article>
            )): <div className="tw-flex tw-flex-col tw-justify-end tw-text-center tw-mt-10">
                    <p className="">Lo siento! No hemos encontrado Empresas disponibles</p>
                    <a className="tw-text-secondary-light" href="/" target="_blank">¿Te gustaria unirte a nosotros?</a>
                </div>
            }   
                {
                    dataServ.length !== 0 ? (
                        <div className="tw-flex tw-flex-col tw-justify-end tw-text-center tw-mt-10 xl:tw-mt-20">
                            <a className="tw-text-secondary-light" href="/" target="_blank">¿Te gustaria unirte a nosotros como empresa?</a>
                        </div>   
                    ) : ('')
                }
            <ModalExternServices open={openResume} onClose={() => setOpenResume(false)}>           
                    <ResumeServices data={dataServ} />
            </ModalExternServices>
        </div>
    )

}

export default GridExtServ;