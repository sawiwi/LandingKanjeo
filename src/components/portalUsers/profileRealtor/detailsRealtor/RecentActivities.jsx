import { GoDotFill } from "react-icons/go";

const RecentActivities = ({data}) =>{
    const propertiesOfRealt = data?.properties || [];
    const customerOfRealt = data?.customers || [];
    
    const sortedProperties = propertiesOfRealt.sort((a ,b) => {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
    })

    // const sortedCustomer = customerOfRealt.sort((a ,b) => {
    //     return new Date(b.updatedAt) - new Date(a.updatedAt);
    // });

    // const combinedArray = [...propertiesOfRealt, ...customerOfRealt].sort((a, b) => {
    //     return new Date(b.updatedAt) - new Date(a.updatedAt);
    // });


    return(
        <div className="flex flex-row mx-2 w-full mt-4 h-96 md:h-80 overflow-y-auto ">
            {/* <div className="w-[20%]"></div> */}
            <div className="w-[95%] p-2">
                    {
                        sortedProperties.length > 0 ? sortedProperties.slice(0, 8).map(item => (
                            <ul key={item.id} className="list-item">
                                <li className="relative text-sm text-[15px] sm:text-md mb-4 md:mb-2 m-1 flex flex-row items-center gap-3">
                                    <div className="">
                                        <GoDotFill className="text-2xl sm:text-lg text-secondary-light" />
                                    </div>
                                    <div className="absolute w-2 h-44 top-28 left-2 xl:h-12 xl:left-[7px] xl:top-12 xl:w-1 text-secondary-light bg-secondary-light"></div>
                                    <div className="">
                                        <h5 className="">
                                            {/* {item?.propertyTitle ? "Propiedad:" : "Cliente:"}
                                            <span> {item?.propertyTitle || item?.name + item?.lastName || ''}</span> */}
                                            Propiedad:
                                            <span> {item?.propertyTitle || ''}</span> 
                                        </h5>
                                        <div>
                                        <span className=''>
                                            <b>Creada:</b> {new Date(item?.createdAt).toLocaleString('es-ES', { timeZone: 'UTC',
                                            year: 'numeric',
                                            month: 'short',
                                            day: '2-digit',
                                            hour: '2-digit',
                                            minute: '2-digit',

                                            }) || ''}hrs
                                        </span> -
                                        <span className=''>
                                            <b>Actualizada por última vez:</b> {new Date(item?.updatedAt).toLocaleString('es-ES', { timeZone: 'UTC',
                                            year: 'numeric',
                                            month: 'short',
                                            day: '2-digit',
                                            hour: '2-digit',
                                            minute: '2-digit',

                                            }) || ''}hrs
                                        </span> 
                                        </div>
                        
                                        <div>
                                            <span className=''>
                                                <b>Inicio en canje:</b> 
                                                {new Date(item?.timeInExchangeStart).toLocaleString('es-ES', { timeZone: 'UTC',
                                                year: 'numeric',
                                                month: 'short',
                                                day: '2-digit',
                                                hour: '2-digit',
                                                minute: '2-digit',
                                                }) || ''}hrs
                                            </span> -
                                            <span className=''>
                                                <b>Termino en canje:</b> {new Date(item?.timeInExchangeEnd).toLocaleString('es-ES', { timeZone: 'UTC',
                                                    year: 'numeric',
                                                    month: 'short',
                                                    day: '2-digit',
                                                    hour: '2-digit',
                                                    minute: '2-digit',
                                                }) || ''}hrs
                                            </span> 
                                        </div>
                      
                                    </div>                         
                                </li> 
                                {/* <hr className="border-b border-gray-400 mx-10 pb-6" />  */}
                                <hr className="mx-10 pb-3 xl:w-[550px]" /> 
                                
                            </ul>
                        )):'No cuenta con actividades realizadas recientemente...'
                    }
            </div>

        </div>
    )
}

export default RecentActivities;