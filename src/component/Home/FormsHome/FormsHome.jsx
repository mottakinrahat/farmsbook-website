import React from 'react';
import rectimage from '../../../assets/formsImg/formsImg.png';
const FormsHome = () => {
    return (
        <div className='h-[682px] w-full flex justify-between '>
            <div className='w-1/2 relative'>
                <img src={rectimage} alt="" className="h-[682px] w-full" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[496px] text-white ">
                    <h2 className='text-[32px] font-semibold mb-[40px]'>Join Farmsbook</h2>
                    <p>Join Farmsbook today and unlock the full potential of your farming operation. Our platform caters to both small-scale farmers and large agricultural enterprises, offering tools and connections for your success. Connect with a vast network of buyers, streamline harvest management, and make data-driven decisions through our demand forecasting services. Let's create a sustainable and prosperous future for the agricultural community together.</p>
                </div>
            </div>

            <div className='w-1/2 bg-[#E2C0AD]'>
                <fieldset className='flex justify-center gap-[113px] mt-[97px] text-black'>

                    <div>
                        <input id="trader" className="peer/trader mr-2" type="radio" name="status" checked />
                        <label for="trader" >I am Trader</label>
                    </div>

                    <div>
                        <input id="farmer" className="peer/farmer mr-2" type="radio" name="status" />
                        <label for="farmer" >I am Farmer</label>
                    </div>

                </fieldset>

                <div className='flex items-center  gap-[77px] mt-[80px]'>
                    <div className='mb-[20px] ml-[56px] w-1/2 text-[16px]'>
                        <h2 className='mb-[32px]'>Name</h2>
                        <h2 className='mb-[32px]'>Email-id </h2>
                        <h2 className='mb-[32px]'>Mobile Number</h2>
                        <h2 className='mb-[32px]'>Feedback</h2>
                    </div>
                    <div className=''>
                        <input type="text" placeholder="Your Name" className="input border-none mb-[16px] w-[353px] h-[40px]" />
                        <input type="text" placeholder="Your email-id" className="input border-none mb-[16px] w-[353px] h-[40px]" />
                        <input type="text" placeholder="your mobile number" className="input border-none mb-[16px] w-[353px] h-[40px]" />
                        <input type="text" placeholder="add your feedback" className="input border-none mb-[16px]  w-[353px] h-[100px]" />
                    </div>
                </div>
                <div className='text-center mt-[108px]'>
                    <button className='py-[16px] px-[32px] bg-[#00853C] text-white rounded-xl '>Submit</button>
                </div>
            </div>
        </div>
    );
};

export default FormsHome;