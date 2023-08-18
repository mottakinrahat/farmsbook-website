import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import formImage_1 from '../../../assets/imageForm/image_from_1.png'
import formImage_2 from '../../../assets/imageForm/image_form_2.jpeg';
import formImage_3 from '../../../assets/imageForm/image_form_3.jpeg';
import formImage_4 from '../../../assets/imageForm/image_form_4.jpeg';
import formImage_5 from '../../../assets/imageForm/image_form_5.jpeg';
import formImage_6 from '../../../assets/imageForm/image_form_6.jpeg';
const FormsHome = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div>
            <div className='md:h-[682px]  w-full md:flex justify-between  '>
                <div className='md:w-1/2 relative md:block'>
                    <div className='grid md:grid-cols-2 md:gap-2 gap-4 md:px-2 py-2 px-3' data-aos="fade-down-right" >
                        <img src={formImage_1} className='h-[220px] w-[380px] border-2 rounded-xl border-black' alt="" />
                        <img src={formImage_2} className='h-[220px] w-[380px] border-2 rounded-xl border-black ' alt="" />
                        <img src={formImage_3} className='h-[220px] w-[380px] border-2 rounded-xl border-black' alt="" />
                        <img src={formImage_4} className='h-[220px] w-[380px] border-2 rounded-xl border-black' alt="" />
                        <img src={formImage_5} className='h-[220px] w-[380px] border-2 rounded-xl border-black' alt="" />
                        <img src={formImage_6} className='h-[220px] w-[380px] border-2 rounded-xl border-black' alt="" />
                    </div>
                </div>

                <div className='md:w-1/2 bg-[#E2C0AD] md:pl-[71px]  w-full py-[24px] md:py-0 '>

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


                    <div className=' md:mr-[100px] mx-[40px] md:mx-0 font-semibold '>

                        <div className='md:flex items-center gap-[152px]'> <h2 className='mb-[2px]'>Name</h2>
                            <input type="text" placeholder="Your Name" className="input  border-none mb-[16px] md:w-[353px] w-[312px] h-[32px] md:h-[40px]" /></div>

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