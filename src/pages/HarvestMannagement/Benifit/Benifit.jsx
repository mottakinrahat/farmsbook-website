import React from 'react';

const Benifit = () => {
    return (
        <div className='mb-[96px]'>
            <h2 className='text-[32px] text-center mt-[120] mb-[64px]'>Benefits</h2>
            <div className='md:flex justify-around items-center  md:ml-0  '>
                <div className='md:w-[396px] w-[324px] md:h-[544px] h-[412px] mb-5 md:py-[40px] py-2 pr-2 mx-auto md:pl-[40px] pl-[20px] bg-[#F9E3B9] rounded-lg '>
                    <div className='flex flex-col justify-between mx-auto '>
                        <div className='md:pr-[25px] '>
                            <h2 className='text-[24px] font-bold md:mb-[16px] '>Increased Revenue</h2>
                            <div className='w-[283px] text-[14px] md:text-[16px] '>
                                <li>By effectively utilizing available space and attracting more farmers, warehouse owners can maximize their earning potential.</li>
                                <li>Optimizing storage space and efficiently managing inventory results in increased revenue for warehouse owners.</li>
                            </div>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/2MpZJY0/Rectangle-63.png" className='md:mt-[40px] ml-auto mt-[70px] w-[181px] md:w-[214px] md:h-[220px] h-[165px] md:ml-[140px]' alt="" />
                        </div>
                    </div>
                </div>
                <div className='md:w-[396px] w-[324px] md:h-[544px] h-[412px] mb-5 md:py-[0px] py-2 pr-2 mx-auto md:pl-[40px] px-[20px] bg-[#F9E3B9] rounded-lg '>
                    <div className='flex flex-col-reverse justify-between'>
                        <div className='pr-[25px]'>
                            <h2 className='text-[24px] font-bold  md:mb-[16px] '>Business Expansion and Diversification</h2>
                            <div className='w-[283px] text-[14px] md:text-[16px]'>
                                <li>Harvest Management enables warehouse owners to expand their customer base by connecting with a wide range of farmers.</li>
                                <li>Diversifying offerings by accommodating different crop types and varieties allows for a more versatile and resilient business.</li>
                            </div>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/gT81VVy/Rectangle-61.png" className='w-[181px] ml-auto  md:w-[214px] md:h-[220px] h-[165px] md:ml-[140px]' alt="" />
                        </div>
                    </div>
                </div>
                <div className='md:w-[396px] w-[324px] md:h-[544px] h-[412px] mb-5 md:py-[40px] mx-auto pt-2 pr-2 md:pl-[40px] px-[20px] bg-[#F9E3B9] rounded-lg '>
                    <div className='flex flex-col justify-between'>
                        <div className='pr-[25px]'>
                            <h2 className='text-[24px] font-bold mb-[16px]'>Enhanced Efficiency and Productivity</h2>
                            <div className='w-[283px] text-[14px] md:text-[16px]'>
                                <li>Streamlining operations through Harvest Management improves efficiency and reduces errors.</li>
                                <li>Warehouse owners can provide a seamless experience to farmers, resulting in improved productivity and customer satisfaction.</li>
                            </div>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/2MpZJY0/Rectangle-63.png" className='w-[181px] md:w-[214px] md:h-[220px] md:mt-7 mx-auto  h-[165px]' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benifit;