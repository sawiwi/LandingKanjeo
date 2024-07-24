import Section from "../section";
import TitleSection from "../title-section";
import { videoData } from "../../data/community";

const HowUse = () => {

    return(
        <>
            <Section className="tw-overflow-hidden tw-bg-gray-50" id='como-funciona'>
                {/* Steps CONTENT */}
                <TitleSection
                    className='lg:tw-mt-20'
                    title="¿Cómo utilizar ProCanje App?"
                    subtitle="Aprende a utilizar nuestra aplicación facilmente."
                    position="center"
                />
                <div className=" tw-text-gray-800 tw-h-[65vh]">
                    {videoData.length !== 0 ? videoData.map((item) => (
                    <div key={item.id} className="tw-flex tw-justify-center tw-mx-80">
                        <article className='tw-flex tw-flex-wrap tw-justify-center tw-items-center tw-gap-2 lg:tw-h-48 tw-mb-2 2xl:tw-mb-4 tw-mt-6 tw-cursor-pointer hover:tw-text-secondary tw-duration-200'>
                                <a href={item.href} target="_blank" rel="noreferrer" alt="" className="tw-w-full tw-object-cover tw-object-right tw-h-56 xl:tw-h-80 tw-rounded-xl hover:tw-scale-105 tw-duration-500">
                                    {/* <img src={item.imgCard} alt="" loading="lazy" className="tw-object-cover tw-object-right tw-w-full tw-h-56 xl:tw-h-80 tw-rounded-xl hover:tw-scale-105 tw-duration-500" /> */}
                                    <iframe 
                                    width="670" 
                                    height="385"
                                    src="https://www.youtube.com/embed/ZqX36VwzvhY?autoplay=1;si=bzYxzlXdcKwzwNAU&amp;start=2" 
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    referrerpolicy="strict-origin-when-cross-origin" 
                                    allowfullscreen>
                                    </iframe>
                             
                                <div className="tw-block tw-mt-10 xl:tw-mt-2">
                                    <small className="tw-mt-2 lg:tw-mt-4 tw-text-secondary">{item.subheading}</small>
                                    <h5 className='tw-opacity-100 2xl:tw-font-bold tw-text-base lg:tw-text-xl 2xl:tw-text-2xl'>{item?.headings}</h5>
                                    <p className=''>{item?.texts}</p>
                                </div>   
                                </a>    
                        </article>
                    </div>
                    )):''}
                </div>

            </Section>
        </>
    )
}
export default HowUse;