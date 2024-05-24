import { listServExt } from "../../data/extern-service/heroData";

const GridExtServ = () => {
    return(
        <div className="tw-flex tw-flex-col md:tw-grid md:tw-grid-cols-4 tw-gap-4 tw-mt-12">
            {listServExt.length !== 0 ? listServExt.map((item)=>(
                <article key={item.id} className="tw-flex tw-flex-col tw-justify-center tw-w-full tw-p-2 tw-relative">
                    <div className="tw-flex tw-flex-col tw-gap-3 tw-items-center tw-my-2 ">
                        <div className='tw-rounded-full tw-text-sky-800 tw-bg-sky-200 hover:tw-scale-105 hover:tw-shadow-lg tw-duration-300 tw-w-[70px] xl:tw-w-48'>
                            <img src={item?.img || ''} alt="imagen de servicio" className=" tw-p-3 tw-py-3 tw-mx-auto tw-w-auto tw-h-28 xl:tw-h-40 "/>
                        </div>
                        <div className="tw-h-44 tw-mx-4 tw-text-center">
                            <h2 className="tw-font-bold tw-text-lg">{item?.name || ''}</h2>
                            <small className="tw-font-normal">{item?.text || ''}</small>
                            <div className='tw-my-2'>
                                <a href={item?.urlWeb || ''} className="tw-mt-3 tw-font-medium">Ver sitio</a>
                            </div>
                        </div>
                    </div>
                </article>
            )): ''}    
        </div>
    )

}

export default GridExtServ;