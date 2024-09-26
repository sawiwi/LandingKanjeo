import TitleSection from "../../components/title-section";
import {Reveal } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import { useContext, useState, useEffect } from "react";
import { PropertiesContext } from "../../context/properties/PropertiesContext";
import PropertiesServices from '../../services/portal-properties/PropertiesServices'
import { TbLayoutList} from "react-icons/tb";
import { IoGridOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import NotFoundProp from "../../assets/img/portal-prop/arquitectura.png"
import { 
    truncateString, 
    parseToCLPCurrency, 
    parseToDecimal, 
    ufToClp, 
    clpToUf2 } from "../../utils/truncateExchange";
import { FaBed, FaBath } from "react-icons/fa6";
import { FaRulerCombined, FaParking } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { MdOutlineSearch } from "react-icons/md";
import { TbHomeSearch, TbTrash  } from "react-icons/tb";
import { SelectsContext } from "../../context/selects/SelectsContext";
import { ToastContainer, toast } from 'react-toastify';




const AllProperties = () => {
    // const [contactOpen, setContactOpen] = useState(false);
    const [moreProp, setMoreProp] = useState(false)
    const [selectDivise, setSelectDivise] = useState('UF');
    const [view, setView] = useState('grid');
    const [selectedProperty, setSelectedProperty] = useState(null);
    const { contextData } = useContext(PropertiesContext);
    const {contextData : contextSelectData} = useContext(SelectsContext);
    const {
        properties,
        valueUf,
    } = contextData;
    const {      
        regions,
        communes,
        stateId,
        setStateId,
        operationType,
        typeOfProperty,
        selectedSelects,
        setSelectedSelects,
    } = contextSelectData;

    const [filteredProperties, setFilteredProperties] = useState([]);
    const [clickDataOpenDetails, setClickDataOpenDetails] = useState([]);
    const [propertyCod, setPropertyCod] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [limit, setLimit] = useState(4);
    const [moreFilters, setMoreFilters] = useState(false);

    /* ToastMessage : Success */
    const showToastSuccessMsg = (msg) => {
        toast.success(msg, {
          position: 'top-center',
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      };
    
      /* ToastMessage : Error */
      const showToastErrorMsg = (msg) => {
        toast.error(msg, {
          position: 'top-center',
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      };

          /* ToastMessage : Error */
    const showToastWarningMsg = (msg) => {
            toast.warning(msg, {
              position: 'top-center',
              autoClose: 2500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            });
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

    const onClickDetails = async (id) => {
        const clicked = clickDataOpenDetails.find(item => item.id === id);
        let updateClicks;

        if(clicked) {
            updateClicks = clickDataOpenDetails.map(item => 
                item.id === id ? {...item, clicks: item.clicks + 1}: item
            );
        }else {
            updateClicks = [...clickDataOpenDetails, {id, clicks: 1}];
        }
        setClickDataOpenDetails(updateClicks);
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
                 <div className="mx-4 mb-2 my-3 flex flex-row justify-between items-center">
                    <p className="xl:text-xl">
                        <b>{parseToDecimal(ufValue)} UF</b>
                    </p>
                    <p className="xl:text-xl">
                        <b>{parseToCLPCurrency(clpValue)}.-</b>
                    </p>
                </div>
            </div>

        )

    };

    const handleRangeChange = (e, field) => {
        setSelectedSelects({
            ...selectedSelects,
            [field]: e.target.value
        });
    };

    const handleSelectChange = (e) => {
        const {name, value} = e.target;
        setSelectedSelects((prev) => ({...prev, [name]: value}));

        if(name === 'region') {
            const selectedRegion  = regions.find(region => region.name === value);
            setStateId(selectedRegion ? selectedRegion.id : '')
        }
    };

    const filterProperties = (properties) => {
        let filtered = properties;
    
        if (selectedSelects.typeOfProperty) {
          filtered = filtered.filter(property => 
            property.typeOfPropertyId === selectedSelects.typeOfProperty);
        }
    
        if (selectedSelects.operationType) {
          filtered = filtered.filter(property => 
            property.typeOfOperationId === selectedSelects.operationType);
        }
    
        if (selectedSelects.region) {
          filtered = filtered.filter(property => 
            property.address.state.name === selectedSelects.region);
        }
    
        if (selectedSelects.commune) {
          filtered = filtered.filter(property => 
            property.address.city.name === selectedSelects.commune);
        }

        if (selectedSelects.inExchanged) {
            const isInExchanged = selectedSelects.inExchanged === 'true';
            filtered = filtered.filter(property => 
              property.isExchanged === isInExchanged);
          }
        
        if(selectedSelects.orderBy) {
            const orderBySort = selectedSelects.orderBy === 'asc';
            filtered = filtered.sort((a, b) => {
               return  orderBySort ? a.id - b.id : b.id - a.id
            }
            )
        }

        if(selectedSelects.currencyId) {
            filtered = filtered.filter(property => 
               property.currencyId === selectedSelects.currencyId);
        }

        if(selectedSelects.minPrice) {
            filtered = filtered.filter(property => 
                property.propertyPrice >= selectedSelects.minPrice
            )
        }
        if(selectedSelects.maxPrice) {
            filtered = filtered.filter(property => 
                property.propertyPrice <= selectedSelects.maxPrice
            )
        }


        if(selectedSelects.orderByPrice) {
            const orderByPrice = selectedSelects.orderByPrice === 'asc';
            filtered = filtered.sort((a, b) => {
               return  orderByPrice ? a.propertyPrice - b.propertyPrice : b.propertyPrice - a.propertyPrice
                }
            )
        }else{
            filtered = [...filtered];
        }

        setFilteredProperties(filtered);
    };


    const handleLimitChange = (e) => {
        setLimit(Number(e.target.value));
    }
    const handleViewAll = () => {
        setLimit((prevLimit) => (prevLimit === 8 ? filteredProperties.length : limit));
    }

    useEffect(() => {
        setFilteredProperties(properties.slice(0, limit)); 
      }, [properties, limit]);

    useEffect(() => {
        filterProperties(properties);
    }, [selectedSelects]);

    const handleSearch = async () => {
        setIsSearching(true);
       if(propertyCod){
            try{
                const data = await PropertiesServices.getPropertyByIdCode(`/properties-portal/${propertyCod}`);
                
                if(!data || (Array.isArray(data) && data.length === 0)){
                    showToastErrorMsg(
                        'El código ingresado no pertence a ninguna propiedad!'
                    );
                    setFilteredProperties([])
                }else {
                    setFilteredProperties(Array.isArray(data) ? data : [data])
                }
                
            } catch (error){
                showToastErrorMsg(
                    'El código ingresado no pertence a ninguna propiedad, Intentelo nuevamente!'
                );
                // console.log("Error en filtrar por ID", error)
            }
        }else {
            showToastWarningMsg(
                'Por favor ingresa un código de propiedad'
            );
        }
       setIsSearching(false);
    }
    const handleSearchReset = async () => {
        setPropertyCod("")
        setFilteredProperties(properties)
    }

    const toggleMoreFilter = async () => {
        setMoreFilters(!moreFilters)
    } 

    const renderButtonsBottom = () => (
        <div className="flex flex-row justify-between items-center mx-2 xl:mx-28 2xl:mx-24 mb-3">
            <div className="flex gap-3 text-base my-3">
                <p className="text-gray-500">Propiedades encontradas: {filteredProperties?.length || 0}</p>
            </div>
            <div className="flex items-center">
                <ul className="flex gap-3 items-center">
                        <li className="cursor-pointer">
                        <label className="font-semibold mr-1" htmlFor="limitSelect">Filtrar por:</label>
                            <select
                                id="limitSelect"
                                value={limit}
                                onChange={handleLimitChange}
                                className="rounded-md p-1 px-3 border-2"
                            >
                                <option value={4}>4</option>
                                <option value={8}>8</option>
                                <option value={12}>12</option>
                                <option value={20}>20</option>
                                <option value={32}>32</option>
                                <option value={48}>48</option>
                                <option value={99}>99</option>
                            </select>
                        </li>           
                </ul>
            </div>
    </div>
    )

    const renderButtons = () => (
        <div className="flex flex-row justify-center gap-3 m-2 my-10 2xl:mx-32">    
            <button 
                // onClick={() => toggleMoreNext('up')}
                // className={`px-3 sm:p-2 sm:px-3 rounded-full border ${rangeProp[0] === 0 ? 'opacity-25' : 'hover:bg-secondary-light hover:text-white duration-200'}`}
                className={`px-3 sm:p-2 sm:px-3 rounded-full border  hover:bg-secondary-light hover:text-white duration-200`}            
                // disabled={rangeProp[0] === 0}
            >
                <FaArrowLeft />
            </button>
            <button  onClick={handleViewAll} className="p-2 px-4 rounded-full border  hover:bg-secondary-light hover:text-white duration-200">
                {limit <= 8 ? 'Ver todas' : 'Ver primeras 8'}
            </button>
            <button 
                // onClick={() => toggleMoreNext('down')}
                // className={`p-2 px-3 rounded-full border ${rangeProp[1] >= propertiesInExchange.length ? 'opacity-25' : 'hover:bg-secondary-light hover:text-white duration-200'}`}
                className={`p-2 px-3 rounded-full border  hover:bg-secondary-light hover:text-white duration-200`}
                // disabled={rangeProp[1] >= propertiesInExchange.length}
            >
                <FaArrowRight />
            </button>
        </div>
    );

    const handleSelect = async () => {
        setSelectDivise(!selectDivise)
    };

    return(     
        <>    
            <ToastContainer />

            <Reveal
                    keyframes={fadeInUp}
                    delay={500}
                    duration={800}
                    triggerOnce={true}
                >
   
            <div className="bg-white/90  shadow-lg rounded-md xl:w-[90vw] 2xl:w-[75vw] grid items-center p-2 px-4 2xl:px-8 m-2 xl:mx-16 2xl:mx-52 mt-20 xl:mt-32">
                <TitleSection
                        className='mt-2 xl:mt-8 2xl:mt-6'
                        title="Todas las propiedades"
                        subtitle="Encuentra las propiedades publicadas"
                        position="center"
                /> 
                <div className="flex flex-col md:mt-4 xl:mt-10 mb-6 xl:mx-0 2xl:mx-20">
                    {/* FILTROS AVANZADOS */}
                    <div className="flex flex-row items-center md:justify-center mt-6 sm:mt-0 sm:mx-0">
                        <div className="w-[380px] sm:w-[470px] p-2 bg-secondary/60 rounded-full flex justify-center gap-2 items-center shadow-lg">
                            <div className="grid w-full xl:w-96 md:mx-0">
                                    {/* <label className="font-semibold mb-1 w-full" for="searchOfId">Código de propiedad</label> */}
                                    <input 
                                    id="searchOfId"
                                    name="searchOfId"
                                    value={propertyCod}
                                    onChange={(e)=> setPropertyCod(e.target.value)}
                                    className="placeholder:text-gray-400 p-2 rounded-full"
                                    placeholder="Ingresa código de la propiedad"></input>
            
                            </div>
                            <button className="bg-gray-50 hover:text-gray-950 hover:scale-105 duration-200 h-10 w-auto p-1 px-3 border rounded-full " onClick={handleSearch} disabled={isSearching}>
                                {isSearching ? <TbHomeSearch className="animate-pulse"/> : <TbHomeSearch/> }
                            </button>
                            <button 
                                className="bg-red-600/80 text-gray-50 hover:bg-red-600 duration-200 h-10 w-auto p-1 px-3 rounded-full" 
                                title="Limpiar búsqueda" 
                                onClick={handleSearchReset}
                            >
                                <TbTrash />
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-2 mt-6 w-[98%] md:w-full 2xl:w-[100%]  2xl:mx-2">
                        <div className="grid w-full mb-1 mx-4 md:mx-0">
                                    <label className="font-semibold mb-1 w-full" for="typeProperty">Tipo de propiedad</label>
                                    <select
                                        id="typeOfProperty"
                                        name="typeOfProperty"
                                        value={selectedSelects.typeOfProperty}
                                        onChange={handleSelectChange}
                                        className="rounded-md placeholder:text-gray-400 p-2 border-2"
                                    >
                                        <option value="">Seleccione un tipo</option>
                                        {typeOfProperty.map((type) => (
                                        <option key={type.id} value={type.name}>{type.name}</option>
                                        ))}
                                    </select>
                        </div>
                        <div className="grid w-full mb-1 mx-4 md:mx-0 ">
                                    <label className="font-semibold mb-1 w-full" for="operationType">Tipo de operación</label>
                                    <select
                                        id="operationType"
                                        name="operationType"
                                        value={selectedSelects.operationType}
                                        onChange={handleSelectChange}
                                        className="rounded-md placeholder:text-gray-400 p-2 border-2"
                                    >
                                        <option value="">Seleccione una operación</option>
                                        {operationType.map((op) => (
                                        <option key={op.id} value={op.name}>{op.name}</option>
                                        ))}
                                    </select>
                        </div>
                        <div className="grid w-full mb-1 mx-4 md:mx-0">
                                    <label className="font-semibold mb-1 w-full" for="region">Región</label>
                                    <select
                                        id="region"
                                        name="region"
                                        value={selectedSelects.region}
                                        onChange={handleSelectChange}
                                        className="rounded-md placeholder:text-gray-400 p-2 border-2"
                                    >
                                        <option value="">Seleccione una Región</option>
                                        {regions.map((region) => (
                                        <option key={region.id} value={region.name}>{region.name}</option>
                                        ))}
                                    </select>
                        </div>
                        <div className="grid w-full mb-1 mx-4 md:mx-0">
                                    <label className="font-semibold mb-1 w-full" for="commune">Comuna</label>
                                    <select
                                        id="commune"
                                        name="commune"
                                        value={selectedSelects.commune}
                                        onChange={handleSelectChange}
                                        className="rounded-md placeholder:text-gray-400 p-2 border-2"
                                    >
                                        <option value="">Seleccione una Comuna</option>
                                        {communes.map((commune) => (
                                            <option key={commune.id} value={commune.name}>{commune.name}</option>
                                        ))}
                                    </select>
                        </div>
                        <div className="grid w-full mb-1 mx-4 md:mx-0">
                            <label className="font-semibold mb-1 w-full" for="commune">En canje</label>
                            <select
                                    id="inExchanged"
                                    name="inExchanged"
                                    value={selectedSelects.inExchanged || ''}
                                    onChange={handleSelectChange}
                                    className="rounded-md placeholder:text-gray-400 p-2 border-2"
                            >
                                <option value="">Selecciona...</option>
                                <option value="true">En canje</option>                    
                                <option value="false">No canje</option>                    
                            </select>
                        </div>
                    </div> 
                    <div 
                    onClick={toggleMoreFilter}
                    className="flex flex-row gap-1 items-center justify-end text-secondary group cursor-pointer">
                        <p>{moreFilters ? 'Ocultar filtros' : 'Filtros avanzados'}</p>
                        {/* <p className="italic ">Filtros avanzados </p> */}
                        <IoIosArrowDown className="group-hover:translate-y-1 duration-150"/>
                    </div>
                    {
                        !moreFilters ? '' : moreFilters && (
                        <Reveal
                        keyframes={fadeInUp}
                        delay={500}
                        duration={800}
                        triggerOnce={true}>
                            <div className="flex flex-col md:flex-row justify-between items-center gap-2 mt-4 xl:mt-2 w-[98%] md:w-full 2xl:w-[100%]  2xl:mx-2">
                                <div className="grid w-full mb-1 mx-4 md:mx-0 ">
                                    <label className="font-semibold mb-1 w-full" for="orderBy">Ordernar propiedades</label>
                                            <select
                                                id="orderBy"
                                                name="orderBy"
                                                value={selectedSelects.orderBy}
                                                onChange={handleSelectChange}
                                                className="rounded-md placeholder:text-gray-400 p-2 border-2"
                                            >
                                                <option value="">Por defecto</option>
                                                <option value="desc">Más recientes</option>
                                                <option value="asc">Más antiguas</option>
                                            </select>
                                </div>
                                <div className="grid w-full mb-1 mx-4 md:mx-0 ">
                                    <label className="font-semibold mb-1 w-full" for="orderByPrice">Ordernar precios</label>
                                            <select
                                                id="orderByPrice"
                                                name="orderByPrice"
                                                value={selectedSelects.orderByPrice}
                                                onChange={handleSelectChange}
                                                className="rounded-md placeholder:text-gray-400 p-2 border-2"
                                            >
                                                <option value="asc">Por defecto</option>
                                                <option value="desc">Mayor precio</option>
                                                <option value="asc">Menor precio</option>
                                            </select>
                                </div>
                                {/* <div className="grid w-full mb-1 mx-4 md:mx-0">
                                            <label className="font-semibold mb-1 w-full" for="currencyId">Tipo de moneda</label>
                                            <select
                                                id="currencyId"
                                                name="currencyId"
                                                value={selectedSelects.currencyId}
                                                onChange={handleSelectChange}
                                                className="rounded-md placeholder:text-gray-400 p-2 border-2"
                                            >
                                                <option value="">Seleccione una moneda</option>
                                                <option onClick={handleSelect} value="UF">UF</option>
                                                <option value="CLP">CLP</option>
                                           
                                            </select>
                                </div>  */}
                                <div className="grid w-full mx-4 md:mx-0">
                                    <label className="font-semibold mb-1 w-full md:w-72" htmlFor="minPriceRange">Precio Mínimo (CLP)</label>
                                    <input
                                        id="minPriceRange"
                                        type="range"
                                        name="minPriceRange"
                                        min="0"
                                        max="10000000" // Ajusta el valor máximo según tu necesidad
                                        step="100000" // Ajusta el step según tu preferencia
                                        value={selectedSelects.minPrice || '0'}
                                        onChange={(e) => handleRangeChange(e, 'minPrice')}
                                        className="rounded-md placeholder:text-gray-400 p-2 border-2"
                                    />
                                    <small className="">{selectedSelects.minPrice ? `${selectedSelects.minPrice} CLP` : '0 CLP'}</small>
                                </div>
                                <div className="grid w-full mx-4 md:mx-0">
                                    <label className="font-semibold mb-1 w-full" htmlFor="maxPriceRange">Precio Maximo (CLP)</label>
                                    <input
                                        id="maxPriceRange"
                                        type="range"
                                        name="maxPriceRange"
                                        min="0"
                                        max="200000000"
                                        step="100000" 
                                        value={selectedSelects.maxPrice || '200,000,000'}
                                        onChange={(e) => handleRangeChange(e, 'maxPrice')}
                                        className="rounded-md placeholder:text-gray-400 p-2 border-2"
                                    />
                                    <small>{selectedSelects.maxPrice ? `${selectedSelects.maxPrice} CLP` : '10,000,000 CLP'}</small>
                                </div>
                            </div> 
                        </Reveal>
                        )
                    }
                </div>
            </div>

            <div className="bg-white/90 shadow-lg rounded-md 2xl:w-[75vw] grid items-center p-2 2xl:px-8 m-2 xl:mx-16 2xl:mx-52 mt-4">
                <div className="flex flex-row justify-between items-center mx-2 xl:mx-16 2xl:mx-24 mt-3 xl:mt-6">
                    <div className="flex gap-3 text-base xl:text-lg my-2">
                        <p className="text-gray-500">Propiedades encontradas: {filteredProperties?.length || 0}</p>
                    </div>
                    <div className="flex items-center">
                        <ul className="flex gap-3 items-center">
                                <li className="cursor-pointer">
                                <label className="font-semibold mr-1" htmlFor="limitSelect">Filtrar por:</label>
                                    <select
                                        id="limitSelect"
                                        value={limit}
                                        onChange={handleLimitChange}
                                        className="rounded-md p-1 px-2 border-2"
                                    >
                                        <option value={4}>4</option>
                                        <option value={8}>8</option>
                                        <option value={12}>12</option>
                                        <option value={20}>20</option>
                                        <option value={32}>32</option>
                                        <option value={48}>48</option>
                                        <option value={99}>99</option>
                                    </select>
                                </li>
                                <li className="hover:scale-110 duration-200 cursor-pointer">
                                    <button onClick={() => setView('grid')}
                                            className="hover:font-semibold rounded-lg shadow-2xl text-gray-50 hover:text-secondary-light border bg-secondary-light hover:bg-gray-50 hover:border hover:border-secondary-light duration-150 h-8 w-8 px-1.5">
                                            <IoGridOutline className="text-lg"/>
                                    </button>
                                </li>
                                <li className="hover:scale-110 duration-200 cursor-pointer">                                    
                                    <button onClick={() => setView('list')}
                                        className="hover:font-semibold rounded-lg shadow-2xl text-gray-50 hover:text-secondary-light border bg-secondary-light hover:bg-gray-50 hover:border hover:border-secondary-light duration-150 h-8 w-8 px-1.5">
                                            <TbLayoutList className="text-lg"/>
                                    </button>
                                </li>                 
                        </ul>
                    </div>
                </div>
                <div>
                {
                    view === 'grid' ? (
                        <>
                            <div className="grid grid-row grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 2xl:gap-2 mt-4 mb-4 mx-1 xl:mx-12 2xl:mx-16 w-full xl:w-[90%] 2xl:w-[89%]">
                            {filteredProperties.length > 0 ? filteredProperties.slice(0, limit).map((item) => {
                                // console.log('image' , item.images[0].path)
                                return(
                                    <article key={item?.id} className="shadow-xl flex flex-col border-2 h-full md:h-[400px] 2xl:h-full md:w-full p-2 group xl:overflow-hidden 2xl:p-1 m-2 xl:mx-4 mb-2 hover:scale-105 duration-200 ">
                                        <div className="mb-2 relative">
                                            {item.images.length > 0 && /\.(jpg|jpeg|png|avif)$/.test(item.images[0].path) ? (
                                                    <img 
                                                    key={item.images[0].id}
                                                    src={item.images[0].path || NotFoundProp} 
                                                    alt={`img-${item.images[0].id}`} 
                                                    className="h-44 w-full object-cover rounded-md group-hover:-translate-y-2 duration-200 shadow-md" 
                                                    />
                                                // console.log('image' , item.images[0].path)                                                  
                                            ):(
                                                <img 
                                                    src={NotFoundProp} 
                                                    alt="img-casa-not-found" 
                                                    className="h-48 xl:h-44 w-full object-scale-down group-hover:-translate-y-2 duration-200 p-4 " 
                                                />
                                                )                                            
                                            }                                     
                                            <small className="absolute top-1 left-1 p-[0.15rem] px-4 font-normal opacity-100 group-hover:opacity-70 bg-secondary text-gray-50 rounded-sm group-hover:top-0 duration-200">
                                                {item.typeOfPropertyId ? item.typeOfPropertyId : 'No hay' }
                                            </small>
                                            <small className="absolute top-8 left-1 p-[0.18rem] px-4 font-normal opacity-100 group-hover:opacity-70 bg-secondary text-gray-50 rounded-sm group-hover:top-7 duration-200">
                                                {item.typeOfOperationId}
                                            </small>
                                        </div>
                                        <div className="mx-2">
                                        <h2 className="font-semibold text-center text-lg">{truncate(item.propertyTitle, 40)}</h2>                                      
                                        {formatPrice(item?.currencyId, item?.propertyPrice)}                                       
                                            <ul className="flex flex-row sm:flex-row mx-4 xl:mx-12 gap-2 justify-between">
                                                <li className="flex justify-center items-center gap-2 sm:text-center sm:grid ">
                                                        {/* <span>Baño(s)</span> */}   
                                                        <FaBath />
                                                        <small>{item.characteristics.bathrooms || '0'}</small>
                                                </li>
                                                <li className="flex justify-center items-center gap-2 sm:text-center sm:grid ">
                                                        <FaBed/>
                                                        <small>{item.characteristics.bedrooms || '0'}</small>
                                                </li>
                                                <li className="flex justify-center items-center gap-2 sm:text-center sm:grid ">
                                                        <FaRulerCombined />
                                                        <small>{item.characteristics.surface || '0'}mts</small>
                                                </li>
                                                <li className="flex justify-center items-center gap-2 sm:text-center sm:grid ">
                                                        <FaParking />
                                                        <small>{item?.characteristics?.hasParking !== false ? item?.characteristics?.hasParking  : 'no' }</small>
                                                </li>
                                            </ul>
                                            <div className="mx-4 mb-2 mt-8 flex flex-row justify-between items-center">
                                                <p className="font-medium">{item.address.state.name || 'No se encontro región'}, {item.address.city.name || 'No se encontro comuna'}</p>
                                                <a 
                                                onClick={() => onClickDetails(item?.id)}
                                                href={`/propiedades/${item?.id}`}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="p-2 px-3 bg-secondary hover:bg-secondary-light duration-200 text-white rounded-full"
                                                >Detalles</a>
                                            </div>
                                        </div>
                                    </article>
                            
                                )
                            }) : (
                                <div className="w-full text-center my-3 xl:mx-80 2xl:mx-96">
                                    <small className="font-semibold text-center text-lg">
                                        No se encuantran propiedades
                                    </small>
                                </div>
                                )
                            }
                            </div>
                        </>
                    ):(
                        <div className="grid grid-row grid-cols-1 gap-6 2xl:gap-2 mt-4 mb-4 mx-3 2xl:mx-24">
                            {filteredProperties.length > 0 ? filteredProperties.slice(0, limit).map((item) => {
                                return(
                                    <article key={item?.id} className="shadow-lg flex flex-col md:flex-row border-2 h-full md:h-full 2xl:h-[220px] w-full p-2 group">
                                        <div className="mb-2 relative">
                                                {item.images.length > 0 && /\.(jpg|jpeg|png|avif)$/.test(item.images[0].path) ? (
                                                        <img 
                                                        key={item.images[0].id}
                                                        src={item.images[0].path || NotFoundProp} 
                                                        alt={`img-${item.images[0].id}`} 
                                                        className="h-48 w-full xl:w-96 object-cover rounded-md group-hover:-translate-y-2 duration-200" 
                                                        />
                                                ) :(
                                                    <img 
                                                        src={NotFoundProp} 
                                                        alt="img-casa-not-found" 
                                                        className="h-48 w-full xl:w-96 object-scale-down rounded-md group-hover:-translate-y-2 duration-200 " 
                                                    />
                                                    )                                            
                                                }
                                            <small className="absolute top-1 left-1 p-[0.15rem] px-4 font-normal opacity-100 group-hover:opacity-70 bg-secondary text-gray-50 rounded-sm group-hover:top-0 duration-200">
                                                {item.typeOfPropertyId ? item.typeOfPropertyId : 'No hay' }
                                            </small>
                                            <small className="absolute top-8 left-1 p-[0.18rem] px-4 font-normal opacity-100 group-hover:opacity-70 bg-secondary text-gray-50 rounded-sm group-hover:top-7 duration-200">
                                                {item.typeOfOperationId}
                                            </small>
                                        </div>
                                        <div className="mx-2 md:mx-12 w-full">
                                            <h2 className="font-semibold text-center text-lg">{truncate(item.propertyTitle, 90)}</h2>
                                            {formatPrice(item?.currencyId, item?.propertyPrice)}
                                            <ul className="flex flex-col sm:flex-row mx-4 xl:mx-10 gap-2 justify-between">
                                                <li className="flex justify-start items-center gap-2 sm:text-center sm:grid ">
                                                        <span>Baños</span>
                                                        <small>{item.characteristics.bathrooms || '0'}</small>
                                                </li>
                                                <li className="flex justify-start items-center gap-2 sm:text-center sm:grid ">
                                                        <span>Dormitorio(s)</span>
                                                        <small>{item.characteristics.bedrooms || '0'}</small>
                                                </li>
                                                <li className="flex justify-start items-center gap-2 sm:text-center sm:grid ">
                                                        <span>Mts cuadrados</span>
                                                        <small>{item.characteristics.surface || '0'} mts</small>
                                                </li>
                                                <li className="flex justify-start items-center gap-2 sm:text-center sm:grid ">
                                                        <span>Estacionamiento</span>
                                                        <small>{item?.characteristics?.hasParking !== false ? item?.characteristics?.hasParking  : 'no' }</small>
                                                </li>
                                            </ul>
                                            <div className="mx-4 mb-2 mt-8 flex flex-row justify-between items-center">
                                                <p className="font-medium">{item.address.state.name || 'No se encontro región'}, {item.address.city.name || 'No se encontro comuna'}</p>
                                                <button 
                                                // onClick={onOpenContact} 
                                                className="p-2 px-3 bg-secondary hover:bg-secondary-light duration-200 text-white rounded-full"
                                                >Contactar</button>
                                            </div>
                                        </div>
                                    </article>
                                )
                            }):  (
                                <div className="w-full text-center my-3 xl:mx-80 2xl:mx-96">
                                    <small className="font-semibold text-center text-lg">
                                        No se encuantran propiedades
                                    </small>
                                </div>
                            )
                            }
                        </div>
                    )
                }

                </div>
                {renderButtonsBottom()}
                {/* {renderButtons()} */}

            </div>
          
            </Reveal>
        </>
         
   
        
    )

}

export default AllProperties;