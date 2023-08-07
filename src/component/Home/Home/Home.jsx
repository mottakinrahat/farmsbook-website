import React from 'react';
import Banner from '../Banner/Banner';
import BuyersContact from '../BuyersContact/BuyersContact';
import Partner from '../Partner/Partner';
import Testimonial from '../Testimonial/Testimonial';
import WhatsJoin from '../../WhatsJoin/WhatsJoin';
import FormsHome from '../FormsHome/FormsHome';

const Home = () => {
    return (
        <div>
          <Banner/>
          <BuyersContact/>
          <Partner/>
          <Testimonial/>
          <WhatsJoin title={'Join the community to get benefits of all the services '} memberJoin={'200 Members already joined  farmsbook community'}/>
          <FormsHome/>
        </div>
    );
};

export default Home;