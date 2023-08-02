import React from 'react';

const SingleBuyers = ({sData}) => {
    console.log(sData);
   const{background_image , company_name , location , owner_name , products_deals_in , profile_picture}=sData;
    return (
        <div>
            <div className='card h-[500px] w-[396px] border-2 rounded border-[#BDB7B7] bg-white'>
                <div className='card-content'>
                    <img src={background_image}  alt="" />
                    <img src={profile_picture} className='ml-[16px] mb-[21px] -mt-10' alt="" />
                    <div className='ml-[16px]'>
                        <h2 className='text-[20px] font-semibold'>{company_name}</h2>
                        <p className='text-[16px] mb-[12px] text-[#685F5F]'>{owner_name}</p>
                        <p className='text-[16px] mb-[12px] text-[#685F5F]'>{location}</p>
                        <p className='text-[16px] mb-[32px] text-[#685F5F]'>Products Deals In: {products_deals_in}</p>

                        <button className='px-[20px] py-[11px] bg-[#E3E4E8] rounded'>Contact Now</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBuyers;