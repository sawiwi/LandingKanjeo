import imgSantiago from '../../../assets/img/region/santiago.webp'
import imgValparaiso from '../../../assets/img/region/valparaiso.webp'
import imgLaSerena from '../../../assets/img/region/laSerena.webp'
import imgIquique from '../../../assets/img/region/iquique.webp'


import {Reveal} from "react-awesome-reveal";
import { keyframes } from '@emotion/react';

import Modal from '../../modal/Modal'
import { useState, useContext } from 'react'
import ModalLastProperties from '../LastProperties/components/ModalLastProperties'
import { PropertiesContext } from "../../../context/properties/PropertiesContext";
import PropertiesServices from '../../../services/portal-properties/PropertiesServices'
import { parseToCLPCurrency, clpToUf, clpToUf2, ufToClp, parseToDecimal } from '../../../utils/truncateExchange'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'


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
    const [moreProp, setMoreProp] = useState(false);
    const [rangeProp, setRangeProp] = useState([0,3]);


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
                    <div className="tw-flex tw-gap-2 tw-items-center">
                        <p>DESDE {' '}
                            <b>{parseToDecimal(ufValue)} UF</b>
                        {/* {' '}/{' '}
                        <b>{parseToCLPCurrency(clpValue)}</b> */}
                        </p>
                    </div>
                </div>
    
            )
    
        };

    const toggleMoreProp = () => {
        if(moreProp){
            setRangeProp([0, 3]);
        }else{
            setRangeProp([0 ,properties.length])
        }
        setMoreProp(!moreProp)
    };

    const toggleMoreNext = (direction) => {
        const upRange = 3;
        let newRange;
        if (direction === 'up') {
            newRange = [
                Math.max(rangeProp[0] - upRange, 0),
                Math.max(rangeProp[1] - upRange, 3)
            ];
        } else {
            newRange = [
                Math.min(rangeProp[0] + upRange, properties.length - 1),
                Math.min(rangeProp[1] + upRange, properties.length)
            ];
        }
        setRangeProp(newRange);
    };

    const fadeInUp = keyframes`
    0% {
        opacity: 0;
        -webkit-transform: translateY(80px);
        transform: translateY(80px);
    }
    100% {
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }`;



    const renderButtons = () => (
        <div className="tw-flex tw-flex-row tw-justify-center tw-gap-3 tw-m-2 tw-my-10 2xl:tw-mx-32">
            <button onClick={toggleMoreProp} className="tw-p-2 tw-px-4 tw-rounded-full tw-border  hover:tw-bg-secondary-light hover:tw-text-white tw-duration-200">
                {moreProp ? 'Ver primeras 3' : 'Ver todas'}
            </button>
            <button 
                onClick={() => toggleMoreNext('up')}
                className={`tw-px-3 sm:tw-p-2 sm:tw-px-3 tw-rounded-full tw-border ${rangeProp[0] === 0 ? 'tw-opacity-25' : 'hover:tw-bg-secondary-light hover:tw-text-white tw-duration-200'}`}
                disabled={rangeProp[0] === 0}
            >
                <FaArrowUp />
            </button>
            <button 
                onClick={() => toggleMoreNext('down')}
                className={`tw-p-2 tw-px-3 tw-rounded-full tw-border ${rangeProp[1] >= properties.length ? 'tw-opacity-25' : 'hover:tw-bg-secondary-light hover:tw-text-white tw-duration-200'}`}
                disabled={rangeProp[1] >= properties.length}
            >
                <FaArrowDown />
            </button>
        </div>
    );

    const renderProperties = () => (
        <div className="tw-grid tw-grid-row tw-grid-cols-1 lg:tw-grid-cols-2 2xl:tw-grid-cols-3 tw-gap-6 2xl:tw-gap-2 tw-mt-2 tw-my-3 tw-mx-3 2xl:tw-mx-32">
            {properties.slice(rangeProp[0], rangeProp[1]).map((item) => (
                <Reveal
                keyframes={fadeInUp}
                delay={200}
                duration={600}
                triggerOnce={true}
                >
                    <article 
                        key={item.id}
                        onClick={() => onOpenContact(item.id)}
                        className="tw-cursor-pointer tw-shadow-lg tw-flex tw-flex-col tw-border-2 tw-h-full md:tw-h-[380px] tw-w-full tw-p-2 tw-group tw-overflow-hidden"
                    >
                        <div className="tw-mb-2 tw-relative">
                            <img src={item.images[0] ? item.images[0] : 'https://res.cloudinary.com/dbrhjc4o5/image/upload/v1681933697/unne-media/errors/not-found-img_pp5xj7.jpg'} loading='lazy' alt="img-casa" className="tw-h-64 tw-w-full tw-object-cover tw-rounded-md group-hover:-tw-translate-y-2 tw-duration-200 tw-shadow-md" />
                        </div>
                        <div>
                            <h2 className="tw-font-semibold tw-text-center tw-text-xl xl:tw-text-lg">{truncate(item?.propertyTitle, 30)}</h2>
                            <div className="md:tw-mx-4 tw-mt-2 tw-flex tw-flex-row tw-justify-between tw-items-center tw-mb-2 xl:tw-text-md">
                                <div className="tw-mx-4 tw-flex">
                                    <p className="tw-font-semibold">{item.address.state.name || 'No se encontró región'}, {item.address.city.name || 'No se encontró comuna'}</p>
                                </div>
                                <div className="tw-flex tw-gap-2 tw-items-center">
                                    {formatPrice(item?.currencyId, item?.propertyPrice)}
                                </div>
                            </div>
                        </div>
                    </article>
                </Reveal>

            ))}
        </div>
    );


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
                            <p className="tw-text-gray-500">
                                <span className="tw-font-light tw-cursor-pointer">{rangeProp[1] > properties.length ? properties.length : rangeProp[1]} / {properties.length > 0 ? properties.length : '0' } </span>
                                Propiedades en esta región
                            </p>
                        </div>
                    </div>
                    {renderProperties()}
                    {renderButtons()}

                    <Modal open={contactOpen} onClose={onCloseContact} className="tw-w-[90%] tw-h-full tw-z-50">
                        {selectedProperty && (    
                            <ModalLastProperties
                                key={selectedProperty.id}
                                data={selectedProperty}     
                            />
                        )}
                    </Modal>

                    {/* <div className="tw-grid tw-grid-row tw-grid-cols-1 lg:tw-grid-cols-2 2xl:tw-grid-cols-3 tw-gap-6 2xl:tw-gap-2 tw-mt-2 tw-my-3 tw-mx-3 2xl:tw-mx-32">
                        {
                            properties.slice(0,3).map((item) => {
                                return(
                                    <article 
                                    key={item.id}
                                    onClick={() => onOpenContact(item.id)}
                                    className="tw-cursor-pointer tw-shadow-lg tw-flex tw-flex-col tw-border-2 tw-h-full md:tw-h-[380px] tw-w-full tw-p-2 tw-group tw-overflow-hidden">
                                        <div className="tw-mb-2 tw-relative">
                                            <img src={item.images[0] ? item.images[0] : 'https://res.cloudinary.com/dbrhjc4o5/image/upload/v1681933697/unne-media/errors/not-found-img_pp5xj7.jpg' } alt="img-casa" className="tw-h-64 tw-w-full tw-object-cover tw-rounded-md group-hover:-tw-translate-y-2 tw-duration-200 tw-shadow-md" />
                                        </div>
                                        <div className="">
                                            <h2 className="tw-font-semibold tw-text-center tw-text-xl xl:tw-text-lg">{truncate(item?.propertyTitle, 30)}</h2>
                                            <div className="md:tw-mx-4 tw-mt-2 tw-flex tw-flex-row tw-justify-between tw-items-center tw-mb-2 xl:tw-text-md">
                                                <div className="tw-mx-4 tw-flex">
                                                    <p className="tw-font-semibold">{item.address.state.name || 'No se encontro región'}, {item.address.city.name || 'No se encontro comuna'}</p>
                                                </div>
                                                <div className="tw-flex tw-gap-2 tw-items-center">
                                                    
                                                    {formatPrice(item?.currencyId, item?.propertyPrice)}
                                                </div>
                                            </div>
                                        </div>
                                    </article>                         
                                )
                            })
                        }
                        {
                                !moreProp ? '' : moreProp && (
                                    properties.slice(0, 10).map((item) => {
                                        return(
                                            <Reveal
                                                keyframes={fadeInUp}
                                                delay={200}
                                                duration={600}
                                                triggerOnce={true}
                                                >
                                                <article 
                                                    key={item.id}
                                                    onClick={() => onOpenContact(item.id)}
                                                    className="tw-cursor-pointer tw-shadow-lg tw-flex tw-flex-col tw-border-2 tw-h-full md:tw-h-[380px] tw-w-full tw-p-2 tw-group tw-overflow-hidden">
                                                        <div className="tw-mb-2 tw-relative">
                                                            <img src={item.images[0] ? item.images[0] : 'https://res.cloudinary.com/dbrhjc4o5/image/upload/v1681933697/unne-media/errors/not-found-img_pp5xj7.jpg' } alt="img-casa" className="tw-h-64 tw-w-full tw-object-cover tw-rounded-md group-hover:-tw-translate-y-2 tw-duration-200 tw-shadow-md" />
                                                        </div>
                                                        <div className="">
                                                            <h2 className="tw-font-semibold tw-text-center tw-text-xl xl:tw-text-lg">{truncate(item?.propertyTitle, 30)}</h2>
                                                            <div className="md:tw-mx-4 tw-mt-2 tw-flex tw-flex-row tw-justify-between tw-items-center tw-mb-2 xl:tw-text-md">
                                                                <div className="tw-mx-4 tw-flex">
                                                                    <p className="tw-font-semibold">{item.address.state.name || 'No se encontro región'}, {item.address.city.name || 'No se encontro comuna'}</p>
                                                                </div>
                                                                <div className="tw-flex tw-gap-2 tw-items-center">
                                                                    {/* <p>DESDE <b>3.200 UF</b></p> 
                                                                    {formatPrice(item?.currencyId, item?.propertyPrice)}
                                                                </div>
                                                            </div>
                                                        </div>
                                                </article>      
                                            </Reveal>
                                        )
                                    })
                                )
                            }

                            {
                                !moreNext ? '' : moreNext && (
                                    properties.slice(3, 6).map((item) => {
                                        return(
                                            <Reveal
                                                keyframes={fadeInUp}
                                                delay={200}
                                                duration={600}
                                                triggerOnce={true}
                                                >
                                                <article 
                                                    key={item.id}
                                                    onClick={() => onOpenContact(item.id)}
                                                    className="tw-cursor-pointer tw-shadow-lg tw-flex tw-flex-col tw-border-2 tw-h-full md:tw-h-[380px] tw-w-full tw-p-2 tw-group tw-overflow-hidden">
                                                        <div className="tw-mb-2 tw-relative">
                                                            <img src={item.images[0] ? item.images[0] : 'https://res.cloudinary.com/dbrhjc4o5/image/upload/v1681933697/unne-media/errors/not-found-img_pp5xj7.jpg' } alt="img-casa" className="tw-h-64 tw-w-full tw-object-cover tw-rounded-md group-hover:-tw-translate-y-2 tw-duration-200 tw-shadow-md" />
                                                        </div>
                                                        <div className="">
                                                            <h2 className="tw-font-semibold tw-text-center tw-text-xl xl:tw-text-lg">{truncate(item?.propertyTitle, 30)}</h2>
                                                            <div className="md:tw-mx-4 tw-mt-2 tw-flex tw-flex-row tw-justify-between tw-items-center tw-mb-2 xl:tw-text-md">
                                                                <div className="tw-mx-4 tw-flex">
                                                                    <p className="tw-font-semibold">{item.address.state.name || 'No se encontro región'}, {item.address.city.name || 'No se encontro comuna'}</p>
                                                                </div>
                                                                <div className="tw-flex tw-gap-2 tw-items-center">
                                                                    {/* <p>DESDE <b>3.200 UF</b></p> 
                                                                    {formatPrice(item?.currencyId, item?.propertyPrice)}
                                                                </div>
                                                            </div>
                                                        </div>
                                                </article>      
                                            </Reveal>
                                        )
                                    })
                                )
                            }
                    </div> */}                   

        

        </>
    )
}
export default FilterRegionsProperties;