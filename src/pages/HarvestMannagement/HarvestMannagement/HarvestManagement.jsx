import React from 'react';
import BuyerBanner from '../../BuyersConnect/BuyerBanner/BuyerBanner';
import HarvestCard from '../HarvestCard/HarvestCard';
import Benifit from '../Benifit/Benifit';

const HarvestManagement = () => {
    return (
        <div>
         <BuyerBanner  upText={'Harvest Management'} title={'Unlock New Opportunities for your business with Harvest Management'} paratext={'Maximize the potential of your warehouse or storage facility by partnering with us for Harvest Management. Join our platform and gain access to a vast network of farmers and their produce. Seamlessly manage inventory, streamline operations, and tap into new revenue streams. Together, lets revolutionize the agriculture industry and elevate your business to new heights.'} img={'https://i.ibb.co/b6RbKR6/Harvest-Banner.png'}/>

         <HarvestCard/>
         <Benifit/>
        </div>
    );
};

export default HarvestManagement;