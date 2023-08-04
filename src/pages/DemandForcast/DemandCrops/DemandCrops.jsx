import React, { useEffect, useState } from 'react';
import SingleDemand from '../SingleDemand/SingleDemand';


const DemandCrops = () => {
    
   const [arrayDemand,setArrayDemand]=useState([])

   useEffect(()=>{
    fetch('/forecast.json')
    .then(res=>res.json())
    .then(data=>setArrayDemand(data))
   },[])
   console.log(arrayDemand);
    return (
        <div className='px-[94px] '>
            <h2 className='text-[32px] mt-[80px] mb-[24px] font-semibold'>High Demand Crops</h2>
            <div className='md:grid grid-cols-3 gap-[32px] mb-[80px]'>
                {
                    arrayDemand.map((demand, index) => <SingleDemand key={index} demand={demand}></SingleDemand>)
                }
            </div>
           
        </div>
    );
};

export default DemandCrops;