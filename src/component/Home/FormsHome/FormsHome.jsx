import React from 'react';
import rectimage from '../../../assets/formsImg/formsImg.png';
const FormsHome = () => {
    return (
        <div className='md:h-[682px] w-full md:flex justify-between '>
            <div className='md:w-1/2 relative hidden md:block'>
                <img src={rectimage} alt="" className="md:h-[682px] w-full" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[496px] text-white ">
                    <h2 className='md:text-[32px] font-semibold mb-[40px]'>Join Farmsbook</h2>
                    <p>Join Farmsbook today and unlock the full potential of your farming operation. Our platform caters to both small-scale farmers and large agricultural enterprises, offering tools and connections for your success. Connect with a vast network of buyers, streamline harvest management, and make data-driven decisions through our demand forecasting services. Let's create a sustainable and prosperous future for the agricultural community together.</p>
                </div>
            </div>

            <div className='md:w-1/2 bg-[#E2C0AD]'>

                <div className='flex items-center  gap-[77px] mt-[80px]'>
                    
                <div className='md:w-1/2 bg-[#E2C0AD] md:pl-[71px] w-[360px] py-[24px] md:py-0 pl-[24px]'>

<h2 className='text-[32px] font-semibold text-center mt-[64px] mb-[50px]'>Join Us</h2>
                <fieldset className='flex justify-center md:gap-[113px] gap-5 mt-[20px] text-black'>

                    <div>
                        <input id="trader" className="peer/trader mr-2" type="radio" name="status" checked />
                        <label for="trader" >I am Trader</label>
                    </div>

                    <div>
                        <input id="farmer" className="peer/farmer mr-2" type="radio" name="status" />
                        <label for="farmer" >I am Farmer</label>
                    </div>

                </fieldset>
          
               
               <div className=' md:mr-[100px] mr-4 font-semibold'>

                  <div className='md:flex items-center gap-[152px]'> <h2 className='mb-[2px]'>Name</h2>
                   <input type="text" placeholder="Your Name" className="input border-none mb-[16px] md:w-[353px] w-[312px] h-[32px] md:h-[40px]" /></div>

                   <div className='md:flex items-center gap-[134px]'><h2 className='mb-[2px]'>Email-id </h2>
                   <input type="text" placeholder="Your email-id" className="input border-none mb-[16px] md:w-[353px] w-[312px] h-[32px] md:h-[40px]" /></div>

                  <div className='md:flex items-center gap-[82px]'> <h2 className='mb-[2px]'>Mobile Number</h2>
                   <input type="text" placeholder="your mobile number" className="input border-none mb-[16px] md:w-[353px] w-[312px] h-[32px] md:h-[40px]" /></div>
                   
                  <div className='md:flex items-center gap-[76px]'> <h2 className='mb-[2px]'>Feedback</h2>
                   <input type="text" placeholder="add Feedback" className="input border-none mb-[16px]  md:w-[353px] w-[312px] h-[32px] md:h-[40px]" /></div>
               </div>
           <div className='text-center md:mt-[108px] mt-[32px]'>
               <button className='py-[16px] px-[32px] bg-[#00853C] text-white rounded-xl '>Submit</button>
           </div>
           </div>
                </div>
               
            </div>
        </div>
    );
};

export default FormsHome;