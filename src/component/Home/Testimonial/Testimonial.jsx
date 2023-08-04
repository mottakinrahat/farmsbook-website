import React from 'react';

const Testimonial = () => {
    return (
        <div className='w-full h-[560px]'>
            <div>
                <h2 className='text-[32px] font-semibold mt-[80px] text-center '>Testimonials </h2>
                <p className='text-center mb-[64px]'>Don't take our word for it , here's what others have to say.</p>
                <div className='text-center flex justify-evenly'>
                    <div className='w-[388px] italic text-[18px] '>
                        <h2 className=' font-semibold mb-[56px]'>" Now we have the option to buy the produce directly from the farmers.Currently, we are working on 5 crops for export."</h2>
                       
                    </div>
                    <div className='w-[388px] italic text-[18px]'>
                        <h2 className=' font-semibold mb-[56px]'>" Before farmsbook, we are facing the issue of production quality control and traceability. The farmsbook is addressing these issues. Now we are buying produce directly from farmers with the help of farmsbook "</h2>
                    </div>
                    <div className='w-[388px] italic text-[18px]'>
                        <h2 className=' font-semibold mb-[56px]'>"After using the Farmsbook platform, we are directly selling our produce to companies, and the income of farmers has increased by 10%."</h2>
                        
                    </div>
                </div>

                <div className='text-center flex justify-around  italic text-[18px]'>
                    <div  >
                        <h2 className='mb-[16px] '>Satish</h2>
                        <h2>Exporter, Trading Company</h2>
                    </div>
                    <div>
                        <h2 className='mb-[16px] '>Sneha</h2>
                        <h2>Owner, Food Processing Unit</h2>
                    </div>
                    <div>
                        <h2 className='mb-[16px] '>Rasdeen</h2>
                        <h2>Farmer, Farmer producer group</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;