import Section from '../../section';
import {Reveal } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

import imgProfile from '../../../assets/img/perfil/perfil.png'
import imgBanner from '../../../assets/img/perfil/banner.webp'
import imgBanner2 from '../../../assets/img/perfil/banner2.webp'
import imgBanner3 from '../../../assets/img/perfil/banner3.webp'
import imgBanner4 from '../../../assets/img/perfil/banner4.webp'
import approve from '../../../assets/img/perfil/aprobar.png'
import notApprove from '../../../assets/img/perfil/precaucion.png'

import { useParams } from 'react-router-dom';
import UsersServices from '../../../services/portal-users/UsersServices';
import { useEffect, useState } from 'react';
import ModalProfile from '../../modal/ModalContactProfile';
import ContactProfile from '../components/ContactProfile/ContactProfile';
import DetailPropsRealtor from './detailsRealtor/DetailPropRealtor';
import DetailRealtors from './detailsRealtor/DetailCantRealtor';
import RecentActivities from './detailsRealtor/RecentActivities';
const ProfileRealtor = () => {
    const {id} = useParams();
    const [user, setUser] = useState();
    const [openContact, setOpenContact] = useState(false);
    const [openCantProp, setOpenCantProp] = useState(false);
    const [openCantRealtor, setOpenCantRealtor] = useState(false);

    const [clicDataOpenWebPage, setClicDataOpenWebPage] = useState([]);
    const [clicDataOpenContact, setClicDataOpenContact] = useState([]);
    

    const handleOpenContact = (id) => {
        const clicked = clicDataOpenContact.find(item => item.id === id);
        if (clicked) {
            setClicDataOpenContact(clicDataOpenContact.map(item => 
                item.id === id ? {...item, clicks: item.clicks + 1} : item
            ));
        }else {
            setClicDataOpenContact([...clicDataOpenContact, {id, clicks: 1}]);
        }
        console.log('clicDataOpenContact', clicDataOpenContact)

        setOpenContact(true);
    };

    const openDetailProp = () =>{
        setOpenCantProp(true);
        setOpenCantRealtor(false);
    }
    // const openDetailRealtor = () =>{
    //     setOpenCantRealtor(true);
    //     setOpenCantProp(false);
    // }

    const bannerImg = [imgBanner, imgBanner2, imgBanner3, imgBanner4];
    const [backgroundBanner, setBackgroundBanner] = useState('');

    useEffect(() => {
        const randomBanner = bannerImg[Math.floor(Math.random() * bannerImg.length)];
        setBackgroundBanner(randomBanner)

    }, [bannerImg])

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

    const onCountOpenPage = (id) => {
        const clicked = clicDataOpenWebPage.find(item => item.id === id);
        if (clicked) {
            setClicDataOpenWebPage(clicDataOpenWebPage.map(item => 
                item.id === id ? {...item, clicks: item.clicks + 1} : item
            ));
        }else {
            setClicDataOpenWebPage([...clicDataOpenWebPage, {id, clicks: 1}]);
        }
        // console.log('clicDataOpenWebPage', clicDataOpenWebPage)

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

    const fadeInDown = keyframes`
    0% {
        opacity: 0;
        -webkit-transform: translateY(-80px);
        transform: translateY(-80px);
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
                    triggerOnce={true}
                >
                    {!user ? <p>Cargando Corredor...</p> : ''}
                    <div className="grid grid-row grid-cols-1 gap-4 sm:mt-10 md:mx-16 text-gray-500">
                        <div className='relative shadow-lg bg-white h-full md:h-96 lg:h-[460px] 2xl:h-[480px] w-full rounded-md mt-6 xl:mt-3 mb-2 2xl:mb-0 p-2 px-3'>
                            <img src={backgroundBanner} className='w-full h-52 object-cover object-center rounded-md' alt='bannerImg' />

                            <img src={imgProfile} alt='profileImg' className='absolute top-32 border-4 border-gray-100 left-10 rounded-full h-36 w-36 shadow-lg' />
                            {user?.session.accountConfirmed === true ? 
                                    <img src={approve} alt='ticket confirmado' 
                                        className='absolute top-56 left-36 h-10 w-10 hover:scale-110 duration-150'
                                        title='Cuenta confirmada'/> : 
                                        ''
                                    // <img src={notApprove} alt='por confirmar'  
                                    // className='absolute top-56 left-36 h-11 w-11 hover:scale-110 duration-150'
                                    // title='Cuenta por confirmar' />
                                    }
                         
                            <div className='mx-3 flex flex-col md:grid grid-cols-1 lg:grid-cols-3 gap-2'>
                                <div className='md:col-span-2'>
                                    <h5 className='text-3xl text-gray-600 mt-16'>{user?.name || 'No hay nombre'} {user?.lastName || 'No hay apellido'}</h5>
                                    <small className=''>Ingeniero comercial / {user?.session.rol.name || 'Corredor'} de inmuebles</small>
                                        <ul className='flex flex-col gap-2 text-base mt-2'>
                                            <li className='mb-1'> 
                                                <strong>Teléfono:</strong>{' '}<span>{user?.phone || 'Sin número'}</span>    
                                            </li>
                                            <li className='mb-1'> 
                                                <strong>Correo:</strong>{' '}<span>{user?.session.email || 'Sin correo'}</span>    
                                            </li>
                                            <li className='mb-1'>
                                                {user?.webPage ? <div onClick={()=> onCountOpenPage(user?.id)}>
                                                    <strong>Página web:</strong>{' '}<a href={'https://'+user?.webPage} target='_blank' rel='noreferrer' alt="" className='' >
                                                        <span>{user?.webPage}</span>
                                                    </a> 
                                                </div>      
                                                : <>
                                                     <strong>Página web:</strong>{' '}<span>{user?.webPage || 'No cuenta con página web'}</span>
                                                </> }
                                            </li>
                                            {/* <li className='mb-1'>
                                                {user?.externalLink ? <>
                                                    <strong>Propiedad en portal:</strong>{' '}<a href={'https://'+user?.externalLink} target='_blank' rel='noreferrer' alt="" className='' >
                                                        <span>{user?.externalLink}</span>
                                                    </a> 
                                                </>      
                                                : <>
                                                     <strong>Propiedad en portal:</strong>{' '}<span>{user?.externalLink || 'No cuenta con Propiedad en portal'}</span>
                                                </> }
                                            </li> */}
                                        </ul>
                                </div>
                                <div className='md:col-span-1'>
                                        <ul className='flex flex-row gap-2 text-base md:text-lg 2xl:text-xl mt-4 md:mt-24 text-center'>
                                            <li className='mb-1 px-6 hover:scale-105 duration-200'> 
                                                <button className='' onClick={openDetailProp}>
                                                    <strong>Cantidad propiedades</strong>{' '}<p>{user?.activePropertyCount || '0'}</p>    
                                                </button>
                                            </li>
                                          
                                            <li className='mb-1'> 
                                                <p className='' 
                                                // onClick={openDetailRealtor}
                                                >
                                                    <strong>Cantidad clientes</strong>{' '}<p>{user?.totalCustomerCount || '0'}</p>    
                                                </p>
                                            </li>
                                        </ul>
                                        <div className='flex justify-end mt-2 2xl:mt-6 2xl:mr-6'>
                                            <button  
                                                onClick={()=> handleOpenContact(id)}
                                                className='flex items-center hover-group bg-secondary-light hover:bg-secondary duration-200 text-white p-2 rounded-lg'>
                                                Contactar
                                            </button>
                                        </div>
                                </div>                    
                            </div>
                        </div>
                        {
                            openCantProp ? 
                            <Reveal
                                keyframes={fadeInDown}
                                delay={300}
                                duration={800}
                                triggerOnce={true}
                                >
                                <DetailPropsRealtor data={user}  onClose={() => setOpenCantProp(false)}/>
                            </Reveal> : ''
                        }
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
                                        <p className=''>{user?.about || 'No cuenta con una descripción'}</p>    
                                    </div>
                                </div>
                                <div className='col-span-1 mb-2'>
                                    <div className='shadow-lg bg-white h-56 md:h-64 2xl:h-56 w-full rounded-md md:py-2 px-5 overflow-hidden'>
                                        <h3 className='mb-2 text-xl text-gray-600'>Dónde Trabajo</h3>
                                        <ul className='flex flex-col gap-2'>
                                            <li className='mb-2'> 
                                                <strong>País:</strong>{' '}<span>{user?.address?.country.name || 'Chile'}</span>    
                                            </li>
                                            <li className='mb-2'> 
                                                <strong>Región:</strong>{' '}<span>{user?.address?.internalDbCity.name || 'No encontramos Región'}</span>    
                                            </li>
                                            <li className='mb-2'> 
                                                <strong>Comuna:</strong>{' '}<span>{user?.address?.internalDbState.name || 'No encontramos Comuna'}</span>    
                                            </li>
                                            <li className='mb-2'> 
                                                <strong>Dirección:</strong>{' '}<span>{user?.address?.street || 'No encontramos dirección'}</span>    
                                            </li>
                                        </ul>
                                    </div>  
                                </div>
                        </div>
                        <div className='shadow-lg bg-white h-full md:h-96 w-full rounded-md p-4 px-5'>
                            <h3 className='mb-2 text-xl text-gray-600'>Actividad Reciente</h3>
                            <RecentActivities data={user} />
                        </div>
    
                    </div>
                </Reveal>

                <ModalProfile open={openContact} onClose={() => setOpenContact(false)}>
                    <div className='mt-6 sm:mt-2'>
                       <ContactProfile dataUser={user}/>
                    </div>
                </ModalProfile>
            </Section>
        </>
    )
}

export default ProfileRealtor;