import TitleSection from "../components/title-section";
import {Reveal } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
// import { FaRegShareSquare } from "react-icons/fa";
import { FaArrowLeft , FaArrowRight } from "react-icons/fa";

import { MdOutlinePersonSearch } from "react-icons/md";
import { IoGridOutline } from "react-icons/io5";
import { TbLayoutList } from "react-icons/tb";

import imgCasaUno from '../assets/img/Hero/casa1.webp'
import imgCasaTwo from '../assets/img/Hero/casa2.webp'
import imgCasaThree from '../assets/img/Hero/casa3.webp'

import imgSantiago from '../assets/img/region/santiago.webp'
import imgValparaiso from '../assets/img/region/valparaiso.webp'
import imgLaSerena from '../assets/img/region/laSerena.webp'
import imgIquique from '../assets/img/region/iquique.webp'

import bannerImg from '../assets/img/Comunidad/corredores.webp'
import LastProperties from "../components/portalProperties/LastProperties/LastProperties";



const PortalProperty = () =>{
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
            <div className="tw-overflow-hidden tw-bg-white tw-relative tw-px-4 sm:tw-px-8 lg:tw-px-24 tw-py-16 lg:tw-py-12 xl:tw-py-8 tw-my-16 lg:tw-my-8 xl:tw-my-6">
                <Reveal
                keyframes={fadeInUp}
                delay={500}
                duration={800}
                triggerOnce={true}
                >
                <TitleSection
                    className='lg:tw-mt-20'
                    title="Portal de propiedades"
                    subtitle="Encuentra las propiedades en canjes"
                    position="center"
                />
                {/* FILTROS AVANZADOS */}
                <div>
                    <LastProperties/>
                </div>
     
                {/* BANNER */}
                <div>
                    <div className="tw-hidden sm:tw-visible sm:tw-flex tw-mt-12 tw-my-6 2xl:tw-mx-32 tw-shadow-md tw-h-40 tw-relative">
                        <img src={bannerImg} alt="" className="tw-absolute -tw-z-30 md:tw-left-[44.1rem] 2xl:tw-left-[45.4rem] tw-object-cover md:tw-h-40 md:tw-w-[39%] 2xl:tw-h-full 2xl:tw-w-[50%]"/>
                        <div className=" tw-flex tw-flex-col tw-bg-secondary tw-rounded-e-full tw-text-gray-50 tw-shadow-md tw-text-center tw-p-2 tw-py-6 tw-w-[70%]">
                            <small>Para saber más sobre corredores</small>
                            <h4 className="tw-text-3xl">Busca y contacta con excelente corredores</h4>
                            <small className="tw-font-semibold tw-text-lg">Aquí es donde encontrarás verdaderos profesionales</small>
                        </div>
                        <div className=" tw-w-[30%] ">
                            <div className="tw-flex tw-justify-center md:tw-mt-8 2xl:tw-mt-7">
                                <a href="/portal-corredores" target="_blank" rel="noreferrel" className="tw-flex tw-items-center tw-gap-2 tw-bg-secondary tw-text-gray-50 tw-rounded-md tw-p-2 tw-px-4 tw-mt-10 tw-border tw-border-secondary hover:tw-bg-gray-50 hover:tw-text-secondary hover:tw-border-secondary tw-duration-150">Buscar Corredores <MdOutlinePersonSearch/></a>
                            </div>
                        </div>
                    </div>
                </div>
           
                {/* FILTROS REGION */}
                <div>
                    <div className="tw-flex tw-justify-center tw-my-10 md:tw-mt-14 tw-mx-2 2xl:tw-mx-32">
                        <h2 className="tw-text-gray-700 tw-text-xl tw-text-center md:tw-text-start md:tw-text-2xl tw-font-medium">Regiones donde más se hacen canjes</h2>
                    </div>
                    <div className="tw-flex md:tw-flex-row tw-justify-center tw-mt-12 tw-my-6 tw-mx-32 tw-h-40 tw-gap-6"> 
                        <div>
                            <div className="tw-h-20 tw-w-20 md:tw-h-32 md:tw-w-32 2xl:tw-h-36 2xl:tw-w-36 tw-text-center">
                            <small className="tw-font-semibold tw-text-lg tw-mb-5 tw-text-gray-600">Santiago</small>
                                <img src={imgSantiago} className="tw-object-cover tw-cursor-pointer tw-rounded-full tw-h-full tw-w-full tw-my-3 hover:tw-scale-105 hover:tw-shadow-xl tw-duration-150" alt=""/>
                            </div>
                        </div>
                        <div>
                            <div className="tw-h-20 tw-w-20 md:tw-h-32 md:tw-w-32 2xl:tw-h-36 2xl:tw-w-36 tw-text-center">
                                <small className="tw-font-semibold tw-text-lg tw-mb-5 tw-text-gray-600">Valparaiso</small>
                                <img src={imgValparaiso} className="tw-object-cover tw-cursor-pointer tw-rounded-full tw-h-full tw-w-full tw-my-3  hover:tw-scale-105 hover:tw-shadow-xl tw-duration-150" alt=""/>
                            </div>
                        </div>
                        <div>
                            <div className="tw-h-20 tw-w-20 md:tw-h-32 md:tw-w-32 2xl:tw-h-36 2xl:tw-w-36 tw-text-center">
                                <small className="tw-font-semibold tw-text-lg tw-mb-5 tw-text-gray-600">La Serena</small>
                                <img src={imgLaSerena} className="tw-object-cover tw-cursor-pointer tw-rounded-full tw-h-full tw-w-full tw-my-3 hover:tw-scale-105 hover:tw-shadow-xl tw-duration-150" alt=""/>
                            </div>
                        </div>
                        <div>
                            <div className="tw-h-20 tw-w-20 md:tw-h-32 md:tw-w-32 2xl:tw-h-36 2xl:tw-w-36 tw-text-center">  
                                <small className="tw-font-semibold tw-text-lg tw-mb-5 tw-text-gray-600">Iquique</small>
                                <img src={imgIquique} className="tw-object-cover tw-cursor-pointer tw-rounded-full tw-h-full tw-w-full tw-my-3 hover:tw-scale-105 hover:tw-shadow-xl tw-duration-150" alt=""/>
                            </div>
                        </div>
                        
                    </div>
                    <div className="tw-flex sm:tw-justify-start md:tw-mt-16 tw-items-center tw-mx-3 2xl:tw-mx-32">
                        <div className="tw-flex tw-gap-2 tw-my-2">
                            <p className="tw-text-gray-500">Propiedades encontradas:</p><span className="tw-font-light tw-cursor-pointer">3</span>
                        </div>
                    </div>
                    <div className="tw-grid tw-grid-row tw-grid-cols-1 lg:tw-grid-cols-2 2xl:tw-grid-cols-3 tw-gap-6 2xl:tw-gap-2 tw-mt-2 tw-my-3 tw-mx-3 2xl:tw-mx-32">
                        <article className="tw-shadow-lg tw-flex tw-flex-col tw-border-2 tw-h-full md:tw-h-[360px] tw-w-full tw-p-2 tw-group">
                            <div className="tw-mb-2 tw-relative">
                                <img src={imgCasaUno} alt="img-casa" className="tw-h-64 tw-w-full tw-object-cover tw-rounded-md group-hover:-tw-translate-y-2 tw-duration-200 tw-shadow-md" />
                            </div>
                            <div className="">
                            <h2 className="tw-font-semibold tw-text-center tw-text-xl">Titulo de la casa</h2>
                            <div className="md:tw-mx-4 tw-mt-2 tw-flex tw-flex-row tw-justify-between tw-items-center">
                                    <div className="tw-mx-4 tw-flex">
                                        <p className="tw-font-semibold">Santiago, Providencia</p>
                                    </div>
                                    <div className="tw-flex tw-gap-2 tw-items-center">
                                        <p>DESDE <b>3.200 UF</b></p>
                                    </div>
                            </div>
                            </div>
                        </article>
                        <article className="tw-shadow-lg tw-flex tw-flex-col tw-border-2 tw-h-full md:tw-h-[360px] tw-w-full tw-p-2 tw-group">
                            <div className="tw-mb-2 tw-relative">
                                <img src={imgCasaThree} alt="img-casa" className="tw-h-64 tw-w-full tw-object-cover tw-rounded-md group-hover:-tw-translate-y-2 tw-duration-200 tw-shadow-md" />
                            </div>
                            <div className="">
                            <h2 className="tw-font-semibold tw-text-center tw-text-xl">Titulo de la casa</h2>
                            <div className="md:tw-mx-4 tw-mt-2 tw-flex tw-flex-row tw-justify-between tw-items-center">
                                    <div className="tw-mx-4 tw-flex">
                                        <p className="tw-font-semibold">Santiago, Providencia</p>
                                    </div>
                                    <div className="tw-flex tw-gap-2 tw-items-center">
                                        <p>DESDE <b>3.200 UF</b></p>
                                    </div>
                            </div>
                            </div>
                        </article>
                        <article className="tw-shadow-lg tw-flex tw-flex-col tw-border-2 tw-h-full md:tw-h-[360px] tw-w-full tw-p-2 tw-group">
                            <div className="tw-mb-2 tw-relative">
                                <img src={imgCasaTwo} alt="img-casa" className="tw-h-64 tw-w-full tw-object-cover tw-rounded-md group-hover:-tw-translate-y-2 tw-duration-200 tw-shadow-md" />
                            </div>
                            <div className="">
                            <h2 className="tw-font-semibold tw-text-center tw-text-xl">Titulo de la casa</h2>
                            <div className="md:tw-mx-4 tw-mt-2 tw-flex tw-flex-row tw-justify-between tw-items-center">
                                    <div className="tw-mx-4 tw-flex">
                                        <p className="tw-font-semibold">Santiago, Providencia</p>
                                    </div>
                                    <div className="tw-flex tw-gap-2 tw-items-center">
                                        <p>DESDE <b>3.200 UF</b></p>
                                    </div>
                            </div>
                            </div>
                        </article>
                    </div>
                </div>

                </Reveal>
        </div>
        </>
    )
}

export default PortalProperty;