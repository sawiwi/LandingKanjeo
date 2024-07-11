import imgCasaOne from '../../../../../assets/img/Hero/casa1.webp'
import imgCasaTwo from '../../../../../assets/img/Hero/casa2.webp'
import imgCasaThree from '../../../../../assets/img/Hero/casa3.webp'

import { TbAirConditioning} from "react-icons/tb";
import { BiSolidCarGarage } from "react-icons/bi";
import { FaRulerCombined, FaPencilRuler, FaParking  } from "react-icons/fa";
import { FaBed, FaBath, FaKitchenSet } from "react-icons/fa6";
import { PiSortDescendingBold } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";

const DetailsProperty = () =>{
    return(
        <>
            <div className="tw-w-full tw-justify-center">
                    <h3 className="tw-text-xl 2:tw-text-2xl tw-text-center tw-font-semibold">
                        Detalles de propiedad
                    </h3>
                    <div className="tw-p-2 tw-px-3">
                                    <div className="tw-flex md:tw-flex-row tw-justify-center tw-mt-2 tw-my-2 tw-mx-32 tw-h-[100px] tw-gap-6"> 
                                            <div>
                                                <div className="tw-h-20 tw-w-20 md:tw-h-32 md:tw-w-32 2xl:tw-h-20 2xl:tw-w-20 tw-text-center">
                                                    <img src={imgCasaTwo} loading='lazy' className="tw-object-cover tw-cursor-pointer tw-rounded-xl tw-h-full tw-w-full tw-my-3 hover:tw-scale-105 hover:tw-shadow-xl tw-duration-150" alt=""/>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="tw-h-20 tw-w-20 md:tw-h-32 md:tw-w-32 2xl:tw-h-20 2xl:tw-w-20 tw-text-center">
                                                    <img src={imgCasaThree} loading='lazy' className="tw-object-cover tw-cursor-pointer tw-rounded-xl tw-h-full tw-w-full tw-my-3  hover:tw-scale-105 hover:tw-shadow-xl tw-duration-150" alt=""/>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="tw-h-20 tw-w-20 md:tw-h-32 md:tw-w-32 2xl:tw-h-20 2xl:tw-w-20 tw-text-center">
                                                    <img src={imgCasaOne} loading='lazy' className="tw-object-cover tw-cursor-pointer tw-rounded-xl tw-h-full tw-w-full tw-my-3 hover:tw-scale-105 hover:tw-shadow-xl tw-duration-150" alt=""/>
                                                </div>
                                            </div> 
                                    </div>
                                    <h6 className="tw-font-medium tw-text-lg tw-text-center">
                                        Titulo de propiedad
                                    </h6>
                                    <p className="tw-text-base tw-text-center">
                                        Descripcion de propiedad
                                    </p>
                                    <div className="tw-text-center tw-flex tw-justify-between tw-mt-2 tw-mb-2 tw-gap-2 tw-mx-28">
                                        <p className="tw-grid"><span>Tipo de operación </span>Venta</p>
                                        <p className="tw-grid"><span>Tipo de inmueble </span>Casa</p>
                                        <p className="tw-grid"><span>3000 UF</span>12.000.000 CLP</p>
                                    </div>
                                    <div>
                                        <h3 className="tw-text-center tw-text-lg">Características</h3>
                                        <div className="tw-flex tw-flex-col md:tw-flex-row md:tw-gap-8 md:tw-mt-3 md:tw-mx-12">
                                            <ul className="tw-flex tw-flex-col tw-gap-1 tw-text-start">
                                                <li className="tw-mb-2">
                                                    <div className="tw-flex tw-gap-2 tw-items-center">
                                                        <FaRulerCombined />
                                                        <span>
                                                            Terreno:
                                                        </span>
                                                        <p>2 mts</p>
                                                    </div>
                                                </li>
                                                <li className="tw-mb-2">
                                                    <div className="tw-flex tw-gap-2 tw-items-center">
                                                        <FaPencilRuler />
                                                        <span>
                                                            Construido:
                                                        </span>
                                                        <p>2 mts</p>
                                                    </div>
                                                </li>
                                                <li className="tw-mb-2">
                                                    <div className="tw-flex tw-gap-2 tw-items-center">
                                                        <PiSortDescendingBold/>
                                                        <span>
                                                            Piso(s):
                                                        </span>
                                                        <p>2</p>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul className="tw-flex tw-flex-col tw-gap-1 tw-text-start">
                                                <li className="tw-mb-2">
                                                    <div className="tw-flex tw-items-center tw-gap-2">
                                                        <FaBed/>
                                                        <span>
                                                            Habitación(es):
                                                        </span>
                                                        <p>2</p>
                                                    </div>
                                                </li>
                                                <li className="tw-mb-2">
                                                    <div className="tw-flex tw-gap-2 tw-items-center">
                                                        <FaBath />
                                                        <span>
                                                            Baño(s):
                                                        </span>
                                                        <p>1</p>
                                                    </div>
                                                </li>
                                                <li className="tw-mb-2">
                                                    <div className="tw-flex tw-gap-2 tw-items-center">
                                                        <FaKitchenSet/>
                                                        <span>
                                                            Cocina:
                                                        </span>
                                                        <p>Tipo Peninsula</p>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul className="tw-flex tw-flex-col tw-gap-1 tw-text-start">
                                                <li className="tw-mb-2">
                                                    <div className="tw-flex tw-gap-2 tw-items-center">
                                                        <TbAirConditioning/>
                                                        <span>
                                                            Calefacción:
                                                        </span>
                                                        <p>Tipo eléctrica</p>
                                                    </div>
                                                </li>
                                                <li className="tw-mb-2">
                                                    <div className="tw-flex tw-gap-2 tw-items-center">
                                                        <FaParking />
                                                        <span>
                                                            Estacionamiento:
                                                        </span>
                                                        <p>Si</p>
                                                    </div>
                                                </li>
                                                <li className="tw-mb-2">
                                                    <div className="tw-flex tw-gap-2 tw-items-center">
                                                        <BiSolidCarGarage/>
                                                        <span>
                                                            Garage(s):
                                                        </span>
                                                        <p>No</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <span className='tw-flex tw-items-center md:tw-mx-12 tw-my-2 tw-gap-1 tw-text-secondary-light hover:tw-text-secondary tw-duration-150 tw-cursor-pointer'>Ver más características <IoIosArrowDown className='tw-mt-1'/></span>
                                    </div>
                                    <div>
                                        <h3 className="tw-text-center tw-text-lg">Observaciones</h3>
                                        <div className="tw-flex tw-flex-col md:tw-flex-row md:tw-gap-8 md:tw-mt-3 md:tw-mx-16">
                                            Observaciones realizadas...
                                        </div>
                                    </div>
                    </div>
                </div>

             
        </>
    )
}
export default DetailsProperty;