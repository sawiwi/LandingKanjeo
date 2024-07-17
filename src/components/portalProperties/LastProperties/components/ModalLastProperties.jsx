
import ContactRealtor from "./ContactModal/ContactRealtor";
import DetailsProperty from "./DetailsModal/DetailsProperty";
import { useEffect } from "react";
// import imgCasaOne from '../../../../assets/img/Hero/casa1.webp'
// import imgCasaTwo from '../../../../assets/img/Hero/casa2.webp'
// import imgCasaThree from '../../../../assets/img/Hero/casa3.webp'

const ModalLastProperties = ({data}) => {

    return (
        <>
            <div className="tw-flex tw-flex-col md:tw-flex-row tw-p-1 tw-px-3">
                <DetailsProperty property={data}/>
                <ContactRealtor/>
            </div>
        
        </>
    )
}

export default ModalLastProperties