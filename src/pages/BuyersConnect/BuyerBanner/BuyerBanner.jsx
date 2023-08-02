import React from 'react';
import { FaArrowRight } from "react-icons/fa";
const BuyerBanner = ({ upText, title, paratext }) => {
    const bannerImgUrl = 'https://i.ibb.co/VBDdv3K/Rectangle-46.png';
    return (
        <div className=''>
            <div className="hero h-[600px]" style={{
                backgroundImage: `url(${bannerImgUrl})`,

                height: 'full'
            }}>
                <div>
                    <div className="hero-content  text-neutral-content">
                        <div className="max-w-full flex gap-[168px]">
                            <div className=''>
                                <p className='text-[24px] mb-[40px]'>{upText}</p>
                                <h2 className='text-[40px] mb-[144px] font-semibold'>{title}</h2>

                                <button className='py-[16px] px-[30.5px] bg-white text-black flex items-center gap-2 '>Connect Now <FaArrowRight /></button>
                            </div>
                            <div className=' mt-[200px]'>
                                <p className='w-[475px] text-[16px]'>{paratext}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BuyerBanner;