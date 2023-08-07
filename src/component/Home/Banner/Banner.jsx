import React from 'react';
import './BannerCss/banner.css'
const Banner = () => {
    const bannerImgUrl = 'https://i.ibb.co/ZS568Bt/2nd.png';
    return (
        <div className=''>
            <div className="hero h-[259px] w-full md:h-[600px]" style={{
                backgroundImage: `url(${bannerImgUrl})`,
                
                height:'full'
            }}>
                
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-full">
                        <h1 className="md:mb-[40px] md:text-[40px] mb-5 text-[20px] font-semibold">Connecting the world of Farmers and Buyers</h1>
                        <p className="md:mb-[48px] md:w-[502px] md:text-[24px] mx-auto " id="hidden-text">Bridge the gap between farmers and buyers.
                            Streamline harvest management.
                            Unlock demand forecasting's full potential.</p>
                        <div className='flex  md:gap-[80px] gap-10  md:ml-[240px] ml-[50px]'>
                            <button className='md:px-[16px]   md:py-[16px] border-4 font-semibold py-[4px] px-[8px] border-white rounded-full'>Download App</button>
                            <button className='md:px-[49px] md:py-[16px] border-4 py-[4px] px-[20px] font-bold border-white text-black bg-white rounded-full flex gap-1'>Join Us</button>
                        </div>
                      
                            <p className='mt-6 text-yellow-200 text-xl font-semibold'>200 Members already joined  farmsbook community</p>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;