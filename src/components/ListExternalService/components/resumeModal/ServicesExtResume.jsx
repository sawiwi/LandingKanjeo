

const ResumeServices = ({data}) => {
    // console.log('data: ', data)
    return(
        <div className="">
            {
                data.length > 0 ? data.map(item => (
                    <div key={item.id} className="p-2">
                        <div className="p-4 px-20 m-2 mb-6">
                            <img src={item?.logo || ''} alt="" className="shadow-xl" />
                        </div>
                        <div className="flex flex-col text-center mb-6">
                            <h3 className="text-2xl ">{item?.name || 'no hay' }</h3>
                            <a href={'https://'+item?.webPage} target="_blank" rel="noreferrer" className="font-light">{item?.webPage || 'No cuenta con página web'}</a>
                        </div>
                        <div className="flex justify-center text-center mb-10">
                            <p>
                                {item?.description || 'No tiene descripción'}
                            </p>
                        </div>
                        <div className="grid grid-cols-2 text-center">
                            <div>
                                <ul className="gap-2">
                                    <li className="mb-2">
                                        <p className="font-bold">Nombre Empresa</p>
                                        {item?.owner.companyName || 'No tiene'}
                                    </li>
                                    <li className="mb-2">
                                        <p className="font-bold">Locación</p>
                                        {item?.locationOfOperation || 'No tiene locación'}
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className="mb-2">
                                        <p className="font-bold">Correo</p>
                                        {item?.email || 'No tiene email'}
                                    </li>
                                    <li className="mb-2">
                                        <p className="font-bold">Contacto</p>
                                        {item?.phone || 'No tiene celular'}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                )
                ):''
            }
        </div>
    )
}
export default ResumeServices;