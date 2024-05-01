import Section from '../section';
import {Reveal } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

import imgProfile from '../../assets/img/perfil/perfil.png'
import imgBanner from '../../assets/img/perfil/banner.jpg'

const ProfileRealtor = () => {

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
            <Section className="tw-overflow-hidden">
                <Reveal
                    keyframes={fadeInUp}
                    delay={500}
                    duration={800}
                    triggerOnce={true}
                >
                    <div className="tw-grid tw-grid-row tw-grid-cols-1 tw-gap-4 tw-mt-10 tw-mx-16 tw-text-gray-500">
                        <div className='tw-relative tw-shadow-lg tw-bg-white tw-h-96 lg:tw-h-[460px] tw-w-full tw-rounded-md tw-mt-6 tw-p-2 tw-px-3'>
                            <img src={imgBanner} className='tw-w-full tw-h-52 tw-object-cover tw-rounded-md' alt='bannerImg' />

                            <img src={imgProfile} alt='profileImg' className='tw-absolute tw-top-32 tw-border-4 tw-border-gray-100 tw-left-10 tw-rounded-full tw-h-36 tw-w-36 tw-shadow-lg' />
                            
                            <div className='tw-mx-3 tw-grid tw-grid-flow-col tw-grid-cols-1 lg:tw-grid-cols-3 tw-gap-2'>
                                <div className='tw-col-span-2'>
                                    <h5 className='tw-text-3xl tw-text-gray-600 tw-mt-16'>Cristian Arevalo</h5>
                                    <small className=''>Igniero comercial / corredor de inmuebles</small>
                                        <ul className='tw-flex tw-flex-col tw-gap-2 tw-text-base tw-mt-2'>
                                            <li className='mb-1'> 
                                                <strong>Teléfono:</strong>{' '}<span>920176118</span>    
                                            </li>
                                            <li className='mb-1'> 
                                                <strong>Correo:</strong>{' '}<span>cristian.arevalo@bidata.cl</span>    
                                            </li>
                                        </ul>
                                </div>
                                <div className='tw-col-span-1'>
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
                        <div className='tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-gap-2'>
                                <div className='tw-col-span-2'>
                                    <div className='tw-shadow-lg tw-bg-white tw-h-48 tw-w-full tw-rounded-md tw-p-4 tw-px-5'>
                                        <h3 className='tw-mb-2 tw-text-xl tw-text-gray-600'>Sobre Mi</h3>
                                        <p className=''>Ingeniero en informática con ganas de aprender y poder adentrarme en el campo laboral.</p>    
                                    </div>
                                </div>
                                <div className='tw-col-span-1'>
                                    <div className='tw-shadow-lg tw-bg-white tw-h-48 tw-w-full tw-rounded-md tw-p-4 tw-px-5'>
                                        <h3 className='tw-mb-2 tw-text-xl tw-text-gray-600'>Dónde Trabajo</h3>
                                        <ul className='tw-flex tw-flex-col tw-gap-2'>
                                            <li className='mb-2'> 
                                                <strong>País:</strong>{' '}<span>Chile</span>    
                                            </li>
                                            <li className='mb-2'> 
                                                <strong>Región:</strong>{' '}<span>Metropolitana</span>    
                                            </li>
                                            <li className='mb-2'> 
                                                <strong>Comuna:</strong>{' '}<span>Quilicura</span>    
                                            </li>
                                            <li className='mb-2'> 
                                                <strong>Dirección:</strong>{' '}<span>...</span>    
                                            </li>
                                        </ul>
                                    </div>  
                                </div>

                        </div>
                        <div className='tw-shadow-lg tw-bg-white tw-h-96 tw-w-full tw-rounded-md tw-p-4 tw-px-5'>
                                <h3 className='tw-mb-2 tw-text-xl tw-text-gray-600'>Actividad Reciente</h3>
                                <p className=''>Ingeniero en informática con ganas de aprender y poder adentrarme en el campo laboral.</p>     
                        </div>
    
                    </div>
                </Reveal>
            </Section>
        </>
    )
}

export default ProfileRealtor;