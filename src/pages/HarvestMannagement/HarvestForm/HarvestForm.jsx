import React from 'react';
import rectimage from '../../../assets/formsImg/harvestForm.png'

const HarvestForm = () => {
    return (
        <div>
        <div className='h-[682px] w-full flex justify-between '>
            <div className='w-1/2 relative'>
                <img src={rectimage} alt="" className="h-[682px] w-full" />
            </div>

            <div className='w-1/2 bg-[#E2C0AD]'>
    

                <div className='flex   gap-[77px] mt-[80px]'>
                    <div className='mb-[20px] ml-[56px] w-1/2 mt-2 text-[16px]'>
                        <h2 className='mb-[32px]'>Name</h2>
                        <h2 className='mb-[32px]'>Email-id </h2>
                        <h2 className='mb-[32px]'>Mobile Number</h2>
                        <h2 className='mb-[32px]'>Company Name</h2>
                        <h2 className='mb-[32px]'>Type of Business</h2>
                        <h2 className='mb-[32px]'>Location</h2>
                    </div>
                    <div className='w-1/2 mr-[100px]'>
                        <input type="text" placeholder="Your Name" className="input border-none mb-[16px] w-[353px] h-[40px]" />
                        <input type="text" placeholder="Your email-id" className="input border-none mb-[16px] w-[353px] h-[40px]" />
                        <input type="text" placeholder="your mobile number" className="input border-none mb-[16px] w-[353px] h-[40px]" />
                        <input type="text" placeholder="add your feedback" className="input border-none mb-[16px]  w-[353px] h-[40px]" />
                        <input type="text" placeholder="add your feedback" className="input border-none mb-[16px]  w-[353px] h-[40px]" />
                        <input type="text" placeholder="add your feedback" className="input border-none mb-[16px]  w-[353px] h-[40px]" />
                    </div>
                </div>
                <div className='text-center mt-[108px]'>
                    <button className='py-[16px] px-[32px] bg-[#00853C] text-white rounded-xl '>Submit</button>
                </div>
            </div>
        </div>
    </div>
    );
};

export default HarvestForm;