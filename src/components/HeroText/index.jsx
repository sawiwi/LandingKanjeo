import Button from '../ui/button';
import DataBanner from '../BannerHero/DataBanner';
import imgLogo from '../../assets/img/logo/procanje-lg.png'

const HeroText = () =>{
    return(
        <>
        <div className="tw-relative tw-my-6 lg:tw-my-10 2xl:tw-my-16 tw-mt-16 lg:tw-mt-24 2xl:tw-mt-48 tw-p-6 xl:tw-pt-2 2xl:tw-pt-7 lg:tw-px-6 2xl:tw-px-10">
            <small className='tw-text-md 2xl:tw-text-lg tw-font-normal 2xl:tw-font-medium '>Unete hoy mismo a nosotros</small>
            <h2 className="tw-text-2xl xl:tw-text-4xl 2xl:tw-text-5xl tw-font-semibold tw-mb-2 tw-text-secondary">Integrate y se parte de la</h2>
             <span className='tw-flex tw-items-center tw-text-2xl xl:tw-text-4xl 2xl:tw-text-5xl tw-font-semibold tw-mb-2 tw-text-secondary'>Comunidad de <img src={imgLogo} alt='' className='tw-flex tw-w-36 tw-h-auto xl:tw-w-40 2xl:tw-w-56 xl:tw-mt-2 2xl:tw-mt-3 tw-ml-2' /></span>
            <p className='tw-text-lg 2xl:tw-text-xl tw-font-medium'>Participa y crea tu propia comunidad, donde
            podras forjar excelentes relaciones con colegas del mundo del corretaje.</p>
            <div className="tw-mt-8 tw-flex tw-justify-center">
              <a
                target='_blank'
                rel='noreferrer'
                href={'https://procanje.app/sign-in'}
                className="tw-bg-secondary hover:tw-bg-secondary-light tw-p-2 tw-px-3 tw-rounded-md tw-text-gray-50 tw-shadow-md tw-text-md lg:tw-text-lg tw-tracking-wider tw-font-thin lg:tw-font-light"
              >
                Unirse
              </a>
            </div>
        </div>
        <DataBanner/>
        </>
    )

}

export default HeroText;