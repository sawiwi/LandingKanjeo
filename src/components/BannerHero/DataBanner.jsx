


const DataBanner = () =>{
    return(
        <>
        <div className="bg-secondary/80 w-full h-[60%] lg:h-[35%] xl:h-[50%] 2xl:h-[25%]">
            <div className="px-2  py-5 2xl:px-8 mx-4 xl:mx-80 2xl:mx-72 lg:py-5 2xl:py-10">
                    <ul className="flex justify-between gap-3 md:mt-14 xl:mt-[70px] 2xl:mt-20">
                        <li className="block text-center">
                            <p className="text-xl lg:text-2xl 2xl:text-4xl font-semibold text-gray-100">Marca N°1</p>
                            <small className="text-md lg:text-base 2xl:text-xl font-medium text-gray-100">En Canje de propiedades</small>
                        </li>
                        <li className="block text-center">
                            <p className="text-xl lg:text-2xl 2xl:text-4xl font-semibold text-gray-100">Contamos con</p>
                            <small className="text-md lg:text-base 2xl:text-xl font-medium text-gray-100">una comunidad extensa</small>
                        </li>
                        <li className="block text-center">
                            <p className="text-xl lg:text-2xl 2xl:text-4xl  font-semibold text-gray-100">Más de 500</p>
                            <small className="text-md lg:text-base 2xl:text-xl font-medium text-gray-100">Canjes por semana realizados</small>
                        </li>
                    </ul>
            </div>
        </div>
        </>
    )

}

export default DataBanner;