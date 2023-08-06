import React from 'react';
import { FaEnvelope,FaPhoneAlt } from "react-icons/fa";

const Header = () => {
    return (
        <div className='w-auto md:h-[40px] bg-[#FAEFE0] flex md:justify-end text-center px-4 py-1 justify-around md:px-0 md:py-0 items-center gap-[36px] md:pr-[101px] md:text-[14px] text-[10px]'>
           <div className='flex items-center gap-2'> <FaEnvelope/><p>info@farmsbook.com</p></div>
          <div className='flex items-center gap-2'> <FaPhoneAlt/><p>+(91) 9571141862 , 8802556290</p></div>
        </div>
    );
};

export default Header;