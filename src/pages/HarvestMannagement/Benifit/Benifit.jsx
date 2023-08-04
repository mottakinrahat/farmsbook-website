import React from 'react';

const Benifit = () => {
    return (
        <div className='mb-[96px]'>
            <h2 className='text-[32px] text-center mt-[120] mb-[64px]'>Benefits</h2>
            <div className='flex justify-around items-center'>
                <div className='w-[396px] h-[544px] py-[40px] pl-[40px] bg-[#F9E3B9] rounded-lg '>
                    <div className='flex flex-col justify-between'>
                        <div className='pr-[25px]'>
                            <h2 className='text-[24px] font-bold mb-[16px]'>Increased Revenue</h2>
                            <li>By effectively utilizing available space and attracting more farmers, warehouse owners can maximize their earning potential.</li>
                            <li>Optimizing storage space and efficiently managing inventory results in increased revenue for warehouse owners.</li>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/2MpZJY0/Rectangle-63.png" className='justify-end mt-[88px] ml-[140px]' alt="" />
                        </div>
                    </div>
                </div>
                <div className='w-[396px] h-[544px]  pl-[40px] bg-[#F9E3B9] rounded-lg '>
                    <div className='flex flex-col-reverse justify-between'>
                        <div className='pr-[25px]'>
                            <h2 className='text-[24px] font-bold mb-[16px]'>Business Expansion and Diversification</h2>
                            <li>Harvest Management enables warehouse owners to expand their customer base by connecting with a wide range of farmers.</li>
                            <li>Diversifying offerings by accommodating different crop types and varieties allows for a more versatile and resilient business.</li>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/gT81VVy/Rectangle-61.png" className='justify-end mb-[40px] ml-[140px]' alt="" />
                        </div>
                    </div>
                </div>
                <div className='w-[396px] h-[544px] py-[40px] pl-[40px] bg-[#F9E3B9] rounded-lg '>
                    <div className='flex flex-col justify-between'>
                        <div className='pr-[25px]'>
                            <h2 className='text-[24px] font-bold mb-[16px]'>Enhanced Efficiency and Productivity</h2>
                            <li>Streamlining operations through Harvest Management improves efficiency and reduces errors.</li>
                            <li>Warehouse owners can provide a seamless experience to farmers, resulting in improved productivity and customer satisfaction.</li>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/2MpZJY0/Rectangle-63.png" className='justify-end mt-[25px] mx-[55px]' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benifit;