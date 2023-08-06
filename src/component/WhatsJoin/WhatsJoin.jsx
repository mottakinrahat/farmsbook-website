import React from 'react';
import whatsapp from '../../assets/whats app.png';

const WhatsJoin = ({ title, head,alt }) => {
    return (
        <div className='w-full h-[240px] bg-[#53658B]'>
            <div className='flex flex-col justify-evenly items-center'>
                {head && <p className='text-white text-[18px] mt-[40px]'>{head}</p>}
                <p className='text-[24px] mb-[32px] mt-[40px] text-center text-white'>{title}</p>
                {alt==true?<button className='px-[24px] py-[8px] border-2 border-white text-black bg-white rounded flex gap-1'><img className='h-[24px] w-[23.92px]' src={whatsapp} alt="" />Join Us</button>
                :<button className='px-[24px] py-[8px] border-4 border-white text-white font-semibold  rounded flex gap-1'><img className='h-[24px] w-[23.92px]' src={whatsapp} alt="" />Join Us</button>}
            </div>
        </div>
    );
};

export default WhatsJoin;