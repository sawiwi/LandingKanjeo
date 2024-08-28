import Section from '../components/section';
import {Reveal } from 'react-awesome-reveal';
import { keyframes } from '@emotion/react';
import ReactSlickCommunity from '../components/react-slick-community';
import { contentSlickCommunity, contentFirstCardCommunity,contentSecondCardCommunity, contentThirtyCardCommunity } from '../data/community';
import CardCommunity from '../components/cardCommunity';
import CardCommunityThree from '../components/cardCommunity/cardThree';
import CardCommunityFour from '../components/cardCommunity/cardFour';

const Community = () =>{

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
        <>
        <div className='relative h-[90vh] xl:h-[80vh] 2xl:h-[65vh] w-full'>
            <Section className="bg-secondary h-[65%] xl:h-[70%] 2xl:h-[65%]">
                    <h2 className='my-12 xl:my-6 mt-16 xl:mt-12 text-5xl text-white'>Comunidad ProCanje</h2>
                    <Reveal
                        keyframes={fadeInUp}
                        delay={300}
                        duration={800}
                        triggerOnce={true}
                        >
                        <ReactSlickCommunity renderContent={contentSlickCommunity} />
                    </Reveal> 
            </Section>
        </div>
        <Section className="bg-gray-50 h-full lg:h-[90vh] 2xl:h-[60vh]">
            <h2 className='text-5xl font-[900] w-[60%] xl:w-[75%] 2xl:w-[65%]'>GRAN COMUNIDAD, PARTICIPA, INTERCAMBIA, CRECE</h2>
            <small className='text-secondary font-medium'> CANJES & COMUNIDADES</small>
                {/* card corredores asociados, canjes */}
                    <Reveal
                        keyframes={fadeInUp}
                        delay={600}
                        duration={800}
                        triggerOnce={true}
                        >
                        <CardCommunity renderContent={contentFirstCardCommunity}/>
                    </Reveal> 
        </Section>
        <Section className="bg-gray-100 h-full lg:h-[60vh] 2xl:h-[50vh]">
                {/* cards nuevas propiedades, servicios y politicas */}
                    <Reveal
                        keyframes={fadeInUp}
                        delay={900}
                        duration={800}
                        triggerOnce={true}
                        >
                        <CardCommunityThree renderContent={contentSecondCardCommunity}/>
                    </Reveal> 
        </Section>
        <Section className="bg-gray-50 h-full lg:h-[60vh] 2xl:h-[50vh]">
                {/* cards como usar, productos */}                   
                    <Reveal
                        keyframes={fadeInUp}
                        delay={900}
                        duration={800}
                        triggerOnce={true}
                        >
                        <CardCommunityFour renderContent={contentThirtyCardCommunity}/>
                    </Reveal> 
        </Section>
        </>
    )
}

export default Community;