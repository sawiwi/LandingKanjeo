

const CardCommunity = ({renderContent}) =>{
    return(
        <>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 mt-4">
            {renderContent.length !== 0 ? renderContent.map((item) => (
                <div key={item.id} className="col-span-1 ">
                    <a href={item.href} alt="" className="w-full">
                        <article className='flex flex-wrap flex-row items-center gap-2 lg:h-48 mb-2 2xl:mb-4 p-4 cursor-pointer hover:text-secondary duration-200'>
                                <img src={item.imgCard} alt="" loading="lazy" className="object-cover object-right w-full h-56 rounded-xl hover:scale-105 duration-500"/>
                                <div className="block">
                                    <small className="mt-2 lg:mt-4 text-secondary">{item.subheading}</small>
                                    <h5 className='opacity-100 2xl:font-bold text-md lg:text-base xl:text-xl 2xl:text-2xl'>{item.headings}</h5>
                                    <p className=''>{item.texts}</p>
                                </div>        
                        </article>
                    </a>
                </div>
            )):''}
        </div>
        </>
    )
}

export default CardCommunity;