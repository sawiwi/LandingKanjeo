

const CardCommunityThree = ({renderContent}) =>{
    return(
        <>
        <div className="tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 xl:tw-grid-cols-3 tw-gap-3 ">
            {renderContent.length !== 0 ? renderContent.map((item) => (
                <div key={item.id} className="tw-col-span-1 ">
                    <article className='tw-flex tw-flex-wrap tw-flex-row tw-items-center tw-gap-2 lg:tw-h-48 tw-mb-2 2xl:tw-mb-2 tw-p-4 tw-cursor-pointer hover:tw-text-secondary tw-duration-200'>
                            <img src={item.imgCard} alt="" className="tw-object-cover tw-object-right tw-w-full tw-h-56 tw-rounded-xl hover:tw-scale-105 tw-duration-500" />
                            <div className="tw-block">
                                <small className="tw-mt-2 lg:tw-mt-4 tw-text-secondary">{item.subheading}</small>
                                <h5 className='tw-opacity-100 2xl:tw-font-bold tw-text-md lg:tw-text-base 2xl:tw-text-xl'>{item.headings}</h5>
                                <p className=''>{item.texts}</p>
                            </div>        
                    </article>
                </div>
            )):''}
            {/* <div className="tw-col-span-1 ">
                <article className='tw-flex tw-flex-wrap tw-flex-row tw-items-center tw-justify-center tw-gap-2 tw-drop-shadow-xl tw-bg-gray-100 lg:tw-h-48 tw-mb-2 2xl:tw-mb-4 tw-p-4  hover:tw-bg-secondary hover:tw-text-white tw-duration-200 tw-rounded-md'>
                    <img src="" alt=""/>
                    <h5 className=' tw-mt-2 lg:tw-mt-4 tw-opacity-100 2xl:tw-font-bold tw-text-md lg:tw-text-base 2xl:tw-text-xl'>Card 1</h5>
                    <small className=''>que bonito</small>
                </article>
            </div>
            <div className="tw-col-span-1 ">
                <article className='tw-flex tw-flex-wrap tw-flex-row tw-items-center tw-justify-center tw-gap-2 tw-drop-shadow-xl tw-bg-gray-100 lg:tw-h-48 tw-mb-2 2xl:tw-mb-4 tw-p-4  hover:tw-bg-secondary hover:tw-text-white tw-duration-200 tw-rounded-md'>
                    <img src="" alt=""/>
                    <h5 className=' tw-mt-2 lg:tw-mt-4 tw-opacity-100 2xl:tw-font-bold tw-text-md lg:tw-text-base 2xl:tw-text-xl'>Card2</h5>
                    <small className=''>que bonito</small>
                </article>
            </div>
            <div className="tw-col-span-1 ">
                <article className='tw-flex tw-flex-wrap tw-flex-row tw-items-center tw-justify-center tw-gap-2 tw-drop-shadow-xl tw-bg-gray-100 lg:tw-h-48 tw-mb-2 2xl:tw-mb-4 tw-p-4  hover:tw-bg-secondary hover:tw-text-white tw-duration-200 tw-rounded-md'>
                    <img src="" alt=""/>
                    <h5 className=' tw-mt-2 lg:tw-mt-4 tw-opacity-100 2xl:tw-font-bold tw-text-md lg:tw-text-base 2xl:tw-text-xl'>Card2</h5>
                    <small className=''>que bonito</small>
                </article>
            </div> */}
        </div>
        </>
    )
}

export default CardCommunityThree;