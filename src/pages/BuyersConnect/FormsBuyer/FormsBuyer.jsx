import React from 'react';
import rectimage from '../../../assets/formsImg/formsBuyers.png'

const FormsBuyer = () => {
    return (
        <div>
            <div className='md:h-[682px] w-full md:flex justify-between '>
                <div className='md:w-1/2 relative'>
                    <img src={rectimage} alt="" className="md:h-[682px] w-full" />
                </div>

                <div className='md:w-1/2  bg-[#E2C0AD]'>
        

                    <div className='flex items-center  gap-[77px] mt-[80px]'>
                        <div className='mb-[20px] md:ml-[56px] ml-2 w-1/2 mt-2 text-[16px]'>
                            <h2 className='mb-[32px]'>Name</h2>
                            <h2 className='mb-[32px]'>Email-id </h2>
                            <h2 className='mb-[32px]'>Mobile Number</h2>
                            <h2 className='mb-[32px]'>Company Name</h2>
                            <h2 className='mb-[32px]'>Type of Business</h2>
                            <h2 className='mb-[32px]'>Location</h2>
                        </div>
                        <div className='md:w-1/2 md:mr-[100px]'>
                            <input type="text" placeholder="Your Name" className="input border-none mb-[16px] md:w-[353px]  md:h-[40px]" />
                            <input type="text" placeholder="Your email-id" className="input border-none mb-[16px] md:w-[353px] md:h-[40px]" />
                            <input type="text" placeholder="your mobile number" className="input border-none mb-[16px] md:w-[353px] md:h-[40px]" />
                            <input type="text" placeholder="add your feedback" className="input border-none mb-[16px]  md:w-[353px] md:h-[40px]" />
                            <input type="text" placeholder="add your feedback" className="input border-none mb-[16px]  md:w-[353px] md:h-[40px]" />
                            <input type="text" placeholder="add your feedback" className="input border-none mb-[16px]  md:w-[353px] md:h-[40px]" />
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

export default FormsBuyer;