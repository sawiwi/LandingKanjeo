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
        <div className='tw-relative tw-h-[90vh] xl:tw-h-[80vh] 2xl:tw-h-[65vh] tw-w-full'>
            <Section className="tw-bg-secondary tw-h-[65%] xl:tw-h-[70%] 2xl:tw-h-[65%]">
                    <h2 className='tw-my-12 xl:tw-my-6 tw-mt-16 xl:tw-mt-12 tw-text-5xl tw-text-white'>Comunidad ProCanje</h2>
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
        <Section className="tw-bg-gray-50 tw-h-full lg:tw-h-[90vh] 2xl:tw-h-[60vh]">
            <h2 className='tw-text-5xl tw-font-[900] tw-w-[60%] xl:tw-w-[75%] 2xl:tw-w-[65%]'>GRAN COMUNIDAD, PARTICIPA, INTERCAMBIA, CRECE</h2>
            <small className='tw-text-secondary tw-font-medium'> CANJES & COMUNIDADES</small>
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
        <Section className="tw-bg-gray-100 tw-h-full lg:tw-h-[60vh] 2xl:tw-h-[50vh]">
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
        <Section className="tw-bg-gray-50 tw-h-full lg:tw-h-[60vh] 2xl:tw-h-[50vh]">
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