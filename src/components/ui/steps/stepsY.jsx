import React from 'react'

const stepsY = ({elements,data, index}) => {
  //elements: el array al que se le hace map.      groupArray.info
  //data: el ITEM declarado en el map.   info.map((ITEM, index)=>(...))
  //index: INDEX del map.   info.map((item, INDEX)=>(...))
  return (
    <li className="tw-flex tw-relative tw-pb-8 tw-cursor-default tw-group">
      {index === elements.length - 1 ? '' : (
        <div className="tw-h-full tw-w-10 tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center">
          <div className="tw-h-full tw-w-1 tw-bg-gray-300 tw-pointer-events-none"></div>
        </div>)
      }
      <div className="tw-flex-shrink-0 tw-w-10 tw-h-10 tw-rounded-full tw-bg-[#FEE3D0] tw-text-primary tw-transition-all tw-duration-200 tw-inline-flex tw-items-center tw-justify-center tw-relative tw-z-10">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="tw-w-5 tw-h-5" viewBox="0 0 24 24">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
          <path d="M22 4L12 14.01l-3-3"></path>
        </svg>
      </div>
      <p className="tw-flex-grow tw-pl-4 tw-leading-relaxed">{data}</p>
    </li>
  )
}

export default stepsY
