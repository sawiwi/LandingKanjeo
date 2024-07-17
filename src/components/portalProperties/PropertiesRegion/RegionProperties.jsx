import imgSantiago from '../../../assets/img/region/santiago.webp'
import imgValparaiso from '../../../assets/img/region/valparaiso.webp'
import imgLaSerena from '../../../assets/img/region/laSerena.webp'
import imgIquique from '../../../assets/img/region/iquique.webp'

import imgCasaUno from '../../../assets/img/Hero/casa1.webp'


import Modal from '../../modal/Modal'
import { useState, useContext } from 'react'
import ModalLastProperties from '../LastProperties/components/ModalLastProperties'
import { PropertiesContext } from "../../../context/properties/PropertiesContext";
import PropertiesServices from '../../../services/portal-properties/PropertiesServices'


const FilterRegionsProperties = () =>{
    const [contactOpen, setContactOpen] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const { contextData } = useContext(PropertiesContext);
    const {
        properties,
        setProperties,
        allProperties,
        setAllProperties,
        page,
        setPage,
        valueUf,
    } = contextData;


    const onOpenContact = async (id) =>{
        const property = await PropertiesServices.getProperty(id);
        setSelectedProperty(property)
        setContactOpen(true)
    }

    const onCloseContact = () =>{
        setContactOpen(false)
    }

    //limitare los caracteres y poniendo ... en su lugar si es demasiado largo
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    };

    return(
        <>
            <div className="tw-flex tw-justify-center tw-my-10 md:tw-mt-14 tw-mx-2 2xl:tw-mx-32">
                        <h2 className="tw-text-gray-700 tw-text-2xl tw-text-center md:tw-text-start md:tw-text-2xl tw-font-medium">Regiones donde más se hacen canjes</h2>
                    </div>
                    <div className="tw-grid tw-grid-cols-2 xl:tw-flex xl:tw-flex-row xl:tw-justify-center tw-mt-8 tw-my-6 tw-mb-8 tw-mx-8 md:tw-mx-32 tw-h-full md:tw-h-40 tw-gap-6"> 
                        <div>
                            <div className="tw-h-28 tw-w-28 md:tw-h-32 md:tw-w-32 2xl:tw-h-36 2xl:tw-w-36 tw-my-5 tw-text-center">
                            <small className="tw-font-semibold tw-text-lg tw-mb-5 tw-text-gray-600">Santiago</small>
                                <img src={imgSantiago} className="tw-object-cover tw-cursor-pointer tw-rounded-full tw-h-full tw-w-full tw-my-3 hover:tw-scale-105 hover:tw-shadow-xl tw-duration-150" alt=""/>
                            </div>
                        </div>
                        <div>
                            <div className="tw-h-28 tw-w-28 md:tw-h-32 md:tw-w-32 2xl:tw-h-36 2xl:tw-w-36 tw-my-5 tw-text-center">
                                <small className="tw-font-semibold tw-text-lg tw-mb-5 tw-text-gray-600">Valparaiso</small>
                                <img src={imgValparaiso} className="tw-object-cover tw-cursor-pointer tw-rounded-full tw-h-full tw-w-full tw-my-3  hover:tw-scale-105 hover:tw-shadow-xl tw-duration-150" alt=""/>
                            </div>
                        </div>
                        <div>
                            <div className="tw-h-28 tw-w-28 md:tw-h-32 md:tw-w-32 2xl:tw-h-36 2xl:tw-w-36 tw-my-5 tw-text-center">
                                <small className="tw-font-semibold tw-text-lg tw-mb-5 tw-text-gray-600">La Serena</small>
                                <img src={imgLaSerena} className="tw-object-cover tw-cursor-pointer tw-rounded-full tw-h-full tw-w-full tw-my-3 hover:tw-scale-105 hover:tw-shadow-xl tw-duration-150" alt=""/>
                            </div>
                        </div>
                        <div>
                            <div className="tw-h-28 tw-w-28 md:tw-h-32 md:tw-w-32 2xl:tw-h-36 2xl:tw-w-36 tw-my-5 tw-text-center">  
                                <small className="tw-font-semibold tw-text-lg tw-mb-5 tw-text-gray-600">Iquique</small>
                                <img src={imgIquique} className="tw-object-cover tw-cursor-pointer tw-rounded-full tw-h-full tw-w-full tw-my-3 hover:tw-scale-105 hover:tw-shadow-xl tw-duration-150" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="tw-flex sm:tw-justify-start tw-mt-16  tw-items-center tw-mx-3 2xl:tw-mx-32">
                        <div className="tw-flex tw-gap-2 tw-my-2">
                            <p className="tw-text-gray-500">Propiedades encontradas:</p><span className="tw-font-light tw-cursor-pointer">{properties.length > 0 ? properties?.length : '0' }</span>
                        </div>
                    </div>
                    <div className="tw-grid tw-grid-row tw-grid-cols-1 lg:tw-grid-cols-2 2xl:tw-grid-cols-3 tw-gap-6 2xl:tw-gap-2 tw-mt-2 tw-my-3 tw-mx-3 2xl:tw-mx-32">
                        {
                            properties.slice(0,3).map((item) => {
                                return(
                                    <article 
                                    key={item.id}
                                    onClick={() => onOpenContact(item.id)}
                                    className="tw-cursor-pointer tw-shadow-lg tw-flex tw-flex-col tw-border-2 tw-h-full md:tw-h-[360px] tw-w-full tw-p-2 tw-group tw-overflow-hidden">
                                        <div className="tw-mb-2 tw-relative">
                                            <img src={item.images[0] ? item.images[0] : 'https://res.cloudinary.com/dbrhjc4o5/image/upload/v1681933697/unne-media/errors/not-found-img_pp5xj7.jpg' } alt="img-casa" className="tw-h-64 tw-w-full tw-object-cover tw-rounded-md group-hover:-tw-translate-y-2 tw-duration-200 tw-shadow-md" />
                                        </div>
                                        <div className="">
                                        <h2 className="tw-font-semibold tw-text-center tw-text-xl">{truncate(item?.propertyTitle, 30)}</h2>
                                        <div className="md:tw-mx-4 tw-mt-2 tw-flex tw-flex-row tw-justify-between tw-items-center">
                                            <div className="tw-mx-4 tw-flex">
                                                <p className="tw-font-semibold">{item.address.state.name || 'No se encontro región'}, {item.address.city.name || 'No se encontro comuna'}</p>
                                            </div>
                                            <div className="tw-flex tw-gap-2 tw-items-center">
                                                <p>DESDE <b>3.200 UF</b></p>
                                            </div>
                                        </div>
                                        </div>
                                    </article>
                            
                                )
                            })
                        }
                    </div>
                 

                    <Modal open={contactOpen} onClose={onCloseContact} className="tw-w-[90%] tw-h-full">
                        {selectedProperty && (    
                            <ModalLastProperties
                                key={selectedProperty.id}
                                data={selectedProperty}     
                            />
                        )}
                    </Modal>

        </>
    )
}
export default FilterRegionsProperties;