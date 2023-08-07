import React from 'react';
import logo_1 from '../../../assets/logoCom/logo-1.png'
import logo_2 from '../../../assets/logoCom/logo-2.png'
import logo_3 from '../../../assets/logoCom/logo-3.png'
import logo_4 from '../../../assets/logoCom/logo-4.png'

const Partner = () => {
    return (
        <div className='w-full  md:h-[438px]'>
              <h2 className='text-[32px] mb-[64px] font-semibold mt-[80px] text-center '>Our Partner</h2>
            <div className=' md:flex justify-evenly  items-center md:ml-0'>
             <img src={logo_1} className='mx-auto' alt="" />
             <img src={logo_2} className='mx-auto' alt="" />
             <img src={logo_3} className='mx-auto' alt="" />
             <img src={logo_4} className='mx-auto' alt="" />
            </div>
        </div>
    );
};

export default Partner;