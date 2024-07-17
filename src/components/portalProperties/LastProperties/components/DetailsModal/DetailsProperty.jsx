import { TbAirConditioning} from "react-icons/tb";
import { BiSolidCarGarage } from "react-icons/bi";
import { FaRulerCombined, FaPencilRuler, FaParking  } from "react-icons/fa";
import { FaBed, FaBath, FaKitchenSet } from "react-icons/fa6";
import { PiSortDescendingBold } from "react-icons/pi";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from 'react';

const DetailsProperty = ({property}) =>{
    const [moreView,  setMoreVie] = useState(false);


    const toggleViewMore  = async () => {
        setMoreVie(!moreView)
    }

    return(
        <>
            <div className="tw-w-full tw-justify-center">
                    <h3 className="tw-text-xl 2:tw-text-2xl tw-text-center tw-font-semibold">
                        Detalles de propiedad
                    </h3>
                    <div className="tw-p-2 tw-px-3">
                                    <div className="tw-flex md:tw-flex-row tw-justify-center tw-mt-2 tw-my-2 tw-mx-32 tw-h-[100px] tw-gap-6"> 
                                            <div>
                                                <div className="tw-h-20 tw-w-20 md:tw-h-32 md:tw-w-32 2xl:tw-h-20 2xl:tw-w-20 tw-text-center tw-object-contain">
                                                    {/* <img src={'https://res.cloudinary.com/dbrhjc4o5/image/upload/v1681933697/unne-media/errors/not-found-img_pp5xj7.jpg'} loading='lazy' className="tw-object-cover tw-cursor-pointer tw-rounded-xl tw-h-full tw-w-full tw-my-3 hover:tw-scale-105 hover:tw-shadow-xl tw-duration-150" alt=""/> */}
                                                    <img src={property?.images[0] ? property?.images[0] : 'https://res.cloudinary.com/dbrhjc4o5/image/upload/v1681933697/unne-media/errors/not-found-img_pp5xj7.jpg'} loading='lazy' className="tw-object-cover tw-cursor-pointer tw-rounded-xl tw-h-full tw-w-full tw-my-3 hover:tw-scale-105 hover:tw-shadow-xl tw-duration-150" alt=""/>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="tw-h-20 tw-w-20 md:tw-h-32 md:tw-w-32 2xl:tw-h-20 2xl:tw-w-20 tw-text-center tw-object-contain">
                                                    {/* <img src={'https://res.cloudinary.com/dbrhjc4o5/image/upload/v1681933697/unne-media/errors/not-found-img_pp5xj7.jpg'} loading='lazy' className="tw-object-cover tw-cursor-pointer tw-rounded-xl tw-h-full tw-w-full tw-my-3  hover:tw-scale-105 hover:tw-shadow-xl tw-duration-150" alt=""/> */}
                                                    <img src={property?.images[1] ? property?.images[1] : 'https://res.cloudinary.com/dbrhjc4o5/image/upload/v1681933697/unne-media/errors/not-found-img_pp5xj7.jpg'} loading='lazy' className="tw-object-cover tw-cursor-pointer tw-rounded-xl tw-h-full tw-w-full tw-my-3  hover:tw-scale-105 hover:tw-shadow-xl tw-duration-150" alt=""/>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="tw-h-20 tw-w-20 md:tw-h-32 md:tw-w-32 2xl:tw-h-20 2xl:tw-w-20 tw-text-center tw-object-contain">
                                                    {/* <img src={'https://res.cloudinary.com/dbrhjc4o5/image/upload/v1681933697/unne-media/errors/not-found-img_pp5xj7.jpg'} loading='lazy' className="tw-object-cover tw-cursor-pointer tw-rounded-xl tw-h-full tw-w-full tw-my-3 hover:tw-scale-105 hover:tw-shadow-xl tw-duration-150" alt=""/> */}
                                                    <img src={property?.images[2] ? property?.images[2] : 'https://res.cloudinary.com/dbrhjc4o5/image/upload/v1681933697/unne-media/errors/not-found-img_pp5xj7.jpg'} loading='lazy' className="tw-object-cover tw-cursor-pointer tw-rounded-xl tw-h-full tw-w-full tw-my-3 hover:tw-scale-105 hover:tw-shadow-xl tw-duration-150" alt=""/>
                                                </div>
                                            </div> 
                                    </div>
                                    <h6 className="tw-font-medium tw-text-lg tw-text-center">
                                        {property?.propertyTitle}
                                    </h6>
                                    <p className="tw-text-base tw-text-center">
                                        {property?.propertyDescription}
                                    </p>
                                    <div className="tw-text-center tw-flex tw-justify-between tw-mt-2 tw-mb-2 tw-gap-2 tw-mx-28">
                                        <p className="tw-grid"><span>Tipo de operación </span>{property?.typeOfOperationId}</p>
                                        <p className="tw-grid"><span>Tipo de inmueble </span>{property?.typeOfPropertyId}</p>
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
                                                        <p>{property?.characteristics.typeOfKitchen ? property?.characteristics.typeOfKitchen : '0'}</p>
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
                                                        <p>{property?.characteristics.typeOfHeating  ? property?.characteristics.typeOfHeating  : '0'}</p>
                                                    </div>
                                                </li>
                                                <li className="tw-mb-2">
                                                    <div className="tw-flex tw-gap-2 tw-items-center">
                                                        <FaParking />
                                                        <span>
                                                            Estacionamiento:
                                                        </span>
                                                        <p>{property?.characteristics.hasParking  ? property?.characteristics.hasParking  : 'No'}</p>
                                                    </div>
                                                </li>
                                                <li className="tw-mb-2">
                                                    <div className="tw-flex tw-gap-2 tw-items-center">
                                                        <BiSolidCarGarage/>
                                                        <span>
                                                            Garage(s):
                                                        </span>
                                                        <p>{property?.characteristics?.hasGarage  ? property?.characteristics?.hasGarage  : 'No'}</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="md:tw-mx-12 tw-my-2 tw-gap-1">
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
                                                                            <FaRulerCombined />
                                                                            <span>
                                                                                Elevador:
                                                                            </span>
                                                                            <p>{property?.characteristics.hasElevator ? property?.characteristics.hasElevator : 'No'} </p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="tw-mb-2">
                                                                        <div className="tw-flex tw-gap-2 tw-items-center">
                                                                            <FaPencilRuler />
                                                                            <span>
                                                                                Gimnasio:
                                                                            </span>
                                                                            <p>{property?.characteristics.hasGym ? property?.characteristics.hasGym : 'No'}</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="tw-mb-2">
                                                                        <div className="tw-flex tw-gap-2 tw-items-center">
                                                                            <PiSortDescendingBold/>
                                                                            <span>
                                                                                Piscina:
                                                                            </span>
                                                                            <p>{property?.characteristics.hasSwimmingPool ? property?.characteristics.hasSwimmingPool : 'No'}</p>
                                                                        </div>
                                                                    </li>
                                                                    <li className="tw-mb-2">
                                                                          <div className="tw-flex tw-gap-2 tw-items-center">
                                                                              <FaRulerCombined />
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
                                                                              <FaPencilRuler />
                                                                              <span>
                                                                                  Quincho:
                                                                              </span>
                                                                              <p>{property?.characteristics.hasBarbecueArea ? property?.characteristics.hasBarbecueArea : 'No'}</p>
                                                                          </div>
                                                                    </li>
                                                                    <li className="tw-mb-2">
                                                                          <div className="tw-flex tw-gap-2 tw-items-center">
                                                                              <PiSortDescendingBold/>
                                                                              <span>
                                                                                  Condominio:
                                                                              </span>
                                                                              <p>{property?.characteristics.locatedInCondominium ? property?.characteristics.locatedInCondominium : 'No'}</p>
                                                                          </div>
                                                                      </li>
                                                                      <li className="tw-mb-2">
                                                                          <div className="tw-flex tw-gap-2 tw-items-center">
                                                                              <FaPencilRuler />
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
                                    <div>
                                        <h3 className="tw-text-center tw-text-lg">Observaciones</h3>
                                        <div className="tw-flex tw-flex-col md:tw-flex-row md:tw-gap-8 md:tw-mt-3 md:tw-mx-16">
                                            {property?.observations ? property?.observations : 'No cuenta con observaciones'}
                                        </div>
                                    </div>
                    </div>
                </div>

             
        </>
    )
}
export default DetailsProperty;