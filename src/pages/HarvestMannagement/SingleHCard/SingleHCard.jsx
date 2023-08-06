import React from 'react';
import { FaArrowRight } from "react-icons/fa";
const SingleHCard = ({harvest}) => {
    const{image_url,title,list1,list2,list3}=harvest;
    return (
             <div className='md:w-[396px] w-[360px] mb-6 md:text-left'>
            <div>
                <img src={image_url} className='md:h-[396px] md:w-[396px] mx-auto h-[234px] w-[234px]   mb-[40px]' alt="" />


                <div>
                    <h2 className='text-[24px] mb-[16px] text-center font-semibold'>{title}</h2>

                    <div className='md:w-[382px] w-[325px]  md:mb-[60px] mb-[24px] px-[20px] md:px-0  md:text-[16px] text-[14px] md:ml-2'>
                        <li>{list1}</li>
                        <li>{list2}</li>
                        <li>{list3}</li>
                    </div>
                    <div>
                        <button className='py-[16px] px-[32px] hidden  md:flex gap-2 items-center bg-[#CEF8E1] rounded-full'>Connect now <FaArrowRight/></button>
                        <button className='py-[8px] px-[8px] md:hidden flex gap-2 items-center bg-[#D9D9D9] rounded mx-auto'>Get Started<FaArrowRight/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleHCard;