
import ContactRealtor from "./ContactModal/ContactRealtor";
import DetailsProperty from "./DetailsModal/DetailsProperty";
import { useEffect } from "react";

const ModalLastProperties = ({data}) => {
    return (
        <>
            <div className="flex flex-col 2xl:flex-row p-1 px-3">
                <DetailsProperty property={data}/>
                {/* <hr className="my-5 w-[400px] text-gray-700 mx-72" /> */}
                <ContactRealtor property={data}/>
            </div>
        
        </>
    )
}

export default ModalLastProperties