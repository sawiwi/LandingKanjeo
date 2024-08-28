import React from 'react'

const stepsY = ({elements,data, index}) => {
  //elements: el array al que se le hace map.      groupArray.info
  //data: el ITEM declarado en el map.   info.map((ITEM, index)=>(...))
  //index: INDEX del map.   info.map((item, INDEX)=>(...))
  return (
    <li className="flex relative pb-8 cursor-default group">
      {index === elements.length - 1 ? '' : (
        <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
          <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
        </div>)
      }
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FEE3D0] text-primary transition-all duration-200 inline-flex items-center justify-center relative z-10">
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
          <path d="M22 4L12 14.01l-3-3"></path>
        </svg>
      </div>
      <p className="flex-grow pl-4 leading-relaxed">{data}</p>
    </li>
  )
}

export default stepsY
