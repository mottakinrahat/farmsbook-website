import React from 'react';
import Banner from '../../../component/Home/Banner/Banner';
import BuyerBanner from '../BuyerBanner/BuyerBanner';
import BuyersCard from '../BuyersCard/BuyersCard';
import WhatsJoin from '../../../component/WhatsJoin/WhatsJoin';
import FormsBuyer from '../FormsBuyer/FormsBuyer';

const BuyersConnect = () => {
    return (
        <div className='bg-[#F6F7F9;]'>
            <BuyersCard/>
            <WhatsJoin title={'Join our Community'} head={'To view All Buyers '} memberJoin={'200 Members already joined  farmsbook community'} alt={false}/>
         
        </div>
    );
};

export default BuyersConnect;