import Section from "../section";
import TitleSection from "../../components/title-section";
import {Reveal } from 'react-awesome-reveal';

import { keyframes } from '@emotion/react';


const Benefits = () => {

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
        <Section>
            <Reveal
                keyframes={fadeInUp}
                delay={500}
                duration={800}
                triggerOnce={true}
            >
            <TitleSection
                className='lg:mt-2 2xl:mt-4'
                title="Beneficios de nuestra plataforma"
                subtitle="Algunos de los beneficios que te entrega unirte a nuestra comunidad de corredores"
                position="center"
            />
            <div className="mt-8">
                <div className='text-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-5 md:gap-8 xl:gap-2 mt-8 xl:mx-6 2xl:mx-20'>
                    <article className='flex flex-wrap flex-row p-2 xl:px-6 overflow-hidden items-center justify-center xl:justify-start gap-1 drop-shadow-xl border-2 border-secondary bg-gray-100 text-secondary h-52 lg:h-44 lg:w-full 2xl:h-72 2xl:w-96 mb-2 2xl:mb-4 hover:scale-110 hover:bg-secondary hover:text-gray-50 duration-200 rounded-md'>
                        <h5 className='opacity-100 font-semibold text-xl xl:text-2xl mx-2 mt'>Web personalizables</h5>
                        <p className='text-base text-start first-letter:my-2 mx-2'>Obtén un sitio que muestra tus servicios y que puedes personalizar con tu marca.</p>
                    </article>
                    <article className='flex flex-wrap flex-row p-2 xl:px-6 overflow-hidden items-center justify-center xl:justify-start gap-1 drop-shadow-xl border-2 border-secondary bg-gray-100 text-secondary h-52 lg:h-44 lg:w-full 2xl:h-72 2xl:w-96 mb-2 2xl:mb-4 hover:scale-110 hover:bg-secondary hover:text-gray-50 duration-200 rounded-md'>
                        <h5 className='opacity-100 font-semibold text-xl xl:text-2xl mx-2 mt'>Métricas y Estadísticas</h5>
                        <p className='text-base text-start first-letter:my-2 mx-2'>Toma desiciones basadas en información real. Procanje registra los movimientos realizados en la plataforma y lo muestra a tu disposición.</p>
                    </article>
                    <article className='flex flex-wrap flex-row p-2 xl:px-6 overflow-hidden items-center justify-center xl:justify-start gap-1 drop-shadow-xl border-2 border-secondary bg-gray-100 text-secondary h-52 lg:h-44 lg:w-full 2xl:h-72 2xl:w-96 mb-2 2xl:mb-4 hover:scale-110 hover:bg-secondary hover:text-gray-50 duration-200 rounded-md'>
                        <h5 className='opacity-100 font-semibold text-xl xl:text-2xl mx-2 mt'>Asistencia en transacciones</h5>
                        <p className='text-base text-start first-letter:my-2 mx-2'>Contarás con un asistencia completa para poder llevar a cabo tus transacciones correctamente.</p>
                    </article>
                    <article className='flex flex-wrap flex-row p-2 xl:px-6 overflow-hidden items-center justify-center xl:justify-start gap-1 drop-shadow-xl border-2 border-secondary bg-gray-100 text-secondary h-52 lg:h-44 lg:w-full 2xl:h-72 2xl:w-96 mb-2 2xl:mb-4 hover:scale-110 hover:bg-secondary hover:text-gray-50 duration-200 rounded-md'>
                        <h5 className='opacity-100 font-semibold text-xl xl:text-2xl mx-2 mt'>Asistencia en canjes</h5>
                        <p className='text-base text-start first-letter:my-2 mx-2'>Contarás con un asistencia completa en tus canjes y como realizarlos correctamente.</p>
                    </article>
                    <article className='flex flex-wrap flex-row p-2 xl:px-6 overflow-hidden items-center justify-center xl:justify-start gap-1 drop-shadow-xl border-2 border-secondary bg-gray-100 text-secondary h-full lg:h-44 lg:w-full 2xl:h-72 2xl:w-96 mb-2 2xl:mb-4 hover:scale-110 hover:bg-secondary hover:text-gray-50 duration-200 rounded-md'>
                        <h5 className='opacity-100 font-semibold text-xl xl:text-2xl mx-2 mt'>Soporte técnico</h5>
                        <p className='text-base text-start first-letter:my-2 mx-2'>Te ofrece soluciones rápidas y efectivas para resolver problemas, 
                            optimizar el rendimiento de tus dispositivos y guiarte en el uso de nuevas herramientas. 
                            Garantizamos que tu tecnología funcione sin interrupciones, para que puedas enfocarte en lo que realmente importa.</p>
                    </article>
                    <article className='flex flex-wrap flex-row p-2 xl:px-6 overflow-hidden items-center justify-center xl:justify-start gap-1 drop-shadow-xl border-2 border-secondary bg-gray-100 text-secondary h-full lg:h-44 lg:w-full 2xl:h-72 2xl:w-96 mb-2 2xl:mb-4 hover:scale-110 hover:bg-secondary hover:text-gray-50 duration-200 rounded-md'>
                        <h5 className='opacity-100 font-semibold text-xl xl:text-2xl mx-2 mt'>Ayudas y tutoriales</h5>
                        <p className='text-base text-start first-letter:my-2 mx-2'>Descubre nuestros videos y tutoriales diseñados para que aproveches al máximo Procanje. 
                            Aprende de forma rápida y sencilla a utilizar todas sus funciones, optimiza tu experiencia y conviértete en un experto. 
                            ¡Explora, aprende y sácale el máximo provecho a nuestra app!</p>
                    </article>
                  </div>
            </div>
            <div className="mt-8">
                <div className="my-2 mb-8 xl:mb-10 2xl:mb-12 text-center">
                    <h2 className="text-2xl xl:text-3xl text-gray-700">Más complementos en Procanje</h2>
                    <small className="text-gray-600 text-base my-2">puedes consultar por más información</small>
                </div>
                <div className='text-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-5 md:gap-2 xl:gap-4 mt-8 xl:mx-20 2xl:mx-36'>
                    <div className="relative group">
                            <div className="absolute -top-4 md:left-7 2xl:left-[72px] z-50 text-sm group-hover:-translate-y-3 group-hover:bg-white group-hover:text-secondary duration-200 bg-secondary text-white p-2 px-3 rounded-full">
                                CONSULTA POR EL TUYO
                            </div>
                        <article className='flex flex-wrap flex-row p-2 xl:px-6 overflow-hidden items-center justify-center xl:justify-start gap-1 drop-shadow-xl border-2 border-secondary bg-gray-100 text-secondary h-48 lg:h-56 lg:w-full 2xl:h-72 2xl:w-80 mb-2 2xl:mb-4 hover:scale-110 hover:bg-secondary hover:text-gray-50 duration-200 rounded-md'>
                            <h5 className='opacity-100 font-semibold text-xl xl:text-2xl mx-2 mt'>Asistente Personal AI</h5>
                            <p className='text-base text-start first-letter:my-2 mx-2'>Maneja tus tareas calendario y/o correo a traves nuestro asistente IA.</p>
                        </article>
                    </div>
                    <div className="relative group">
                            <div className="absolute -top-4 md:left-7 2xl:left-[72px] z-50 text-sm group-hover:-translate-y-3 group-hover:bg-white group-hover:text-secondary duration-200 bg-secondary text-white p-2 px-3 rounded-full">
                                CONSULTA POR EL TUYO
                            </div>
                        <article className='flex flex-wrap flex-row p-2 xl:px-6 overflow-hidden items-center justify-center xl:justify-start gap-1 drop-shadow-xl border-2 border-secondary bg-gray-100 text-secondary h-48 lg:h-56 lg:w-full 2xl:h-72 2xl:w-80 mb-2 2xl:mb-4 hover:scale-110 hover:bg-secondary hover:text-gray-50 duration-200 rounded-md'>
                            <h5 className='opacity-100 font-semibold text-xl xl:text-2xl mx-2 mt'>Asistente Personal AI</h5>
                            <p className='text-base text-start first-letter:my-2 mx-2'>Maneja tus tareas calendario y/o correo a traves nuestro asistente IA.</p>
                        </article>
                    </div>
                    <div className="relative group">
                            <div className="absolute -top-4 md:left-7 2xl:left-[72px] z-50 text-sm group-hover:-translate-y-3 group-hover:bg-white group-hover:text-secondary duration-200 bg-secondary text-white p-2 px-3 rounded-full">
                                CONSULTA POR EL TUYO
                            </div>
                        <article className='flex flex-wrap flex-row p-2 xl:px-6 overflow-hidden items-center justify-center xl:justify-start gap-1 drop-shadow-xl border-2 border-secondary bg-gray-100 text-secondary h-48 lg:h-56 lg:w-full 2xl:h-72 2xl:w-80 mb-2 2xl:mb-4 hover:scale-110 hover:bg-secondary hover:text-gray-50 duration-200 rounded-md'>
                            <h5 className='opacity-100 font-semibold text-xl xl:text-2xl mx-2 mt'>Asistente Personal AI</h5>
                            <p className='text-base text-start first-letter:my-2 mx-2'>Maneja tus tareas calendario y/o correo a traves nuestro asistente IA.</p>
                        </article>
                    </div>

                  </div>
            </div>
            </Reveal>
        </Section>
    )
}

export default Benefits;