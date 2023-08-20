import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SingleBuyers = ({sData}) => {
    useEffect(() => {
        AOS.init();
    }, []);
  
   const{background_image , company_name , location , owner_name , products_deals_in , profile_picture}=sData;
    return (
        <div data-aos="flip-left">
            <div className='card md:h-[500px] h-[393px] mx-auto  md:w-[396px] w-[328px] mb-4 border-2 rounded border-[#BDB7B7] bg-white'>
                <div className='card-content'>
                    <img src={background_image}  alt="" />
                    <img src={profile_picture} className='ml-[16px] md:mb-[21px] -mt-10' alt="" />
                    <div className='ml-[16px]'>
                        <h2 className='md:text-[20px] text-[16px] font-semibold'>{company_name}</h2>
                        <p className='text-[16px] md:mb-[12px] mb-[8px] text-[#685F5F]'>{owner_name}</p>
                        <p className='text-[16px] md:mb-[8px] mb-[8px] text-[#685F5F]'>{location}</p>
                        <p className='text-[16px] md:mb-[32px] mb-[8px] text-[#685F5F]'>Products Deals In: {products_deals_in}</p>

                        <button className='md:px-[20px] px-[20px] md:py-[11px] mb-2 py-[11px] bg-[#E3E4E8] rounded hover:bg-green-500 hover:text-white hover:border-2 hover:border-green-500 duration-100 hover:shadow-xl'>Contact Now</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBuyers;