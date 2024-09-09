import Section from "../components/section";
import {Reveal } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import TitleSection from "../components/title-section";
import TableRealtors from "../components/portalUsers/portalTable";
import { Realtors } from "../data/community/index";
// import MapsRealtor from "../components/mapRealtors";
import { useState, useContext, useEffect } from "react";
import { UsersContext } from '../context/realtors/UsersContext';
import ModalRealtor from "../components/modal/ModalRealtor";
import ResumeProfile from "../components/portalUsers/profileRealtor/resumeProfile";
import { FaRegUserCircle } from "react-icons/fa";

import UsersServices from "../services/portal-users/UsersServices";


const PortalRealtor = () =>{
    const [openDetail, setOpenDetail] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const {
        users,
      } = useContext(UsersContext);
    const [clicDataNameRealtor, setClicDataNameRealtor] = useState([]);



    const handleOpenDetail = async (user, id) => {
        const clicked = clicDataNameRealtor.find(item => item.id === id);
        let updateClicks;

        if (clicked) {
          updateClicks = clicDataNameRealtor.map(item => 
              item.id === id ? {...item, clicks: item.clicks + 1} : item
          );
          // setClicDataNameRealtor(updateClicks);
      }else {
        updateClicks = [...clicDataNameRealtor, {id, clicks:1}];
        // setClicDataNameRealtor([...clicDataNameRealtor, {id, clicks: 1}]);
      }
      setClicDataNameRealtor(updateClicks)
      setSelectedUser(user);
      setOpenDetail(true);


      const formData = {
        clickOfNameRealtor: updateClicks?.find(item => item.id === id).clicks,
        clickOfMoreOfRealtor: 0,
        clickOfOpenContact: 0,
        clickOfSendContact: 0,
        clickOfWebPage: 0
      }

      try {
        await UsersServices.getClicksUsers(id, formData);
        console.log('Datos enviados correctamente', formData)
      }catch (error){
        console.log('ERROR al enviar los clics', error)
      }
    };



    const columns = [
        {
            header:"Corredor",
            accessorKey: "name",
            cell: (cellProps) => (
                <div className="">      
                    <button 
                    className="font-semibold cursor-pointer duration-200"
                    onClick={()=> handleOpenDetail((cellProps.row.original), (cellProps.row.original.id))}
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
        <div className="overflow-hidden bg-white relative px-4 sm:px-8 lg:px-24 py-16 lg:py-12 xl:py-8 my-16 lg:my-8 xl:my-6">
            <Reveal
            keyframes={fadeInUp}
            delay={500}
            duration={800}
            triggerOnce={true}
            >
            <TitleSection
                className='lg:mt-20'
                title="Corredores asociados"
                subtitle="Encuentra al corredor que más se adapate a tus necesidades"
                position="center"
            />

            <div className="grid grid-row grid-cols-1 lg:grid-cols-2  gap-6 2xl:gap-2 mt-4">
                <div>
                <TableRealtors 
                  columnsData={columns} 
                  dataRealtor={users} />
                </div>
                <div className="relative mt-20">
                    <div className="hidden sm:block sm:absolute z-10 top-80 xl:left-72 2xl:left-[440px] ">
                        <FaRegUserCircle className="text-secondary-light animate-pulse text-8xl xl:text-[200px] rounded-full shadow-inner p-6"/>
                        <p className="text-gray-500">Selecciona a un corredor de la lista</p>
                    </div>  
                
                    <ModalRealtor open={openDetail} onClose={() => setOpenDetail(false)}>
                        <div className='2xl:w-full mt-6 sm:mt-2'>
                            {/* <h2 className="font-semibold text-3xl text-center">Resumen ficha</h2> */}
                            <div className='lg:p-2 w-full overflow-y-auto h-full md:h-[70vh] xl:h-full my-2'>
                                {selectedUser ? <ResumeProfile dataRealtor={selectedUser}/> : 
                                <div className="text-gray-400 hidden sm:block sm:absolute z-10 top-80 xl:left-72 2xl:left-[300px] ">
                                    <FaRegUserCircle className="animate-pulse text-8xl xl:text-[250px] rounded-full shadow-inner p-6"/>
                                    <p className="text-gray-500">Selecciona a un corredor de la lista</p>
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