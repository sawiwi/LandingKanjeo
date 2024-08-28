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

  const hoverEffect = `hover:scale-105`;
  const buttonAnimate = `animate-heart`;
  return (
    <div className="select-none group">  
      {isOpen && (
          <div className='fixed bottom-9 right-24 rounded-md w-[190px]  lg:w-[200px] 2xl:w-[220px] h-[50px] lg:h-[50px] 2xl:h-[50px] bg-white opacity-30 group-hover:opacity-100 duration-300 drop-shadow-lg shadow-black z-30 flex justify-center items-center hover:cursor-pointer transition-all '>
            <a href={whatsappBusinessLink}
                target='_blank'
                rel="noopener noreferrer"
                aria-label="Enviar mensaje por WhatsApp"
                title='tooltWsp'>
              <span className='text-sm font-semibold'>Haz tus consultas aquí!</span>
            </a>
        </div>
      )}
   
      <div
        className={`fixed bottom-8 right-8 rounded-full w-[60px] h-[60px] bg-green-500  drop-shadow-lg shadow-black z-30 flex justify-center items-center hover:cursor-pointer transition-all ${hoverEffect} ${buttonAnimate}`}
        onClick={handleClick}
      >
        <div
          className={`transition-all duration-300 ${
            isOpen ? 'rotate-15' : 'rotate-0'
          }`}
        >
          <a 
            href={whatsappBusinessLink}
            target='_blank'
            rel="noopener noreferrer"
            aria-label="Enviar mensaje por WhatsApp"
            // title='buttonWsp'
          >
            <AiOutlineWhatsApp className={`{overflow-hidden rounded-full w-[30px] h-[30px] text-white flex items-center justify-center drop-shadow-lg shadow-black  transition-all ${hoverEffect}`} />
          </a>
        </div>
      </div>
      <div
        className={`fixed  right-8 rounded-full w-[60px] z-10 flex flex-col-reverse items-center gap-3 transition-all duration-500 transform ${
          isOpen ? 'bottom-28' : '-bottom-36 opacity-0'
        }`}
      >
      </div>
    </div>
  );
};

export default ContactWsp;
