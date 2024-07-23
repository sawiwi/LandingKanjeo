
import ContactRealtor from "./ContactModal/ContactRealtor";
import DetailsProperty from "./DetailsModal/DetailsProperty";
import { useEffect } from "react";

const ModalLastProperties = ({data}) => {
    return (
        <>
            <div className="tw-flex tw-flex-col 2xl:tw-flex-row tw-p-1 tw-px-3">
                <DetailsProperty property={data}/>
                {/* <hr className="tw-my-5 tw-w-[400px] tw-text-gray-700 tw-mx-72" /> */}
                <ContactRealtor property={data}/>
            </div>
        
        </>
    )
}

export default ModalLastProperties