import TitleSection from "../components/title-section";
import {Reveal } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
// import { FaRegShareSquare } from "react-icons/fa";
import { FaArrowLeft , FaArrowRight } from "react-icons/fa";

import { MdOutlinePersonSearch } from "react-icons/md";
import { IoGridOutline } from "react-icons/io5";
import { TbLayoutList } from "react-icons/tb";

import { SelectsContext } from "../context/selects/SelectsContext";
import SelectsProvider from "../context/selects/SelectsProvider";
import { useContext } from "react";

import bannerImg from '../assets/img/Comunidad/corredores.webp'
import LastProperties from "../components/portalProperties/LastProperties/LastProperties";
import FilterRegionsProperties from "../components/portalProperties/PropertiesRegion/RegionProperties";

// import PropertiesProvider from "../context/properties/PropertiesProvider";



const PortalProperty = () =>{
    const {contextData} = useContext(SelectsContext);
    const {      
        regions,
        communes,
        stateId,
        setStateId,
        operationType,
        typeOfProperty,
        selectedSelects,
        setSelectedSelects,
    } = contextData;

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
            <div className="overflow-hidden bg-white relative px-4 sm:px-8 lg:px-24 py-16 lg:py-12 xl:py-8 my-16 lg:my-8 xl:my-6">
                <Reveal
                    keyframes={fadeInUp}
                    delay={500}
                    duration={800}
                    triggerOnce={true}
                >
                <TitleSection
                    className='lg:mt-20'
                    title="Portal de propiedades"
                    subtitle="Encuentra las propiedades publicadas"
                    position="center"
                />         
                <div>
                    <SelectsProvider>
                        <LastProperties
                            regions={regions}
                            communes={communes}
                            stateId={stateId}
                            setStateId={setStateId}
                            operationType={operationType} 
                            typeOfProperty={typeOfProperty}
                            selectedSelects={selectedSelects} 
                            setSelectedSelects={setSelectedSelects}
                            />
                    </SelectsProvider>
                </div>
     
                {/* BANNER */}
                <div className="bg-gray-800/50 sm:bg-transparent h-80 xl:h-72 2xl:h-60">
                    <div className="visible flex flex-col sm:flex-row  mb-10 sm:mt-12 2xl:mt-20 my-6 2xl:mx-32 shadow-md h-40 relative">
                        <img src={bannerImg} alt="" className="absolute  -z-30 md:left-[44.1rem] 2xl:left-[45.4rem] object-cover md:h-40 h-80 md:w-[39%] 2xl:h-full 2xl:w-[50%]"/>
                        <div className="flex flex-col sm:bg-secondary rounded-e-full text-gray-50 shadow-md text-center sm:p-2 py-6 w-full sm:w-[70%]">
                            <small>Para saber más sobre corredores</small>
                            <h4 className="text-3xl">Busca y contacta con excelente corredores</h4>
                            <small className="font-semibold text-lg">Aquí es donde encontrarás verdaderos profesionales</small>
                        </div>
                        <div className="w-full justify-center sm:w-[30%]">
                            <div className="flex justify-center md:mt-8 2xl:mt-7">
                                <a href="/portal-corredores" target="_blank" rel="noreferrel" className="flex items-center gap-2 bg-secondary text-gray-50 rounded-md p-2 px-4 mt-10 border border-secondary hover:bg-gray-50 hover:text-secondary hover:border-secondary duration-150">Buscar Corredores <MdOutlinePersonSearch/></a>
                            </div>
                        </div>
                    </div>
                </div>
           
                {/* FILTROS REGION */} 
                <div>
                    <FilterRegionsProperties/>
                </div>

                </Reveal>
        </div>
        </>
    )
}

export default PortalProperty;