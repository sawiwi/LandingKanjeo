
import ContactRealtor from "./ContactModal/ContactRealtor";
import DetailsProperty from "./DetailsModal/DetailsProperty";
import { useEffect } from "react";

const ModalLastProperties = ({data}) => {
    return (
        <>
            <div className="tw-flex tw-flex-col md:tw-flex-row tw-p-1 tw-px-3">
                <DetailsProperty property={data}/>
                <ContactRealtor property={data}/>
            </div>
        
        </>
    )
}

export default ModalLastProperties