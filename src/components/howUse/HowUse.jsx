import Section from "../section";
import TitleSection from "../title-section";
import { videoData } from "../../data/community";

const HowUse = () => {

    return(
        <>
            <Section className="overflow-hidden bg-gray-50" id='como-funciona'>
                {/* Steps CONTENT */}
                <TitleSection
                    className='lg:mt-20'
                    title="¿Cómo utilizar ProCanje App?"
                    subtitle="Aprende a utilizar nuestra aplicación facilmente."
                    position="center"
                />
                <div className=" text-gray-800 h-[100vh] md:h-[80vh] 2xl:h-[65vh]">
                    {videoData.length !== 0 ? videoData.map((item) => (
                    <div key={item.id} className="flex justify-center mx-96 xl:mx-80">
                        <article className='flex flex-wrap justify-center items-center gap-2 lg:h-48 mb-2 2xl:mb-4 mt-6 cursor-pointer hover:text-secondary duration-200'>
                                <a href={item.href} target="_blank" rel="noreferrer" alt="" className="w-full object-cover object-right h-56 xl:h-80 rounded-xl hover:scale-105 duration-500">
                                    {/* <img src={item.imgCard} alt="" loading="lazy" className="object-cover object-right w-full h-56 xl:h-80 rounded-xl hover:scale-105 duration-500" /> */}
                                    {/* <iframe width="670" 
                                    height="385" 
                                    src="https://www.youtube.com/embed/hjLuu0ysbcQ?autoplay=1;si=UEJV13BuOEMqF9QL&amp;start=2" 
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; gyroscope; web-share" 
                                    referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                                    <iframe 
                                    width="670" 
                                    height="385" 
                                    src="https://www.youtube.com/embed/fBgui97XU7w?autoplay=1;si=KXZq4GOp2TyF6X-J;start=2" 
                                    title="YouTube video player" 
                                    frameborder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    referrerpolicy="strict-origin-when-cross-origin" 
                                    allowfullscreen></iframe>
                             
                                <div className="block mt-4 xl:mt-2">
                                    <small className="mt-2 lg:mt-4 text-secondary">{item.subheading}</small>
                                    <h5 className='opacity-100 2xl:font-bold text-base lg:text-xl 2xl:text-2xl'>{item?.headings}</h5>
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