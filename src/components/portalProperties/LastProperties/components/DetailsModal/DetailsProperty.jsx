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
    console.log('propiedad', property)
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
                <p className="grid text-lg">
                    <b >{parseToDecimal(ufValue)} UF</b>{parseToCLPCurrency(clpValue)} CLP
                </p>
            </div>

        )

    };

    return(
        <>
            <div className="w-full justify-center">
                    <h3 className="text-xl 2xl:text-2xl text-center font-semibold">
                        Detalles de propiedad
                    </h3>
                    <div className=" p-2 sm:px-3">
                                    <div className="flex flex-col md:flex-row justify-center mt-2 my-4 mb-12 2xl:mb-4 mx-14 sm:mx-2 w-full sm:h-[110px] 2xl:h-[100px] sm:gap-6"> 
                                        {property.images.length > 0 ? (
                                                    property.images.slice(0,3).map((img) => (
                                                        <div key={img.id}>
                                                            <div className="h-32 w-32 sm:h-20 sm:w-20 md:h-32 md:w-32 2xl:h-20 2xl:w-20 text-center object-contain">
                                                                <img 
                                                                src={img?.path || NotFoundProp} 
                                                                alt={`img-${img.id}`} 
                                                                loading='lazy' 
                                                                className="object-cover cursor-pointer rounded-xl h-full w-full my-3 mx-10 sm:mx-0 hover:scale-105 hover:sm:shadow-xl duration-150" />
                                                            </div>
                                                        </div>
                                                
                                                    ))
                                                ): (
                                                    <div>
                                                        <div className="h-32 w-32 sm:h-20 sm:w-20 md:h-32 md:w-32 2xl:h-20 2xl:w-20 text-center object-contain">
                                                            <img 
                                                            src={NotFoundProp} 
                                                            alt="img-propiedad"
                                                            loading='lazy' 
                                                            className="object-cover cursor-pointer rounded-xl h-full w-full my-3 mx-10 sm:mx-0 hover:scale-105 hover:sm:shadow-xl duration-150"/>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                    </div>
                                    {
                                        property.externalLink !== null && (
                                        <div className="mx-2 flex justify-center gap-2 text-sm text-gray-500 font-light cursor-pointer">
                                            <a href={property.externalLink} target="_blank" rel="noreferrer">
                                                {truncate(property?.externalLink, 36 || 'no tiene')}
                                            </a>
                                        </div> 
                                        )
                                    }
                
                                    <h6 className="font-medium text-xl sm:text-lg text-center">
                                        {property?.propertyTitle || 'No cuenta con Titulo'}
                                    </h6>
                                    <p className="text-base text-center my-3 2xl:mb-2 ">
                                        {truncate(property?.propertyDescription, 210 || 'No cuenta con una descripción')}
                                    </p>
                                    <div className="text-start flex flex-col xl:flex-row sm:text-center sm:flex sm:justify-between mt-2 mb-4 2xl:mb-2 gap-2 sm:mx-28">
                                        <p className="grid"><b>Tipo de operación </b>{property?.typeOfOperationId}</p>
                                        <p className="grid"><b>Tipo de inmueble </b>{property?.typeOfPropertyId}</p>
                                        {formatPrice(property?.currencyId, property?.propertyPrice)}
                                    </div>  
                                    <div> 
                                        <h3 className="text-center text-lg">Características</h3>
                                        <div className="flex flex-col md:flex-row gap-1 2xl:gap-8 mt-4 md:mt-3 mx-2 sm:mx-52 2xl:mx-12">
                                            <ul className="flex flex-col gap-1 text-start">
                                                <li className="mb-2">
                                                    <div className="flex gap-2 items-center">
                                                        <FaRulerCombined />
                                                        <span>
                                                            Terreno:
                                                        </span>
                                                        <p>{property?.characteristics.surface ? property?.characteristics.surface : '0'} mts</p>
                                                    </div>
                                                </li>
                                                <li className="mb-2">
                                                    <div className="flex gap-2 items-center">
                                                        <FaPencilRuler />
                                                        <span>
                                                            Construido:
                                                        </span>
                                                        <p>{property?.characteristics.constructedSurface ? property?.characteristics.constructedSurface : '0'} mts</p>
                                                    </div>
                                                </li>
                                                <li className="mb-2">
                                                    <div className="flex gap-2 items-center">
                                                        <PiSortDescendingBold/>
                                                        <span>
                                                            Piso(s):
                                                        </span>
                                                        <p>{property?.characteristics.floors ? property?.characteristics.floors : '1'}</p>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul className="flex flex-col gap-1 text-start">
                                                <li className="mb-2">
                                                    <div className="flex items-center gap-2">
                                                        <FaBed/>
                                                        <span>
                                                            Habitación(es):
                                                        </span>
                                                        <p>{property?.characteristics.bedroom ? property?.characteristics.bedroom : '0'}</p>
                                                    </div>
                                                </li>
                                                <li className="mb-2">
                                                    <div className="flex gap-2 items-center">
                                                        <FaBath />
                                                        <span>
                                                            Baño(s):
                                                        </span>
                                                        <p>{property?.characteristics.bathrooms ? property?.characteristics.bathrooms : '0'}</p>
                                                    </div>
                                                </li>
                                                <li className="mb-2">
                                                    <div className="flex gap-2 items-center">
                                                        <FaKitchenSet/>
                                                        <span>
                                                            Cocina:
                                                        </span>
                                                        <p>{property?.characteristics.typeOfKitchen ? property?.characteristics.typeOfKitchen : 'No'}</p>
                                                    </div>
                                                </li>
                                            </ul>
                                            <ul className="flex flex-col gap-1 text-start">
                                                <li className="mb-2">
                                                    <div className="flex gap-2 items-center">
                                                        <TbAirConditioning/>
                                                        <span>
                                                            Calefacción:
                                                        </span>
                                                        <p>{property?.characteristics.typeOfHeating ? property?.characteristics.typeOfHeating  : '0'}</p>
                                                    </div>
                                                </li>
                                                <li className="mb-2">
                                                    <div className="flex gap-2 items-center">
                                                        <FaParking />
                                                        <span>
                                                            Estacionamiento:
                                                        </span>
                                                        <p>{property?.characteristics.hasParking ? property?.characteristics.hasParking  : 'No'}</p>
                                                    </div>
                                                </li>
                                                <li className="mb-2">
                                                    <div className="flex gap-2 items-center">
                                                        <BiSolidCarGarage/>
                                                        <span>
                                                            Garage(s):
                                                        </span>
                                                        <p>{property?.characteristics?.hasGarage ? property?.characteristics?.hasGarage : 'No'}</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="sm:mx-52 2xl:mx-12 my-2 gap-1 ">
                                            <span  
                                            onClick={toggleViewMore}
                                            className='flex items-center mb-3 text-secondary-light hover:text-secondary duration-150 cursor-pointer'>
                                                {moreView ? 'Ocultar características' : 'Ver más características'}
                                                {moreView ? <IoIosArrowUp className='mt-1'/> : <IoIosArrowDown className='mt-1'/>}
                                                {/* Ver más características <IoIosArrowDown className='mt-1'/> */}
                                            </span>
                                            {!moreView ? '' : moreView && (
                                                <div className="flex flex-col md:flex-row md:gap-8 md:mt-3">
                                                        <ul className="flex flex-col gap-1 text-start text-gray-700">
                                                                    <li className="mb-2">
                                                                        <div className="flex gap-2 items-center">
                                                                            <MdOutlineElevator  />
                                                                            <span>
                                                                                Elevador:
                                                                            </span>
                                                                            <p>{property?.characteristics.hasElevator ? property?.characteristics.hasElevator : 'No'} </p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="mb-2">
                                                                        <div className="flex gap-2 items-center">
                                                                            <CgGym />
                                                                            <span>
                                                                                Gimnasio:
                                                                            </span>
                                                                            <p>{property?.characteristics.hasGym ? property?.characteristics.hasGym : 'No'}</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="mb-2">
                                                                        <div className="flex gap-2 items-center">
                                                                            <FaSwimmingPool />
                                                                            <span>
                                                                                Piscina:
                                                                            </span>
                                                                            <p>{property?.characteristics.hasSwimmingPool ? property?.characteristics.hasSwimmingPool : 'No'}</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="mb-2">
                                                                          <div className="flex gap-2 items-center">
                                                                              <FiSunset />
                                                                              <span>
                                                                                  Terraza:
                                                                              </span>
                                                                              <p>{property?.characteristics.terraces ? property?.characteristics.terraces : 'No'} </p>
                                                                          </div>
                                                                      </li>
                                                        </ul>
                                                        <ul className="flex flex-col gap-1 text-start text-gray-700">
                                                                    <li className="mb-2">
                                                                          <div className="flex gap-2 items-center">
                                                                              <GiBarbecue />
                                                                              <span>
                                                                                  Quincho:
                                                                              </span>
                                                                              <p>{property?.characteristics.hasBarbecueArea ? property?.characteristics.hasBarbecueArea : 'No'}</p>
                                                                          </div>
                                                                    </li>
                                                                    <li className="mb-2">
                                                                          <div className="flex gap-2 items-center">
                                                                              <FaMapLocationDot />
                                                                              <span>
                                                                                  Condominio:
                                                                              </span>
                                                                              <p>{property?.characteristics.locatedInCondominium ? property?.characteristics.locatedInCondominium : 'No'}</p>
                                                                          </div>
                                                                      </li>
                                                                      <li className="mb-2">
                                                                          <div className="flex gap-2 items-center">
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
                                    <div className="mb-4">
                                        <h3 className="text-center text-xl sm:text-lg my-3 ">Observaciones</h3>
                                        <div className="flex flex-col md:flex-row md:gap-8 md:mt-3 mx-2 sm:mx-40 2xl:mx-16">
                                            {property?.observations ? property?.observations : 'No cuenta con observaciones'}
                                        </div>
                                    </div>
                    </div>
                </div>

             
        </>
    )
}
export default DetailsProperty;