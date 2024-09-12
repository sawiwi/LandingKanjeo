import { IoGridOutline } from "react-icons/io5";
import { TbLayoutList} from "react-icons/tb";
import { FaArrowLeft , FaArrowRight, FaRulerCombined, FaPencilRuler, FaParking } from "react-icons/fa";
import { FaBed, FaBath, FaKitchenSet } from "react-icons/fa6";
import { PiSortDescendingBold } from "react-icons/pi";
import { BiBuildingHouse } from "react-icons/bi";

import {Reveal} from "react-awesome-reveal";
import { keyframes } from '@emotion/react';

import { 
    truncateString, 
    parseToCLPCurrency, 
    parseToDecimal, 
    ufToClp, 
    clpToUf2 } from "../../../utils/truncateExchange";

import { useContext, useState, useEffect } from "react";
import Modal from "../../modal/Modal";
import ModalLastProperties from "./components/ModalLastProperties";
import { PropertiesContext } from "../../../context/properties/PropertiesContext";
import PropertiesServices from '../../../services/portal-properties/PropertiesServices'


import NotFoundProp from "../../../assets/img/portal-prop/arquitectura.png"


const LastProperties = ({regions, communes, stateId, setStateId, operationType, typeOfProperty, selectedSelects, setSelectedSelects}) => {
    const [contactOpen, setContactOpen] = useState(false);
    const [moreProp, setMoreProp] = useState(false)
    const [view, setView] = useState('grid');
    const [selectedProperty, setSelectedProperty] = useState(null);
    const { contextData } = useContext(PropertiesContext);
    const {
        properties,
        valueUf,
    } = contextData;
    const [filteredProperties, setFilteredProperties] = useState([]);
//  const [countOpenContact, setCountOpenContact] = useState(0);
    const [clicDataOpenContact, setClicDataOpenContact] = useState([]);
    const [limit, setLimit] = useState(20);

    const onOpenContact = async (id) =>{
        //se salvan los clics en un contador a la vez que el id de la propiedad con su titulo respectivo
        const clicked = clicDataOpenContact.find(item => item.id === id);
        let updateClicks;

        if (clicked) {
            updateClicks = clicDataOpenContact.map(item => 
                item.id === id ? {...item, clicks: item.clicks + 1} : item
            );
        }else {
            updateClicks = [...clicDataOpenContact, {id, clicks: 1}];
        }
        const property = await PropertiesServices.getProperty(id);

        setClicDataOpenContact(updateClicks);
        setSelectedProperty(property);
        setContactOpen(true);

        const formData = {
            clickOfExternalLink: 0,
            clickOfOpenContact: 1,
            clickOfSendContact: 0
        }

        try {
            await PropertiesServices.getClicksProperties(id, formData);
            // console.log('Datos enviados correctamente', formData);
        }catch (error){
            console.log('Error al enviar los clics', error)
        }
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
                 <div className="mx-4 mb-2 my-3 flex flex-row justify-between items-center">
                    <p className="xl:text-xl">
                        <b>{parseToDecimal(ufValue)} UF</b>
                    </p>
                   
                    <p className="xl:text-xl">
                        <b>{parseToCLPCurrency(clpValue)}.-</b>
                    </p>
                </div>
            </div>

        )

    };

    const handleSelectChange = (e) => {
        const {name, value} = e.target;
        setSelectedSelects((prev) => ({...prev, [name]: value}));

        if(name === 'region') {
            const selectedRegion  = regions.find(region => region.name === value);
            setStateId(selectedRegion ? selectedRegion.id : '')
        }
    };

    const filterProperties = (properties) => {
        let filtered = properties.slice(0, limit);
    
        if (selectedSelects.typeOfProperty) {
          filtered = filtered.filter(property => 
            property.typeOfPropertyId === selectedSelects.typeOfProperty);
        }
    
        if (selectedSelects.operationType) {
          filtered = filtered.filter(property => 
            property.typeOfOperationId === selectedSelects.operationType);
        }
    
        if (selectedSelects.region) {
          filtered = filtered.filter(property => 
            property.address.state.name === selectedSelects.region);
        }
    
        if (selectedSelects.commune) {
          filtered = filtered.filter(property => 
            property.address.city.name === selectedSelects.commune);
        }
    
        setFilteredProperties(filtered);
      };

    
    
    useEffect(() => {
        setFilteredProperties(properties); 
      }, [properties]);

    useEffect(() => {
        filterProperties(properties);
    }, [selectedSelects]);

    const handleSearch = () => {
        filterProperties(properties)
    }


    return(
        <>
            {/* FILTROS AVANZADOS */}
                <div className="flex flex-col md:flex-row justify-between items-center md:mx-24 2xl:mx-96 gap-2 mt-10 w-full md:w-96 mb-3">
                        <div className="grid w-full mb-1 mx-4 md:mx-0">
                            <label className="font-semibold mb-1 w-full" for="typeProperty">Tipo de propiedad</label>
                            <select
                                id="typeOfProperty"
                                name="typeOfProperty"
                                value={selectedSelects.typeOfProperty}
                                onChange={handleSelectChange}
                                className="rounded-md placeholder:text-gray-400 p-2 border-2"
                            >
                                <option value="">Seleccione un tipo</option>
                                {typeOfProperty.map((type) => (
                                <option key={type.id} value={type.name}>{type.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="grid w-full mb-1 mx-4 md:mx-0 ">
                            <label className="font-semibold mb-1 w-full" for="operationType">Tipo de operación</label>
                            <select
                                id="operationType"
                                name="operationType"
                                value={selectedSelects.operationType}
                                onChange={handleSelectChange}
                                className="rounded-md placeholder:text-gray-400 p-2 border-2"
                            >
                                <option value="">Seleccione una operación</option>
                                {operationType.map((op) => (
                                <option key={op.id} value={op.name}>{op.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="grid w-full mb-1 mx-4 md:mx-0">
                            <label className="font-semibold mb-1 w-full" for="region">Región</label>
                            <select
                                id="region"
                                name="region"
                                value={selectedSelects.region}
                                onChange={handleSelectChange}
                                className="rounded-md placeholder:text-gray-400 p-2 border-2"
                            >
                                <option value="">Seleccione una Región</option>
                                {regions.map((region) => (
                                <option key={region.id} value={region.name}>{region.name}</option>
                                ))}
                            </select>
  
                        </div>
                        <div className="grid w-full mb-1 mx-4 md:mx-0">
                            <label className="font-semibold mb-1 w-full" for="commune">Comuna</label>
                            <select
                                id="commune"
                                name="commune"
                                value={selectedSelects.commune}
                                onChange={handleSelectChange}
                                className="rounded-md placeholder:text-gray-400 p-2 border-2"
                            >
                                <option value="">Seleccione una Comuna</option>
                                {communes.map((commune) => (
                                    <option key={commune.id} value={commune.name}>{commune.name}</option>
                                ))}
                            </select>
                        </div>
                </div>
                    {/* UTLIMAS PROPIEDAD EN CANJE */}
                    <div className="flex flex-row justify-between items-center mx-2 xl:mx-16 2xl:mx-32">
                        <div className="flex flex-col md:flex-row gap-3 text-sm sm:text-sm my-3 w-96">
                            <p className="text-gray-500">Últimas propiedades subidas</p>
                            <span onClick={toggleMoreProp} className="font-light cursor-pointer">
                                {moreProp ? 'Ver menos' : 'Ver más'}
                            </span>
                        </div>
                        <div className="flex justify-center items-center mt-5 sm:mt-0">
                            <ul className="grid grid-cols-2 md:flex md:flex-row sm:gap-3 items-center">
                                <li className="col-span-1 hover:scale-110 duration-200 cursor-pointer">
                                    <button onClick={() => setView('grid')}
                                    className="hover:font-semibold rounded-lg shadow-2xl text-gray-50 hover:text-secondary-light border bg-secondary-light hover:bg-gray-50 hover:border hover:border-secondary-light duration-150  h-8 w-full sm:w-8 px-6 sm:px-1.5">
                                        <IoGridOutline className="text-lg"/>
                                    </button>
                                </li>
                                <li className="col-span-1 hover:scale-110 duration-200 cursor-pointer">
                                    <button onClick={() => setView('list')}
                                    className="hover:font-semibold rounded-lg shadow-2xl text-gray-50 hover:text-secondary-light border bg-secondary-light hover:bg-gray-50 hover:border hover:border-secondary-light duration-150 h-8 w-full sm:w-8 px-6 sm:px-1.5">
                                        <TbLayoutList className="text-lg"/>
                                    </button>
                                </li> 
                                <li className="hover:scale-110 duration-200 cursor-pointer">
                                    <a href="/propiedades" target="_blank" rel='noreferrer'
                                        className="flex items-center gap-2 hover:font-medium duration-200 rounded-lg shadow-2xl text-gray-200 hover:text-secondary-light border hover:border-secondary-light bg-secondary-light hover:bg-gray-50 h-8 sm:h-9 w-36 sm:w-full px-6 sm:px-2">
                                            Ver todas
                                        <BiBuildingHouse  className="text-lg"/>
                                    </a>
                                </li>                  
                            </ul>
                        </div>  
                    </div>
                    {
                        view === 'grid' ? (
                            <>
                                <div className="grid grid-row grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 2xl:gap-2 mt-4 mb-4 mx-1 xl:mx-12 2xl:mx-32 w-full xl:w-[90%] 2xl:w-[85%]">
                                {filteredProperties.length > 0 ? filteredProperties.slice(0, 3).map((item) => {
                                    // console.log('image' , item.images[0].path)
                                    return(
                                        <article key={item?.id} className="shadow-lg flex flex-col border-2 h-full md:h-[400px] 2xl:h-full md:w-full p-2 group xl:overflow-hidden 2xl:p-1">
                                            <div className="mb-2 relative">
                                                {item.images.length > 0 && /\.(jpg|jpeg|png|avif)$/.test(item.images[0].path) ? (
                                                        <img 
                                                        key={item.images[0].id}
                                                        src={item.images[0].path || NotFoundProp} 
                                                        alt={`img-${item.images[0].id}`} 
                                                        className="h-44 w-full object-cover rounded-md group-hover:-translate-y-2 duration-200 shadow-md" 
                                                        />
                                                    // console.log('image' , item.images[0].path)                                                  
                                                ) :(
                                                    <img 
                                                        src={NotFoundProp} 
                                                        alt="img-casa-not-found" 
                                                        className="h-48 xl:h-44 w-full xl:w-44 object-scale-down group-hover:-translate-y-2 duration-200 p-4 xl:mx-36" 
                                                    />
                                                    )                                            
                                                }                                     
                                                <small className="absolute top-1 left-1 p-[0.15rem] px-4 font-normal opacity-100 group-hover:opacity-70 bg-secondary text-gray-50 rounded-sm group-hover:top-0 duration-200">
                                                    {item.typeOfPropertyId ? item.typeOfPropertyId : 'No hay' }
                                                </small>
                                                <small className="absolute top-8 left-1 p-[0.18rem] px-4 font-normal opacity-100 group-hover:opacity-70 bg-secondary text-gray-50 rounded-sm group-hover:top-7 duration-200">
                                                    {item.typeOfOperationId}
                                                </small>
                                            </div>
                                            <div className="mx-2">
                                            <h2 className="font-semibold text-center text-lg">{truncate(item.propertyTitle, 40)}</h2>                                      
                                            {formatPrice(item?.currencyId, item?.propertyPrice)}
                                            
                                                <ul className="flex flex-row sm:flex-row mx-4 xl:mx-12 gap-2 justify-between">
                                                    <li className="flex justify-center items-center gap-2 sm:text-center sm:grid ">
                                                            {/* <span>Baño(s)</span> */}   
                                                            <FaBath />
                                                            <small>{item.characteristics.bathrooms || '0'}</small>
                                                    </li>
                                                    <li className="flex justify-center items-center gap-2 sm:text-center sm:grid ">
                                                            <FaBed/>
                                                            <small>{item.characteristics.bedrooms || '0'}</small>
                                                    </li>
                                                    <li className="flex justify-center items-center gap-2 sm:text-center sm:grid ">
                                                            <FaRulerCombined />
                                                            <small>{item.characteristics.surface || '0'}mts</small>
                                                    </li>
                                                    <li className="flex justify-center items-center gap-2 sm:text-center sm:grid ">
                                                            <FaParking />
                                                            <small>{item?.characteristics?.hasParking !== false ? item?.characteristics?.hasParking  : 'no' }</small>
                                                    </li>
                                                </ul>
                                                <div className="mx-4 mb-2 mt-8 flex flex-row justify-between items-center">
                                                    <p className="font-medium">{item.address.state.name || 'No se encontro región'}, {item.address.city.name || 'No se encontro comuna'}</p>
                                                    <button 
                                                    // onClick={onOpenContact} 
                                                    onClick={() => onOpenContact(item.id)} 
        
                                                    className="p-2 px-3 bg-secondary hover:bg-secondary-light duration-200 text-white rounded-full"
                                                    >Contactar</button>
                                                </div>
                                            </div>
                                        </article>
                                
                                    )
                                }) : (
                                    <div className="w-full text-center my-3 xl:mx-80 2xl:mx-96">
                                        <small className="font-semibold text-center text-lg">
                                            No se encuantran propiedades
                                        </small>
                                    </div>
                                )
                                }
                                {
                                    !moreProp ? '' : moreProp && (
                                        filteredProperties.slice(3, 6).map((item) => {
                                            return(
                                                <Reveal
                                                    keyframes={fadeInUp}
                                                    delay={200}
                                                    duration={600}
                                                    triggerOnce={true}
                                                >
                                                    <article key={item?.id} className="shadow-lg flex flex-col border-2 h-full md:h-[400px] 2xl:h-full md:w-full p-2 group xl:overflow-hidden 2xl:p-1">
                                                        <div className="mb-2 relative">
                                                        {item.images.length > 0 && /\.(jpg|jpeg|png|avif)$/.test(item.images[0].path) ? (
                                                        <img 
                                                            key={item.images[0].id}
                                                            src={item.images[0].path || NotFoundProp} 
                                                            alt={`img-${item.images[0].id}`} 
                                                            className="h-44 w-full object-cover rounded-md group-hover:-translate-y-2 duration-200 shadow-md" 
                                                            />
                                                                                                       
                                                            ) :(
                                                                <img 
                                                                    src={NotFoundProp} 
                                                                    alt="img-casa-not-found" 
                                                                    className="h-48 xl:h-44 w-full xl:w-44 object-scale-down group-hover:-translate-y-2 duration-200 p-4 xl:mx-36" 
                                                                />
                                                                )                                            
                                                            }
                                                            <small className="absolute top-1 left-1 p-[0.15rem] px-4 font-normal opacity-100 group-hover:opacity-70 bg-secondary text-gray-50 rounded-sm group-hover:top-0 duration-200">
                                                                {item.typeOfPropertyId ? item.typeOfPropertyId : 'No hay' }
                                                            </small>
                                                            <small className="absolute top-8 left-1 p-[0.18rem] px-4 font-normal opacity-100 group-hover:opacity-70 bg-secondary text-gray-50 rounded-sm group-hover:top-7 duration-200">
                                                                {item.typeOfOperationId}
                                                            </small>
                                                        </div>
                                                        <div className="mx-2">
                                                        <h2 className="font-semibold text-center text-lg">{truncate(item.propertyTitle, 40)}</h2>                                          
                                                            {formatPrice(item?.currencyId, item?.propertyPrice)}                                       
                                                            <ul className="flex flex-row sm:flex-row mx-4 xl:mx-12 gap-2 justify-between">
                                                                <li className="flex justify-center items-center gap-2 sm:text-center sm:grid ">
                                                                        {/* <span>Baño(s)</span> */}   
                                                                        <FaBath />
                                                                        <small>{item.characteristics.bathrooms || '0'}</small>
                                                                </li>
                                                                <li className="flex justify-center items-center gap-2 sm:text-center sm:grid ">
                                                                        {/* <span>Dormitorio(s)</span> */}
                                                                        <FaBed/>
                                                                        <small>{item.characteristics.bedrooms || '0'}</small>
                                                                </li>
                                                                <li className="flex justify-center items-center gap-2 sm:text-center sm:grid ">
                                                                        {/* <span>Mts cuadrados</span> */}
                                                                        <FaRulerCombined />
                                                                        <small>{item.characteristics.surface || '0'}mts</small>
                                                                </li>
                                                                <li className="flex justify-center items-center gap-2 sm:text-center sm:grid ">
                                                                        {/* <span>Estacionamiento(s)</span> */}
                                                                        <FaParking />
                                                                        <small>{item?.characteristics?.hasParking !== false ? item?.characteristics?.hasParking  : 'no' }</small>
                                                                </li>
                                                            </ul>
                                                            <div className="mx-4 mb-2 mt-8 flex flex-row justify-between items-center">
                                                                <p className="font-medium">{item.address.state.name || 'No se encontro región'}, {item.address.city.name || 'No se encontro comuna'}</p>
                                                                <button 
                                                                // onClick={onOpenContact} 
                                                                onClick={() => onOpenContact(item.id, item.propertyTitle)} 
                    
                                                                className="p-2 px-3 bg-secondary hover:bg-secondary-light duration-200 text-white rounded-full"
                                                                >Contactar</button>
                                                            </div>
                                                        </div>
                                                    </article>
                                                </Reveal>
                                            )
                                        })
                                    )
                                }                
                                </div>
                                <div className="flex gap-3 text-base my-3 xl:mt-8 mx-1 xl:mx-12 2xl:mx-32 w-full xl:w-[90%] 2xl:w-[85%]">
                                    <p className="text-gray-500">Últimas {!moreProp ? filteredProperties.slice(0, 3).length > 0 ? filteredProperties.slice(0, 3).length : '0' :  filteredProperties.slice(0, 6).length > 0 ? filteredProperties.slice(0,6).length : '0'} propiedades </p>
                                    <span onClick={toggleMoreProp} className="font-light cursor-pointer">
                                        {moreProp ? 'Ver menos' : 'Ver más'}
                                    </span>
                                </div>
                            </>
                        ) : (
                            <div className="grid grid-row grid-cols-1 gap-6 2xl:gap-2 mt-4 mb-4 mx-3 2xl:mx-32">
                            {filteredProperties.slice(0, 3).map((item) => {
                                return(
                                    <article key={item?.id} className="shadow-lg flex flex-col md:flex-row border-2 h-full md:h-full 2xl:h-[220px] w-full p-2 group">
                                        <div className="mb-2 relative">
                                                {item.images.length > 0 && /\.(jpg|jpeg|png|avif)$/.test(item.images[0].path) ? (
                                                        <img 
                                                        key={item.images[0].id}
                                                        src={item.images[0].path || NotFoundProp} 
                                                        alt={`img-${item.images[0].id}`} 
                                                        className="h-48 w-full xl:w-96 object-cover rounded-md group-hover:-translate-y-2 duration-200" 
                                                        />
                                                ) :(
                                                    <img 
                                                        src={NotFoundProp} 
                                                        alt="img-casa-not-found" 
                                                        className="h-48 w-full xl:w-96 object-scale-down rounded-md group-hover:-translate-y-2 duration-200 " 
                                                    />
                                                    )                                            
                                                }
                                            <small className="absolute top-1 left-1 p-[0.15rem] px-4 font-normal opacity-100 group-hover:opacity-70 bg-secondary text-gray-50 rounded-sm group-hover:top-0 duration-200">
                                                {item.typeOfPropertyId ? item.typeOfPropertyId : 'No hay' }
                                            </small>
                                            <small className="absolute top-8 left-1 p-[0.18rem] px-4 font-normal opacity-100 group-hover:opacity-70 bg-secondary text-gray-50 rounded-sm group-hover:top-7 duration-200">
                                                {item.typeOfOperationId}
                                            </small>
                                        </div>
                                        <div className="mx-2 md:mx-12 w-full">
                                            <h2 className="font-semibold text-center text-lg">{truncate(item.propertyTitle, 90)}</h2>
                                            {formatPrice(item?.currencyId, item?.propertyPrice)}
                                            <ul className="flex flex-col sm:flex-row mx-4 xl:mx-10 gap-2 justify-between">
                                                <li className="flex justify-start items-center gap-2 sm:text-center sm:grid ">
                                                        <span>Baños</span>
                                                        <small>{item.characteristics.bathrooms || '0'}</small>
                                                </li>
                                                <li className="flex justify-start items-center gap-2 sm:text-center sm:grid ">
                                                        <span>Dormitorio(s)</span>
                                                        <small>{item.characteristics.bedrooms || '0'}</small>
                                                </li>
                                                <li className="flex justify-start items-center gap-2 sm:text-center sm:grid ">
                                                        <span>Mts cuadrados</span>
                                                        <small>{item.characteristics.surface || '0'} mts</small>
                                                </li>
                                                <li className="flex justify-start items-center gap-2 sm:text-center sm:grid ">
                                                        <span>Estacionamiento</span>
                                                        <small>{item?.characteristics?.hasParking !== false ? item?.characteristics?.hasParking  : 'no' }</small>
                                                </li>
                                            </ul>
                                            <div className="mx-4 mb-2 mt-8 flex flex-row justify-between items-center">
                                                <p className="font-medium">{item.address.state.name || 'No se encontro región'}, {item.address.city.name || 'No se encontro comuna'}</p>
                                                <button 
                                                // onClick={onOpenContact} 
                                                onClick={() => onOpenContact(item.id, item.propertyTitle)} 
    
                                                className="p-2 px-3 bg-secondary hover:bg-secondary-light duration-200 text-white rounded-full"
                                                >Contactar</button>
                                            </div>
                                        </div>
                                    </article>
                                )
                            })}
                            {
                                !moreProp ? '' : moreProp && (
                                    filteredProperties.slice(3, 6).map((item) => {
                                        return(
                                            <Reveal
                                                keyframes={fadeInUp}
                                                delay={200}
                                                duration={600}
                                                triggerOnce={true}
                                                >
                                                <article key={item?.id} className="shadow-lg flex flex-col md:flex-row border-2 h-full md:h-full 2xl:h-[220px] w-full p-2 group">
                                                    <div className="mb-2 relative">
                                                    {item.images.length > 0 && /\.(jpg|jpeg|png|avif)$/.test(item.images[0].path) ? (
                                                        <img 
                                                            key={item.images[0].id}
                                                            src={item.images[0].path || NotFoundProp} 
                                                            alt={`img-${item.images[0].id}`} 
                                                            className="h-48 w-full xl:w-96 object-cover rounded-md group-hover:-translate-y-2 duration-200" 
                                                            />
                                                        ) :(
                                                            <img 
                                                                src={NotFoundProp} 
                                                                alt="img-casa-not-found" 
                                                                className="h-48 w-full xl:w-96 object-scale-down rounded-md group-hover:-translate-y-2 duration-200 " 
                                                            />
                                                            )                                            
                                                        }
                                                        <small className="absolute top-1 left-1 p-[0.15rem] px-4 font-normal opacity-100 group-hover:opacity-70 bg-secondary text-gray-50 rounded-sm group-hover:top-0 duration-200">
                                                            {item.typeOfPropertyId ? item.typeOfPropertyId : 'No hay' }
                                                        </small>
                                                        <small className="absolute top-8 left-1 p-[0.18rem] px-4 font-normal opacity-100 group-hover:opacity-70 bg-secondary text-gray-50 rounded-sm group-hover:top-7 duration-200">
                                                            {item.typeOfOperationId}
                                                        </small>
                                                    </div>
                                                    <div className="mx-2 md:mx-12 w-full">
                                                        <h2 className="font-semibold text-center text-lg">{truncate(item.propertyTitle, 90)}</h2>
                                                        {formatPrice(item?.currencyId, item?.propertyPrice)}                                      
                                                        <ul className="flex flex-col sm:flex-row mx-4 xl:mx-10 gap-2 justify-between">
                                                            <li className="flex justify-start items-center gap-2 sm:text-center sm:grid ">
                                                                    <span>Baños</span>
                                                                    <small>{item.characteristics.bathrooms || '0'}</small>
                                                            </li>
                                                            <li className="flex justify-start items-center gap-2 sm:text-center sm:grid ">
                                                                    <span>Dormitorio(s)</span>
                                                                    <small>{item.characteristics.bedrooms || '0'}</small>
                                                            </li>
                                                            <li className="flex justify-start items-center gap-2 sm:text-center sm:grid ">
                                                                    <span>Mts cuadrados</span>
                                                                    <small>{item.characteristics.surface || '0'} mts</small>
                                                            </li>
                                                            <li className="flex justify-start items-center gap-2 sm:text-center sm:grid ">
                                                                    <span>Estacionamiento</span>
                                                                    <small>{item?.characteristics?.hasParking !== false ? item?.characteristics?.hasParking  : 'no' }</small>
                                                            </li>
                                                        </ul>
                                                        <div className="mx-4 mb-2 mt-8 flex flex-row justify-between items-center">
                                                            <p className="font-medium">{item.address.state.name || 'No se encontro región'}, {item.address.city.name || 'No se encontro comuna'}</p>
                                                            <button                                                           
                                                                onClick={() => onOpenContact(item.id, item.propertyTitle)}                
                                                                className="p-2 px-3 bg-secondary hover:bg-secondary-light duration-200 text-white rounded-full"
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
                            <div className="flex gap-3 text-base my-3">
                                <p className="text-gray-500">Últimas {!moreProp ? filteredProperties.slice(0, 3).length > 0 ? filteredProperties.slice(0, 3).length : '0' :  filteredProperties.slice(0, 6).length > 0 ? filteredProperties.slice(0,6).length : '0'} propiedades </p>
                                <span onClick={toggleMoreProp} className="font-light cursor-pointer">
                                    {moreProp ? 'Ver menos' : 'Ver más'}
                                </span>
                            </div>
                        </div>
                        )
                    }
                    <Modal open={contactOpen} onClose={onCloseContact} className="w-[90%] h-full">
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