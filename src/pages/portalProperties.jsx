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
                <div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-items-center md:tw-mx-36 2xl:tw-mx-96 tw-gap-2 tw-mt-10 tw-w-full md:tw-w-96">
                    <div className="tw-grid tw-mb-1">
                        <label className="tw-font-semibold tw-mb-1" for="typeProperty">Tipo de propiedad</label>
                        <input
                        type="text"
                        id="typeProperty"
                        className="tw-rounded-md placeholder:tw-text-gray-400 tw-p-2 tw-border-2"
                        placeholder="Casa"

                        ></input>
                    </div>
                    <div className="tw-grid tw-mb-1">
                        <label className="tw-font-semibold tw-mb-1" for="typeOperation">Tipo de operación</label>
                        <input
                        type="text"
                        id="typeOperation"
                        className="tw-rounded-md placeholder:tw-text-gray-400 tw-p-2 tw-border-2"
                        placeholder="Venta"

                        ></input>
                    </div>
                    <div className="tw-grid tw-mb-1">
                        <label className="tw-font-semibold tw-mb-1" for="region">Región</label>
                        <input
                        type="text"
                        id="region"
                        className="tw-rounded-md placeholder:tw-text-gray-400 tw-p-2 tw-border-2"
                        placeholder="Metropolitana"

                        ></input>
                    </div>
                    <div className="tw-grid tw-mb-1">
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
                <div className="tw-flex tw-flex-col xl:tw-flex-row tw-justify-between tw-items-center tw-mx-2 2xl:tw-mx-32">
                    <div className="tw-flex tw-gap-3 tw-text-sm tw-my-3">
                        <p className="tw-text-gray-500">Últimas propiedades en canjes hoy </p><span className="tw-font-light tw-cursor-pointer">Ver más</span>
                    </div>
                    <ul className="tw-flex tw-gap-3">
                        <li className="">
                            <button className="hover:tw-font-semibold tw-duration-200 tw-cursor-pointer tw-rounded-lg tw-shadow-2xl tw-bg-gray-200 tw-h-8 tw-w-8 tw-p-1 tw-px-2">
                                <IoGridOutline className="tw-text-gray-600 tw-text-lg"/>
                            </button>
                        </li>
                        <li className="hover:tw-font-semibold tw-duration-200 tw-cursor-pointer">
                            <button className="hover:tw-font-semibold tw-duration-200 tw-cursor-pointer tw-rounded-lg tw-shadow-2xl tw-bg-gray-200 tw-h-8 tw-w-8 tw-p-1 tw-px-2">
                                <TbLayoutList className="tw-text-gray-600 tw-text-lg"/>
                            </button>
                        </li>                
                    </ul>
                </div>
                <div className="tw-grid tw-grid-row tw-grid-cols-1 lg:tw-grid-cols-2 2xl:tw-grid-cols-3 tw-gap-6 2xl:tw-gap-2 tw-mt-4 tw-mb-4 tw-mx-3 2xl:tw-mx-32">
                    <article className="tw-shadow-lg tw-flex tw-flex-col tw-border-2 tw-h-full md:tw-h-96 tw-w-full tw-p-2 tw-group">
                        <div className="tw-mb-2 tw-relative">
                            <img src={imgCasaUno} alt="img-casa" className="tw-h-44 tw-w-full tw-object-cover tw-rounded-md group-hover:-tw-translate-y-2 tw-duration-200 tw-shadow-md" />
                            <small className="tw-absolute tw-top-1 tw-left-1 tw-p-[0.15rem] tw-px-4 tw-font-normal tw-opacity-100 group-hover:tw-opacity-70 tw-bg-secondary tw-text-gray-50 tw-rounded-sm group-hover:tw-top-0 tw-duration-200">
                                Casa
                            </small>
                            <small className="tw-absolute tw-top-8 tw-left-1 tw-p-[0.18rem] tw-px-4 tw-font-normal tw-opacity-100 group-hover:tw-opacity-70 tw-bg-secondary tw-text-gray-50 tw-rounded-sm group-hover:tw-top-7 tw-duration-200">
                                Venta
                            </small>
                        </div>
                        <div className="tw-mx-2">
                           <h2 className="tw-font-semibold tw-text-center tw-text-lg">Titulo de la casa</h2>
                           <div className="tw-mx-4 tw-mb-2 tw-my-3 tw-flex tw-flex-row tw-justify-between tw-items-center">
                                <p><b>$ 20.000.000</b></p>
                                <p><b>UF 3.200</b></p>
                           </div>
                            <ul className="tw-flex tw-flex-col sm:tw-flex-row tw-mx-4 tw-gap-2 tw-justify-between">
                                <li className="tw-flex tw-justify-start tw-items-center tw-gap-2 sm:tw-text-center sm:tw-grid ">
                                        <span>Baños</span>
                                        <small>2</small>
                                </li>
                                <li className="tw-flex tw-justify-start tw-items-center tw-gap-2 sm:tw-text-center sm:tw-grid ">
                                        <span>Dormitorio(s)</span>
                                        <small>2</small>
                                </li>
                                <li className="tw-flex tw-justify-start tw-items-center tw-gap-2 sm:tw-text-center sm:tw-grid ">
                                        <span>Mts cuadrados</span>
                                        <small>200mts</small>
                                </li>
                                <li className="tw-flex tw-justify-start tw-items-center tw-gap-2 sm:tw-text-center sm:tw-grid ">
                                        <span>Estacionamiento</span>
                                        <small>Si</small>
                                </li>
                                
                            </ul>
                            <div className="tw-mx-4 tw-mb-2 tw-mt-8 tw-flex tw-flex-row tw-justify-center tw-items-center">
                                <p className="tw-font-medium">Metropolitana, Providencia</p>
                           </div>
                        </div>
                    </article>
                    <article className=" tw-shadow-lg tw-flex tw-flex-col tw-border-2 tw-h-full md:tw-h-96 tw-w-full tw-p-2 tw-group">
                        <div className="tw-mb-2 tw-relative">
                            <img src={imgCasaThree} alt="img-casa" className="tw-h-44 tw-w-full tw-object-cover tw-rounded-md group-hover:-tw-translate-y-2 tw-duration-200 tw-shadow-md" />
                            <small className="tw-absolute tw-top-1 tw-left-1 tw-p-[0.15rem] tw-px-4 tw-font-normal tw-opacity-100 group-hover:tw-opacity-70 tw-bg-secondary tw-text-gray-50 tw-rounded-sm group-hover:tw-top-0 tw-duration-200">
                                Casa
                            </small>
                            <small className="tw-absolute tw-top-8 tw-left-1 tw-p-[0.18rem] tw-px-4 tw-font-normal tw-opacity-100 group-hover:tw-opacity-70 tw-bg-secondary tw-text-gray-50 tw-rounded-sm group-hover:tw-top-7 tw-duration-200">
                                Venta
                            </small>
                        </div>
                        <div className="tw-mx-2">
                           <h2 className="tw-font-semibold tw-text-center tw-text-lg">Titulo de la casa</h2>
                           <div className="tw-mx-4 tw-mb-2 tw-my-3 tw-flex tw-flex-row tw-justify-between tw-items-center">
                                <p><b>$ 20.000.000</b></p>
                                <p><b>UF 3.200</b></p>
                           </div>
                            <ul className="tw-flex tw-flex-col sm:tw-flex-row tw-mx-4 tw-gap-2 tw-justify-between">
                                <li className="tw-flex tw-justify-start tw-items-center tw-gap-2 sm:tw-text-center sm:tw-grid ">
                                        <span>Baños</span>
                                        <small>2</small>
                                </li>
                                <li className="tw-flex tw-justify-start tw-items-center tw-gap-2 sm:tw-text-center sm:tw-grid ">
                                        <span>Dormitorio(s)</span>
                                        <small>2</small>
                                </li>
                                <li className="tw-flex tw-justify-start tw-items-center tw-gap-2 sm:tw-text-center sm:tw-grid ">
                                        <span>Mts cuadrados</span>
                                        <small>200mts</small>
                                </li>
                                <li className="tw-flex tw-justify-start tw-items-center tw-gap-2 sm:tw-text-center sm:tw-grid ">
                                        <span>Estacionamiento</span>
                                        <small>Si</small>
                                </li>
                                
                            </ul>
                            <div className="tw-mx-4 tw-mb-2 tw-mt-8 tw-flex tw-flex-row tw-justify-center tw-items-center">
                                <p className="tw-font-medium">Metropolitana, Providencia</p>
                           </div>
                        </div>
                    </article>
                    <article className=" tw-shadow-lg tw-flex tw-flex-col tw-border-2 tw-h-full md:tw-h-96 tw-w-full tw-p-2 tw-group">
                        <div className="tw-mb-2 tw-relative">
                            <img src={imgCasaTwo} alt="img-casa" className="tw-h-44 tw-w-full tw-object-cover tw-rounded-md group-hover:-tw-translate-y-2 tw-duration-200 tw-shadow-md" />
                            <small className="tw-absolute tw-top-1 tw-left-1 tw-p-[0.15rem] tw-px-4 tw-font-normal tw-opacity-100 group-hover:tw-opacity-70 tw-bg-secondary tw-text-gray-50 tw-rounded-sm group-hover:tw-top-0 tw-duration-200">
                                Casa
                            </small>
                            <small className="tw-absolute tw-top-8 tw-left-1 tw-p-[0.18rem] tw-px-4 tw-font-normal tw-opacity-100 group-hover:tw-opacity-70 tw-bg-secondary tw-text-gray-50 tw-rounded-sm group-hover:tw-top-7 tw-duration-200">
                                Venta
                            </small>
                        </div>
                        <div className="tw-mx-2">
                           <h2 className="tw-font-semibold tw-text-center tw-text-lg">Titulo de la casa</h2>
                           <div className="tw-mx-4 tw-mb-2 tw-my-3 tw-flex tw-flex-row tw-justify-between tw-items-center">
                                <p><b>$ 20.000.000</b></p>
                                <p><b>UF 3.200</b></p>
                           </div>
                            <ul className="tw-flex tw-flex-col sm:tw-flex-row tw-mx-4 tw-gap-2 tw-justify-between">
                                <li className="tw-flex tw-justify-start tw-items-center tw-gap-2 sm:tw-text-center sm:tw-grid ">
                                        <span>Baños</span>
                                        <small>2</small>
                                </li>
                                <li className="tw-flex tw-justify-start tw-items-center tw-gap-2 sm:tw-text-center sm:tw-grid ">
                                        <span>Dormitorio(s)</span>
                                        <small>2</small>
                                </li>
                                <li className="tw-flex tw-justify-start tw-items-center tw-gap-2 sm:tw-text-center sm:tw-grid ">
                                        <span>Mts cuadrados</span>
                                        <small>200mts</small>
                                </li>
                                <li className="tw-flex tw-justify-start tw-items-center tw-gap-2 sm:tw-text-center sm:tw-grid ">
                                        <span>Estacionamiento</span>
                                        <small>Si</small>
                                </li>
                                
                            </ul>
                            <div className="tw-mx-4 tw-mb-2 tw-mt-8 tw-flex tw-flex-row tw-justify-center tw-items-center">
                                <p className="tw-font-medium">Metropolitana, Providencia</p>
                           </div>
                        </div>
                    </article>
                </div>
                <div className="tw-flex tw-flex-row tw-justify-center tw-gap-3 tw-m-2 tw-my-10 2xl:tw-mx-32">
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
                    </div>

                {/* BANNER */}
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
                {/* FILTROS REGION */}
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
                </Reveal>
        </div>
        </>
    )
}

export default PortalProperty;