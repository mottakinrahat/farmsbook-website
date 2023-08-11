import React from 'react';

const SingleTeam = ({team}) => {
    const{image,name,position}=team;
    return (
        <div>
             <div className=' md:h-[321px] h-[210px] md:w-[243px] w-[148px]  border-2 border-[#D9D9D9] bg-[#F8F8F8]'>
                <img src={image} className='md:h-[250px] h-[140px] w-full' alt="" />
                <div className='md:mt-[16px] md:ml-[16px] mt-[8px] ml-[12px]'>
                    <h2 className='md:text-[16px] text-[14px] font-semibold'>{name}</h2>
                    <h2 className='md:text-[14px] text-[12px]'>{position}</h2>
                </div>
            </div>
        </div>
    );
};

export default SingleTeam;