import React from "react";
import { Fade } from "react-awesome-reveal";
const StepsIndex = ({ renderContent }) => {
    return (
        <div className="container px-5 py-16 mx-auto flex flex-wrap">
            <div className='mx-auto grid grid-cols-1 lg:grid-cols-2 max-w-[1300px] gap-8 my-10'>
                <Fade direction="up" triggerOnce={true}>
                    <div className="container mx-auto flex px-5 md:flex-row flex-col items-center xl:pt-32">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                            <h1 className="title-font sm:text-4xl text-3xl 2xl:text-4xl mb-4 font-medium text-secondary">{renderContent.headings[0].title}</h1>
                            <p className="mb-8 leading-relaxed text-gray-800">{renderContent.headings[0].subtitle}</p>
                        </div>
                    </div>
                </Fade>

                {/* <Fade direction="left" triggerOnce={true}> */}
                    <ul >
                        <Fade direction="left" triggerOnce={true}>
                            <li className="flex relative pb-8 cursor-default group -order-1">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-primary  group-hover:bg-secondary-light group-hover:text-primary transition-all duration-200 inline-flex items-center justify-center relative z-10">
                                        {renderContent.step[0].icon}
                                </div>
                                <p className="flex-grow pl-4 leading-relaxed text-gray-800">{renderContent.step[0].content}</p>
                            </li>
                        </Fade>
                        <Fade direction="right" triggerOnce={true}>
                        <li className="flex relative pb-8 cursor-default group">
                            <p className="flex-grow pl-4 leading-relaxed text-gray-800">{renderContent.step[1].content}</p>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-primary  group-hover:bg-secondary-light group-hover:text-primary transition-all duration-200 inline-flex items-center justify-center relative z-10">
                                    {renderContent.step[1].icon}
                            </div>
                        </li> 
                        </Fade>
                         <Fade direction="left" triggerOnce={true}>         
                            <li className="flex relative pb-8 cursor-default group -order-1">
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-primary  group-hover:bg-secondary-light group-hover:text-primary transition-all duration-200 inline-flex items-center justify-center relative z-10">
                                        {renderContent.step[2].icon}
                                </div>
                                <p className="flex-grow pl-4 leading-relaxed text-gray-800">{renderContent.step[2].content}</p>

                            </li>
                        </Fade>
                        <Fade direction="right" triggerOnce={true}>
                        <li className="flex relative pb-8 cursor-default group">
                                <p className="flex-grow pl-4 leading-relaxed text-gray-800">{renderContent.step[3].content}</p>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-primary  group-hover:bg-secondary-light group-hover:text-primary transition-all duration-200 inline-flex items-center justify-center relative z-10">
                                    {renderContent.step[3].icon}
                            </div>
                        </li>
                        </Fade>
                        <Fade direction="left" triggerOnce={true}>
                        <li className="flex relative pb-8 cursor-default group -order-1">
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-primary  group-hover:bg-secondary-light group-hover:text-primary transition-all duration-200 inline-flex items-center justify-center relative z-10">
                                    {renderContent.step[4].icon}
                            </div>
                                <p className="flex-grow pl-4 leading-relaxed text-gray-800">{renderContent.step[4].content}</p>
                        </li>  
                        </Fade>   
                        <Fade direction="right" triggerOnce={true}>
                        <li className="flex relative pb-8 cursor-default group -order-1">
                            <p className="flex-grow pl-4 leading-relaxed text-gray-800">{renderContent.step[5].content}</p>
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary text-primary  group-hover:bg-secondary-light group-hover:text-primary transition-all duration-200 inline-flex items-center justify-center relative z-10">
                                    {renderContent.step[5].icon}
                            </div>
                        </li>  
                        </Fade>        
                    </ul>
                {/* </Fade> */}
            </div>
        </div>
    )
}
export default StepsIndex

