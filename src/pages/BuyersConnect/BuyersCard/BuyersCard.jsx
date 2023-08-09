import React, { useEffect, useState } from 'react';
import SingleBuyers from '../BuyerBanner/SingleBuyers/SingleBuyers';
import './CardCss/BuyersCss.css';

const BuyersCard = () => {
const [arrayData,setArrayData]=useState([]);

 useEffect(()=>{
    fetch('/product.json')
    .then(res=>res.json())
    .then(data=>setArrayData(data))
 },[])
 console.log(arrayData);
    return (
        <div className='md:mx-[94px] py-2 px-4 mb-[80px]'>
            <h2 className='text-[24px] md:mt-[90px] mb-[40px]  font-semibold'>Explore all Buyers </h2>
           <div className='md:grid md:grid-cols-3 tablet:grid-cols-2  gap-6 mb-4 '>
            {
          arrayData.map(sData=><SingleBuyers key={sData.id} sData={sData}></SingleBuyers>)
            }
           </div>
        </div>
    );
};

export default BuyersCard;