import React, { useEffect } from 'react';
import grp_1 from '../../../assets/about/group-1.png'
import grp_2 from '../../../assets/about/group-2.png'
import grp_3 from '../../../assets/about/group-3.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Network = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <h1 className='text-[32px] font-semibold  text-center mt-[120px] md:mb-[132px] mb-6'>Our Network </h1>
            <div className='md:flex justify-around items-center hidden  gap-[150px] mb-[80px]'>
                <div className='ml-[205px]' data-aos="fade-right">
                    <h2 className='text-[24px] font-semibold mb-[16px]'>600 Farmers Group </h2>
                    <p className='text-[16px]'>We are proud to be connected with over 600 farmers groups, allowing us to offer a diverse range of high-quality, locally sourced produce. Our strong partnerships ensure fresh and sustainable crops for our customers, reflecting our commitment to supporting farmers and promoting sustainable practices.</p>
                </div>
                <div className='mr-[297px]'  data-aos="fade-left">
                    <img src={grp_1} alt="" />
                </div>
            </div>
            <div className='md:flex justify-around items-center hidden gap-[150px] mb-[80px]'>
                <div className='ml-[313px] '  data-aos="fade-right">

                    <img src={grp_2} alt="" />
                </div>
                <div className='mr-[199px]'  data-aos="fade-left">
                    <h2 className='text-[24px] font-semibold mb-[16px]'>07 States </h2>
                    <p className='text-[16px]'>Our reach extends across 7 states, bringing our services and support to a wide geographical area. With a strong presence in these regions, we are able to connect farmers and buyers, facilitate seamless transactions, and foster agricultural growth on a broader scale. Our extensive coverage allows us to serve diverse farming communities and contribute to the development of the agricultural sector in these states.</p>
                </div>
            </div>
            <div className='md:flex justify-around items-center hidden gap-[150px]'>
                <div className='ml-[204px] '  data-aos="fade-right">
                    <h2 className='text-[24px] font-semibold mb-[16px]'>30+ Crops </h2>
                    <p className='text-[16px]'>We offer an extensive selection of over 30 crops, ranging from staple grains to specialty produce. Our diverse range includes fruits, vegetables, grains, and more, ensuring that farmers and buyers have access to a wide variety of agricultural products. With such a comprehensive crop portfolio, we aim to cater to the needs and preferences of our customers while promoting agricultural diversity and sustainable farming practices.</p>
                </div>
                <div className='mr-[316px]'  data-aos="fade-left">
                    <img src={grp_3} alt="" />
                </div>
            </div>

            <div className='md:hidden flex font-semibold justify-around items-center  text-center mb-6'>
                <div className='flex flex-col w-[69px] h-[106px]'>
                    <img src={grp_1} className='h-[40px] w-[40px] mx-auto' alt="" />
                    <h2 className='mt-2'>600 Farmers Group</h2>
                </div>
                <div className='flex flex-col w-[69px] h-[106px]'>
                    <img src={grp_2} className='h-[40px] w-[40px] mx-auto' alt="" />
                    <h2 className='mt-2'>07 States</h2>
                </div>
                <div className='flex flex-col w-[69px] h-[106px]'>
                    <img src={grp_3} className='h-[40px] w-[40px] mx-auto' alt="" />
                    <h2 className='mt-2'>30+ Crops</h2>
                </div>
            </div>
        </div>
    );
};

export default Network;