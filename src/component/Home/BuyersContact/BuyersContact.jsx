import React from 'react';
import frame_1 from '../../../assets/Frame 221.png'
import frame_2 from '../../../assets/Rectangle 38.png'
import frame_3 from '../../../assets/Rectangle 39.png'
import { FaArrowRight } from "react-icons/fa";
const BuyersContact = () => {
    return (
        <div>
            <div className='bg-[#F0F2F1] py-2'>
                <h2 className='text-[40px] mb-[110px] font-semibold mt-[30px] text-center '>How we do this ? </h2>
                <div className='md:flex justify-evenly'>
                    <div>
                        <img className='h-[460.33px]' src={frame_1} alt="" />
                    </div>


                    <div className='md:w-[496px]'>
                        <p className='text-[24px] font-bold'>Buyers Connect</p>
                        <h2 className='text-[32px] mb-[40px] font-bold'>Unlocking Opportunities, Strengthening Partnerships</h2>
                        <p className='mb-[40px] text-[16px] '>With our Buyer Connect feature, we create a direct link between farmers and potential buyers, fostering meaningful connections and facilitating transparent transactions. Our platform enables farmers to showcase their products, negotiate prices, and establish long-term partnerships with reliable buyers, empowering them to expand their reach and maximize profitability.</p>

                        <button className='py-[16px] px-[30.5px] bg-black text-white flex items-center gap-2 '>Connect Now <FaArrowRight /></button>
                    </div>
                </div>
            </div>

            {/* 2nd part */}

            <div className='h-[682px] flex flex-col-reverse md:flex-row md:justify-between md:items-center'>
                <div className='md:w-[496px] md:ml-[160px]'>
                    <p className='text-[24px] font-bold'>Harvest Management</p>
                    <h2 className='text-[32px] mb-[40px] font-bold'>Optimizing Efficiency, Ensuring Success</h2>
                    <p className='mb-[40px] text-[16px] '>Through our Harvest Management services, we provide farmers with tools and insights to optimize their harvest schedules, track yield data, and monitor crop quality. By harnessing the power of data-driven decision-making, we help farmers improve productivity, reduce waste, and enhance overall operational efficiency.</p>

                    <button className='py-[16px] px-[30.5px] bg-black text-white flex items-center gap-2 '>Get started <FaArrowRight /></button>
                </div>

                <div>
                    <img className='md:w-[656px] md:h-[654px] pt-[80px]' src={frame_2} alt="" />
                </div>

            </div>
            {/* 3rd part */}

            <div className='md:h-[682px] bg-[#F0F2F1] md:flex justify-between items-center '>
                <div>
                    <img className='md:h-[655px] md:w-[655px] pt-[80px]' src={frame_3} alt="" />
                </div>

                <div className='md:w-[496px] md:mr-[160px]'>
                    <p className='text-[24px] font-bold'>Demand Forecasting</p>
                    <h2 className='text-[32px] mb-[40px] font-bold'>Anticipating Needs, Driving Growth</h2>
                    <p className='mb-[40px] text-[16px] '>Our platform leverages advanced analytics and market trends to provide farmers with valuable insights into future demand patterns. By equipping farmers with the knowledge to anticipate market needs, we empower them to plan their production cycles effectively, minimize supply-demand imbalances, and seize growth opportunities.</p>

                    <button className='py-[16px] px-[30.5px] bg-black text-white flex items-center gap-2 '>Get started <FaArrowRight /></button>
                </div>

            </div>
        </div>
    );
};

export default BuyersContact;