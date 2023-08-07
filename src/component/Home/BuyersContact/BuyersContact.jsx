import React from 'react';
import frame_1 from '../../../assets/Frame 221.png'
import frame_2 from '../../../assets/Rectangle 38.png'
import frame_3 from '../../../assets/Rectangle 39.png'
import { FaArrowRight } from "react-icons/fa";
const BuyersContact = () => {
    return (
        <div>
            <div className='bg-[#F0F2F1] py-2'>
                <h2 className='md:text-[40px] text-[20px] md:mb-[110px] mb-[16px] font-semibold mt-[30px] text-center '>How we do this ? </h2>
                <div className='md:flex justify-evenly'>
                    <div>
                        <img className='md:h-[460.33px]' src={frame_1}  alt="" />
                    </div>


                    <div className='md:w-[496px] w-[327px] text-center md:mx-[16px] md:text-left mx-auto'>
                        <p className='md:text-[24px] text-[14px] font-bold'>Buyers Connect</p>
                        <h2 className='md:text-[32px] text-[18px] mb-[40px] font-bold'>Unlocking Opportunities, Strengthening Partnerships</h2>
                        
                            <p className='md:mb-[40px] text-[16px]'>With our Buyer Connect feature, we create a direct link between farmers and potential buyers, fostering meaningful connections and facilitating transparent transactions. Our platform enables farmers to showcase their products, negotiate prices, and establish long-term partnerships with reliable buyers, empowering them to expand their reach and maximize profitability.</p>
                    

                        <button className='py-[16px] mx-auto md:mx-0 px-[30.5px] bg-black text-white flex items-center gap-2 '>Connect Now <FaArrowRight /></button>
                    </div>
                </div>
            </div>

            {/* 2nd part */}

            <div className='h-[682px] flex flex-col-reverse mt-10 md:mt-0 md:flex-row md:justify-between md:items-center'>
                <div className='md:w-[496px] w-[327px] text-center md:mx-[20px] mx-auto md:text-left'>
                    <p className='md:text-[24px] text-[14px] mt-2 font-bold'>Harvest Management</p>
                    <h2 className='md:text-[32px] text-[18px] mb-[40px] font-bold'>Optimizing Efficiency, Ensuring Success</h2>
                    <p className='mb-[40px] text-[16px] '>Through our Harvest Management services, we provide farmers with tools and insights to optimize their harvest schedules, track yield data, and monitor crop quality. By harnessing the power of data-driven decision-making, we help farmers improve productivity, reduce waste, and enhance overall operational efficiency.</p>

                    <button className='py-[16px] px-[30.5px] md:mx-0 mx-auto mb-4 md:mb-0 bg-black text-white flex items-center gap-2 '>Get started <FaArrowRight /></button>
                </div>

                <div>
                    <img className='md:w-[656px] md:h-[654px] w-[234px] h-[234px] mx-auto md:pt-[80px]' src={frame_2} alt="" />
                </div>

            </div>
            {/* 3rd part */}

            <div className='md:h-[682px] bg-[#F0F2F1] md:flex justify-between mt-4 py-4 items-center '>
                <div>
                    <img className='md:w-[656px] md:h-[654px] w-[234px] h-[234px] mx-auto md:pt-[80px]' src={frame_3} alt="" />
                </div>

                <div className='md:w-[496px] w-[327px] text-center md:mx-[16px] mx-auto md:text-left'>
                    <p className='md:text-[24px] text-[14px] mt-2 font-bold'>Demand Forecasting</p>
                    <h2 className='md:text-[32px] text-[18px] mb-[40px] font-bold'>Anticipating Needs, Driving Growth</h2>
                    <p className='mb-[40px] text-[16px] '>Our platform leverages advanced analytics and market trends to provide farmers with valuable insights into future demand patterns. By equipping farmers with the knowledge to anticipate market needs, we empower them to plan their production cycles effectively, minimize supply-demand imbalances, and seize growth opportunities.</p>

                    <button className='py-[16px] px-[30.5px] md:mx-0 mx-auto bg-black text-white flex items-center gap-2 '>Get started <FaArrowRight /></button>
                </div>

            </div>
        </div>
    );
};

export default BuyersContact;