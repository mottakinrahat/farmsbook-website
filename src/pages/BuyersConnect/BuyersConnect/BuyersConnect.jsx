import React from 'react';
import Banner from '../../../component/Home/Banner/Banner';
import BuyerBanner from '../BuyerBanner/BuyerBanner';
import BuyersCard from '../BuyersCard/BuyersCard';
import WhatsJoin from '../../../component/WhatsJoin/WhatsJoin';
import FormsBuyer from '../FormsBuyer/FormsBuyer';

const BuyersConnect = () => {
    return (
        <div className='bg-[#F6F7F9;]'>
            <BuyerBanner upText={'Buyers connect'} title={'Direct Trade, Direct Impact'} paratext={'Connect with a vast network of farmers and buyers on our platform. Discover fresh and high-quality produce directly from the source. Build strong partnerships and elevate your business to new heights.'} smText={'Connect with a vast network of farmers and buyers on our platform. Discover fresh and high-quality produce directly from the source.'} img={'https://i.ibb.co/VBDdv3K/Rectangle-46.png'}/>

            <BuyersCard/>
            <WhatsJoin title={'Join our Community'} head={'To view All Buyers '} memberJoin={'200 Members already joined  farmsbook community'} alt={false}/>
            <FormsBuyer/>
        </div>
    );
};

export default BuyersConnect;