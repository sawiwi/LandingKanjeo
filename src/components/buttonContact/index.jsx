import React, { useState } from 'react';
import {AiOutlineWhatsApp} from '../../components/icon/index'

const ContactWsp = () => {
  const num = '953858376';
  const whatsappBusinessLink = `https://wa.me/${num}`;

  const [isOpen, setIsOpen] = useState(true);


  if(!isOpen){
    setTimeout(() => {
      setIsOpen(false);
    }, 5000);
  }

  function handleClick() {
    setIsOpen(!isOpen);
  }

  const hoverEffect = `hover:tw-scale-105`;
  const buttonAnimate = `tw-animate-heart`;
  return (
    <div className="tw-select-none">  
      {isOpen && (
          <div className='tw-fixed tw-bottom-9 tw-right-24 tw-rounded-md tw-w-[190px]  lg:tw-w-[200px] 2xl:tw-w-[220px] tw-h-[50px] lg:tw-h-[50px] 2xl:tw-h-[50px] tw-bg-white tw-drop-shadow-lg tw-shadow-black tw-z-30 tw-flex tw-justify-center tw-items-center hover:tw-cursor-pointer tw-transition-all '>
            <a href={whatsappBusinessLink}
                target='_blank'
                rel="noopener noreferrer"
                aria-label="Enviar mensaje por WhatsApp"
                title='tooltWsp'>
              <span className='tw-text-sm tw-font-semibold'>Haz tus consultas aquí!</span>
            </a>
        </div>
      )}
   
      <div
        className={`tw-fixed tw-bottom-8 tw-right-8 tw-rounded-full tw-w-[60px] tw-h-[60px] tw-bg-secondary tw-drop-shadow-lg tw-shadow-black tw-z-30 tw-flex tw-justify-center tw-items-center hover:tw-cursor-pointer tw-transition-all ${hoverEffect} ${buttonAnimate}`}
        onClick={handleClick}
      >
        <div
          className={`tw-transition-all tw-duration-300 ${
            isOpen ? 'tw-rotate-15' : 'tw-rotate-0'
          }`}
        >
          <a 
            href={whatsappBusinessLink}
            target='_blank'
            rel="noopener noreferrer"
            aria-label="Enviar mensaje por WhatsApp"
            // title='buttonWsp'
          >
            <AiOutlineWhatsApp className={`{tw-overflow-hidden tw-rounded-full tw-w-[30px] tw-h-[30px] tw-text-white tw-flex tw-items-center tw-justify-center tw-drop-shadow-lg tw-shadow-black  tw-transition-all ${hoverEffect}`} />
          </a>
        </div>
      </div>
      <div
        className={`tw-fixed  tw-right-8 tw-rounded-full tw-w-[60px] tw-z-10 tw-flex tw-flex-col-reverse tw-items-center tw-gap-3 tw-transition-all tw-duration-500 tw-transform ${
          isOpen ? 'tw-bottom-28' : '-tw-bottom-36 tw-opacity-0'
        }`}
      >
      </div>
    </div>
  );
};

export default ContactWsp;
