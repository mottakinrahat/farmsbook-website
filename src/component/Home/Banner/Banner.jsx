import React from 'react';
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
                        <h1 className="md:mb-[40px] md:text-[40px] font-semibold">Connecting the world of Farmers and Buyers</h1>
                        <p className="md:mb-[48px] md:w-[502px] md:text-[24px] mx-auto">Bridge the gap between farmers and buyers.
                            Streamline harvest management.
                            Unlock demand forecasting's full potential.</p>
                        <div className='flex justify-evenly '>
                            <button className='md:px-[16px] md:py-[8px] border-2 border-white rounded-full'>Download App</button>
                            <button className='md:px-[16px] md:py-[8px] border-2 border-white text-black bg-white rounded-full flex gap-1'>Join Us</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;