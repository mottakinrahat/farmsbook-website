import React from 'react';
import { FaArrowRight } from "react-icons/fa";
const SingleHCard = ({harvest}) => {
    const{image_url,title,list1,list2,list3}=harvest;
    return (
             <div className='w-[396px]'>
            <div>
                <img src={image_url} className='h-[396px] w-[396px] mb-[40px]' alt="" />


                <div>
                    <h2 className='text-[24px] mb-[16px] font-semibold'>{title}</h2>

                    <div className='w-[382px] mb-[60px] text-[16px] ml-2'>
                        <li>{list1}</li>
                        <li>{list2}</li>
                        <li>{list3}</li>
                    </div>
                    <div>
                        <button className='py-[16px] px-[32px] flex gap-2 items-center bg-[#CEF8E1] rounded-full'>Connect now <FaArrowRight/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleHCard;