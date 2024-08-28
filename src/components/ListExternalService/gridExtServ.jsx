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
        <div className="relative flex flex-col md:grid-cols-3 2xl:grid-cols-4 gap-4 mt-12">
            {dataServ.length !== 0 ? dataServ.map((item)=>(
                <article key={item.id}
                onClick={() => handleOpenResume()} 
                className="flex flex-col justify-center w-full p-2 relative">
                    <div className="flex flex-col gap-3 items-center my-2 ">
                        <div className='rounded-full text-sky-800 bg-sky-200 hover:scale-105 hover:shadow-lg duration-300 w-44 h-44 xl:w-40 xl:h-40 p-5 xl:p-6'>
                            <img src={item?.logo || ''} alt="imagen de servicio" className=" py-3 w-36 h-full xl:w-full  xl:h-full"/>
                        </div>
                        <div className="h-44 mx-4 text-center">
                            <h2 className="font-bold text-lg">{item?.name || ''}</h2>
                            <small className="font-normal">{item?.description || ''}</small>
                            <div className='my-2'>
                                <a href={item?.webPage || ''} className="mt-3 font-medium" target="_blank" rel="noreferrer">Ver sitio</a>
                            </div>
                        </div>
                    </div>
                </article>
            )): <div className="flex flex-col justify-end text-center mt-10">
                    <p className="">Lo siento! No hemos encontrado Empresas disponibles</p>
                    <a className="text-secondary-light" href="/" target="_blank">¿Te gustaria unirte a nosotros?</a>
                </div>
            }   
                {
                    dataServ.length !== 0 ? (
                        <div className="flex flex-col justify-end text-center mt-10 xl:mt-20">
                            <a className="text-secondary-light" href="/" target="_blank">¿Te gustaria unirte a nosotros como empresa?</a>
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