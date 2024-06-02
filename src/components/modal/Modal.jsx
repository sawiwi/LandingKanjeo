const Modal = ({open, onClose, children }) =>{
    return (
      <>
      <div
      className={`tw-flex tw-justify-center tw-items-center tw-w-full tw-transition-colors ${open ? "tw-visible xl:tw-h-full " : "tw-invisible"}`} onClick={onClose}>
        {/* Modal */}
        <div className={`tw-bg-white tw-rounded-xl tw-shadow tw-p-6 tw-transition-all ${open ? "tw-scale-100 tw-opacity-100" : "tw-scale-125 tw-opacity-0"}`} onClick={(e) => e.stopPropagation()}>
          <button className="tw-absolute tw-top-2 tw-right-2 tw-p-1 tw-px-2  tw-rounded-full tw-text-gray-400 tw-bg-white hover:tw-bg-gray-50 hover:tw-text-gray-600" onClick={onClose}>
            X
          </button>
          {children}
        </div>
        {/* Fin Modal */}
      </div>
      </>
    )
  }
  
  export default Modal;