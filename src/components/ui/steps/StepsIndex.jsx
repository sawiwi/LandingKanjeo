import React from "react";
import { Fade } from "react-awesome-reveal";
const StepsIndex = ({ renderContent }) => {
    return (
        <div className="tw-container tw-px-5 tw-py-24 tw-mx-auto tw-flex tw-flex-wrap">
            <div className='tw-mx-auto tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-max-w-[1300px] tw-gap-8 tw-my-10'>
                <Fade direction="up" triggerOnce={true}>
                    <div className="tw-container tw-mx-auto tw-flex tw-px-5 tw-md:flex-row tw-flex-col tw-items-center">
                        <div className="tw-lg:flex-grow tw-md:w-1/2 tw-lg:pr-24 tw-md:pr-16 tw-flex tw-flex-col tw-md:items-start tw-md:text-left tw-mb-16 tw-md:mb-0 tw-items-center tw-text-center">
                            <h1 className="tw-title-font tw-sm:text-4xl tw-text-3xl tw-mb-4 tw-font-medium tw-text-primary">{renderContent.headings[0].title}</h1>
                            <p className="tw-mb-8 tw-leading-relaxed">{renderContent.headings[0].subtitle}</p>
                            <img src={renderContent.headings[0].img} alt="" className='tw-w-80 tw-mt-5 z-10 tw-relative tw-rotate-90' />
                        </div>
                    </div>
                </Fade>
                <Fade direction="left" triggerOnce={true}>
                    <ul>
                        {renderContent.step.map((e, idx) => (
                            <li key={idx} className="tw-flex tw-relative tw-pb-8 tw-cursor-default tw-group">
                                <div className="tw-h-full tw-w-10 tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center">
                                    <div className="tw-h-full tw-w-1 tw-bg-gray-200 tw-pointer-events-none"></div>
                                </div>
                                <div className="tw-flex-shrink-0 tw-w-10 tw-h-10 tw-rounded-full tw-bg-[#FEE3D0] tw-text-primary  group-hover:tw-bg-primary-light group-hover:tw-text-white tw-transition-all tw-duration-200 tw-inline-flex tw-items-center tw-justify-center tw-relative tw-z-10">
                                    {e.icon}
                                </div>
                                <p className="tw-flex-grow tw-pl-4 tw-leading-relaxed">{e.content}</p>
                            </li>
                        ))}
                    </ul>
                </Fade>
            </div>
        </div>
    )
}
export default StepsIndex

