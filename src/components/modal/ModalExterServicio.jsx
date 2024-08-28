const ModalExternServices = ({open, onClose, children }) =>{
    return (
      <div
        //className={`fixed inset-0 z-50 xl:py-12 flex justify-center items-center transition-colors ${open ? "visible bg-black/50  z-50 rounded-lg" : "invisible"}`} 
        className={`fixed top-0 left-0 sm:top-10 2xl:top-[15%] xl:left-[35%] z-50 xl:py-10 2xl:py-6 flex justify-center items-center transition-colors ${open ? "visible w-full h-full sm:w-96 2xl:w-[30%] 2xl:h-[75%] bg-black/30 z-50 sm:rounded-lg" : "invisible"}`} 
        onClick={onClose}>
        {/* Modal */}
        <div className={`bg-white rounded-xl shadow-lg p-6 xl:p-3 transition-all w-[95%] xl:w-[95%] h-[95%]  xl:h-[98%] overflow-hidden md:overflow-y-auto
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}`} 
          onClick={(e) => e.stopPropagation()}>
          <button className="absolute top-2 right-2 p-1 px-2 rounded-full text-gray-600 bg-white hover:bg-gray-50 hover:text-gray-600" onClick={onClose}>
            X
          </button>
          {children}
        </div>
        {/* Fin Modal */}
      </div>
    
    )
  }
  
  export default ModalExternServices;