const ModalAllPropertyContact = ({open, onClose, children }) =>{
    return (
      <div
      className={`fixed inset-0 z-50 xl:py-3 2xl:py-6 flex justify-center items-center transition-colors ${open ? "visible bg-black/50 h-full z-50 sm:rounded-lg" : "invisible"}`} 
      // className={`fixed inset-0 z-50 sm:relative sm:flex sm:justify-center sm:items-center w-full transition-colors ${open ? "visible bg-black/60 h-full sm:bg-transparent rounded-xl sm:rounded-none xl:h-full " : "invisible"}`} 
      onClick={onClose}>
        {/* Modal */}
        <div className={`bg-white rounded-xl shadow-lg p-3 xl:p-2  transition-all w-[95%] xl:w-[65%] 2xl:w-[40%] h-[95%] 2xl:h-[85%] overflow-y-auto
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
  
  export default ModalAllPropertyContact;