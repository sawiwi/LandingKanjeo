import NotFoundProp from "../../../../assets/img/portal-prop/arquitectura.png"
import { PropertiesContext } from "../../../../context/properties/PropertiesContext";
import PropertiesServices from '../../../../services/portal-properties/PropertiesServices'
import { useContext } from "react";
import { 
    parseToCLPCurrency, 
    parseToDecimal, 
    ufToClp, 
    clpToUf2 } from "../../../../utils/truncateExchange";

const DetailCantProps = ({onClose, data}) => {
  
    const propertiesOfRealt = data?.properties || [];
    const activeProperties = propertiesOfRealt.filter(property => property.isActive);


        //limitare los caracteres y poniendo ... en su lugar si es demasiado largo
        const truncate = (str, n) => {
            return str?.length > n ? str.substr(0, n - 1) + '...' : str;
        };
    
        // const formatPrice = (currencyId, propertyPrice) => {
        //     let ufValue = propertyPrice;
        //     let clpValue = propertyPrice;
    
        //     if(valueUf && valueUf.Valor){
        //         // const valueIntUf = valueUf.Valor.replace(/\./g, '').replace(',', '.');
        //         const valueIntUf = parseFloat(valueUf.Valor.replace(/\./g, '').replace(',', '.'))
    
        //         if(currencyId === 'UF'){
        //             clpValue = ufToClp(propertyPrice, valueIntUf);
        //         }
        //         if(currencyId === 'CLP'){
        //             ufValue = clpToUf2(propertyPrice, valueIntUf)
        //         }
        //     }
        //     else{
        //         clpValue = 0;
        //         ufValue = 0;
        //     }
        //     return (
        //         <div>
        //              <div className="tw-mx-4 tw-mb-2 tw-my-3 tw-flex tw-flex-row tw-justify-between tw-items-center">
        //                 <p className="xl:tw-text-xl">
        //                     <b>{parseToDecimal(ufValue)} UF</b>
        //                 </p>
                       
        //                 <p className="xl:tw-text-xl">
        //                     <b>{parseToCLPCurrency(clpValue)}.-</b>
        //                 </p>
        //             </div>
        //         </div>
    
        //     )
    
        // };
    return(
        <div className="tw-relative tw-shadow-lg tw-bg-white tw-h-full md:tw-h-full tw-w-full tw-rounded-md tw-mt-2 tw-mb-2 tw-p-2 tw-px-3 ">
      <button className="tw-absolute tw-top-2 tw-right-2 tw-p-1 tw-px-2 tw-rounded-full tw-text-gray-600 tw-bg-white hover:tw-bg-gray-50 hover:tw-text-gray-600" onClick={onClose}>
        X
      </button>
      <div>
        <h3 className="tw-font-semibold tw-text-2xl sm:tw-mx-12">Propiedades del corredor</h3>
      </div>
      <div className="tw-flex tw-flex-col md:tw-grid md:tw-grid-cols-2 2xl:tw-grid-cols-3 tw-gap-4 sm:tw-mx-20 tw-my-4 tw-mt-6">
        {activeProperties.length > 0 ? (
          activeProperties.map(property => (
            <>
             <article key={property?.id} className="tw-shadow-lg tw-flex tw-flex-col tw-border-2 tw-h-full md:tw-h-60 xl:tw-h-full 2xl:tw-h-full md:tw-w-full tw-p-2 tw-group xl:tw-overflow-hidden 2xl:tw-p-1">
              <div className="tw-mb-2 tw-relative">
                <img
                  src={NotFoundProp}
                  alt="img-casa-not-found"
                  className="tw-h-40 xl:tw-h-36 tw-w-full tw-object-scale-down group-hover:-tw-translate-y-2 tw-duration-200 tw-p-4 2xl:tw-mx-2"
                />
                <small className="tw-absolute tw-top-1 tw-left-1 tw-p-[0.15rem] tw-px-4 tw-font-normal tw-opacity-100 group-hover:tw-opacity-70 tw-bg-secondary tw-text-gray-50 tw-rounded-sm group-hover:tw-top-0 tw-duration-200">
                  {property?.typeOfPropertyId || ''}
                </small>
                <small className="tw-absolute tw-top-8 tw-left-1 tw-p-[0.18rem] tw-px-4 tw-font-normal tw-opacity-100 group-hover:tw-opacity-70 tw-bg-secondary tw-text-gray-50 tw-rounded-sm group-hover:tw-top-7 tw-duration-200">
                  {property?.typeOfOperationId || ''}
                </small>
              </div>
              <div className="tw-mx-2">
                <h2 className="tw-font-semibold tw-text-center tw-text-lg">{truncate(property.propertyTitle, 40)}</h2>
                <p className="tw-text-center tw-text-sm">{truncate(property?.propertyDescription, 100)}</p>
              </div>
            </article>
            </>
           
          ))
        ) : (
          <div className="tw-shadow-lg tw-flex tw-flex-row tw-border-2 tw-h-full md:tw-h-60 xl:tw-h-full 2xl:tw-h-full md:tw-w-full tw-p-2  xl:tw-overflow-hidden 2xl:tw-p-1">
            <div className="tw-mx-36 2xl:tw-mx-10 tw-text-center">
              No cuenta con propiedades activas
            </div>
          </div>
        )}
      </div>
    </div>
    );
};

export default DetailCantProps;