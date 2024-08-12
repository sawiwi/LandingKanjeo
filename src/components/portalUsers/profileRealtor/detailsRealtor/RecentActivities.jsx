import { GoDotFill } from "react-icons/go";

const RecentActivities = ({data}) =>{
    const propertiesOfRealt = data?.properties || [];
    
    const sortedProperties = propertiesOfRealt.sort((a ,b) => {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
    })

    return(
        <div className="tw-flex tw-flex-row tw-mx-2 tw-w-full tw-mt-4 tw-h-96 md:tw-h-80 tw-overflow-y-auto">
            {/* <div className="tw-w-[20%]"></div> */}
            <div className="tw-w-[95%]">
                    {
                        sortedProperties.length > 0 ? sortedProperties.slice(0, 8).map(item => (
                            <ul key={item.id} className="tw-list-item ">
                                <li className="tw-mb-6 md:tw-mb-2 tw-m-1 tw-flex tw-flex-row tw-items-center tw-gap-3 ">
                                    <div className="">
                                        <GoDotFill className="tw-text-secondary-light" />
                                    </div>
                                    <div className="">
                                        <h5>
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
                            </ul>
                        )):'No cuenta con actividades realizadas recientemente...'
                    }
            </div>

        </div>
    )
}

export default RecentActivities;