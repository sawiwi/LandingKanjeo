import { useEffect, useState } from "react";
import Section from "../components/section";
import TitleSection from "../components/title-section";

import { RubroServData } from "../data/extern-service"; 
import ExternalFolders from "../services/external-services/ExternFoldersServices";
import { useNavigate } from "react-router-dom";

const ExternalServices = () =>{
    const [folders, setFolders] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const navigate = useNavigate();
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    };

    useEffect(() => {
        const servData = async () => {
            const { data } = await ExternalFolders.getExternServiceFolders();
            setFolders(data);
        };
        servData();
    }, []);

    const handleSelectChange = (e) => {
        setSelectedCategory(e.target.value);
        // const {name, value} = e.target;
        // setCategories((prev) => ({...prev, [name]: value}));
    };

    const filteredFolders = selectedCategory
    ? folders.filter(folder => folder.category.name === selectedCategory)
    : folders;

    useEffect(() => {
        const servCategory = async () => {
            try {
                const {data} = await ExternalFolders.getExternServiceCategories();
                setCategories(data);
               
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };
        servCategory();
    }, []);
    
    const handleViewService = (id) => {
        navigate(`/servicios-externos/listado-servicios/${id}`)
    }
    return(
    <>
            <Section className="overflow-hidden bg-white">
                <TitleSection
                    className="lg:mt-20"
                    title="Servicios Externos"
                    subtitle="Encuentra el servicios que más necesites."
                    position="center"
                />
                {/* Seleccionar x categoria */}
                <div className="mb-4 my-3 w-96">
                        <div className="grid w-full mb-1 mx-4 md:mx-0">
                            <label className="font-semibold mb-1 w-full" for="typeProperty">Categoria</label>
                            <select
                                id="typeCategory"
                                name="typeCategory"
                                value={categories.name}
                                onChange={handleSelectChange}
                                className="rounded-md placeholder:text-gray-400 p-2 border-2"
                            >
                                <option value="">Seleccione una categoria</option>
                                {categories.map((type) => (
                                    <option key={type.id} value={type.name}>{type.name}</option>
                                ))}
                            </select>
                        </div>
                </div>
                <div className="flex flex-col xl:grid xl:grid-cols-2 2xl:grid-cols-3 gap-2 mt-4 w-full ">
                    {filteredFolders.length !== 0 ? filteredFolders.map((service) => (
                        <article key={service.id} className="relative bg- shadow-md rounded-md p-2 h-auto w-full xl:w-[95%] hover:scale-105 duration-150">
                            <div className="flex flex-col md:flex-row gap-3 items-center my-2 ">
                                <img src={service.category.image || ''} 
                                    alt="imagen de servicio" 
                                    className="rounded-full p-3 py-3 w-[70px] xl:w-20 text-5xl md:text-4xl text-sky-800 bg-sky-200"/>                       
                                <div className="h-44 mx-4">
                                    <h2 className="font-bold text-lg">{service.name}</h2>
                                    <small className="font-normal">{service.category.name}</small>
                                    <p className="mt-3 font-medium">{truncate(service.description, 120)}</p>
                                </div>
                            </div>
                            <hr className="mt-3"/>
                            <div className="h-4 my-2 mx-2 flex justify-end">
                                <button 
                                onClick={() => handleViewService(service.id,)}
                                className="text-secondary-light font-semibold">Ver servicios</button>

                            </div>
                        </article>
                    )):'No hemos encontrado Servicios externos'}
                    
                </div>
            </Section>
    </>
    )
}

export default ExternalServices;