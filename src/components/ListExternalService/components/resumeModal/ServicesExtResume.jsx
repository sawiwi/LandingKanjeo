

const ResumeServices = ({data}) => {
    console.log('data: ', data)
    return(
        <div className="">
            {
                data.length > 0 ? data.map(item => (
                    <div key={item.id} className="tw-p-2">
                        <div className="tw-p-4 tw-px-20 tw-m-2 tw-mb-6">
                            <img src={item?.logo || ''} alt="" className="tw-shadow-xl" />
                        </div>
                        <div className="tw-flex tw-flex-col tw-text-center tw-mb-6">
                            <h3 className="tw-text-2xl ">{item?.name || 'no hay' }</h3>
                            <a href={'https://'+item?.webPage} target="_blank" rel="noreferrer" className="tw-font-light">{item?.webPage || 'No cuenta con página web'}</a>
                        </div>
                        <div className="tw-flex tw-justify-center tw-text-center tw-mb-10">
                            <p>
                                {item?.description || 'No tiene descripción'}
                            </p>
                        </div>
                        <div className="tw-grid tw-grid-cols-2 tw-text-center">
                            <div>
                                <ul className="tw-gap-2">
                                    <li className="tw-mb-2">
                                        <p className="tw-font-bold">Nombre Empresa</p>
                                        {item?.owner.companyName || 'No tiene'}
                                    </li>
                                    <li className="tw-mb-2">
                                        <p className="tw-font-bold">Locación</p>
                                        {item?.locationOfOperation || 'No tiene locación'}
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li className="tw-mb-2">
                                        <p className="tw-font-bold">Correo</p>
                                        {item?.email || 'No tiene email'}
                                    </li>
                                    <li className="tw-mb-2">
                                        <p className="tw-font-bold">Contacto</p>
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