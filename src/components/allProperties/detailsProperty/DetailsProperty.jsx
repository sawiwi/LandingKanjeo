import Section from "../../section";
import Reveal from "react-awesome-reveal";
import { keyframes } from '@emotion/react';
import { useState, useEffect, useContext} from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import NotFoundProp from "../../../assets/img/portal-prop/arquitectura.png"
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
import imgProfile from '../../../assets/img/perfil/perfil.png'

import { 
    parseToCLPCurrency, 
    parseToDecimal, 
    ufToClp, 
    clpToUf2 } from "../../../utils/truncateExchange";
import { PropertiesContext } from "../../../context/properties/PropertiesContext";
import PropertiesServices from "../../../services/portal-properties/PropertiesServices";


const DetailsProperty = () => {
    const settings = {
        dots: false,
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 8000,
        cssEase: 'linear',
        pauseOnHover: true,
      };
    const {id} = useParams();
    const [property, setProperty] = useState();
    const { contextData } = useContext(PropertiesContext);
    const {
        valueUf,
    } = contextData;

    //limitare los caracteres y poniendo ... en su lugar si es demasiado largo
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    };

    const formatPrice = (currencyId, propertyPrice) => {
        let ufValue = propertyPrice || 0; 
        let clpValue = propertyPrice || 0;

        if(valueUf && valueUf.Valor){
            // const valueIntUf = valueUf.Valor.replace(/\./g, '').replace(',', '.');
            const valueIntUf = parseFloat(valueUf?.Valor.replace(/\./g, '').replace(',', '.'))

            if(currencyId === 'UF'){
                clpValue = ufToClp(propertyPrice, valueIntUf);
            }
            if(currencyId === 'CLP'){
                ufValue = clpToUf2(propertyPrice, valueIntUf)
            } else {
            
            }
        }
        else{
            clpValue = 0;
            ufValue = 0;
        }

        return (
            <div>
                 <div className="mx-2 mb-2 my-2 flex flex-col items-center">
                    <p className="text-3xl xl:text-xl 2xl:text-2xl font-extrabold">
                        {parseToDecimal(ufValue)} UF
                    </p>
                   
                    <p className="text-2xl xl:text-xl font-medium">
                        {parseToCLPCurrency(clpValue)} CLP
                    </p>
                </div>
            </div>

        )

    };


    useEffect(() =>{
        const getProperty = async () => {
            try{
                const propertyData = await PropertiesServices.getProperty(id);
                console.log('propertyData', propertyData)
                setProperty(propertyData);
            }catch (error) {
                console.log('error al obtener data propiedad',error)
            }
        }
        getProperty();
    },[id]);

    

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


    return(
        <>
        <Section className="overflow-hidden w-full xl:w-[100vw]">
            <Reveal
               keyframes={fadeInUp}
               delay={500}
               duration={800}
               triggerOnce={true}>

            {!property ? <p>Cargando Propiedad...</p> : ''}
                <div className="grid grid-row grid-cols-1 gap-4 sm:mt-10 md:mx-10 xl:mx-20 2xl:mx-28 text-gray-500">
                        <div className='relative shadow-lg bg-white h-full w-full rounded-md xl:mt-3 mb-2 2xl:mb-0 p-2 px-3'>
                            {/* <img src={backgroundBanner} className='w-full h-52 object-cover object-center rounded-md' alt='bannerImg' /> */}
                            <div className="mx-2 md:mx-16 2xl:mx-36 sm:px-10 ">
                                <Slider {...settings} className="relative w-full sm:w-60 h-80 xl:h-[40vh]">
                                    {property?.images.length > 0 ? property?.images.map((item) => (
                                        <div key={item.id} className="relative">
                                            <img
                                                src={item.path}
                                                alt="hero"
                                                className="bg-cover object-center h-[40vh] xl:h-[45vh] w-full object-scale-down sm:object-contain bg-gray-50"
                                            />
                                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-5"></div>
                                        </div>
                                    ))
                                    : (
                                        <>
                                            <img 
                                                src={NotFoundProp} 
                                                alt="img-casa-not-found" 
                                                className="bg-cover object-center h-[40vh] xl:h-[45vh] w-full object-scale-down sm:object-contain bg-gray-50" 
                                            />
                                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-5"></div>
                                        </>
                                        )  
                                    }
                                </Slider>
                            </div>                
                            <div className='mx-3 xl:mx-6 flex flex-col md:grid grid-cols-1 lg:grid-cols-2 gap-2'>
                                <div className='md:col-span-1'>
                                    <h5 className='text-3xl text-gray-600 mt-4 xl:mt-16 mb-3'>{truncate(property?.propertyTitle, 140 || 'Sin titulo de propiedad')}</h5>
                                        <small className='text-sm sm:text-xs'>Ver en{' '}
                                            {
                                                property?.externalLink !== null && (              
                                                    <a  href={property?.externalLink || 'No se encuentra en ningún portal publicado'} 
                                                        className="underline underline-offset-1 italic text-secondary-light" 
                                                        target="_blank" rel="noreferrer"
                                                    >
                                                        {truncate(property?.externalLink, 36 || 'No se encuentra publicado en portales')}
                                                    </a>
                                                )
                                            }
                                        </small>
                                        <ul className='flex flex-col gap-2 text-lg xl:text-base mt-2'>
                                            <li className='mb-1'> 
                                                <strong>Tipo de operación:</strong>{' '}<span>{property?.typeOfOperationId || ''}</span>    
                                            </li>
                                            <li className='mb-1'> 
                                                <strong>Tipo de propiedad:</strong>{' '}<span>{property?.typeOfPropertyId || ''}</span>    
                                            </li>
                                        </ul>
                                </div>
                                <div className='md:col-span-1'>
                                    <div className='flex justify-center xl:justify-end mt-2 sm:mt-12 2xl:mt-16'>
                                        {formatPrice(property?.currencyId, property?.propertyPrice)}
                                    </div>
                                        {/* <div className='flex justify-end mt-16 sm:mt-14 2xl:mt-16'>
                                            <button  
                                                // onClick={()=> handleOpenContact(id)}
                                                className='flex items-center hover-group bg-secondary-light hover:bg-secondary duration-200 text-white p-2 rounded-lg'>
                                                Contactar
                                            </button>
                                        </div> */}
                                </div>                    
                            </div>
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 h-full mt-6 xl:mt-1'>
                                <div className='col-span-2 mb-2'>
                                    <div className='shadow-lg bg-white h-56 md:h-64 2xl:h-56 w-full rounded-md p-4 px-5 overflow-hidden'>
                                        <h3 className='mb-2 text-xl text-gray-600'>Descripción del inmueble</h3>
                                        <p className=''>{truncate(property?.propertyDescription, 210 || 'No cuenta con descripción')}</p>    
                                    </div>
                                </div>
                                <div className='col-span-1 mb-2'>
                                    <div className='shadow-lg bg-white h-56 md:h-64 2xl:h-56 w-full rounded-md p-4 px-5 overflow-hidden'>
                                        <h3 className='mb-2 text-xl text-gray-600'>Ubicación de propiedad</h3>
                                        <ul className='flex flex-col gap-2'>
                                            <li className='mb-2'> 
                                                <strong>País:</strong>{' '}<span>{'Chile'}</span>    
                                            </li>
                                            <li className='mb-2'> 
                                                <strong>Región:</strong>{' '}<span>{property?.address.state.name}</span>    
                                            </li>
                                            <li className='mb-1'> 
                                                <strong>Comuna:</strong>{' '}<span>{property?.address.city.name}</span>    
                                            </li>
                                            <li className='mb-1'> 
                                                <strong>Dirección:</strong>{' '}<span>{property?.address.address} {property?.address.number }</span>    
                                            </li>
                                        </ul>
                                    </div>  
                                </div>
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 h-full">
                            <div className="col-span-1 mb-1">
                                <div className='shadow-lg bg-white h-full md:h-80 w-full rounded-md p-4 px-5'> 
                                    <div className="flex justify-center">
                                        <img src={imgProfile} alt='profileImg' className='border-2 border-gray-100 rounded-full h-36 w-36 shadow-lg' />
                                    </div>
                                    <div className="text-center flex flex-col justify-center">
                                        <h5 className='text-3xl text-gray-700 mt-6'>{property?.user.name || 'No hay nombre'} {property?.user.lastName || 'No hay apellido'}</h5>
                                        <p className="text-lg text-gray-500">{property?.user.session.email || 'No cuenta con email'}</p>  
                                        <div className="flex flex-col sm:flex-row sm:justify-center mt-3 sm:mt-4 gap-4 mx-6">
                                            <a  
                                                // onClick={()=> handleOpenContact(id)}
                                                href={`/perfil-corredor/${property?.user.id}`}
                                                className='flex items-center hover-group border-2 border-secondary bg-transparent hover:border-2 hover:bg-secondary duration-150 text-secondary hover:text-white p-2 px-20 sm:px-2 rounded-lg'>
                                                Ver perfil
                                            </a>
                                            <button  
                                                // onClick={()=> handleOpenContact(id)}
                                                className='flex items-center hover-group bg-secondary-light hover:bg-secondary duration-200 text-white p-2 px-20 sm:px-2 rounded-lg'>
                                                Contactar
                                            </button>
                                        </div>    
                                    </div>
                                </div>
                            </div>
                            <div className='col-span-2 mb-2'>
                                <div className='shadow-lg bg-white h-full w-full rounded-md p-4 px-5'>
                                    <h3 className='mb-2 xl:mb-4 2xl:mb-6 text-xl text-gray-600'>Características del inmueble</h3>
                                        <div className="flex flex-col md:flex-row gap-1 2xl:gap-3 mt-4 md:mt-3">
                                                    <ul className="flex flex-col text-start text-gray-700 xl:w-[33%]">
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
                                                    <ul className="flex flex-col text-start text-gray-700 xl:w-[33%]">
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
                                                    </ul>
                                                    <ul className="flex flex-col text-start text-gray-700 xl:w-[33%]">
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
                                                            <div className="flex gap-1.5 items-center">      
                                                                <TbHomeShield className="text-xl" />
                                                                <div className="flex flex-col">
                                                                    <span>
                                                                    Tipo seguridad:
                                                                    </span>
                                                                    <p>{property?.characteristics.typeOfSecurity ? property?.characteristics.typeOfSecurity : 'No'}</p>                                                          
                                                                </div>
                                                               
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
                                        </div>
                                </div>
                            </div> 
                        </div>
                    </div>

            </Reveal>
        </Section>
        </>
    )
}

export default DetailsProperty;