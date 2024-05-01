import Section from "../components/section";
import {Reveal } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import TitleSection from "../components/title-section";
import TableRealtors from "../components/portalTable";
import { Realtors } from "../data/community";
import MapsRealtor from "../components/mapRealtors";


const columns = [
    {
        header:"Corredor",
        accessorKey: "realtor",
        cell: (cellProps: any) => (
            <div className="">
                <a href="/perfil-corredor" 
                className="tw-font-semibold tw-cursor-pointer tw-duration-200"
                >
              {cellProps.row.original.realtor}
            </a>
          </div>
        )
    },
    {
        header:"Ubicación",
        accessorKey: "ubi"
    },
]

const PortalRealtor = () =>{


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
        <Section className="tw-overflow-hidden tw-bg-white">
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

        <div className="tw-grid tw-grid-row tw-grid-cols-1 lg:tw-grid-cols-2 tw-justify-center tw-gap-2 tw-mt-4">
            <div>
            <TableRealtors columnsData={columns} dataRealtor={Realtors} />
            </div>
            <div className="mt-20">
            <MapsRealtor/>
            </div>
        </div>

        
        
        </Reveal>
      </Section>
    )
}

export default PortalRealtor;