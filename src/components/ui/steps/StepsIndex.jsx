import React from "react";
import { Fade } from "react-awesome-reveal";
const StepsIndex = ({ renderContent }) => {
    return (
        <div className="tw-container tw-px-5 tw-py-16 tw-mx-auto tw-flex tw-flex-wrap">
            <div className='tw-mx-auto tw-grid tw-grid-cols-1 lg:tw-grid-cols-2 tw-max-w-[1300px] tw-gap-8 tw-my-10'>
                <Fade direction="up" triggerOnce={true}>
                    <div className="tw-container tw-mx-auto tw-flex tw-px-5 tw-md:flex-row tw-flex-col tw-items-center xl:tw-pt-32">
                        <div className="tw-lg:flex-grow tw-md:w-1/2 tw-lg:pr-24 tw-md:pr-16 tw-flex tw-flex-col tw-md:items-start tw-md:text-left tw-mb-16 tw-md:mb-0 tw-items-center tw-text-center">
                            <h1 className="tw-title-font tw-sm:text-4xl tw-text-3xl tw-mb-4 tw-font-medium tw-text-secondary">{renderContent.headings[0].title}</h1>
                            <p className="tw-mb-8 tw-leading-relaxed tw-text-secondary-light">{renderContent.headings[0].subtitle}</p>
                        </div>
                    </div>
                </Fade>
                {/* <Fade direction="left" triggerOnce={true}>
                    <ul>
                        {renderContent.step.map((e, idx) => (
                            <li key={idx} className="tw-flex tw-relative tw-pb-8 tw-cursor-default tw-group -tw-order-1">
                                <div className="tw-h-22 tw-w-10 tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center">
                                    <div className="tw-h-full tw-w-1 tw-bg-gray-300 tw-pointer-events-none"></div>
                                </div>
                                <div className="tw-flex-shrink-0 tw-w-10 tw-h-10 tw-rounded-full tw-bg-secondary tw-text-primary  group-hover:tw-bg-secondary-light group-hover:tw-text-primary tw-transition-all tw-duration-200 tw-inline-flex tw-items-center tw-justify-center tw-relative tw-z-10">
                                    {e.icon}
                                </div>
                                <p className="tw-flex-grow tw-pl-4 tw-leading-relaxed tw-text-secondary-light">{e.content}</p>
                            </li>
                        ))}
                    </ul>
                </Fade> */}
                {/* <Fade direction="left" triggerOnce={true}> */}
                    <ul >
                        <Fade direction="left" triggerOnce={true}>
                            <li className="tw-flex tw-relative tw-pb-8 tw-cursor-default tw-group -tw-order-1">
                                <div className="tw-flex-shrink-0 tw-w-10 tw-h-10 tw-rounded-full tw-bg-secondary tw-text-primary  group-hover:tw-bg-secondary-light group-hover:tw-text-primary tw-transition-all tw-duration-200 tw-inline-flex tw-items-center tw-justify-center tw-relative tw-z-10">
                                        {renderContent.step[0].icon}
                                </div>
                                <p className="tw-flex-grow tw-pl-4 tw-leading-relaxed tw-text-secondary-light">{renderContent.step[0].content}</p>
                            </li>
                        </Fade>
                        <Fade direction="right" triggerOnce={true}>
                        <li className="tw-flex tw-relative tw-pb-8 tw-cursor-default tw-group">
                            <p className="tw-flex-grow tw-pl-4 tw-leading-relaxed tw-text-secondary-light">{renderContent.step[1].content}</p>
                            <div className="tw-flex-shrink-0 tw-w-10 tw-h-10 tw-rounded-full tw-bg-secondary tw-text-primary  group-hover:tw-bg-secondary-light group-hover:tw-text-primary tw-transition-all tw-duration-200 tw-inline-flex tw-items-center tw-justify-center tw-relative tw-z-10">
                                    {renderContent.step[1].icon}
                            </div>
                        </li> 
                        </Fade>
                         <Fade direction="left" triggerOnce={true}>         
                            <li className="tw-flex tw-relative tw-pb-8 tw-cursor-default tw-group -tw-order-1">
                                <div className="tw-flex-shrink-0 tw-w-10 tw-h-10 tw-rounded-full tw-bg-secondary tw-text-primary  group-hover:tw-bg-secondary-light group-hover:tw-text-primary tw-transition-all tw-duration-200 tw-inline-flex tw-items-center tw-justify-center tw-relative tw-z-10">
                                        {renderContent.step[2].icon}
                                </div>
                                <p className="tw-flex-grow tw-pl-4 tw-leading-relaxed tw-text-secondary-light">{renderContent.step[2].content}</p>
                            </li>
                        </Fade>
                        <Fade direction="right" triggerOnce={true}>
                        <li className="tw-flex tw-relative tw-pb-8 tw-cursor-default tw-group">
                            <p className="tw-flex-grow tw-pl-4 tw-leading-relaxed tw-text-secondary-light">{renderContent.step[3].content}</p>
                            <div className="tw-flex-shrink-0 tw-w-10 tw-h-10 tw-rounded-full tw-bg-secondary tw-text-primary  group-hover:tw-bg-secondary-light group-hover:tw-text-primary tw-transition-all tw-duration-200 tw-inline-flex tw-items-center tw-justify-center tw-relative tw-z-10">
                                    {renderContent.step[3].icon}
                            </div>
                        </li>
                        </Fade>
                        <Fade direction="left" triggerOnce={true}>
                        <li className="tw-flex tw-relative tw-pb-8 tw-cursor-default tw-group -tw-order-1">
                            <div className="tw-flex-shrink-0 tw-w-10 tw-h-10 tw-rounded-full tw-bg-secondary tw-text-primary  group-hover:tw-bg-secondary-light group-hover:tw-text-primary tw-transition-all tw-duration-200 tw-inline-flex tw-items-center tw-justify-center tw-relative tw-z-10">
                                    {renderContent.step[4].icon}
                            </div>
                            <p className="tw-flex-grow tw-pl-4 tw-leading-relaxed tw-text-secondary-light">{renderContent.step[4].content}</p>
                        </li>  
                        </Fade>        
                    </ul>
                {/* </Fade> */}
            </div>
        </div>
    )
}
export default StepsIndex

