import React from 'react';
import formImage_1 from '../../../assets/imageForm/image_from_1.png'
import formImage_2 from '../../../assets/imageForm/image_form_2.jpeg';
import formImage_3 from '../../../assets/imageForm/image_form_3.jpeg';
import formImage_4 from '../../../assets/imageForm/image_form_4.jpeg';
import formImage_5 from '../../../assets/imageForm/image_form_5.jpeg';
import formImage_6 from '../../../assets/imageForm/image_form_6.jpeg';
const AboutForm = () => {
    return (
        <div>
            <div className='md:h-[682px]  w-full md:flex justify-between  '>
                <div className='md:w-1/2 relative md:block hidden'>
                <div className='grid grid-cols-2 gap-2 px-2 py-2'>
                        <img src={formImage_1} className='h-[220px] w-[380px] border-2 rounded-xl border-black' alt="" />
                        <img src={formImage_2} className='h-[220px] w-[380px] border-2 rounded-xl border-black ' alt="" />
                        <img src={formImage_3} className='h-[220px] w-[380px] border-2 rounded-xl border-black' alt="" />
                        <img src={formImage_4} className='h-[220px] w-[380px] border-2 rounded-xl border-black' alt="" />
                        <img src={formImage_5} className='h-[220px] w-[380px] border-2 rounded-xl border-black' alt="" />
                        <img src={formImage_6} className='h-[220px] w-[380px] border-2 rounded-xl border-black' alt="" />
                    </div>
                </div>

                <div className='md:w-1/2 bg-[#E2C0AD] md:pl-[71px] w-full py-[24px] md:py-0  '>

         <h2 className='text-[32px] font-semibold text-center mt-[64px] mb-[50px]'>Join Us</h2>
                   
                        
                        <div className=' md:mr-[100px] mx-[40px] md:mx-0 font-semibold '>

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
                    <div className='text-center md:mt-[108px] mt-[32px]'>
                        <button className='py-[16px] px-[32px] bg-[#00853C] text-white rounded-xl '>Submit</button>
                    </div>
                    </div>
                </div>
            </div>
   
    );
};

export default AboutForm;