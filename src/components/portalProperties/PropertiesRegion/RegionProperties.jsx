import imgSantiago from '../../../assets/img/region/santiago.webp'
import imgValparaiso from '../../../assets/img/region/valparaiso.webp'
import imgLaSerena from '../../../assets/img/region/laSerena.webp'
import imgIquique from '../../../assets/img/region/iquique.webp'

import imgCasaUno from '../../../assets/img/Hero/casa1.webp'
import imgCasaTwo from '../../../assets/img/Hero/casa2.webp'
import imgCasaThree from '../../../assets/img/Hero/casa3.webp'
import Modal from '../../modal/Modal'
import { useState } from 'react'
import ModalLastProperties from '../LastProperties/components/ModalLastProperties'

const FilterRegionsProperties = () =>{
    const [contactOpen, setContactOpen] = useState(false);

    const onOpenContact = () =>{
        setContactOpen(true)
    }

    const onCloseContact = () =>{
        setContactOpen(false)
    }
    return(
        <>
            <div className="tw-flex tw-justify-center tw-my-10 md:tw-mt-14 tw-mx-2 2xl:tw-mx-32">
                        <h2 className="tw-text-gray-700 tw-text-xl tw-text-center md:tw-text-start md:tw-text-2xl tw-font-medium">Regiones donde más se hacen canjes</h2>
                    </div>
                    <div className="tw-flex md:tw-flex-row tw-justify-center tw-mt-12 tw-my-6 tw-mx-32 tw-h-40 tw-gap-6"> 
                        <div>
                            <div className="tw-h-20 tw-w-20 md:tw-h-32 md:tw-w-32 2xl:tw-h-36 2xl:tw-w-36 tw-text-center">
                            <small className="tw-font-semibold tw-text-lg tw-mb-5 tw-text-gray-600">Santiago</small>
                                <img src={imgSantiago} className="tw-object-cover tw-cursor-pointer tw-rounded-full tw-h-full tw-w-full tw-my-3 hover:tw-scale-105 hover:tw-shadow-xl tw-duration-150" alt=""/>
                            </div>
                        </div>
                        <div>
                            <div className="tw-h-20 tw-w-20 md:tw-h-32 md:tw-w-32 2xl:tw-h-36 2xl:tw-w-36 tw-text-center">
                                <small className="tw-font-semibold tw-text-lg tw-mb-5 tw-text-gray-600">Valparaiso</small>
                                <img src={imgValparaiso} className="tw-object-cover tw-cursor-pointer tw-rounded-full tw-h-full tw-w-full tw-my-3  hover:tw-scale-105 hover:tw-shadow-xl tw-duration-150" alt=""/>
                            </div>
                        </div>
                        <div>
                            <div className="tw-h-20 tw-w-20 md:tw-h-32 md:tw-w-32 2xl:tw-h-36 2xl:tw-w-36 tw-text-center">
                                <small className="tw-font-semibold tw-text-lg tw-mb-5 tw-text-gray-600">La Serena</small>
                                <img src={imgLaSerena} className="tw-object-cover tw-cursor-pointer tw-rounded-full tw-h-full tw-w-full tw-my-3 hover:tw-scale-105 hover:tw-shadow-xl tw-duration-150" alt=""/>
                            </div>
                        </div>
                        <div>
                            <div className="tw-h-20 tw-w-20 md:tw-h-32 md:tw-w-32 2xl:tw-h-36 2xl:tw-w-36 tw-text-center">  
                                <small className="tw-font-semibold tw-text-lg tw-mb-5 tw-text-gray-600">Iquique</small>
                                <img src={imgIquique} className="tw-object-cover tw-cursor-pointer tw-rounded-full tw-h-full tw-w-full tw-my-3 hover:tw-scale-105 hover:tw-shadow-xl tw-duration-150" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="tw-flex sm:tw-justify-start md:tw-mt-16 tw-items-center tw-mx-3 2xl:tw-mx-32">
                        <div className="tw-flex tw-gap-2 tw-my-2">
                            <p className="tw-text-gray-500">Propiedades encontradas:</p><span className="tw-font-light tw-cursor-pointer">3</span>
                        </div>
                    </div>
                    <div className="tw-grid tw-grid-row tw-grid-cols-1 lg:tw-grid-cols-2 2xl:tw-grid-cols-3 tw-gap-6 2xl:tw-gap-2 tw-mt-2 tw-my-3 tw-mx-3 2xl:tw-mx-32">
                        <article 
                        onClick={onOpenContact}
                        className="tw-cursor-pointer tw-shadow-lg tw-flex tw-flex-col tw-border-2 tw-h-full md:tw-h-[360px] tw-w-full tw-p-2 tw-group">
                            <div className="tw-mb-2 tw-relative">
                                <img src={imgCasaUno} alt="img-casa" className="tw-h-64 tw-w-full tw-object-cover tw-rounded-md group-hover:-tw-translate-y-2 tw-duration-200 tw-shadow-md" />
                            </div>
                            <div className="">
                            <h2 className="tw-font-semibold tw-text-center tw-text-xl">Titulo de la casa</h2>
                            <div className="md:tw-mx-4 tw-mt-2 tw-flex tw-flex-row tw-justify-between tw-items-center">
                                <div className="tw-mx-4 tw-flex">
                                        <p className="tw-font-semibold">Santiago, Providencia</p>
                                </div>
                                <div className="tw-flex tw-gap-2 tw-items-center">
                                        <p>DESDE <b>3.200 UF</b></p>
                                </div>
                            </div>
                            </div>
                        </article>
                        <article className="tw-shadow-lg tw-flex tw-flex-col tw-border-2 tw-h-full md:tw-h-[360px] tw-w-full tw-p-2 tw-group">
                            <div className="tw-mb-2 tw-relative">
                                <img src={imgCasaThree} alt="img-casa" className="tw-h-64 tw-w-full tw-object-cover tw-rounded-md group-hover:-tw-translate-y-2 tw-duration-200 tw-shadow-md" />
                            </div>
                            <div className="">
                            <h2 className="tw-font-semibold tw-text-center tw-text-xl">Titulo de la casa</h2>
                            <div className="md:tw-mx-4 tw-mt-2 tw-flex tw-flex-row tw-justify-between tw-items-center">
                                    <div className="tw-mx-4 tw-flex">
                                        <p className="tw-font-semibold">Santiago, Providencia</p>
                                    </div>
                                    <div className="tw-flex tw-gap-2 tw-items-center">
                                        <p>DESDE <b>3.200 UF</b></p>
                                    </div>
                            </div>
                            </div>
                        </article>
                        <article className="tw-shadow-lg tw-flex tw-flex-col tw-border-2 tw-h-full md:tw-h-[360px] tw-w-full tw-p-2 tw-group">
                            <div className="tw-mb-2 tw-relative">
                                <img src={imgCasaTwo} alt="img-casa" className="tw-h-64 tw-w-full tw-object-cover tw-rounded-md group-hover:-tw-translate-y-2 tw-duration-200 tw-shadow-md" />
                            </div>
                            <div className="">
                            <h2 className="tw-font-semibold tw-text-center tw-text-xl">Titulo de la casa</h2>
                            <div className="md:tw-mx-4 tw-mt-2 tw-flex tw-flex-row tw-justify-between tw-items-center">
                                    <div className="tw-mx-4 tw-flex">
                                        <p className="tw-font-semibold">Santiago, Providencia</p>
                                    </div>
                                    <div className="tw-flex tw-gap-2 tw-items-center">
                                        <p>DESDE <b>3.200 UF</b></p>
                                    </div>
                            </div>
                            </div>
                        </article>
                    </div>

                    <Modal open={contactOpen} onClose={onCloseContact} className="tw-w-[90%] tw-h-full">
                        <ModalLastProperties/>
                    </Modal>

        </>
    )
}
export default FilterRegionsProperties;