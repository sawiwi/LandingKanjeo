import Button from '../ui/button';
import DataBanner from '../BannerHero/DataBanner';
import imgLogo from '../../assets/img/logo/procanje-lg.png'

const HeroText = () =>{
    return(
        <>
        <div className="relative my-6 lg:my-10 2xl:my-10 p-6 xl:pt-2 2xl:pt-7 lg:px-6 2xl:px-10">
            <small className='text-md 2xl:text-lg font-normal 2xl:font-medium '>Unete hoy mismo a nosotros</small>
            <h2 className="text-2xl xl:text-4xl 2xl:text-5xl font-semibold mb-2 text-secondary">Integrate y se parte de la Comunidad</h2>
             {/* <span className='flex items-center text-2xl xl:text-4xl 2xl:text-5xl font-semibold mb-2 text-secondary'></span> */}
            <p className='text-lg 2xl:text-xl font-medium'>Participa y crea tu propia comunidad, donde
            podras forjar excelentes relaciones con colegas del mundo del corretaje.</p>
            <div className="mt-8 flex justify-center">
              <a
                target='_blank'
                rel='noreferrer'
                href={'https://procanje.app/sign-in'}
                className="bg-secondary hover:bg-secondary-light p-2 px-3 rounded-md text-gray-50 shadow-md text-md lg:text-lg tracking-wider font-thin lg:font-light"
              >
                Unirse
              </a>
            </div>
        </div>
        
        </>
    )

}

export default HeroText;