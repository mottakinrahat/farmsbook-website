import React, { useEffect, useState } from 'react';
import SingleHCard from '../SingleHCard/SingleHCard';

const HarvestCard = () => {
    const [harvestData, setHarvestData] = useState([])
    useEffect(() => {
        fetch('/hervest.json')
            .then(res => res.json())
            .then(data => setHarvestData(data))
    }, [])

    console.log(harvestData);
    return (
        <div>
           <div className='text-center md:mt-[100px] mt-[25px] mb-[64px]'>
           <h2 className='md:text-[32px] text-[20px] font-semibold'>How it will help you?</h2>
           <p>Streamlining Connections, Optimizing Harvest, and Anticipating Market Demands</p>
           </div>
            <div className='md:flex justify-around items-center '>
                {
harvestData.map((harvest,index)=><SingleHCard key={index} harvest={harvest}></SingleHCard>)
                }
            </div>
        </div>
    );
};

export default HarvestCard;