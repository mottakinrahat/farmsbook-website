import React from 'react';
import { FaEnvelope,FaPhoneAlt } from "react-icons/fa";

const Header = () => {
    return (
        <div className='w-auto h-[40px] bg-[#FAEFE0] flex justify-end items-center gap-[36px] pr-[101px] text-[14px]'>
           <div className='flex items-center gap-2'> <FaEnvelope/><p>info@farmsbook.com</p></div>
          <div className='flex items-center gap-2'> <FaPhoneAlt/><p>+ (91) 9571141862,  8802556290</p></div>
        </div>
    );
};

export default Header;