

const DetailRealtors = ({onClose , data}) => {

    return(
        <div 
        className="relative shadow-lg bg-white h-full md:h-60 w-full rounded-md mt-6 mb-2 p-2 px-3">
            <button className="absolute top-2 right-2 p-1 px-2 rounded-full text-gray-600 bg-white hover:bg-gray-50 hover:text-gray-600" onClick={onClose}>
            X
            </button> 
            <div>
                <h3 className="font-semibold text-2xl sm:mx-12">Clientes del corredor</h3>
            </div>
            {/* {length > 0 ? data.map(realtor => {
                return (
                    <p>{realtor.}</p>
                )
            }):''} */}
        </div>
    )
}
export default DetailRealtors;