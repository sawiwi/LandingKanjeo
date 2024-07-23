import { IoGridOutline } from "react-icons/io5";
import { TbLayoutList} from "react-icons/tb";
import { FaArrowLeft , FaArrowRight, FaRulerCombined, FaPencilRuler, FaParking  } from "react-icons/fa";
import { FaBed, FaBath, FaKitchenSet } from "react-icons/fa6";
import { PiSortDescendingBold } from "react-icons/pi";

import {Reveal} from "react-awesome-reveal";
import { keyframes } from '@emotion/react';


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
import PropertiesServices from '../../../services/portal-properties/PropertiesServices'
import NotFoundProp from "../../../assets/img/portal-prop/arquitectura.png"


const LastProperties = () => {
    const [contactOpen, setContactOpen] = useState(false);
    const [moreProp, setMoreProp] = useState(false)
    const [view, setView] = useState('grid');
    const [selectedProperty, setSelectedProperty] = useState(null);
    const { contextData } = useContext(PropertiesContext);
    const {
        properties,
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

    const toggleMoreProp = async () => {
        setMoreProp(!moreProp)
    } 

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
                 <div className="tw-mx-4 tw-mb-2 tw-my-3 tw-flex tw-flex-row tw-justify-between tw-items-center">
                    <p className="xl:tw-text-xl">
                        <b>{parseToDecimal(ufValue)} UF</b>
                    </p>
                   
                    <p className="xl:tw-text-xl">
                        <b>{parseToCLPCurrency(clpValue)}.-</b>
                    </p>
                </div>
            </div>

        )

    };


    return(
        <>
            {/* FILTROS AVANZADOS */}
              <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-items-center md:tw-mx-36 2xl:tw-mx-96 tw-gap-2 tw-mt-10 tw-w-full md:tw-w-96">
                        <div className="tw-grid tw-w-full tw-mb-1 tw-mx-4 md:tw-mx-0">
                            <label className="tw-font-semibold tw-mb-1" for="typeProperty">Tipo de propiedad</label>
                            <input
                            type="text"
                            id="typeProperty"
                            className="tw-rounded-md placeholder:tw-text-gray-400 tw-p-2 tw-border-2"
                            placeholder="Casa"

                            ></input>
                        </div>
                        <div className="tw-grid tw-w-full tw-mb-1 tw-mx-4 md:tw-mx-0">
                            <label className="tw-font-semibold tw-mb-1" for="typeOperation">Tipo de operación</label>
                            <input
                            type="text"
                            id="typeOperation"
                            className="tw-rounded-md placeholder:tw-text-gray-400 tw-p-2 tw-border-2"
                            placeholder="Venta"

                            ></input>
                        </div>
                        <div className="tw-grid tw-w-full tw-mb-1 tw-mx-4 md:tw-mx-0">
                            <label className="tw-font-semibold tw-mb-1" for="region">Región</label>
                            <input
                            type="text"
                            id="region"
                            className="tw-rounded-md placeholder:tw-text-gray-400 tw-p-2 tw-border-2"
                            placeholder="Metropolitana"

                            ></input>
                        </div>
                        <div className="tw-grid tw-w-full tw-mb-1 tw-mx-4 md:tw-mx-0">
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
                    <div className="tw-flex tw-flex-row tw-justify-between tw-items-center tw-mx-2 2xl:tw-mx-32">
                        <div className="tw-flex tw-gap-3 tw-text-sm tw-my-3">
                            <p className="tw-text-gray-500">Últimas propiedades subidas</p>
                            <span onClick={toggleMoreProp} className="tw-font-light tw-cursor-pointer">
                                {moreProp ? 'Ver menos' : 'Ver más'}
                            </span>
                        </div>
                        <ul className="tw-flex tw-gap-3">
                            <li className="hover:tw-scale-110 tw-duration-200 tw-cursor-pointer">
                                <button onClick={() => setView('grid')}
                                className="hover:tw-font-semibold tw-duration-200 tw-rounded-lg tw-shadow-2xl tw-bg-gray-200 tw-h-8 tw-w-8 tw-p-1 tw-px-2">
                                    <IoGridOutline className="tw-text-gray-600 tw-text-lg"/>
                                </button>
                            </li>
                            <li className="hover:tw-scale-110 tw-duration-200 tw-cursor-pointer">
                                <button onClick={() => setView('list')}
                                className="hover:tw-font-semibold tw-duration-200 tw-rounded-lg tw-shadow-2xl tw-bg-gray-200 tw-h-8 tw-w-8 tw-p-1 tw-px-2">
                                    <TbLayoutList className="tw-text-gray-600 tw-text-lg"/>
                                </button>
                            </li>                
                        </ul>
                    </div>
                    {
                        view === 'grid' ? (
                            <div className="tw-grid tw-grid-row tw-grid-cols-1 lg:tw-grid-cols-2 2xl:tw-grid-cols-3 tw-gap-6 2xl:tw-gap-2 tw-mt-4 tw-mb-4 tw-mx-1 xl:tw-mx-12 2xl:tw-mx-32 tw-w-full xl:tw-w-[90%] 2xl:tw-w-[85%]">
                            {properties.slice(0, 3).map((item) => {
                                return(
                                    <article key={item?.id} className="tw-shadow-lg tw-flex tw-flex-col tw-border-2 tw-h-full md:tw-h-[400px] 2xl:tw-h-full md:tw-w-full tw-p-2 tw-group xl:tw-overflow-hidden 2xl:tw-p-1">
                                        <div className="tw-mb-2 tw-relative">
                                            {item.images[0] ? <img 
                                                            src={item.images[0]} 
                                                            alt="img-casa" 
                                                            className="tw-h-44 tw-w-full tw-object-cover tw-rounded-md group-hover:-tw-translate-y-2 tw-duration-200 tw-shadow-md" 
                                                            /> : 
                                                        <img 
                                                        src={NotFoundProp} 
                                                        alt="img-casa-not-found" 
                                                        className="tw-h-48 tw-w-52 tw-object-scale-down group-hover:-tw-translate-y-2 tw-duration-200 tw-p-4 xl:tw-mx-36" 
                                                        />
                                            }
                                             
                                            <small className="tw-absolute tw-top-1 tw-left-1 tw-p-[0.15rem] tw-px-4 tw-font-normal tw-opacity-100 group-hover:tw-opacity-70 tw-bg-secondary tw-text-gray-50 tw-rounded-sm group-hover:tw-top-0 tw-duration-200">
                                                {item.typeOfPropertyId ? item.typeOfPropertyId : 'No hay' }
                                            </small>
                                            <small className="tw-absolute tw-top-8 tw-left-1 tw-p-[0.18rem] tw-px-4 tw-font-normal tw-opacity-100 group-hover:tw-opacity-70 tw-bg-secondary tw-text-gray-50 tw-rounded-sm group-hover:tw-top-7 tw-duration-200">
                                                {item.typeOfOperationId}
                                            </small>
                                        </div>
                                        <div className="tw-mx-2">
                                        <h2 className="tw-font-semibold tw-text-center tw-text-lg">{truncate(item.propertyTitle, 40)}</h2>
                                        {/* <div className="tw-mx-4 tw-mb-2 tw-my-3 tw-flex tw-flex-row tw-justify-between tw-items-center"> */}
                                                {/* <p><b>$ 20.000.000</b></p>
                                                <p><b>UF 3.200</b></p> */}
                                        {formatPrice(item?.currencyId, item?.propertyPrice)}
                                        {/* </div> */}
                                            <ul className="tw-flex tw-flex-row sm:tw-flex-row tw-mx-4 xl:tw-mx-12 tw-gap-2 tw-justify-between">
                                                <li className="tw-flex tw-justify-center tw-items-center tw-gap-2 sm:tw-text-center sm:tw-grid ">
                                                        {/* <span>Baño(s)</span> */}   
                                                        <FaBath />
                                                        <small>{item.characteristics.bathrooms || '0'}</small>
                                                </li>
                                                <li className="tw-flex tw-justify-center tw-items-center tw-gap-2 sm:tw-text-center sm:tw-grid ">
                                                        {/* <span>Dormitorio(s)</span> */}
                                                        <FaBed/>
                                                        <small>{item.characteristics.bedrooms || '0'}</small>
                                                </li>
                                                <li className="tw-flex tw-justify-center tw-items-center tw-gap-2 sm:tw-text-center sm:tw-grid ">
                                                        {/* <span>Mts cuadrados</span> */}
                                                        <FaRulerCombined />
                                                        <small>{item.characteristics.surface || '0'}mts</small>
                                                </li>
                                                <li className="tw-flex tw-justify-center tw-items-center tw-gap-2 sm:tw-text-center sm:tw-grid ">
                                                        {/* <span>Estacionamiento(s)</span> */}
                                                        <FaParking />
                                                        <small>{item?.characteristics?.hasParking !== false ? item?.characteristics?.hasParking  : 'no' }</small>
                                                </li>
                                            </ul>
                                            <div className="tw-mx-4 tw-mb-2 tw-mt-8 tw-flex tw-flex-row tw-justify-between tw-items-center">
                                                <p className="tw-font-medium">{item.address.state.name || 'No se encontro región'}, {item.address.city.name || 'No se encontro comuna'}</p>
                                                <button 
                                                // onClick={onOpenContact} 
                                                onClick={() => onOpenContact(item.id)} 
    
                                                className="tw-p-2 tw-px-3 tw-bg-secondary hover:tw-bg-secondary-light tw-duration-200 tw-text-white tw-rounded-full"
                                                >Contactar</button>
                                            </div>
                                        </div>
                                    </article>
                             
                                )
                            })}
                            {
                                !moreProp ? '' : moreProp && (
                                    properties.slice(3, 6).map((item) => {
                                        return(
                                            <Reveal
                                                keyframes={fadeInUp}
                                                delay={200}
                                                duration={600}
                                                triggerOnce={true}
                                            >
                                                <article key={item?.id} className="tw-shadow-lg tw-flex tw-flex-col tw-border-2 tw-h-full md:tw-h-[400px] 2xl:tw-h-full md:tw-w-full tw-p-2 tw-group xl:tw-overflow-hidden 2xl:tw-p-1">
                                                    <div className="tw-mb-2 tw-relative">
                                                        {item.images[0] ? <img 
                                                                src={item.images[0]} 
                                                                alt="img-casa" 
                                                                className="tw-h-44 tw-w-full tw-object-cover tw-rounded-md group-hover:-tw-translate-y-2 tw-duration-200 tw-shadow-md" 
                                                                /> : 
                                                            <img 
                                                            src={NotFoundProp} 
                                                            alt="img-casa-not-found" 
                                                            className="tw-h-48 tw-w-52 tw-object-scale-down group-hover:-tw-translate-y-2 tw-duration-200 tw-p-4 xl:tw-mx-36" 
                                                            />
                                                        }
                                                        {/* <img src={item.images[0] ? item.images[0] : 'https://res.cloudinary.com/dbrhjc4o5/image/upload/v1681933697/unne-media/errors/not-found-img_pp5xj7.jpg' } alt="img-casa" className="tw-h-44 tw-w-full tw-object-cover tw-rounded-md group-hover:-tw-translate-y-2 tw-duration-200 tw-shadow-md" /> */}
                                                        <small className="tw-absolute tw-top-1 tw-left-1 tw-p-[0.15rem] tw-px-4 tw-font-normal tw-opacity-100 group-hover:tw-opacity-70 tw-bg-secondary tw-text-gray-50 tw-rounded-sm group-hover:tw-top-0 tw-duration-200">
                                                            {item.typeOfPropertyId ? item.typeOfPropertyId : 'No hay' }
                                                        </small>
                                                        <small className="tw-absolute tw-top-8 tw-left-1 tw-p-[0.18rem] tw-px-4 tw-font-normal tw-opacity-100 group-hover:tw-opacity-70 tw-bg-secondary tw-text-gray-50 tw-rounded-sm group-hover:tw-top-7 tw-duration-200">
                                                            {item.typeOfOperationId}
                                                        </small>
                                                    </div>
                                                    <div className="tw-mx-2">
                                                    <h2 className="tw-font-semibold tw-text-center tw-text-lg">{truncate(item.propertyTitle, 40)}</h2>
                                                    {/* <div className="tw-mx-4 tw-mb-2 tw-my-3 tw-flex tw-flex-row tw-justify-between tw-items-center"> */}
                                                            {/* <p><b>$ 20.000.000</b></p>
                                                            <p><b>UF 3.200</b></p> */}
                                                    {formatPrice(item?.currencyId, item?.propertyPrice)}
                                                    {/* </div> */}
                                                        <ul className="tw-flex tw-flex-row sm:tw-flex-row tw-mx-4 xl:tw-mx-12 tw-gap-2 tw-justify-between">
                                                            <li className="tw-flex tw-justify-center tw-items-center tw-gap-2 sm:tw-text-center sm:tw-grid ">
                                                                    {/* <span>Baño(s)</span> */}   
                                                                    <FaBath />
                                                                    <small>{item.characteristics.bathrooms || '0'}</small>
                                                            </li>
                                                            <li className="tw-flex tw-justify-center tw-items-center tw-gap-2 sm:tw-text-center sm:tw-grid ">
                                                                    {/* <span>Dormitorio(s)</span> */}
                                                                    <FaBed/>
                                                                    <small>{item.characteristics.bedrooms || '0'}</small>
                                                            </li>
                                                            <li className="tw-flex tw-justify-center tw-items-center tw-gap-2 sm:tw-text-center sm:tw-grid ">
                                                                    {/* <span>Mts cuadrados</span> */}
                                                                    <FaRulerCombined />
                                                                    <small>{item.characteristics.surface || '0'}mts</small>
                                                            </li>
                                                            <li className="tw-flex tw-justify-center tw-items-center tw-gap-2 sm:tw-text-center sm:tw-grid ">
                                                                    {/* <span>Estacionamiento(s)</span> */}
                                                                    <FaParking />
                                                                    <small>{item?.characteristics?.hasParking !== false ? item?.characteristics?.hasParking  : 'no' }</small>
                                                            </li>
                                                        </ul>
                                                        <div className="tw-mx-4 tw-mb-2 tw-mt-8 tw-flex tw-flex-row tw-justify-between tw-items-center">
                                                            <p className="tw-font-medium">{item.address.state.name || 'No se encontro región'}, {item.address.city.name || 'No se encontro comuna'}</p>
                                                            <button 
                                                            // onClick={onOpenContact} 
                                                            onClick={() => onOpenContact(item.id)} 
                
                                                            className="tw-p-2 tw-px-3 tw-bg-secondary hover:tw-bg-secondary-light tw-duration-200 tw-text-white tw-rounded-full"
                                                            >Contactar</button>
                                                        </div>
                                                    </div>
                                                </article>
                                            </Reveal>
                                        )
                                    })
                                )
                            }
                            <div className="tw-flex tw-gap-3 tw-text-base tw-my-3">
                                <p className="tw-text-gray-500">Últimas {!moreProp ? properties.slice(0, 3).length > 0 ? properties.slice(0, 3).length : '0' :  properties.slice(0, 6).length > 0 ? properties.slice(0,6).length : '0'} propiedades </p>
                                <span onClick={toggleMoreProp} className="tw-font-light tw-cursor-pointer">
                                    {moreProp ? 'Ver menos' : 'Ver más'}
                                </span>
                            </div>
                        </div>
                        ) : (
                            <div className="tw-grid tw-grid-row tw-grid-cols-1 tw-gap-6 2xl:tw-gap-2 tw-mt-4 tw-mb-4 tw-mx-3 2xl:tw-mx-32">
                            {properties.slice(0, 3).map((item) => {
                                return(
                                    <article key={item?.id} className="tw-shadow-lg tw-flex tw-flex-col md:tw-flex-row tw-border-2 tw-h-full md:tw-h-full 2xl:tw-h-[220px] tw-w-full tw-p-2 tw-group">
                                        <div className="tw-mb-2 tw-relative">
                                                {item.images[0] ? <img 
                                                            src={item.images[0]} 
                                                            alt="img-casa" 
                                                            className="tw-h-48 tw-w-full xl:tw-w-96 tw-object-cover tw-rounded-md group-hover:-tw-translate-y-2 tw-duration-200" 
                                                            /> : 
                                                        <img 
                                                            src={NotFoundProp} 
                                                            alt="img-casa-not-found" 
                                                            className="tw-h-48 tw-w-full xl:tw-w-96 tw-object-scale-down tw-rounded-md group-hover:-tw-translate-y-2 tw-duration-200 " 
                                                         />
                                                }
                                            <small className="tw-absolute tw-top-1 tw-left-1 tw-p-[0.15rem] tw-px-4 tw-font-normal tw-opacity-100 group-hover:tw-opacity-70 tw-bg-secondary tw-text-gray-50 tw-rounded-sm group-hover:tw-top-0 tw-duration-200">
                                                {item.typeOfPropertyId ? item.typeOfPropertyId : 'No hay' }
                                            </small>
                                            <small className="tw-absolute tw-top-8 tw-left-1 tw-p-[0.18rem] tw-px-4 tw-font-normal tw-opacity-100 group-hover:tw-opacity-70 tw-bg-secondary tw-text-gray-50 tw-rounded-sm group-hover:tw-top-7 tw-duration-200">
                                                {item.typeOfOperationId}
                                            </small>
                                        </div>
                                        <div className="tw-mx-2 md:tw-mx-12 tw-w-full">
                                            <h2 className="tw-font-semibold tw-text-center tw-text-lg">{truncate(item.propertyTitle, 90)}</h2>
                                            {formatPrice(item?.currencyId, item?.propertyPrice)}
                                            <ul className="tw-flex tw-flex-col sm:tw-flex-row tw-mx-4 xl:tw-mx-10 tw-gap-2 tw-justify-between">
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
                                                        <small>{item.characteristics.surface || '0'} mts</small>
                                                </li>
                                                <li className="tw-flex tw-justify-start tw-items-center tw-gap-2 sm:tw-text-center sm:tw-grid ">
                                                        <span>Estacionamiento</span>
                                                        <small>{item?.characteristics?.hasParking !== false ? item?.characteristics?.hasParking  : 'no' }</small>
                                                </li>
                                            </ul>
                                            <div className="tw-mx-4 tw-mb-2 tw-mt-8 tw-flex tw-flex-row tw-justify-between tw-items-center">
                                                <p className="tw-font-medium">{item.address.state.name || 'No se encontro región'}, {item.address.city.name || 'No se encontro comuna'}</p>
                                                <button 
                                                // onClick={onOpenContact} 
                                                onClick={() => onOpenContact(item.id)} 
    
                                                className="tw-p-2 tw-px-3 tw-bg-secondary hover:tw-bg-secondary-light tw-duration-200 tw-text-white tw-rounded-full"
                                                >Contactar</button>
                                            </div>
                                        </div>
                                    </article>
                                )
                            })}
                            {
                                !moreProp ? '' : moreProp && (
                                    properties.slice(3, 6).map((item) => {
                                        return(
                                            <Reveal
                                                keyframes={fadeInUp}
                                                delay={200}
                                                duration={600}
                                                triggerOnce={true}
                                                >
                                                <article key={item?.id} className="tw-shadow-lg tw-flex tw-flex-col md:tw-flex-row tw-border-2 tw-h-full md:tw-h-full 2xl:tw-h-[220px] tw-w-full tw-p-2 tw-group">
                                                    <div className="tw-mb-2 tw-relative">
                                                        {item.images[0] ? <img 
                                                                    src={item.images[0]} 
                                                                    alt="img-casa" 
                                                                    className="tw-h-48 tw-w-full xl:tw-w-96 tw-object-cover tw-rounded-md group-hover:-tw-translate-y-2 tw-duration-200" 
                                                                    /> : 
                                                                <img 
                                                                src={NotFoundProp} 
                                                                alt="img-casa-not-found" 
                                                                className="tw-h-48 tw-w-full xl:tw-w-96 tw-object-scale-down tw-rounded-md group-hover:-tw-translate-y-2 tw-duration-200 " 
                                                                />
                                                        }
                                                        <small className="tw-absolute tw-top-1 tw-left-1 tw-p-[0.15rem] tw-px-4 tw-font-normal tw-opacity-100 group-hover:tw-opacity-70 tw-bg-secondary tw-text-gray-50 tw-rounded-sm group-hover:tw-top-0 tw-duration-200">
                                                            {item.typeOfPropertyId ? item.typeOfPropertyId : 'No hay' }
                                                        </small>
                                                        <small className="tw-absolute tw-top-8 tw-left-1 tw-p-[0.18rem] tw-px-4 tw-font-normal tw-opacity-100 group-hover:tw-opacity-70 tw-bg-secondary tw-text-gray-50 tw-rounded-sm group-hover:tw-top-7 tw-duration-200">
                                                            {item.typeOfOperationId}
                                                        </small>
                                                    </div>
                                                    <div className="tw-mx-2 md:tw-mx-12 tw-w-full">
                                                        <h2 className="tw-font-semibold tw-text-center tw-text-lg">{truncate(item.propertyTitle, 90)}</h2>
                                                        {formatPrice(item?.currencyId, item?.propertyPrice)}                                      
                                                        <ul className="tw-flex tw-flex-col sm:tw-flex-row tw-mx-4 xl:tw-mx-10 tw-gap-2 tw-justify-between">
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
                                                                    <small>{item.characteristics.surface || '0'} mts</small>
                                                            </li>
                                                            <li className="tw-flex tw-justify-start tw-items-center tw-gap-2 sm:tw-text-center sm:tw-grid ">
                                                                    <span>Estacionamiento</span>
                                                                    <small>{item?.characteristics?.hasParking !== false ? item?.characteristics?.hasParking  : 'no' }</small>
                                                            </li>
                                                        </ul>
                                                        <div className="tw-mx-4 tw-mb-2 tw-mt-8 tw-flex tw-flex-row tw-justify-between tw-items-center">
                                                            <p className="tw-font-medium">{item.address.state.name || 'No se encontro región'}, {item.address.city.name || 'No se encontro comuna'}</p>
                                                            <button                                                           
                                                                onClick={() => onOpenContact(item.id)}                
                                                                className="tw-p-2 tw-px-3 tw-bg-secondary hover:tw-bg-secondary-light tw-duration-200 tw-text-white tw-rounded-full"
                                                            >
                                                                Contactar
                                                            </button>
                                                        </div>
                                                    </div>
                                                </article>
                                            </Reveal>
                                        )
                                    })
                                )
                            }
                            <div className="tw-flex tw-gap-3 tw-text-base tw-my-3">
                                <p className="tw-text-gray-500">Últimas {!moreProp ? properties.slice(0, 3).length > 0 ? properties.slice(0, 3).length : '0' :  properties.slice(0, 6).length > 0 ? properties.slice(0,6).length : '0'} propiedades </p>
                                <span onClick={toggleMoreProp} className="tw-font-light tw-cursor-pointer">
                                    {moreProp ? 'Ver menos' : 'Ver más'}
                                </span>
                            </div>
                        </div>
                        )
                    }

                    {/* PAGINACION */}
                    {/* <div className="tw-flex tw-flex-row tw-justify-center tw-gap-3 tw-m-2 tw-my-10 2xl:tw-mx-32">
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
                    </div> */}
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

export default LastProperties;