const Modal = ({open, onClose, children }) =>{
    return (
     
      <div
      className={`tw-fixed tw-inset-0 tw-z-50 xl:tw-py-12 tw-flex tw-justify-center tw-items-center tw-transition-colors ${open ? "tw-visible tw-bg-black/50  tw-z-50 tw-rounded-lg" : "tw-invisible"}`} 
      // className={`tw-fixed tw-inset-0 tw-z-50 sm:tw-relative sm:tw-flex sm:tw-justify-center sm:tw-items-center tw-w-full tw-transition-colors ${open ? "tw-visible tw-bg-black/60 tw-h-full sm:tw-bg-transparent tw-rounded-xl sm:tw-rounded-none xl:tw-h-full " : "tw-invisible"}`} 
      onClick={onClose}>
        {/* Modal */}
        <div className={`tw-bg-white tw-rounded-xl tw-shadow-lg tw-p-6 tw-transition-all tw-w-[95%] tw-h-[95%] xl:tw-h-full tw-overflow-hidden md:tw-overflow-y-auto
          ${open ? "tw-scale-100 tw-opacity-100" : "tw-scale-125 tw-opacity-0"}`} 
          onClick={(e) => e.stopPropagation()}>
          <button className="tw-absolute tw-top-2 tw-right-2 tw-p-1 tw-px-2 tw-rounded-full tw-text-gray-600 tw-bg-white hover:tw-bg-gray-50 hover:tw-text-gray-600" onClick={onClose}>
            X
          </button>
          {children}
        </div>
        {/* Fin Modal */}
      </div>
    
    )
  }
  
  export default Modal;