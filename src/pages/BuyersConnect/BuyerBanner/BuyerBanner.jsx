import React from 'react';
import { FaArrowRight } from "react-icons/fa";
const BuyerBanner = ({ upText, title, paratext,img,smText }) => {
    const bannerImgUrl = {img};
    return (
        <div className=''>
            <div className="hero h-[244px] w-full md:h-[600px]" style={{
                backgroundImage: `url(${img})`,

                height: 'full'
            }}>
                 <div className="md:hero-overlay md:bg-opacity-40"></div>
                <div>
                    <div className="hero-content  text-neutral-content">
                        <div className="max-w-full md:flex md:gap-[168px]">
                            <div className=''>
                                <p className='md:text-[24px] text-[14px] mt-[10px] mb-2 md:mb-[40px] md:mt-6'>{upText}</p>
                                <h2 className='md:text-[40px] md:mb-[144px] font-semibold'>{title}</h2>

                                <p className=' md:hidden mt-4 text-[12px] '>{smText}</p>

                                <button className='md:py-[16px] mb-2 py-[7px] md:px-[30.5px] px-[6.5px] bg-white text-black flex items-center mt-4 gap-2 '>Connect Now <FaArrowRight /></button>
                            </div>
                            <div className=' md:mt-[200px]'>
                                <p className='md:w-[475px] hidden  md:block  text-[16px]'>{paratext}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyerBanner;