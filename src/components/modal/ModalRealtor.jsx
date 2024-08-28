const ModalRealtor = ({open, onClose, children }) =>{
    return (
     
      <div
        //className={`fixed inset-0 z-50 xl:py-12 flex justify-center items-center transition-colors ${open ? "visible bg-black/50  z-50 rounded-lg" : "invisible"}`} 
      className={`fixed inset-0 z-40 xl:top-20 sm:relative sm:flex sm:justify-center sm:items-center w-full transition-colors xl:mx-2 ${open ? "visible bg-black/60 h-full sm:bg-transparent rounded-xl sm:rounded-none 2xl:h-[85vh] " : "invisible"}`} 
      onClick={onClose}>
        {/* Modal */}
        <div className={`bg-white rounded-xl shadow-lg p-6 xl:p-3 transition-all w-[99%] h-[95%]  xl:h-[98%] overflow-hidden md:overflow-y-auto
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
  
  export default ModalRealtor;