import Section from "../components/section";
import {Reveal } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import TitleSection from "../components/title-section";
import TableRealtors from "../components/portalUsers/portalTable";
import { Realtors } from "../data/community/index";
// import MapsRealtor from "../components/mapRealtors";
import { useState, useContext, useEffect } from "react";
import { UsersContext } from '../context/realtors/UsersContext';
import UsersServices from "../services/portal-users/UsersServices";
import ModalRealtor from "../components/modal/ModalRealtor";
import ResumeProfile from "../components/portalUsers/profileRealtor/resumeProfile";
import { FaRegUserCircle } from "react-icons/fa";



const PortalRealtor = () =>{
    const [openDetail, setOpenDetail] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const {
        users,
        setUsers,
        page,
        setSortOrder
      } = useContext(UsersContext);

    const handleOpenDetail = (user) => {
        setSelectedUser(user);
        setOpenDetail(true);
    };

    const columns = [
        {
            header:"Corredor",
            accessorKey: "name",
            cell: (cellProps: any) => (
                <div className="">      
                    <button 
                    className="tw-font-semibold tw-cursor-pointer tw-duration-200"
                    onClick={()=> handleOpenDetail((cellProps.row.original))}
                    >
                  {cellProps.row.original.name}
                </button>
              </div>
            )
        },
        {
            header: "País",
            accessorKey: "address.country.name",
            cell: (cellProps: any) => (
              <div>
                {cellProps.row.original.address && cellProps.row.original.address.country && cellProps.row.original.address.country.name ? 
                  cellProps.row.original.address.country.name : 
                  "No hay País"}
              </div>
            )
          },
          {
            header: "Región",
            accessorKey: "address.internalDbState.name",
            cell: (cellProps: any) => (
              <div>
                {cellProps.row.original.address && cellProps.row.original.address.internalDbState && cellProps.row.original.address.internalDbState.name ? 
                  cellProps.row.original.address.internalDbState.name : 
                  "No hay Región"}
              </div>
            )
          },
          {
            header: "Comuna",
            accessorKey: "address.internalDbCity.name",
            cell: (cellProps: any) => (
              <div>
                {cellProps.row.original.address && cellProps.row.original.address.internalDbCity && cellProps.row.original.address.internalDbCity.name ? 
                  cellProps.row.original.address.internalDbCity.name : 
                  "No hay Comuna"}
              </div>
            )
          }
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
                <TableRealtors 
                  columnsData={columns} 
                  dataRealtor={users} />
                </div>
                <div className="tw-relative tw-mt-20">
                    <div className="tw-hidden sm:tw-block sm:tw-absolute tw-z-10 tw-top-80 xl:tw-left-72 2xl:tw-left-[440px] ">
                        <FaRegUserCircle className="tw-text-secondary-light tw-animate-pulse tw-text-8xl xl:tw-text-[200px] tw-rounded-full tw-shadow-inner tw-p-6"/>
                        <p className="tw-text-gray-500">Selecciona a un corredor de la lista</p>
                    </div>  
                
                    <ModalRealtor open={openDetail} onClose={() => setOpenDetail(false)}>
                        <div className='2xl:tw-w-full tw-mt-6 sm:tw-mt-2'>
                            {/* <h2 className="tw-font-semibold tw-text-3xl tw-text-center">Resumen ficha</h2> */}
                            <div className='lg:tw-p-2 tw-w-full tw-overflow-y-auto tw-h-full md:tw-h-[70vh] xl:tw-h-full tw-my-2'>
                                {selectedUser ? <ResumeProfile dataRealtor={selectedUser}/> : 
                                <div className="tw-text-gray-400 tw-hidden sm:tw-block sm:tw-absolute tw-z-10 tw-top-80 xl:tw-left-72 2xl:tw-left-[300px] ">
                                    <FaRegUserCircle className="tw-animate-pulse tw-text-8xl xl:tw-text-[250px] tw-rounded-full tw-shadow-inner tw-p-6"/>
                                    <p className="tw-text-gray-500">Selecciona a un corredor de la lista</p>
                                </div> 
                                }
                            </div>
                        </div>
                    </ModalRealtor>
                {/* <MapsRealtor/> */}
                </div>
            </div>
            </Reveal>
      </div>
    )
}

export default PortalRealtor;