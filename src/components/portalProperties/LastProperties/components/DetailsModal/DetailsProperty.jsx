import { TbAirConditioning, TbHomeShield } from "react-icons/tb";
import { BiSolidCarGarage } from "react-icons/bi";
import { FaRulerCombined, FaPencilRuler, FaParking, FaSwimmingPool  } from "react-icons/fa";
import { FaBed, FaBath, FaKitchenSet, FaMapLocationDot } from "react-icons/fa6";
import { PiSortDescendingBold } from "react-icons/pi";
import { GiBarbecue } from "react-icons/gi";
import { FiSunset } from "react-icons/fi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdOutlineElevator } from 'react-icons/md'
import { CgGym } from "react-icons/cg";
import { PropertiesContext } from "../../../../../context/properties/PropertiesContext";
import { useState, useContext } from 'react';

import { 
    parseToCLPCurrency, 
    parseToDecimal, 
    ufToClp, 
    clpToUf2 } from "../../../../../utils/truncateExchange";

import NotFoundProp from "../../../../../assets/img/portal-prop/arquitectura.png"

const DetailsProperty = ({property}) =>{
    const [moreView,  setMoreView] = useState(false);
    const { contextData } = useContext(PropertiesContext);
    const {
        valueUf,
    } = contextData;

    const toggleViewMore  = async () => {
        setMoreView(!moreView)
    }


        //limitare los caracteres y poniendo ... en su lugar si es demasiado largo
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    };

    const formatPrice = (currencyId, propertyPrice) => {
        let ufValue = propertyPrice;
        let clpValue = propertyPrice;

        if(valueUf && valueUf.Valor){
            // const valueIntUf = valueUf.Valor.replace(/\./g, '').replace(',', '.');
            const valueIntUf = parseFloat(valueUf.Valor.replace(/\./g, '').replace(',', '.'))

            if(currencyId === 'UF'){
                clpValue = ufToClp(propertyPrice, valueIntUf);
            }
            if(currencyId === 'CLP'){
                ufValue = clpToUf2(propertyPrice, valueIntUf)
            }
        }
        else{
            clpValue = 0;
            ufValue = 0;
        }
        return (
            <div>
                <p className="tw-grid tw-text-lg">
                    <b >{parseToDecimal(ufValue)} UF</b>{parseToCLPCurrency(clpValue)} CLP
                </p>
            </div>

        )

    };

    return(
        <>
            <div className="tw-w-full tw-justify-center">
                    <h3 className="tw-text-xl 2xl:tw-text-2xl tw-text-center tw-font-semibold">
                        Detalles de propiedad
                    </h3>
                    <div className=" tw-p-2 sm:tw-px-3">
                                    <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-center tw-mt-2 tw-my-4 tw-mb-12 2xl:tw-mb-4 tw-mx-14 sm:tw-mx-2 tw-w-full sm:tw-h-[110px] 2xl:tw-h-[100px] sm:tw-gap-6"> 
                                        {property.images.length > 0 ? (
                                                    property.images.slice(0,3).map((img) => (
                                                        <div key={img.id}>
                                                            <div className="tw-h-32 tw-w-32 sm:tw-h-20 sm:tw-w-20 md:tw-h-32 md:tw-w-32 2xl:tw-h-20 2xl:tw-w-20 tw-text-center tw-object-contain">
                                                                <img 
                                                                src={img?.path || NotFoundProp} 
                                                                alt={`img-${img.id}`} 
                                                                loading='lazy' 
                                                                className="tw-object-cover tw-cursor-pointer tw-rounded-xl tw-h-full tw-w-full tw-my-3 tw-mx-10 sm:tw-mx-0 hover:tw-scale-105 hover:sm:tw-shadow-xl tw-duration-150" />
                                                            </div>
                                                        </div>
                                                
                                                    ))
                                                ): (
                                                    <div>
                                                        <div className="tw-h-32 tw-w-32 sm:tw-h-20 sm:tw-w-20 md:tw-h-32 md:tw-w-32 2xl:tw-h-20 2xl:tw-w-20 tw-text-center tw-object-contain">
                                                            <img 
                                                            src={NotFoundProp} 
                                                            alt="img-propiedad"
                                                            loading='lazy' 
                                                            className="tw-object-cover tw-cursor-pointer tw-rounded-xl tw-h-full tw-w-full tw-my-3 tw-mx-10 sm:tw-mx-0 hover:tw-scale-105 hover:sm:tw-shadow-xl tw-duration-150"/>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                    </div>
                                    {
                                        property.externalLink !== null && (
                                        <div className="tw-mx-2 tw-flex tw-justify-center tw-gap-2 tw-text-sm tw-text-gray-500 tw-font-light tw-cursor-pointer">
                                            <a href={property.externalLink} target="_blank" rel="noreferrer">
                                                Url en portal publicada: {property?.externalLink || 'no tiene'}
                                            </a>
                                        </div> 
                                        )
                                    }
                
                                    <h6 className="tw-font-medium tw-text-xl sm:tw-text-lg tw-text-center">
                                        {property?.propertyTitle || 'No cuenta con Titulo'}
                                    </h6>
                                    <p className="tw-text-base tw-text-center tw-my-3 2xl:tw-mb-2 ">
                                        {truncate(property?.propertyDescription, 210 || 'No cuenta con una descripción')}
                                    </p>
                                    <div className="text-start tw-flex tw-flex-col xl:tw-flex-row sm:tw-text-center sm:tw-flex sm:tw-justify-between tw-mt-2 tw-mb-4 2xl:tw-mb-2 tw-gap-2 sm:tw-mx-28">
                                        <p className="tw-grid"><b>Tipo de operación </b>{property?.typeOfOperationId}</p>
                                        <p className="tw-grid"><b>Tipo de inmueble </b>{property?.typeOfPropertyId}</p>
                                        {formatPrice(property?.currencyId, property?.propertyPrice)}
                                    </div>  
                                    <div> 
                                        <h3 className="tw-text-center tw-text-lg">Características</h3>
                                        <div className="tw-flex tw-flex-col md:tw-flex-row tw-gap-1 2xl:tw-gap-8 tw-mt-4 md:tw-mt-3 tw-mx-2 sm:tw-mx-52 2xl:tw-mx-12">
                                            <ul className="tw-flex tw-flex-col tw-gap-1 tw-text-start">
                                                <li className="tw-mb-2">
                                                    <div className="tw-flex tw-gap-2 tw-items-center">
                                                        <FaRulerCombined />
                                                        <span>
                                                            Terreno:
                                                        </span>
                                                        <p>{property?.characteristics.surface ? property?.characteristics.surface : '0'} mts</p>
                                                    </div>
                                                </li>
                                                <li className="tw-mb-2">
                                                    <div className="tw-flex tw-gap-2 tw-items-center">
                                                        <FaPencilRuler />
                                                        <span>
                                                            Construido:
                                                        </span>
                                                        <p>{property?.characteristics.constructedSurface ? property?.characteristics.constructedSurface : '0'} mts</p>
                                                    </div>
                                                </li>
                                                <li className="tw-mb-2">
                                                    <div className="tw-flex tw-gap-2 tw-items-center">
                                                        <PiSortDescendingBold/>
                                                        <span>
                                                            Piso(s):
                                                        </span>
                                                        <p>{property?.characteristics.floors ? property?.characteristics.floors : '1'}</p>
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
                                                        <p>{property?.characteristics.bedroom ? property?.characteristics.bedroom : '0'}</p>
                                                    </div>
                                                </li>
                                                <li className="tw-mb-2">
                                                    <div className="tw-flex tw-gap-2 tw-items-center">
                                                        <FaBath />
                                                        <span>
                                                            Baño(s):
                                                        </span>
                                                        <p>{property?.characteristics.bathrooms ? property?.characteristics.bathrooms : '0'}</p>
                                                    </div>
                                                </li>
                                                <li className="tw-mb-2">
                                                    <div className="tw-flex tw-gap-2 tw-items-center">
                                                        <FaKitchenSet/>
                                                        <span>
                                                            Cocina:
                                                        </span>
                                                        <p>{property?.characteristics.typeOfKitchen ? property?.characteristics.typeOfKitchen : 'No'}</p>
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
                                                        <p>{property?.characteristics.typeOfHeating ? property?.characteristics.typeOfHeating  : '0'}</p>
                                                    </div>
                                                </li>
                                                <li className="tw-mb-2">
                                                    <div className="tw-flex tw-gap-2 tw-items-center">
                                                        <FaParking />
                                                        <span>
                                                            Estacionamiento:
                                                        </span>
                                                        <p>{property?.characteristics.hasParking ? property?.characteristics.hasParking  : 'No'}</p>
                                                    </div>
                                                </li>
                                                <li className="tw-mb-2">
                                                    <div className="tw-flex tw-gap-2 tw-items-center">
                                                        <BiSolidCarGarage/>
                                                        <span>
                                                            Garage(s):
                                                        </span>
                                                        <p>{property?.characteristics?.hasGarage ? property?.characteristics?.hasGarage : 'No'}</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="sm:tw-mx-52 2xl:tw-mx-12 tw-my-2 tw-gap-1 ">
                                            <span  
                                            onClick={toggleViewMore}
                                            className='tw-flex tw-items-center tw-mb-3 tw-text-secondary-light hover:tw-text-secondary tw-duration-150 tw-cursor-pointer'>
                                                {moreView ? 'Ocultar características' : 'Ver más características'}
                                                {moreView ? <IoIosArrowUp className='tw-mt-1'/> : <IoIosArrowDown className='tw-mt-1'/>}
                                                {/* Ver más características <IoIosArrowDown className='tw-mt-1'/> */}
                                            </span>
                                            {!moreView ? '' : moreView && (
                                                <div className="tw-flex tw-flex-col md:tw-flex-row md:tw-gap-8 md:tw-mt-3">
                                                        <ul className="tw-flex tw-flex-col tw-gap-1 tw-text-start tw-text-gray-700">
                                                                    <li className="tw-mb-2">
                                                                        <div className="tw-flex tw-gap-2 tw-items-center">
                                                                            <MdOutlineElevator  />
                                                                            <span>
                                                                                Elevador:
                                                                            </span>
                                                                            <p>{property?.characteristics.hasElevator ? property?.characteristics.hasElevator : 'No'} </p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="tw-mb-2">
                                                                        <div className="tw-flex tw-gap-2 tw-items-center">
                                                                            <CgGym />
                                                                            <span>
                                                                                Gimnasio:
                                                                            </span>
                                                                            <p>{property?.characteristics.hasGym ? property?.characteristics.hasGym : 'No'}</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="tw-mb-2">
                                                                        <div className="tw-flex tw-gap-2 tw-items-center">
                                                                            <FaSwimmingPool />
                                                                            <span>
                                                                                Piscina:
                                                                            </span>
                                                                            <p>{property?.characteristics.hasSwimmingPool ? property?.characteristics.hasSwimmingPool : 'No'}</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="tw-mb-2">
                                                                          <div className="tw-flex tw-gap-2 tw-items-center">
                                                                              <FiSunset />
                                                                              <span>
                                                                                  Terraza:
                                                                              </span>
                                                                              <p>{property?.characteristics.terraces ? property?.characteristics.terraces : 'No'} </p>
                                                                          </div>
                                                                      </li>
                                                        </ul>
                                                        <ul className="tw-flex tw-flex-col tw-gap-1 tw-text-start tw-text-gray-700">
                                                                    <li className="tw-mb-2">
                                                                          <div className="tw-flex tw-gap-2 tw-items-center">
                                                                              <GiBarbecue />
                                                                              <span>
                                                                                  Quincho:
                                                                              </span>
                                                                              <p>{property?.characteristics.hasBarbecueArea ? property?.characteristics.hasBarbecueArea : 'No'}</p>
                                                                          </div>
                                                                    </li>
                                                                    <li className="tw-mb-2">
                                                                          <div className="tw-flex tw-gap-2 tw-items-center">
                                                                              <FaMapLocationDot />
                                                                              <span>
                                                                                  Condominio:
                                                                              </span>
                                                                              <p>{property?.characteristics.locatedInCondominium ? property?.characteristics.locatedInCondominium : 'No'}</p>
                                                                          </div>
                                                                      </li>
                                                                      <li className="tw-mb-2">
                                                                          <div className="tw-flex tw-gap-2 tw-items-center">
                                                                              <TbHomeShield   />
                                                                              <span>
                                                                                  Tipo seguridad:
                                                                              </span>
                                                                              <p>{property?.characteristics.typeOfSecurity ? property?.characteristics.typeOfSecurity : 'No'}</p>
                                                                          </div>
                                                                      </li>
                                                        </ul>
                                                </div>
                                                       
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="tw-mb-4">
                                        <h3 className="tw-text-center tw-text-xl sm:tw-text-lg tw-my-3 ">Observaciones</h3>
                                        <div className="tw-flex tw-flex-col md:tw-flex-row md:tw-gap-8 md:tw-mt-3 tw-mx-2 sm:tw-mx-40 2xl:tw-mx-16">
                                            {property?.observations ? property?.observations : 'No cuenta con observaciones'}
                                        </div>
                                    </div>
                    </div>
                </div>

             
        </>
    )
}
export default DetailsProperty;