import React, { useState } from 'react';
import Slider from 'react-slick';
import CardSystem from '../card/card-02';
import Button from '../ui/button';
import { CiPlay1 } from "react-icons/ci";
import DataBanner from '../BannerHero/DataBanner';
import Modal from '../modal/Modal';

// import Button from '../ui/button';

const ReactSlick = ({ renderContent }) => {
  const [videoOpen, setVideoOpen] = useState(false);

  const settings = {
    dots: false,
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 8000,
    cssEase: 'linear',
    pauseOnHover: true,
  };

  const onOpenVideo = () => {
    setVideoOpen(true)
}

  const onCloseVideo = () =>{
    setVideoOpen(false)
}

  return (
    <>
      {videoOpen && (
          <div
          // className={`fixed inset-0 z-50 xl:py-10 2xl:py-6 flex justify-center items-center transition-colors ${videoOpen ? "visible bg-black/50 z-50 rounded-lg" : "invisible"}`}
          className={`fixed sm:top-0 z-50 sm:relative sm:flex sm:justify-center sm:items-center transition-colors ${videoOpen ? "visible bg-black/50 sm:bg-black/80 h-full w-full sm:h-[100vh] sm:w-[100vw] z-50" : "invisible"}`}
          onClick={onCloseVideo}>
            {/* Modal */}
            <div className={`bg-transparent p-2 sm:bg-gray-50 rounded-xl shadow-lg sm:p-6 transition-all overflow-y-auto w-[100vw] sm:w-[37vw] xl:w-[53vw] 2xl:w-[37vw] my-56 sm:my-0
              ${videoOpen ? "scale-100 opacity-100" : "scale-125 opacity-0"}`}
              onClick={(e) => e.stopPropagation()}>
              <button className="absolute right-5 sm:top-2 sm:right-2 sm:p-1 px-2 sm:px-3 rounded-full text-gray-600 bg-white hover:bg-gray-50 hover:text-gray-600" onClick={onCloseVideo}>
                X
              </button>
              <div className='hidden sm:block'>
                <iframe
                width="670"
                height="385"
                src="https://www.youtube.com/embed/fBgui97XU7w"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
              </div>
              <div className='visible sm:hidden'>
                <iframe
                width="370"
                height="255"
                src="https://www.youtube.com/embed/fBgui97XU7w"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen></iframe>
              </div>
 
            </div>
            {/* Fin Modal */}
          </div>
      )}
    <Slider {...settings} className="relative w-96">
      {renderContent.length !== 0 ? renderContent.map((item) => (
        <div key={item.id} className="relative h-[85vh] xl:h-[100vh]">
          <img
            src={item.imgHero}
            alt="hero"
            className="bg-cover object-top mx-auto h-[80%] sm:h-[30%] xl:h-[75%] w-full object-cover bg-gray-50"
          />
           <div key={item.id} className="absolute top-60 left-8 sm:left-0 sm:inset-48 z-50 xl:bottom-20 2xl:bottom-32 xl:left-56 text-center xl:hidden w-[90%] md:w-[70%] lg:w-[70%] 2xl:w-[80%] mx-auto justify-center items-center z-100 ">
                <button
                  onClick={onOpenVideo}
                  // target='_blank'
                  // rel='noreferrer'
                  // href={item.urlVideo}
                  className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-full bg-secondary/50 hover:bg-secondary backdrop-blur-lg px-4 py-4 text-base font-semibold text-white transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-secondary-light border border-secondary"
                  >
                  <span className="text-2xl font-semibold"><CiPlay1/></span>
                  <div
                    className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
                  >
                    <div className="relative h-full w-10"></div>
                  </div>
                </button>
              <h1 className="text-white lg:mt-4 2xl:mt-8 opacity-100 font-bold text-3xl 2xl:text-4xl ">
                {item.headings}
              </h1>
              <p className="text-white opacity-100 font-light text-md md:text-xl mt-2 mb-2">
                {item.texts}
              </p>
              <div className='flex flex-col gap-2 mx-20'>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href={'https://procanje.app/sign-up'}
                  className="2xl:my-4 group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-secondary-light backdrop-blur-lg px-6 py-2 text-base text-white transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-secondary-light border border-secondary"
                  >
                  <span className="text-lg">
                      Registrate aquí
                  </span>
                  <div
                    className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
                  >
                  </div>
                </a>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href={'https://procanje.app/sign-in'}
                  className="2xl:my-4 group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-white backdrop-blur-lg px-6 py-2 text-base text-secondary transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-secondary-light border border-secondary"
                  >
                  <span className="text-lg">
                      Iniciar sesión
                  </span>
                  <div
                    className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
                  >
                  </div>
                </a>
              </div>
         
            </div>
          {/* APARECE CUANDO SUPERA EL TAMAÑO DE PANTALLA ARRIBA DE LOS XL */}
          <div key={item.id} className="hidden xl:absolute md:bottom-9 xl:bottom-16 2xl:bottom-32 xl:left-56 text-center xl:flex  xl:flex-col w-[90%] md:w-[70%] lg:w-[70%] 2xl:w-[80%] mx-auto justify-center items-center z-50">
              <button
                  onClick={onOpenVideo}
                  className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-full bg-secondary/50 hover:bg-secondary backdrop-blur-lg px-4 py-4 text-base font-semibold text-white transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-secondary-light border border-secondary"
                  >
                  <span className="text-2xl font-semibold"><CiPlay1/></span>
                  <div
                    className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
                  >
                    <div className="relative h-full w-10"></div>
                  </div>
              </button>
              <h1 className="text-white mt-4 lg:mt-4 2xl:mt-8 opacity-100 font-bold text-3xl 2xl:text-4xl ">
                {item.headings}
              </h1>
              <p className="text-white opacity-100 font-light text-md md:text-xl mt-2 mb-2">
                {item.texts}
              </p>
              <a
                target='_blank'
                rel='noreferrer'
                href={'https://procanje.app/sign-up'}
                className="2xl:my-4 group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-secondary-light backdrop-blur-lg px-6 py-3 text-base text-white transition-all duration-500 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-secondary-light border border-secondary animate-bounce hover:animate-none"
              >
                  <span className="text-xl">
                      Registrate aquí
                  </span>
                  <div
                    className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
                  >
                  </div>
              </a>     
              <div className="flex flex-row 2xl:mt-4 gap-4 2xl:gap-6">
                <div className='flex flex-row gap-5 lg:col-span-1 xl:col-span-2 2xl:col-span-1 lg:mt-10 2xl:mt-16'>
                  <article className='flex flex-wrap flex-row overflow-hidden items-center justify-center gap-2 drop-shadow-xl bg-gray-100 text-secondary lg:h-48 lg:w-[190px] 2xl:h-48 2xl:w-[240px] mb-2 2xl:mb-4 p-2 py-3 hover:scale-110 hover:bg-secondary hover:text-gray-50 duration-200 rounded-md'>
                      <div className='text-4xl 2xl:text-6xl xl:my-4 xl:mx-20 '>{item.card[0].icon}</div>
                      <h5 className='opacity-100 2xl:font-semibold text-md lg:text-base 2xl:text-md'>{item.card[0].info}</h5>
                  </article>
                  <article className='flex flex-wrap flex-row overflow-hidden items-center justify-center gap-2 drop-shadow-xl bg-gray-100 text-secondary lg:h-48 lg:w-[190px] 2xl:h-48 2xl:w-[240px] mb-2 2xl:mb-4 p-2 py-3 hover:scale-110 hover:bg-secondary hover:text-gray-50 duration-200 rounded-md'>
                      <div className='text-4xl 2xl:text-6xl xl:my-4 xl:mx-20 '>{item.card[1].icon}</div>
                      <h5 className='opacity-100 2xl:font-bold text-md lg:text-base 2xl:text-md'>{item.card[1].info}</h5>
                  </article>
                  <article className='flex flex-wrap flex-row overflow-hidden items-center justify-center gap-2 drop-shadow-xl bg-gray-100 text-secondary lg:h-48 lg:w-[190px] 2xl:h-48 2xl:w-[240px] mb-2 2xl:mb-4 p-2 py-3 hover:scale-110 hover:bg-secondary hover:text-gray-50 duration-200 rounded-md'>
                      <div className='text-4xl 2xl:text-6xl xl:my-4 xl:mx-20 '>{item.card[2].icon}</div>
                      <h5 className='opacity-100 2xl:font-bold text-md lg:text-base 2xl:text-md'>{item.card[2].info}</h5>
                  </article>
                  <article className='flex flex-wrap flex-row overflow-hidden items-center justify-center gap-2 drop-shadow-xl bg-gray-100 text-secondary lg:h-48 lg:w-[190px] 2xl:h-48 2xl:w-[240px] mb-2 2xl:mb-4 p-2 py-3 hover:scale-110 hover:bg-secondary hover:text-gray-50 duration-200 rounded-md'>
                      <div className='text-4xl 2xl:text-6xl xl:my-4 xl:mx-20 '>{item.card[3].icon}</div>
                      <h5 className='opacity-100 2xl:font-semibold text-md lg:text-base 2xl:text-md'>{item.card[3].info}</h5>
                  </article>
                  <article className='flex flex-wrap flex-row overflow-hidden items-center justify-center gap-2 drop-shadow-xl bg-gray-100 text-secondary lg:h-48 lg:w-[190px] 2xl:h-48 2xl:w-[240px] mb-2 2xl:mb-4 p-2 py-3 hover:scale-110 hover:bg-secondary hover:text-gray-50 duration-200 rounded-md'>
                      <div className='text-4xl 2xl:text-6xl xl:my-4 xl:mx-20 '>{item.card[4].icon}</div>
                      <h5 className='opacity-100 2xl:font-bold text-md lg:text-base 2xl:text-md'>{item.card[4].info}</h5>
                  </article>
                  <article className='flex flex-wrap flex-row overflow-hidden items-center justify-center gap-2 drop-shadow-xl bg-gray-100 text-secondary lg:h-48 lg:w-[190px] 2xl:h-48 2xl:w-[240px] mb-2 2xl:mb-4 p-2 py-3 hover:scale-110 hover:bg-secondary hover:text-gray-50 duration-200 rounded-md'>
                      <div className='text-4xl 2xl:text-6xl xl:my-4 xl:mx-20 '>{item.card[5].icon}</div>
                      <h5 className='opacity-100 2xl:font-bold text-md lg:text-base 2xl:text-md'>{item.card[5].info}</h5>
                  </article>
                </div>
              </div>
          </div>

          <DataBanner/>

          <div className="absolute top-0 left-0 w-full h-full sm:h-[92.5%] xl:h-[75%] 2xl:h-[75%] bg-black opacity-20"></div>
        </div>
      )): ''}
    </Slider>
    </>



    // <Slider {...settings} className="relative w-96">
    //   {renderContent.length !== 0 ? renderContent.map((item) => (
    //     <div key={item.id} className="relative">
    //       <img
    //         src={item.imgHero}
    //         alt="hero"
    //         className="bg-cover object-top h-[80vh] md:h-[70vh] lg:h-[99vh] 2xl:h-[98vh] mx-auto w-full object-cover bg-gray-50"
    //       />
    //       <div className="absolute z-50 inset-0 text-center flex flex-col w-[90%] md:w-[70%] lg:w-[60%] xl:w-[80%] mx-auto justify-center items-center z-100 ">
    //         <h1 className="text-white lg:mt-16 2xl:mt-8 opacity-100 font-bold text-3xl 2xl:text-4xl ">
    //           {item.headings}
    //         </h1>
    //         <p className="text-white opacity-100 font-light text-md md:text-xl mt-2">
    //           {item.texts}
    //         </p>
    //         <div className="grid grid-cols-1  2xl:grid-cols-3 lg:mt-4 2xl:mt-4 gap-4 2xl:gap-6">
    //           <div className='block 2xl:hidden lg:col-span-1 mt-10 lg:mt-12 2xl:mt-16'>
    //             <a href={item.card[6].href} className='cursor-pointer'>
    //               <article className='flex flex-wrap flex-row overflow-hidden items-center justify-center gap-2 drop-shadow-xl bg-gray-100 lg:h-40 lg:w-96 2xl:h-52 2xl:w-full mb-2 2xl:mb-4 p-2 py-3 xl:py-4 hover:scale-110 hover:bg-secondary hover:text-white duration-200 rounded-md'>
    //                   <div className='text-4xl'>{item.card[6].icon}</div>
    //                   <h5 className='mt-2 opacity-100 2xl:font-bold text-sm lg:text-lg 2xl:text-xl'>{item.card[6].info}</h5>
    //               </article>
    //             </a>
    //           </div>
    //           <div className='hidden 2xl:block lg:col-span-1 xl:col-span-2 2xl:col-span-1 lg:mt-12 2xl:mt-16'>
    //             <article className='flex flex-wrap flex-row overflow-hidden items-center justify-center gap-2 drop-shadow-xl bg-gray-100 text-secondary lg:h-32 lg:w-full 2xl:h-48 2xl:w-full mb-2 2xl:mb-4 p-2 py-3 hover:scale-110 hover:bg-secondary hover:text-gray-50 duration-200 rounded-md'>
    //                 <div className='text-4xl'>{item.card[0].icon}</div>
    //                 <h5 className='opacity-100 2xl:font-bold text-md lg:text-base 2xl:text-lg'>{item.card[0].info}</h5>
    //             </article>
    //             <article className='flex flex-wrap flex-row overflow-hidden items-center justify-center gap-2 drop-shadow-xl bg-gray-100 text-secondary lg:h-32 lg:w-full 2xl:h-48 2xl:w-full mb-2 2xl:mb-4 p-2 py-3 hover:scale-110 hover:bg-secondary hover:text-gray-50 duration-200 rounded-md'>
    //                 <div className='text-4xl'>{item.card[1].icon}</div>
    //                 <h5 className='opacity-100 2xl:font-bold text-md lg:text-base 2xl:text-lg'>{item.card[1].info}</h5>
    //                 {/* <small className=''>{item.card[1].smallInfo}</small> */}
    //             </article>
    //           </div>
    //           <div className='hidden 2xl:block lg:col-span-1 xl:col-span-2 2xl:col-span-1'>
    //             <article className='flex flex-wrap flex-row overflow-hidden items-center justify-center gap-2 drop-shadow-xl bg-gray-100 text-secondary lg:h-32 lg:w-full 2xl:h-48 2xl:w-full mb-2 2xl:mb-4 p-2 py-3 hover:scale-110 hover:bg-secondary hover:text-gray-50 duration-200 rounded-md'>

    //                 <div className='text-4xl'>{item.card[2].icon}</div>
    //                 <h5 className='opacity-100 2xl:font-bold text-md lg:text-base 2xl:text-lg'>{item.card[2].info}</h5>
    //                 {/* <small className=''>{item.card[2].smallInfo}</small> */}
    //             </article>
    //             <article className='flex flex-wrap flex-row overflow-hidden items-center justify-center gap-2 drop-shadow-xl bg-gray-100 text-secondary lg:h-32 lg:w-full 2xl:h-48 2xl:w-full mb-2 2xl:mb-4 p-2 py-3 hover:scale-110 hover:bg-secondary hover:text-gray-50 duration-200 rounded-md'>
    //                 <div className='text-4xl'>{item.card[3].icon}</div>
    //                 <h5 className='opacity-100 2xl:font-bold text-md lg:text-base 2xl:text-lg'>{item.card[3].info}</h5>
    //                 {/* <small className=''>{item.card[3].smallInfo}</small> */}
    //             </article>
    //           </div>
    //           <div className='hidden 2xl:block lg:col-span-1 xl:col-span-2 2xl:col-span-1 lg:mt-12 2xl:mt-16 '>
    //             <article className='flex flex-wrap flex-row overflow-hidden items-center justify-center gap-2 drop-shadow-xl bg-gray-100 text-secondary lg:h-32 lg:w-full 2xl:h-48 2xl:w-full mb-2 2xl:mb-4 p-2 py-3 hover:scale-110 hover:bg-secondary hover:text-gray-50 duration-200 rounded-md'>
    //                 <div className='text-4xl'>{item.card[4].icon}</div>
    //                 <h5 className='opacity-100 2xl:font-bold text-md lg:text-base 2xl:text-lg'>{item.card[4].info}</h5>
    //                 {/* <small className=''>{item.card[4].smallInfo}</small> */}
    //             </article>
    //             <article className='flex flex-wrap flex-row overflow-hidden items-center justify-center gap-2 drop-shadow-xl bg-gray-100 text-secondary lg:h-32 lg:w-full 2xl:h-48 2xl:w-full mb-2 2xl:mb-4 p-2 py-3 hover:scale-110 hover:bg-secondary hover:text-gray-50 duration-200 rounded-md'>
    //                 <div className='text-4xl'>{item.card[5].icon}</div>
    //                 <h5 className='opacity-100 2xl:font-bold text-md lg:text-base 2xl:text-lg'>{item.card[5].info}</h5>
    //                 {/* <small className=''>{item.card[5].smallInfo}</small> */}
    //             </article>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
    //     </div>
    //   )): ''}
    // </Slider>
 
  );
};

export default ReactSlick;
