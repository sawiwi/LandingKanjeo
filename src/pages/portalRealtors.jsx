import Section from "../components/section";
import {Reveal } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import TitleSection from "../components/title-section";
import TableRealtors from "../components/portalTable";
import { Realtors } from "../data/community";
import MapsRealtor from "../components/mapRealtors";
import { useState } from "react";
import Modal from "../components/modal/Modal";
import ResumeProfile from "../components/profileRealtor/resumeProfile";
import { FaRegUserCircle } from "react-icons/fa";




const PortalRealtor = () =>{
    const [openDetail, setOpenDetail] = useState(false);

    const columns = [
        {
            header:"Corredor",
            accessorKey: "realtor",
            cell: (cellProps: any) => (
                <div className="">      
                    <button 
                    className="tw-font-semibold tw-cursor-pointer tw-duration-200"
                    onClick={()=> setOpenDetail(true)}
                    >
                  {cellProps.row.original.realtor}
                </button>
              </div>
            )
        },
        {
            header:"País",
            accessorKey: "country"
        },
        {
            header:"Región",
            accessorKey: "region"
        },
        {
            header:"Comuna",
            accessorKey: "commune"
        },
    ]


    const fadeInUp = keyframes`
    0% {
        opacity: 0;
        -webkit-transform: translateY(80px);
        transform: translateY(80px);
    }
    100% {
        opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0);
    }`;

    return(
        <div className="tw-overflow-hidden tw-bg-white tw-relative tw-px-4 sm:tw-px-8 lg:tw-px-24 tw-py-16 lg:tw-py-12 xl:tw-py-8 tw-my-16 lg:tw-my-8 xl:tw-my-6">
            <Reveal
            keyframes={fadeInUp}
            delay={500}
            duration={800}
            triggerOnce={true}
            >
            <TitleSection
                className='lg:tw-mt-20'
                title="Corredores asociados"
                subtitle="Encuentra al corredor que más se adapate a tus necesidades"
                position="center"
            />

            <div className="tw-grid tw-grid-row tw-grid-cols-1 lg:tw-grid-cols-2  tw-gap-6 2xl:tw-gap-2 tw-mt-4">
                <div>
                <TableRealtors columnsData={columns} dataRealtor={Realtors} />
                </div>
                <div className="tw-relative tw-mt-20 ">
                    <div className="tw-hidden sm:tw-block sm:tw-absolute tw-z-10 tw-top-80 xl:tw-left-72 2xl:tw-left-[440px] tw-rounded-full  tw-shadow-inner tw-p-6">
                        <FaRegUserCircle className="tw-text-gray-400  tw-text-8xl"/>
                    </div>                      
                    <Modal open={openDetail} onClose={() => setOpenDetail(false)}>
                        <div className='2xl:tw-w-[35vw] tw-mt-6 sm:tw-mt-0'>
                            <h2 className="tw-text-2xl tw-text-center">Resumen ficha</h2>
                            <div className='tw-p-2 tw-w-full tw-overflow-y-auto tw-h-full md:tw-h-[70vh] tw-my-4 p-3'>
                                <ResumeProfile/>
                            </div>
                        </div>
                    </Modal>
                {/* <MapsRealtor/> */}
                </div>
            </div>
            </Reveal>
      </div>
    )
}

export default PortalRealtor;