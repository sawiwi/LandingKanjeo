import Section from '../../section';
import {Reveal } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

import imgProfile from '../../../assets/img/perfil/perfil.png'
import imgBanner from '../../../assets/img/perfil/banner.jpg'
import approve from '../../../assets/img/perfil/aprobar.png'
import notApprove from '../../../assets/img/perfil/precaucion.png'

import { useParams } from 'react-router-dom';
import UsersServices from '../../../services/portal-users/UsersServices';
import { useEffect, useState } from 'react';

const ProfileRealtor = () => {
    const {id} = useParams();
    const [user, setUser] = useState();

    useEffect(() => {
        const getRealtor = async () => {
            try {
                const userData = await UsersServices.getUser(id);
                setUser(userData);
            }catch (error) {
                console.log('Error al obtener data del usuario', error);
            }
        }
        getRealtor();
    }, [id])

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
            <Section className="tw-overflow-hidden xl:tw-w-[100vw]">
                <Reveal
                    keyframes={fadeInUp}
                    delay={500}
                    duration={800}
                    triggerOnce={true}
                >
                    {!user ? <p>Cargando Corredor...</p> : ''}
                    <div className="tw-grid tw-grid-row tw-grid-cols-1 tw-gap-4 tw-mt-10 tw-mx-16 tw-text-gray-500">
                        <div className='tw-relative tw-shadow-lg tw-bg-white tw-h-96 lg:tw-h-[460px] tw-w-full tw-rounded-md tw-mt-6 tw-p-2 tw-px-3'>
                            <img src={imgBanner} className='tw-w-full tw-h-52 tw-object-cover tw-rounded-md' alt='bannerImg' />

                            <img src={imgProfile} alt='profileImg' className='tw-absolute tw-top-32 tw-border-4 tw-border-gray-100 tw-left-10 tw-rounded-full tw-h-36 tw-w-36 tw-shadow-lg' />
                            {user?.session.accountConfirmed === true ? 
                                    <img src={approve} alt='ticket confirmado' 
                                        className='tw-absolute tw-top-56 tw-left-36 tw-h-10 tw-w-10 hover:tw-scale-110 tw-duration-150'
                                        title='Cuenta confirmada'/> : 
                                        ''
                                    // <img src={notApprove} alt='por confirmar'  
                                    // className='tw-absolute tw-top-56 tw-left-36 tw-h-11 tw-w-11 hover:tw-scale-110 tw-duration-150'
                                    // title='Cuenta por confirmar' />
                                    }
                         
                            <div className='tw-mx-3 tw-grid tw-grid-flow-col tw-grid-cols-1 lg:tw-grid-cols-3 tw-gap-2'>
                                <div className='tw-col-span-2'>
                                    <h5 className='tw-text-3xl tw-text-gray-600 tw-mt-16'>{user?.name || 'No hay nombre'} {user?.lastName || 'No hay apellido'}</h5>
                                    <small className=''>Igniero comercial / {user?.session.rol.name || 'Corredor'} de inmuebles</small>
                                        <ul className='tw-flex tw-flex-col tw-gap-2 tw-text-base tw-mt-2'>
                                            <li className='mb-1'> 
                                                <strong>Teléfono:</strong>{' '}<span>{user?.phone || 'Sin número'}</span>    
                                            </li>
                                            <li className='mb-1'> 
                                                <strong>Correo:</strong>{' '}<span>{user?.session.email || 'Sin correo'}</span>    
                                            </li>
                                            <li className='mb-1'> 
                                                <strong>Página web:</strong>{' '}<span>{user?.webPage || 'No cuenta con página web'}</span>    
                                            </li>
                                        </ul>
                                </div>
                                <div className='tw-col-span-1'>
                                        <ul className='tw-flex tw-flex-row tw-gap-2 tw-text-base md:tw-text-lg 2xl:tw-text-xl tw-mt-24 tw-text-center'>
                                            <li className='tw-mb-1 tw-px-6'> 
                                                <strong>Cantidad propiedades</strong>{' '}<p>{user?.activePropertyCount || '0'}</p>    
                                            </li>
                                            <li className='tw-mb-1'> 
                                                <strong>Cantidad clientes</strong>{' '}<p>{user?.totalCustomerCount || '0'}</p>    
                                            </li>
                                        </ul>
                                </div>                    
                            </div>
                        </div>
                        <div className='tw-grid tw-grid-cols-1 lg:tw-grid-cols-3 tw-gap-2'>
                                <div className='tw-col-span-2'>
                                    <div className='tw-shadow-lg tw-bg-white tw-h-56 md:tw-h-64 2xl:tw-h-56 tw-w-full tw-rounded-md tw-p-4 tw-px-5 tw-overflow-hidden'>
                                        <h3 className='tw-mb-2 tw-text-xl tw-text-gray-600'>Sobre Mi</h3>
                                        <p className=''>{user?.about || 'No cuenta con una descripción'}</p>    
                                    </div>
                                </div>
                                <div className='tw-col-span-1'>
                                    <div className='tw-shadow-lg tw-bg-white tw-h-56 md:tw-h-64 2xl:tw-h-56 tw-w-full tw-rounded-md md:tw-py-2 tw-px-5 tw-overflow-hidden'>
                                        <h3 className='tw-mb-2 tw-text-xl tw-text-gray-600'>Dónde Trabajo</h3>
                                        <ul className='tw-flex tw-flex-col tw-gap-2'>
                                            <li className='mb-2'> 
                                                <strong>País:</strong>{' '}<span>{user?.addressId || 'Chile'}</span>    
                                            </li>
                                            <li className='mb-2'> 
                                                <strong>Región:</strong>{' '}<span>{user?.addressId || 'No encontramos Región'}</span>    
                                            </li>
                                            <li className='mb-2'> 
                                                <strong>Comuna:</strong>{' '}<span>{user?.addressId || 'No encontramos Comuna'}</span>    
                                            </li>
                                            <li className='mb-2'> 
                                                <strong>Dirección:</strong>{' '}<span>{user?.addressId || 'No encontramos dirección'}</span>    
                                            </li>
                                        </ul>
                                    </div>  
                                </div>

                        </div>
                        <div className='tw-shadow-lg tw-bg-white tw-h-96 tw-w-full tw-rounded-md tw-p-4 tw-px-5'>
                                <h3 className='tw-mb-2 tw-text-xl tw-text-gray-600'>Actividad Reciente</h3>
                                <p className=''>{user?.resumeFile || 'No cuenta con actividades realizadas recientemente...'}</p>     
                        </div>
    
                    </div>
                </Reveal>
            </Section>
        </>
    )
}

export default ProfileRealtor;