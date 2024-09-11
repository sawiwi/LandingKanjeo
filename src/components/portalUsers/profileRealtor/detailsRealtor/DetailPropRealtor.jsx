import NotFoundProp from "../../../../assets/img/portal-prop/arquitectura.png"
import { PropertiesContext } from "../../../../context/properties/PropertiesContext";
import PropertiesServices from '../../../../services/portal-properties/PropertiesServices'
import { useContext , useState} from "react";
import { 
    parseToCLPCurrency, 
    parseToDecimal, 
    ufToClp, 
    clpToUf2 } from "../../../../utils/truncateExchange";


const DetailCantProps = ({onClose, data}) => {
  const { contextData } = useContext(PropertiesContext);
  const {
      valueUf,
  } = contextData;
    const propertiesOfRealt = data?.properties || [];
    const activeProperties = propertiesOfRealt.filter(property => property.propertyStatus.name === 'Activa');


        //limitare los caracteres y poniendo ... en su lugar si es demasiado largo
        const truncate = (str, n) => {
            return str?.length > n ? str.substr(0, n - 1) + '...' : str;
        };
    
        const formatPrice = (currencyId, propertyPrice) => {
            let ufValue = propertyPrice;
            let clpValue = propertyPrice;
    
            if(valueUf && valueUf.Valor){
                // const valueIntUf = valueUf.Valor.replace(/\./g, '').replace(',', '.');
                const valueIntUf = parseFloat(valueUf.Valor.replace(/\./g, '').replace(',', '.'))
    
                if(currencyId === 'UF'){
                    clpValue = ufToClp(propertyPrice, valueIntUf);
                }
                if(currencyId === 'CLP'){
                    ufValue = clpToUf2(propertyPrice, valueIntUf)
                }
            }
            else{
                clpValue = 0;
                ufValue = 0;
            }
            return (
                <div>
                     <div className="mx-4 mb-2 my-3 flex flex-row justify-between items-center">
                        <p className="xl:text-lg">
                            <b>{parseToDecimal(ufValue)} UF</b>
                        </p>
                       
                        <p className="xl:text-lg">
                            <b>{parseToCLPCurrency(clpValue)}.-</b>
                        </p>
                    </div>
                </div>
    
            )
    
        };


    return(
      <div className="relative shadow-lg bg-white h-full md:h-full w-full rounded-md mt-2 mb-2 p-2 px-3 ">
        <button className="absolute top-2 right-2 p-1 px-2 rounded-full text-gray-600 bg-white hover:bg-gray-50 hover:text-gray-600" onClick={onClose}>
          X
        </button>
        <div>
          <h3 className="font-semibold text-2xl sm:mx-12">Propiedades del corredor</h3>
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 2xl:grid-cols-3 gap-4 sm:mx-20 my-4 mt-6">
          {activeProperties.length > 0 ? (
            activeProperties.map(property => (
              // console.log('precio:' , property.propertyPrice.d)
              <>
              <article key={property?.id} className="shadow-lg flex flex-col border-2 h-full md:h-60 xl:h-full 2xl:h-full md:w-full p-2 group xl:overflow-hidden 2xl:p-1">
                <div className="mb-2 relative">
                  {property.images.length > 0 && /\.(jpg|jpeg|png|avif)$/.test(property.images[0].path) ? (
                                <img 
                                      key={property.images[0].id}
                                      src={property.images[0].path || NotFoundProp} 
                                      alt={`img-${property.images[0].id}`} 
                                      className="h-44 w-full object-cover rounded-md group-hover:-translate-y-2 duration-200 shadow-md" 
                                                   />
                                      ) :(
                                          <img 
                                            src={NotFoundProp} 
                                            alt="img-casa-not-found" 
                                            className="h-48 xl:h-44 w-full xl:w-44 object-scale-down group-hover:-translate-y-2 duration-200 p-4 xl:mx-36" 
                                                    />
                                                    )                                            
                                                }
                  <small className="absolute top-1 left-1 p-[0.15rem] px-4 font-normal opacity-100 group-hover:opacity-70 bg-secondary text-gray-50 rounded-sm group-hover:top-0 duration-200">
                    {property?.typeOfPropertyId || ''}
                  </small>
                  <small className="absolute top-8 left-1 p-[0.18rem] px-4 font-normal opacity-100 group-hover:opacity-70 bg-secondary text-gray-50 rounded-sm group-hover:top-7 duration-200">
                    {property?.typeOfOperationId || ''}
                  </small>
                </div>
                {
                  property.externalLink !== null && (
                    <div className="mx-2 flex justify-center gap-2 text-sm text-gray-500 font-light cursor-pointer">
                      <a href={property.externalLink} target="_blank" rel="noreferrer">
                          {truncate(property?.externalLink, 36 || 'no tiene')}
                      </a>
                  </div> 
                  )  
                }
       
                <div className="mx-2">
                  {formatPrice(property?.currencyId, property?.propertyPrice.d)}
                  <h2 className="font-semibold text-center text-lg">{truncate(property.propertyTitle, 40)}</h2>
                  <p className="text-center text-sm">{truncate(property?.propertyDescription, 100)}</p>              
                </div>
              

              </article>
              </>
            
            ))
          ) : (
            <div className="shadow-lg flex flex-row border-2 h-full md:h-60 xl:h-full 2xl:h-full md:w-full p-2  xl:overflow-hidden 2xl:p-1">
              <div className="mx-36 2xl:mx-10 text-center">
                No cuenta con propiedades activas
              </div>
            </div>
          )}
        </div>
    </div>
    );
};

export default DetailCantProps;