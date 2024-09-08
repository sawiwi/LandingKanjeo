import ContactOfAllProperty from "../ContactAllProperty/ContactAllProperty";
import { useEffect } from "react";

const ModalAllProperties = ({data}) => {
    return (
        <>
            <div className="flex flex-col 2xl:flex-row p-1">
                <ContactOfAllProperty property={data}/>
            </div>
        
        </>
    )
}

export default ModalAllProperties