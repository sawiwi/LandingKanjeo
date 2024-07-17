import { IoGridOutline } from "react-icons/io5";
import { TbLayoutList} from "react-icons/tb";
import { FaArrowLeft , FaArrowRight, FaRulerCombined, FaPencilRuler, FaParking  } from "react-icons/fa";
import { FaBed, FaBath, FaKitchenSet } from "react-icons/fa6";
import { PiSortDescendingBold } from "react-icons/pi";

// import imgCasaUno from '../../../assets/img/Hero/casa1.webp'
// import imgCasaTwo from '../../../assets/img/Hero/casa2.webp'
// import imgCasaThree from '../../../assets/img/Hero/casa3.webp'

import { 
    truncateString, 
    parseToCLPCurrency, 
    parseToDecimal, 
    ufToClp, 
    clpToUf2 } from "../../../utils/truncateExchange";

import { useContext, useState } from "react";
import Modal from "../../modal/Modal";
import ModalLastProperties from "./components/ModalLastProperties";
import { PropertiesContext } from "../../../context/properties/PropertiesContext";

const LastProperties = () => {
    const [contactOpen, setContactOpen] = useState(false);
    const { contextData } = useContext(PropertiesContext);
    const {
        properties,
        setProperties,
        allProperties,
        setAllProperties,
        page,
        setPage,
        valueUf,
        propertyId
    } = contextData;

    const onOpenContact = () =>{
        setContactOpen(true)
    }

    const onCloseContact = () =>{
        setContactOpen(false)
    }


    return(
        <>
            {/* FILTROS AVANZADOS */}
              <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-items-center md:tw-mx-36 2xl:tw-mx-96 tw-gap-2 tw-mt-10 tw-w-full md:tw-w-96">
                        <div className="tw-grid tw-mb-1">
                            <label className="tw-font-semibold tw-mb-1" for="typeProperty">Tipo de propiedad</label>
                            <input
                            type="text"
                            id="typeProperty"
                            className="tw-rounded-md placeholder:tw-text-gray-400 tw-p-2 tw-border-2"
                            placeholder="Casa"

                            ></input>
                        </div>
                        <div className="tw-grid tw-mb-1">
                            <label className="tw-font-semibold tw-mb-1" for="typeOperation">Tipo de operación</label>
                            <input
                            type="text"
                            id="typeOperation"
                            className="tw-rounded-md placeholder:tw-text-gray-400 tw-p-2 tw-border-2"
                            placeholder="Venta"

                            ></input>
                        </div>
                        <div className="tw-grid tw-mb-1">
                            <label className="tw-font-semibold tw-mb-1" for="region">Región</label>
                            <input
                            type="text"
                            id="region"
                            className="tw-rounded-md placeholder:tw-text-gray-400 tw-p-2 tw-border-2"
                            placeholder="Metropolitana"

                            ></input>
                        </div>
                        <div className="tw-grid tw-mb-1">
                            <label className="tw-font-semibold tw-mb-1" for="commune">Comuna</label>
                            <input
                            type="text"
                            id="commune"
                            className="tw-rounded-md placeholder:tw-text-gray-400 tw-p-2 tw-border-2"
                            placeholder="Las Condes"

                            ></input>
                        </div>
                        <div className="tw-grid tw-mb-1 tw-m-1">
                            <button className="tw-p-2 tw-px-4 tw-mt-5 tw-bg-secondary tw-text-gray-50 tw-rounded-md tw-drop-shadow-md tw-font-semibold">Buscar</button>
                        </div>
                </div>
                    {/* UTLIMAS PROPIEDAD EN CANJE */}
                    <div className="tw-flex tw-flex-col xl:tw-flex-row tw-justify-between tw-items-center tw-mx-2 2xl:tw-mx-32">
                        <div className="tw-flex tw-gap-3 tw-text-sm tw-my-3">
                            <p className="tw-text-gray-500">Últimas propiedades subidas</p><span className="tw-font-light tw-cursor-pointer">Ver más</span>
                        </div>
                        <ul className="tw-flex tw-gap-3">
                            <li className="">
                                <button className="hover:tw-font-semibold tw-duration-200 tw-cursor-pointer tw-rounded-lg tw-shadow-2xl tw-bg-gray-200 tw-h-8 tw-w-8 tw-p-1 tw-px-2">
                                    <IoGridOutline className="tw-text-gray-600 tw-text-lg"/>
                                </button>
                            </li>
                            <li className="hover:tw-font-semibold tw-duration-200 tw-cursor-pointer">
                                <button className="hover:tw-font-semibold tw-duration-200 tw-cursor-pointer tw-rounded-lg tw-shadow-2xl tw-bg-gray-200 tw-h-8 tw-w-8 tw-p-1 tw-px-2">
                                    <TbLayoutList className="tw-text-gray-600 tw-text-lg"/>
                                </button>
                            </li>                
                        </ul>
                    </div>
                    <div className="tw-grid tw-grid-row tw-grid-cols-1 lg:tw-grid-cols-2 2xl:tw-grid-cols-3 tw-gap-6 2xl:tw-gap-2 tw-mt-4 tw-mb-4 tw-mx-3 2xl:tw-mx-32">
                        {properties.slice(0, 3).map((item) => {
                            return(
                                <article key={item?.id} className="tw-shadow-lg tw-flex tw-flex-col tw-border-2 tw-h-full md:tw-h-96 2xl:tw-h-[400px] tw-w-full tw-p-2 tw-group">
                                    <div className="tw-mb-2 tw-relative">
                                        <img src={item.images[0] ? item.images[0] : 'https://res.cloudinary.com/dbrhjc4o5/image/upload/v1681933697/unne-media/errors/not-found-img_pp5xj7.jpg' } alt="img-casa" className="tw-h-44 tw-w-full tw-object-cover tw-rounded-md group-hover:-tw-translate-y-2 tw-duration-200 tw-shadow-md" />
                                        <small className="tw-absolute tw-top-1 tw-left-1 tw-p-[0.15rem] tw-px-4 tw-font-normal tw-opacity-100 group-hover:tw-opacity-70 tw-bg-secondary tw-text-gray-50 tw-rounded-sm group-hover:tw-top-0 tw-duration-200">
                                            {item.typeOfPropertyId ? item.typeOfPropertyId : 'No hay descripción' }
                                        </small>
                                        <small className="tw-absolute tw-top-8 tw-left-1 tw-p-[0.18rem] tw-px-4 tw-font-normal tw-opacity-100 group-hover:tw-opacity-70 tw-bg-secondary tw-text-gray-50 tw-rounded-sm group-hover:tw-top-7 tw-duration-200">
                                            {item.typeOfOperationId}
                                        </small>
                                    </div>
                                    <div className="tw-mx-2">
                                    <h2 className="tw-font-semibold tw-text-center tw-text-lg">{item.propertyTitle}</h2>
                                    <div className="tw-mx-4 tw-mb-2 tw-my-3 tw-flex tw-flex-row tw-justify-between tw-items-center">
                                            <p><b>$ 20.000.000</b></p>
                                            <p><b>UF 3.200</b></p>
                                    </div>
                                        <ul className="tw-flex tw-flex-col sm:tw-flex-row tw-mx-4 tw-gap-2 tw-justify-between">
                                            <li className="tw-flex tw-justify-start tw-items-center tw-gap-2 sm:tw-text-center sm:tw-grid ">
                                                    <span>Baños</span>
                                                    <small>{item.characteristics.bathrooms || '0'}</small>
                                            </li>
                                            <li className="tw-flex tw-justify-start tw-items-center tw-gap-2 sm:tw-text-center sm:tw-grid ">
                                                    <span>Dormitorio(s)</span>
                                                    <small>{item.characteristics.bedrooms || '0'}</small>
                                            </li>
                                            <li className="tw-flex tw-justify-start tw-items-center tw-gap-2 sm:tw-text-center sm:tw-grid ">
                                                    <span>Mts cuadrados</span>
                                                    <small>{item.characteristics.surface || '0'}</small>
                                            </li>
                                            <li className="tw-flex tw-justify-start tw-items-center tw-gap-2 sm:tw-text-center sm:tw-grid ">
                                                    <span>Estacionamiento</span>
                                                    <small>{item?.characteristics?.hasParking !== false ? item?.characteristics?.hasParking  : 'no' }</small>
                                            </li>
                                        </ul>
                                        <div className="tw-mx-4 tw-mb-2 tw-mt-8 tw-flex tw-flex-row tw-justify-between tw-items-center">
                                            <p className="tw-font-medium">{item.address.state.name || 'No se encontro región'}, {item.address.city.name || 'No se encontro comuna'}</p>
                                            <button 
                                            onClick={onOpenContact} 
                                            className="tw-p-2 tw-px-3 tw-bg-secondary hover:tw-bg-secondary-light tw-duration-200 tw-text-white tw-rounded-full"
                                            >Contactar</button>
                                        </div>
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                    {/* PAGINACION */}
                    <div className="tw-flex tw-flex-row tw-justify-center tw-gap-3 tw-m-2 tw-my-10 2xl:tw-mx-32">
                        <button className="tw-p-2 tw-px-4 tw-rounded-full tw-border  hover:tw-bg-secondary-light hover:tw-text-white tw-duration-200 " >
                            Inicio
                        </button>
                        <button className="tw-px-3 sm:tw-p-2 sm:tw-px-3 tw-rounded-full tw-border hover:tw-bg-secondary-light hover:tw-text-white tw-duration-200" >
                            <FaArrowLeft />
                        </button>
                        <button className="tw-p-2 tw-px-3 tw-rounded-full tw-border hover:tw-bg-secondary-light hover:tw-text-white tw-duration-200" >
                            <FaArrowRight />
                        </button>
                        <button className="tw-p-2 tw-px-4 tw-rounded-full tw-border hover:tw-bg-secondary-light hover:tw-text-white tw-duration-200" >
                            Final
                        </button>
                    </div>
                    <Modal open={contactOpen} onClose={onCloseContact} className="tw-w-[90%] tw-h-full">
                        {properties.map((property) => (
                            <ModalLastProperties 
                                key={property.id}
                                data={property}                     
                            />
                        ))}
                    </Modal>
     
        </>
        
    )

}

export default LastProperties;