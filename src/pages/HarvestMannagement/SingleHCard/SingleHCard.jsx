import React, { useEffect } from 'react';
import { FaArrowRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const SingleHCard = ({ harvest }) => {
    useEffect(() => {
        AOS.init();
    }, []);
    const { image_url, title, list1, list2, list3 } = harvest;
    return (
        <div className='md:w-[396px] w-[360px] mx-auto mb-6 md:text-left' data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000">
            <div>
                <img src={image_url} className='md:h-[396px] md:w-[396px] mx-auto h-[234px] w-[234px]   mb-[40px]' alt="" />


                <div>
                    <h2 className='text-[24px] mb-[16px] text-center font-semibold'>{title}</h2>

                    <div className='md:w-[382px] w-[325px]  md:mb-[60px] mb-[24px] px-[20px] md:px-0 mx-auto  md:text-[16px] text-[14px] md:ml-2'>
                        <li>{list1}</li>
                        <li>{list2}</li>
                        <li>{list3}</li>
                    </div>
                    <div>
                        <button className='py-[16px] px-[32px] hidden  md:flex gap-2 items-center bg-[#CEF8E1] rounded-full hover:bg-black hover:text-white hover:border-2 hover:border-black duration-100 hover:shadow-xl'>Connect now <FaArrowRight /></button>
                        <button className='py-[8px] px-[8px] md:hidden flex gap-2 items-center bg-[#D9D9D9] rounded mx-auto hover:bg-black hover:text-white hover:border-2 hover:border-black duration-100 hover:shadow-xl'>Get Started<FaArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleHCard;