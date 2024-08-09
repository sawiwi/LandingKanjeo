

const DetailRealtors = ({onClose , data}) => {

    return(
        <div 
        className="tw-relative tw-shadow-lg tw-bg-white tw-h-full md:tw-h-60 tw-w-full tw-rounded-md tw-mt-6 tw-mb-2 tw-p-2 tw-px-3">
            <button className="tw-absolute tw-top-2 tw-right-2 tw-p-1 tw-px-2 tw-rounded-full tw-text-gray-600 tw-bg-white hover:tw-bg-gray-50 hover:tw-text-gray-600" onClick={onClose}>
            X
            </button> 
            <div>
                <h3 className="tw-font-semibold tw-text-2xl sm:tw-mx-12">Clientes del corredor</h3>
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