import Button from '../ui/button';
import DataBanner from '../BannerHero/DataBanner';


const HeroText = () =>{
    return(
        <>
        <div className="tw-relative tw-my-6 lg:tw-my-10 2xl:tw-my-16 tw-mt-16 lg:tw-mt-24 2xl:tw-mt-48 tw-p-6 lg:tw-px-6 2xl:tw-px-10">
            <small className='tw-text-md 2xl:tw-text-lg tw-font-normal 2xl:tw-font-medium '>Unete hoy mismo a nosotros</small>
            <h2 className="tw-text-2xl xl:tw-text-4xl 2xl:tw-text-5xl tw-font-semibold tw-mb-2 tw-text-secondary">Integrate y se parte de la Comunidad de YoKanjeo</h2>
            <p className='tw-text-lg 2xl:tw-text-xl tw-font-medium'>Participa y crea tu propia comunidad, donde
            podras forjar excelentes relaciones con colegas del mundo del corretaje.</p>
            <div className="tw-mt-8 tw-flex tw-justify-center">
              <Button
                href={'/contacto'}
                className="tw-bg-secondary hover:tw-bg-secondary-light tw-shadow-md tw-text-md lg:tw-text-lg tw-tracking-wider tw-font-thin lg:tw-font-light"
              >
                Unirse
              </Button>
            </div>
        </div>
        <DataBanner/>
        </>
    )

}

export default HeroText;