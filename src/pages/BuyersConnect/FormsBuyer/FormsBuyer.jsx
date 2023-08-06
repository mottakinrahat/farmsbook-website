import React from 'react';
import rectimage from '../../../assets/formsImg/formsBuyers.png'

const FormsBuyer = () => {
    return (
        <div>
            <div className='md:h-[682px] w-full md:flex justify-between  '>
                <div className='md:w-1/2 relative'>
                    <img src={rectimage} alt="" className="md:h-[682px] w-full hidden" />
                </div>

                <div className='md:w-1/2  bg-[#E2C0AD]'>



                    <div className='md:w-1/2 bg-[#E2C0AD] md:pl-[71px] w-[360px] py-[24px] md:py-0 pl-[24px]'>

                        <h2 className='text-[32px] font-semibold text-center mt-[64px] mb-[50px]'>Join Us</h2>


                        <div className=' md:mr-[100px] mr-4 font-semibold'>

                            <div className='md:flex items-center gap-[152px]'> <h2 className='mb-[2px]'>Name</h2>
                                <input type="text" placeholder="Your Name" className="input border-none mb-[16px] md:w-[353px] w-[312px] h-[32px] md:h-[40px]" /></div>

                            <div className='md:flex items-center gap-[134px]'><h2 className='mb-[2px]'>Email-id </h2>
                                <input type="text" placeholder="Your email-id" className="input border-none mb-[16px] md:w-[353px] w-[312px] h-[32px] md:h-[40px]" /></div>

                            <div className='md:flex items-center gap-[82px]'> <h2 className='mb-[2px]'>Mobile Number</h2>
                                <input type="text" placeholder="your mobile number" className="input border-none mb-[16px] md:w-[353px] w-[312px] h-[32px] md:h-[40px]" /></div>

                            <div className='md:flex items-center gap-[76px]'> <h2 className='mb-[2px]'>Company Name</h2>
                                <input type="text" placeholder="add company name" className="input border-none mb-[16px]  md:w-[353px] w-[312px] h-[32px] md:h-[40px]" /></div>

                            <div className='md:flex items-center gap-[66px]'> <h2 className='mb-[2px]'>Type of Business</h2>
                                <input type="text" placeholder="add Type of Business" className="input border-none mb-[16px]  md:w-[353px] w-[312px] h-[32px] md:h-[40px]" /></div>
                            <div className='md:flex items-center gap-[130px]'>
                                <h2 className='mb-[2px]'>Location</h2>
                                <input type="text" placeholder="add Location" className="input border-none mb-[16px]  md:w-[353px] w-[312px] h-[32px] md:h-[40px]" /></div>
                        </div>
                        <div className='text-center mt-[108px]'>
                            <button className='py-[16px] px-[32px] bg-[#00853C] text-white rounded-xl '>Submit</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FormsBuyer;