import imgArica from '../../../assets/img/region/arica.webp'
import imgTarapaca from '../../../assets/img/region/tarapaca.webp'
import imgAntofagasta from '../../../assets/img/region/antofagasta.webp'
import imgIquique from '../../../assets/img/region/iquique.webp'
import imgAtacama from '../../../assets/img/region/atacama.webp'
import imgCoquimbo from '../../../assets/img/region/coquimbo.webp'
import imgLaSerena from '../../../assets/img/region/laSerena.webp'
import imgValparaiso from '../../../assets/img/region/valparaiso.webp'
import imgSantiago from '../../../assets/img/region/santiago.webp'
import imgRancagua from '../../../assets/img/region/rancagua.webp'
import imgMaule from '../../../assets/img/region/maule.webp'
import imgNuble from '../../../assets/img/region/nuble.webp'
import imgBiobio from '../../../assets/img/region/biobio.webp'
import imgAraucania from '../../../assets/img/region/araucania.webp'
import imgRios from '../../../assets/img/region/valdiviaLosRios.webp'
import imgLagos from '../../../assets/img/region/losLagos.webp'
import imgAysen from '../../../assets/img/region/aysen.webp'
import imgPtaArenas from '../../../assets/img/region/punta-arenas.webp'


import {Reveal} from "react-awesome-reveal";
import { keyframes } from '@emotion/react';

import { MdCancel } from "react-icons/md";
import Modal from '../../modal/Modal'
import { useState, useContext, useEffect } from 'react'
import ModalLastProperties from '../LastProperties/components/ModalLastProperties'
import { PropertiesContext } from "../../../context/properties/PropertiesContext";
import PropertiesServices from '../../../services/portal-properties/PropertiesServices'
import { parseToCLPCurrency, clpToUf, clpToUf2, ufToClp, parseToDecimal } from '../../../utils/truncateExchange'
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'
import { BiBuildingHouse } from "react-icons/bi";
import NotFoundProp from "../../../assets/img/portal-prop/arquitectura.png"



const FilterRegionsProperties = () =>{
    const [regionExchange, setRegionExchange] = useState([]);
    const [contactOpen, setContactOpen] = useState(false);
    const [selectedProperty, setSelectedProperty] = useState(null);
    const { contextData } = useContext(PropertiesContext);
    const {
        propertiesInExchange,
        page,
        setPage,
        valueUf,
    } = contextData;
    const [moreProp, setMoreProp] = useState(false);
    const [rangeProp, setRangeProp] = useState([0,3]);
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [clicDataOpenContact, setClicDataOpenContact] = useState([]);


    const onOpenContact = async (id) =>{
        const clicked = clicDataOpenContact.find(item => item.id === id);
        let updateClicks;

        if (clicked) {
            updateClicks = clicDataOpenContact.map(item => 
                item.id === id ? {...item, clicks: item.clicks + 1} : item
            );
        }else {
            updateClicks = [...clicDataOpenContact, {id, clicks: 1}];
        }
        const property = await PropertiesServices.getProperty(id);
        
        setClicDataOpenContact(updateClicks);
        setSelectedProperty(property);
        setContactOpen(true);

        const formData = {
            clickOfExternalLink: 0,
            clickOfOpenContact: 1,
            clickOfSendContact: 0
        }

        try {
            await PropertiesServices.getClicksProperties(id, formData);
            // console.log('Datos enviados correctamente', formData);
        }catch (error){
            console.log('Error al enviar los clics', error)
        }

    }

    const onCloseContact = () =>{
        setContactOpen(false)
    }
        //limitare los caracteres y poniendo ... en su lugar si es demasiado largo
    const truncate = (str, n) => {
            return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    };
    
    const formatPrice = (currencyId, propertyPrice) => {
            let ufValue = propertyPrice;
            let clpValue = propertyPrice;
    
            if(valueUf && valueUf.Valor){
                // const valueIntUf = valueUf.Valor.replace(/\./g, '').replace(',', '.');
                const valueIntUf = parseFloat(valueUf.Valor.replace(/\./g, '').replace(',', '.'))
    
                if(currencyId === 'UF'){
                    clpValue = ufToClp(propertyPrice, valueIntUf);
                }
                if(currencyId === 'CLP'){
                    ufValue = clpToUf2(propertyPrice, valueIntUf)
                }
            }
            else{
                clpValue = 0;
                ufValue = 0;
            }
    
            return (
                <div>
                    <div className="flex gap-2 items-center text-center">
                        <p>DESDE {' '}
                            <b>{parseToDecimal(ufValue)} UF</b>
                        </p>
                    </div>
                </div>
    
            )
    
    };

    const toggleMoreProp = () => {
        if(moreProp){
            setRangeProp([0, 3]);
        }else{
            setRangeProp([0 ,propertiesInExchange.length])
        }
        setMoreProp(!moreProp)
    };

    const toggleMoreNext = (direction) => {
        const upRange = 3;
        let newRange;
        if (direction === 'up') {
            newRange = [
                Math.max(rangeProp[0] - upRange, 0),
                Math.max(rangeProp[1] - upRange, 3)
            ];
        } else {
            newRange = [
                Math.min(rangeProp[0] + upRange, propertiesInExchange.length - 1),
                Math.min(rangeProp[1] + upRange, propertiesInExchange.length)
            ];
        }

        if (newRange[1] > rangeProp[1]) {
            newRange[1] = Math.min(newRange[0] + upRange, propertiesInExchange.length);
        }

        setRangeProp(newRange);
    };

    useEffect(() => {
        const regionData = async () => {
            const { data } = await PropertiesServices.getStatesExchange();
            setRegionExchange(data);
        };
        regionData();
    }, []);


    const topRegions = Object.entries(regionExchange)
        .sort(([, a], [, b]) => b - a) // Ordena por el valor(n) de mayor a menor
        .slice(0, 4) // Toma los primeros 4 
        .reduce((obj, [key, value]) => {
            obj[key] = value;
            return obj;
        }, {});
    // console.log('Regiones ordenada por mayor a menor cantidad', topRegions);


    const regionImgs = [];
    let region;
    for (region of Object.keys(topRegions)) {
        let responseImg;
        switch (region) {
            case 'Arica y Parinacota':
            case 'Arica':
                responseImg = imgArica

                break;
            case 'Tarapacá':
                responseImg = imgTarapaca

                break;
            case 'Antofagasta':
                responseImg = imgAntofagasta

                break;
            case 'Iquique':
                responseImg = imgIquique;
                break;
            case 'Atacama':
                responseImg = imgAtacama;
                break;
            case 'Coquimbo':
                responseImg = imgCoquimbo
                break;
            case 'La Serena':
                responseImg = imgLaSerena;
                break;
            case 'Valparaíso':
                responseImg = imgValparaiso;
                break;
            case 'Metropolitana de Santiago':
            case 'Santiago':
                // region = 'Santiago';
                responseImg = imgSantiago
                break;
            case 'Rancagua':
                responseImg = imgRancagua;
                break;
            case 'Maule':
                responseImg = imgMaule;
                break;
            case 'Ñuble':
                responseImg = imgNuble;
                break;
            case 'Biobío':
                responseImg = imgBiobio;
                break;
            case 'Araucanía':
                responseImg = imgAraucania;
                break;
            case 'Los Ríos':
                responseImg = imgRios;
                break;
            case 'Los Lagos':
                responseImg = imgLagos;
                break;
            case 'Aysén':
                responseImg = imgAysen;
                break;
            case 'Punta Arenas':
                responseImg = imgPtaArenas;
                break;
            default:
                console.log('Región no encontrada');
        }
        regionImgs.push({region, img: responseImg})
    }

    const handleRegionClick = (region) => {
        setSelectedRegion(region);
    };

    const handleRegionReset = (region) => {
        if(selectedRegion === region){
            setSelectedRegion(null)
        }
    }

    const filteredProperties = selectedRegion
    ? propertiesInExchange.filter(property => property.address.state.name === selectedRegion)
    : propertiesInExchange;

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

    const renderButtons = () => (
        <div className="flex flex-row justify-center gap-3 m-2 my-10 2xl:mx-32">
            <button onClick={toggleMoreProp} className="p-2 px-4 rounded-full border  hover:bg-secondary-light hover:text-white duration-200">
                {moreProp ? 'Ver primeras 3' : 'Ver todas'}
            </button>
            <button 
                onClick={() => toggleMoreNext('up')}
                className={`px-3 sm:p-2 sm:px-3 rounded-full border ${rangeProp[0] === 0 ? 'opacity-25' : 'hover:bg-secondary-light hover:text-white duration-200'}`}
                disabled={rangeProp[0] === 0}
            >
                <FaArrowUp />
            </button>
            <button 
                onClick={() => toggleMoreNext('down')}
                className={`p-2 px-3 rounded-full border ${rangeProp[1] >= propertiesInExchange.length ? 'opacity-25' : 'hover:bg-secondary-light hover:text-white duration-200'}`}
                disabled={rangeProp[1] >= propertiesInExchange.length}
            >
                <FaArrowDown />
            </button>
        </div>
    );

    const renderProperties = () => (
        <div className="grid grid-row grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 2xl:gap-2 mt-2 my-3 mx-3 2xl:mx-32">
            {filteredProperties.slice(rangeProp[0], rangeProp[1]).map((item) => (
                <Reveal
                keyframes={fadeInUp}
                delay={200}
                duration={600}
                triggerOnce={true}
                >
                    <article 
                        key={item.id}
                        onClick={() => onOpenContact(item.id)}
                        className="cursor-pointer shadow-lg flex flex-col border-2 h-full md:h-[380px] w-full p-2 group overflow-hidden"
                    >
                        <div className="mb-2 relative">
                            {item.images.length > 0 &&  /\.(jpg|jpeg|png|avif)$/.test(item.images[0].path)  ? (
                                <img 
                                    key={item.images[0].id}
                                    src={item.images[0].path || NotFoundProp} 
                                    alt={`img-${item.images[0].id}`} 
                                    className="h-64 w-full object-cover rounded-md group-hover:-translate-y-2 duration-200 shadow-md" 
                                /> 
                                ): (
                                    <img 
                                        src={NotFoundProp} 
                                        alt="img-casa-not-found" 
                                        className="h-56 w-full object-scale-down rounded-md group-hover:-translate-y-2 duration-200 my-3" 
                                    />
                                )                                
                            }
                        </div>
                        <div>
                            <h2 className="font-semibold text-center text-xl xl:text-lg">{truncate(item?.propertyTitle, 30)}</h2>
                            <div className="md:mx-4 mt-2 flex flex-row justify-between items-center mb-2 xl:text-md">
                                <div className="mx-4 flex xl:w-[60%]">
                                    <p className="font-semibold">{item.address.state.name || 'No se encontró región'}, {item.address.city.name || 'No se encontró comuna'}</p>
                                </div>
                                <div className="flex gap-2 items-center xl:w-[40%] text-center">
                                    {formatPrice(item?.currencyId, item?.propertyPrice)}
                                </div>
                            </div>
                        </div>
                    </article>
                </Reveal>
            ))}
        </div>
    );


    return(
        <>
            <div className="flex justify-center my-6 sm:my-5 mt-14 md:mt-2 mx-2 2xl:mx-32">
                <h2 className="text-gray-700 text-2xl text-center md:text-start md:text-2xl font-medium">Regiones donde más se hacen canjes</h2>
            </div>     
                    <div className="grid grid-cols-2 xl:flex xl:flex-row xl:justify-center mt-8 my-6 mb-8 xl:mb-12 mx-8 2xl:mx-32 h-full md:h-40 gap-6 xl:gap-12 2xl:gap-12"> 
                        {regionImgs.map((item, idx) => (
                            <div key={idx} className=''>
                                    <div className="relative my-5 text-center h-28 w-28 md:h-40 md:w-40 2xl:h-40 2xl:w-40">
                                        <small className="font-semibold text-lg mb-5 text-gray-600">{truncate(item.region, 17)}</small>
                                            <img onClick={() => handleRegionClick(item.region)} 
                                            src={item.img} 
                                            className="object-cover cursor-pointer rounded-full h-full w-full my-3 hover:scale-105 hover:shadow-xl duration-150" 
                                            alt={`img-${item.region}`}/>
                                            {
                                                selectedRegion === item.region  && ( <div
                                                onClick={() => handleRegionReset(item.region)} 
                                                className='absolute top-12 right-0 cursor-pointer bg-white text-gray-700 text-3xl rounded-full z-50'>
                                                    <MdCancel />
                                                </div>
                                            )}
                                        
                                    </div>
                              
                            </div>
                            )
                        )}
                    </div>                    
                    <div className="flex flex-row sm:justify-between mt-16 items-center mx-3 2xl:mx-32">
                        <div className="flex w-60 sm:w-80 gap-2 my-2">
                            <p className="text-gray-500">
                                <span className="font-light cursor-pointer">{rangeProp[1] > filteredProperties.length ? filteredProperties.length : rangeProp[1]} / {filteredProperties.length > 0 ? filteredProperties.length : '0' } </span>
                                Propiedades en esta región
                            </p>
                        </div>
                        <div className="flex justify-end gap-2 my-2 ml-10 sm:ml-0">
                            <a href="/propiedades" target="_blank" rel='noreferrer'
                                className="flex items-center gap-2 hover:font-medium rounded-lg shadow-xl text-gray-200 hover:text-secondary-light border hover:border-secondary-light bg-secondary-light hover:bg-gray-50 h-8 w-full p-2 px-2 hover:scale-105 duration-200">
                                    Ver todas
                                <BiBuildingHouse  className="text-lg"/>
                            </a>
                        </div>
                    </div>
                    {renderProperties()}
                    {renderButtons()}

                    <Modal open={contactOpen} onClose={onCloseContact} className="w-[90%] h-full z-50">
                        {selectedProperty && (    
                            <ModalLastProperties
                                key={selectedProperty.id}
                                data={selectedProperty}     
                            />
                        )}
                    </Modal>
        </>
    )
}
export default FilterRegionsProperties;