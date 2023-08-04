import React from 'react';
import { FaArrowRight } from "react-icons/fa";
const SingleDemand = ({demand}) => {
    const{image,title,description}=demand;
    return (
        <div className='w-[396px] h-[468px] bg-white rounded-xl  border-2 border-[#BDB7B7]'>
            <div>
                <img src={image} className='rounded-t-lg' alt="" />
                <div className='px-[16px] py-[24px]'>
                    <h2 className='text-[24px] mb-[16px] font-semibold'>{title}</h2>
                    <p className='text-[16px] mb-[24px]'>{description}</p>

                    <div className='text-[#00853C] '>
                        <button className='flex items-center gap-2'>Know more <FaArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleDemand;