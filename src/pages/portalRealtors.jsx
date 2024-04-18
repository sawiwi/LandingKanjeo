import Section from "../components/section";
import {Reveal } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import TitleSection from "../components/title-section";
import TableRealtors from "../components/portalTable";
import { Realtors } from "../data/community";


const columns = [
    // {
    //     header:"Retrato",
    //     accessorKey: "img"
    // },
    {
        header:"Corredor",
        accessorKey: "realtor"
    },
    {
        header:"E-mail",
        accessorKey: "email"
    },
    {
        header:"Cantidad de propiedades",
        accessorKey: "cantProp"
    },
    {
        header:"Contactar",
        accessorKey: "contacto"
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

        <TableRealtors columnsData={columns} dataRealtor={Realtors} />
        
        
        </Reveal>
      </Section>
    )
}

export default PortalRealtor;