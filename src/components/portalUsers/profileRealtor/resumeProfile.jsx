
// import imgProfile from '../../../assets/img/perfil/perfil.png'
import imgProfile from '../../../assets/img/perfil/perfil.png'
import imgBanner from '../../../assets/img/perfil/banner.jpg'

import {Reveal } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

import { IoIosArrowForward } from "react-icons/io";


const ResumeProfile = ({dataRealtor}) =>{

    if (!dataRealtor) return null;

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
            <Reveal
                    keyframes={fadeInUp}
                    delay={500}
                    duration={800}
                    triggerOnce={true}
                >
                <div className="tw-overflow-hidden">
                    <div className="tw-grid tw-grid-col tw-grid-cols-1 tw-gap-4 tw-text-gray-500">
                        <div className='tw-relative tw-h-full lg:tw-h-full tw-w-full tw-rounded-md tw-p-2 tw-px-3'>
                            <img src={imgBanner} className='tw-w-full tw-h-52 tw-object-cover tw-rounded-md' alt='bannerImg' />
                            <img src={imgProfile} alt='profileImg' className='tw-absolute tw-top-32 tw-border-4 tw-border-gray-100 tw-left-10 tw-rounded-full tw-h-36 tw-w-36 tw-shadow-lg' />                            
                            <div className='tw-mx-3 tw-grid tw-grid-flow-col tw-gap-2'>
                                <div className=''>
                                    <h5 className='tw-text-3xl tw-text-gray-600 tw-mt-16'>{dataRealtor.name ? dataRealtor.name : 'Cristian'} {dataRealtor.lastName ? dataRealtor.lastName : 'Arevalo'} </h5>
                                    <small className=''>Igniero comercial / {dataRealtor?.session.rol?.name ? dataRealtor?.session.rol?.name : 'Corredor' } de inmuebles</small>
                                        <ul className='tw-flex tw-flex-col tw-gap-2 tw-text-base tw-mt-2'>
                                            <li className='mb-1'> 
                                                <strong>Teléfono:</strong>{' '}<span>{dataRealtor?.phone ? dataRealtor?.phone : 'Sin número'}</span>    
                                            </li>
                                            <li className='mb-1'> 
                                                <strong>Correo:</strong>{' '}<span>{dataRealtor?.session.email ? dataRealtor?.session.email : 'Sin correo'}</span>    
                                            </li>
                                        </ul>
                                </div>
                                <div className=''>
                                        <ul className='tw-flex tw-flex-row tw-gap-2 tw-text-base tw-mt-24 tw-text-center'>
                                            <li className='tw-mb-1 tw-px-6'> 
                                                <strong>Cantidad propiedades</strong>{' '}<p>10</p>    
                                            </li>
                                            <li className='tw-mb-1'> 
                                                <strong>Cantidad clientes</strong>{' '}<p>16</p>    
                                            </li>
                                        </ul>
                                </div>                    
                            </div>
                        </div>
                        <div className='tw-grid tw-grid-cols-1 tw-gap-2 tw-px-2'>
                                    <div className='tw-bg-white tw-h-full tw-w-full tw-rounded-md tw-p-4 tw-px-5'>
                                        <h3 className='tw-mb-2 tw-text-xl tw-text-gray-600'>Sobre Mi</h3>
                                        <p className=''>{dataRealtor?.about ? dataRealtor?.about : 'Sin descripción'}</p>    
                                    </div>
                        </div>
                        <div className='tw-flex tw-justify-end tw-px-2'>
                            <a href='/perfil-corredor' className='tw-flex tw-items-center tw-hover-group tw-bg-secondary-light hover:tw-bg-secondary tw-duration-200 tw-text-white tw-p-2 tw-rounded-lg'>
                                Ver más <IoIosArrowForward className='tw-mx-1 tw-duration-150'/>
                            </a>
                        </div>
                    </div>
            </div>
                </Reveal>
         
        </>
    )
}

export default ResumeProfile;