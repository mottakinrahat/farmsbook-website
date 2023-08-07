import React from 'react';
import rectimage from '../../../assets/formsImg/formsImg.png';
const FormsHome = () => {
    return (
        <div>
            <div className='md:h-[682px]  w-full md:flex justify-between  '>
                <div className='md:w-1/2 relative md:block hidden'>
                    <img src={rectimage} alt="" className="md:h-[682px] md:w-full" />
                </div>

                <div className='md:w-1/2 bg-[#E2C0AD] md:pl-[71px]  w-full py-[24px] md:py-0 pl-[24px]'>

                    <h2 className='text-[32px] font-semibold text-center mt-[64px] mb-[50px]'>Join Us</h2>

                    <fieldset className='flex justify-center mb-4 md:gap-[113px] gap-5 mt-[20px] text-black'>

                    <div>
                        <input id="trader" className="peer/trader mr-2" type="radio" name="status" checked />
                        <label for="trader" >I am Trader</label>
                    </div>

                    <div>
                        <input id="farmer" className="peer/farmer mr-2" type="radio" name="status" />
                        <label for="farmer" >I am Farmer</label>
                    </div>

                </fieldset>


                    <div className=' md:mr-[100px] mr-4 font-semibold '>

                        <div className='md:flex items-center gap-[152px]'> <h2 className='mb-[2px]'>Name</h2>
                            <input type="text" placeholder="Your Name" className="input border-none mb-[16px] md:w-[353px] w-[312px] h-[32px] md:h-[40px]" /></div>

                        <div className='md:flex items-center gap-[134px]'><h2 className='mb-[2px]'>Email-id </h2>
                            <input type="text" placeholder="Your email-id" className="input border-none mb-[16px] md:w-[353px] w-[312px] h-[32px] md:h-[40px]" /></div>

                        <div className='md:flex items-center gap-[82px]'> <h2 className='mb-[2px]'>Mobile Number</h2>
                            <input type="text" placeholder="your mobile number" className="input border-none mb-[16px] md:w-[353px] w-[312px] h-[32px] md:h-[40px]" /></div>

                        <div className='md:flex items-center gap-[130px]'> <h2 className='mb-[2px]'>Location</h2>
                            <input type="text" placeholder="add location" className="input border-none mb-[16px]  md:w-[353px] w-[312px] h-[32px] md:h-[40px]" /></div>

                       
                    </div>
                    <div className='text-center md:mt-[90px] mt-[32px]'>
                        <button className='py-[16px] px-[32px] bg-[#00853C] text-white rounded-xl '>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormsHome;