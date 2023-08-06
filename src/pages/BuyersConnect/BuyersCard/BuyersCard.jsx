import React, { useEffect, useState } from 'react';
import SingleBuyers from '../BuyerBanner/SingleBuyers/SingleBuyers';

const BuyersCard = () => {
const [arrayData,setArrayData]=useState([]);

 useEffect(()=>{
    fetch('/product.json')
    .then(res=>res.json())
    .then(data=>setArrayData(data))
 },[])
 console.log(arrayData);
    return (
        <div className='md:mx-[94px] px-4 mb-[80px]'>
            <h2 className='text-[24px] mt-[71px] mb-[40px]  font-semibold'>Explore all Buyers </h2>
           <div className='md:grid grid-cols-3 gap-6 mb-4'>
            {
          arrayData.map(sData=><SingleBuyers key={sData.id} sData={sData}></SingleBuyers>)
            }
           </div>
        </div>
    );
};

export default BuyersCard;