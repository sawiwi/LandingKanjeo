
// import imgProfile from '../../../assets/img/perfil/perfil.png'
import imgProfile from '../../../assets/img/perfil/perfil.png'
import imgBanner from '../../../assets/img/perfil/banner.webp'
import imgBanner2 from '../../../assets/img/perfil/banner2.webp'
import imgBanner3 from '../../../assets/img/perfil/banner3.webp'
import imgBanner4 from '../../../assets/img/perfil/banner4.webp'
import approve from '../../../assets/img/perfil/aprobar.png'

import {Reveal } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';

import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useState } from 'react';
import ModalContact from '../../modal/ModalContact';
import ContactUser from '../components/ContactModal/ContactUser';


const ResumeProfile = ({dataRealtor}) =>{
    const [openContact, setOpenContact] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [clicDataOpenContact, setClicDataOpenContact] = useState([]);
    const [clicDataOpenWebPage, setClicDataOpenWebPage] = useState([]);
    const [clicDataProfilRealtor, setClicProfilRealtor] = useState([]);

    

    const bannerImg = [imgBanner, imgBanner2, imgBanner3, imgBanner4];
    const [backgroundBanner, setBackgroundBanner] = useState('');

    useEffect(() => {
        const randomBanner = bannerImg[Math.floor(Math.random() * bannerImg.length)];
        setBackgroundBanner(randomBanner)

    }, [bannerImg])
    if (!dataRealtor) return null;

    const onCountoViewProfile = (id) => {
        const clicked = clicDataProfilRealtor.find(item => item.id === id);
        if (clicked) {
            setClicProfilRealtor(clicDataProfilRealtor.map(item => 
                item.id === id ? {...item, clicks: item.clicks + 1} : item
            ));
        }else {
            setClicProfilRealtor([...clicDataProfilRealtor, {id, clicks: 1}]);
        }
        // console.log('setClicProfilRealtor', clicDataProfilRealtor)
    }

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

    const handleOpenContact = (dataRealtor, id) => {
                //se salvan los clics en un contador a la vez que el id de la propiedad con su titulo respectivo
        const clicked = clicDataOpenContact.find(item => item.id === id);
        if (clicked) {
            setClicDataOpenContact(clicDataOpenContact.map(item => 
                item.id === id ? {...item, clicks: item.clicks + 1} : item
            ));
        }else {
            setClicDataOpenContact([...clicDataOpenContact, {id, clicks: 1}]);
        }
        // console.log('clicDataOpenContact', clicDataOpenContact)

        setSelectedUser(dataRealtor);
        setOpenContact(true);
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

    
    return(
        <>
            <Reveal
                    keyframes={fadeInUp}
                    delay={500}
                    duration={800}
                    triggerOnce={true}
                >
                <div className="overflow-hidden">
                    <h2 className="font-semibold text-3xl text-center">Resumen ficha</h2>
                    <div className="flex flex-col md:grid md:grid-cols-1 gap-4 text-gray-500">
                        <div className='relative h-full lg:h-full w-full rounded-md p-2 px-3'>
                            <img src={backgroundBanner} className='w-full h-52 object-cover rounded-md' alt='bannerImg' />
                            <img src={imgProfile} alt='profileImg' 
                            className='absolute top-32 border-4 border-gray-100 left-10 rounded-full h-36 w-36 shadow-lg' />                            
                            {dataRealtor?.session.accountConfirmed === true ? 
                                    <img src={approve} alt='ticket confirmado' 
                                        className='absolute top-56 left-36 h-10 w-10 hover:scale-110 duration-150'
                                        title='Cuenta confirmada'/> : 
                                        ''
                            }
                            <div className='mx-3 flex flex-col md:flex-row gap-2'>
                                <div className='w-full md:w-[52%]'>
                                    <h5 className='text-3xl text-gray-600 mt-16'>{dataRealtor.name ? dataRealtor.name : 'Cristian'} {dataRealtor.lastName ? dataRealtor.lastName : 'Arevalo'} </h5>
                                    <small className=''>Igniero comercial / {dataRealtor?.session.rol?.name ? dataRealtor?.session.rol?.name : 'Corredor' } de inmuebles</small>
                                        <ul className='flex flex-col gap-2 text-base mt-2'>
                                            <li className='mb-1'> 
                                                <strong>Teléfono:</strong>{' '}<span>{dataRealtor?.phone ? dataRealtor?.phone : 'Sin número'}</span>    
                                            </li>
                                            <li className='mb-1'> 
                                                <strong>Correo:</strong>{' '}<span>{dataRealtor?.session.email ? dataRealtor?.session.email : 'Sin correo'}</span>    
                                            </li>
                                            <li className='mb-1' > 
                                                {dataRealtor?.webPage ? 
                                                <div onClick={()=> onCountOpenPage(dataRealtor?.id)}>
                                                    <strong>Página web:</strong>{' '}<a href={'https://'+dataRealtor.webPage} alt="" className='' target='_blank' rel='noreferrer' >
                                                        <span>{dataRealtor?.webPage}</span>
                                                    </a> 
                                                </div>      
                                                : <>
                                                   <strong>Página web:</strong>{' '}<span>{dataRealtor?.webPage || 'No cuenta con página web'}</span>
                                                </> }
                                            </li>
                                        </ul>
                                </div>
                                <div className='w-full md:w-[48%]'>
                                        <ul className='flex flex-row gap-2 text-base xl:text-lg mt-8 md:mt-24 text-center'>
                                            <li className='mb-1 px-6'> 
                                                <strong>Cantidad propiedades</strong>{' '}<p>{dataRealtor?.activePropertyCount ? dataRealtor.activePropertyCount :'0'}</p>    
                                            </li>
                                            <li className='mb-1'> 
                                                <strong>Cantidad clientes</strong>{' '}<p>{dataRealtor?.totalCustomerCount ? dataRealtor.totalCustomerCount :'0'}</p>    
                                            </li>
                                        </ul>
                                </div>                    
                            </div>
                        </div>
                        <div className='grid grid-cols-1 gap-2 px-2'>
                            <div className='bg-white h-full w-full rounded-md p-4 px-5'>
                                <h3 className='mb-2 text-xl text-gray-600'>Sobre Mi</h3>
                                <p className=''>{dataRealtor?.about ? dataRealtor?.about : 'Sin descripción'}</p>    
                            </div>
                        </div>
                        <div className='flex flex-row justify-center md:justify-end px-2 gap-2'>
                            <button  
                                onClick={()=> handleOpenContact(selectedUser, dataRealtor.id)}
                                className='flex items-center hover-group bg-secondary-light hover:bg-secondary duration-200 text-white p-2 rounded-lg'>
                                 Contactar
                            </button>
                            <a onClick={() => onCountoViewProfile(dataRealtor.id)} 
                                href={`/perfil-corredor/${dataRealtor.id}`} target='_blank' rel='noreferrer' className='flex items-center hover-group bg-secondary-light hover:bg-secondary duration-200 text-white p-2 rounded-lg'>
                                Ver más <IoIosArrowForward className='mx-1 duration-150'/>
                            </a>
                        </div>
                    </div>
                </div>
     
            </Reveal>

            <ModalContact open={openContact} onClose={() => setOpenContact(false)}>
                    <div className='2xl:w-full mt-6 sm:mt-2'>
                        {dataRealtor ? <ContactUser dataUser={dataRealtor}/> : ''}
                    </div>
            </ModalContact>
         
        </>
    )
}

export default ResumeProfile;