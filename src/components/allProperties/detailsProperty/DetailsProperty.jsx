import Section from "../../section";
import Reveal from "react-awesome-reveal";
import { keyframes } from '@emotion/react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";

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

    //limitare los caracteres y poniendo ... en su lugar si es demasiado largo
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
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
    },[id])

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
                <div className="grid grid-row grid-cols-1 gap-4 sm:mt-10 md:mx-16 xl:mx-28 text-gray-500">
                        <div className='relative shadow-lg bg-white h-full w-full rounded-md mt-6 xl:mt-3 mb-2 2xl:mb-0 p-2 px-3'>
                            {/* <img src={backgroundBanner} className='w-full h-52 object-cover object-center rounded-md' alt='bannerImg' /> */}
                            <div className="mx-2 md:mx-16 2xl:mx-36 sm:px-10 ">
                                <Slider {...settings} className="relative w-full sm:w-60 h-80 xl:h-[40vh]">
                                    {property?.images.map((item) => (
                                        <div key={item.id} className="relative">
                                            <img
                                                src={item.path}
                                                alt="hero"
                                                className="bg-cover object-center h-[40vh] xl:h-[45vh] w-full object-scale-down sm:object-contain bg-gray-50"
                                            />
                                            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-5"></div>
                                        </div>
                                    ))
                                    // : ''
                                    }
                                </Slider>
                            </div>                
                            <div className='mx-3 xl:mx-6 flex flex-col md:grid grid-cols-1 lg:grid-cols-2 gap-2'>
                                <div className='md:col-span-1'>
                                    <h5 className='text-3xl text-gray-600 mt-16'>{truncate(property?.propertyTitle, 160 || 'Sin titulo de propiedad')}</h5>
                                        <small className=''>Ver en <a href={property?.externalLink} className="underline underline-offset-1 italic text-secondary-light" target="_blank" rel="noreferrer">{truncate(property?.externalLink, 36)}</a></small>
                                        <ul className='flex flex-col gap-2 text-base mt-2'>
                                            <li className='mb-1'> 
                                                <strong>Comuna:</strong>{' '}<span>{property?.address.city.name}</span>    
                                            </li>
                                            <li className='mb-1'> 
                                                <strong>Dirección:</strong>{' '}<span>{property?.address.address} {property?.address.number }</span>    
                                            </li>
                                        </ul>
                                </div>
                                <div className='md:col-span-1'>
                                        <div className='flex justify-center mt-16 sm:mt-14 2xl:mt-16'>
                                            <button  
                                                // onClick={()=> handleOpenContact(id)}
                                                className='flex items-center hover-group bg-secondary-light hover:bg-secondary duration-200 text-white p-2 rounded-lg'>
                                                Contactar
                                            </button>
                                        </div>
                                </div>                    
                            </div>
                        </div>
                        {/* {
                            openCantRealtor ? 
                            <Reveal
                            keyframes={fadeInDown}
                            delay={300}
                            duration={800}
                            triggerOnce={true}
                             >
                                <DetailRealtors data={user} onClose={() => setOpenCantRealtor(false)} /> 
                            </Reveal>: ''
                        } */}
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 h-full mt-6 xl:mt-1'>
                                <div className='col-span-2 mb-2'>
                                    <div className='shadow-lg bg-white h-56 md:h-64 2xl:h-56 w-full rounded-md p-4 px-5 overflow-hidden'>
                                        <h3 className='mb-2 text-xl text-gray-600'>Sobre Mi</h3>
                                        <p className=''>{ 'No cuenta con una descripción'}</p>    
                                    </div>
                                </div>
                                <div className='col-span-1 mb-2'>
                                    <div className='shadow-lg bg-white h-56 md:h-64 2xl:h-56 w-full rounded-md md:py-2 px-5 overflow-hidden'>
                                        <h3 className='mb-2 text-xl text-gray-600'>Dónde Trabajo</h3>
                                        <ul className='flex flex-col gap-2'>
                                            <li className='mb-2'> 
                                                <strong>País:</strong>{' '}<span>{'Chile'}</span>    
                                            </li>
                                            <li className='mb-2'> 
                                                <strong>Región:</strong>{' '}<span>{ 'No encontramos Región'}</span>    
                                            </li>
                                            <li className='mb-2'> 
                                                <strong>Comuna:</strong>{' '}<span>{ 'No encontramos Comuna'}</span>    
                                            </li>
                                            <li className='mb-2'> 
                                                <strong>Dirección:</strong>{' '}<span>{ 'No encontramos dirección'}</span>    
                                            </li>
                                        </ul>
                                    </div>  
                                </div>
                        </div>
                        {/* <div className='shadow-lg bg-white h-full md:h-96 w-full rounded-md p-4 px-5'>
                            <h3 className='mb-2 text-xl text-gray-600'>Actividad Reciente</h3>
                            <RecentActivities data={user} />
                        </div> */}
    
                    </div>

            </Reveal>
        </Section>
        </>
    )
}

export default DetailsProperty;