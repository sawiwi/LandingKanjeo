import { GoDotFill } from "react-icons/go";

const RecentActivities = ({data}) =>{
    const propertiesOfRealt = data?.properties || [];
    const customerOfRealt = data?.customers || [];
    
    // const sortedProperties = propertiesOfRealt.sort((a ,b) => {
    //     return new Date(b.updatedAt) - new Date(a.updatedAt);
    // })

    // const sortedCustomer = customerOfRealt.sort((a ,b) => {
    //     return new Date(b.updatedAt) - new Date(a.updatedAt);
    // });

    const combinedArray = [...propertiesOfRealt, ...customerOfRealt].sort((a, b) => {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
    });


    return(
        <div className="tw-flex tw-flex-row tw-mx-2 tw-w-full tw-mt-4 tw-h-96 md:tw-h-80 tw-overflow-y-auto ">
            {/* <div className="tw-w-[20%]"></div> */}
            <div className="tw-w-[95%] tw-p-2">
                    {
                        combinedArray.length > 0 ? combinedArray.slice(0, 8).map(item => (
                            <ul key={item.id} className="tw-list-item">
                                <li className="tw-relative tw-text-sm tw-text-[15px] sm:tw-text-md tw-mb-4 md:tw-mb-2 tw-m-1 tw-flex tw-flex-row tw-items-center tw-gap-3">
                                    <div className="">
                                        <GoDotFill className="tw-text-2xl sm:tw-text-lg tw-text-secondary-light" />
                                    </div>
                                    <div className="tw-absolute tw-w-2 tw-h-44 tw-top-28 tw-left-2 xl:tw-h-12 xl:tw-left-[7px] xl:tw-top-12 xl:tw-w-1 tw-text-secondary-light tw-bg-secondary-light"></div>
                                    <div className="">
                                        <h5 className="">
                                            {item?.propertyTitle ? "Propiedad:" : "Cliente:"}
                                            <span> {item?.propertyTitle || item?.name + item?.lastName || ''}</span>
                                            {/* Propiedad:
                                            <span> {item?.propertyTitle || ''}</span>  */}
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
                                {/* <hr className="tw-border-b tw-border-gray-400 tw-mx-10 tw-pb-6" />  */}
                                <hr className="tw-mx-10 tw-pb-3 xl:tw-w-[550px]" /> 
                                
                            </ul>
                        )):'No cuenta con actividades realizadas recientemente...'
                    }
            </div>

        </div>
    )
}

export default RecentActivities;