import React, { useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
const SingleDemand = ({demand}) => {
    useEffect(() => {
        AOS.init();
    }, []);
    const{image,title,description}=demand;
    return (
        <div className='md:w-[396px] w-[328px]  md:h-[468px] mx-auto h-[384px] bg-white rounded-xl  border-2 mb-4 border-[#BDB7B7]'  data-aos="flip-up">
            <div>
                <img src={image} className='rounded-t-lg' alt="" />
                <div className='px-[16px] py-[24px]'>
                    <h2 className='md:text-[24px] text-[16px] md:mb-[16px] mb-[8px] font-semibold'>{title}</h2>
                    <p className='md:text-[16px] text-[14px] mb-[24px]'>{description}</p>

                    <div className='text-[#00853C] '>
                        <button className='flex items-center gap-2 hover:text-black hover:duration-100'>Know more <FaArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDemand;