import React from 'react';
import BuyerBanner from '../BuyersConnect/BuyerBanner/BuyerBanner';
import DemandCrops from './DemandCrops/DemandCrops';
import WhatsJoin from '../../component/WhatsJoin/WhatsJoin';
import DemandForm from './DemandForm/DemandForm';

const DemandForcast = () => {
    return (
        <div className='bg-[#F6F7F9]'>
            <BuyerBanner upText={'Demand Forecasting'} title={'Data-driven Demand Forecasting for Enhanced Revenue'} paratext={'Harness the power of data to optimize your crop planning. Our Demand Forecast feature provides accurate and up-to-date crop demand insights, helping you identify emerging trends and seize market opportunities.' } smText={'Our Demand Forecast feature provides accurate and up-to-date crop demand insights, helping you identify emerging trends and seize market opportunities.'} img={'https://i.ibb.co/SN5JxKg/demand-Banner.png'}/>
            <DemandCrops/>
            <WhatsJoin title={'Join our Community'} head={'To view All products'}/>
            <DemandForm/>
        </div>
    );
};

export default DemandForcast;