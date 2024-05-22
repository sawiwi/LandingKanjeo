

const CardCommunityThree = ({renderContent}) =>{
    return(
        <>
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-3 ">
            {renderContent.length !== 0 ? renderContent.map((item) => (
                <div key={item.id} className="tw-col-span-1 ">
                    <article className='tw-flex tw-flex-wrap tw-flex-row tw-items-center tw-gap-2 lg:tw-h-48 tw-mb-2 2xl:tw-mb-2 tw-p-4 tw-cursor-pointer hover:tw-text-secondary tw-duration-200'>
                            <a href={item.href} alt="" className="tw-w-full">
                            <img src={item.imgCard}  alt="" loading="lazy" className="tw-object-cover tw-object-right tw-w-full tw-h-56 tw-rounded-xl hover:tw-scale-105 tw-duration-500" />
                            </a>
                            <div className="tw-block">
                                <small className="tw-mt-2 lg:tw-mt-4 tw-text-secondary">{item.subheading}</small>
                                <h5 className='tw-opacity-100 2xl:tw-font-bold tw-text-md lg:tw-text-base 2xl:tw-text-xl'><a className="hover:tw-underline hover:tw-underline-offset-2 tw-duration-150" href={item?.href}>{item.headings?.first}</a> <a className=" hover:tw-underline hover:tw-underline-offset-2 tw-duration-150" href={item?.href2}>{item.headings?.second || ''}</a></h5>
                                <p className=''>{item.texts}</p>
                            </div>        
                    </article>
                </div>
            )):''}
        </div>
        </>
    )
}

export default CardCommunityThree;