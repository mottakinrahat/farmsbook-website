import React from 'react';
import AboutBanner from '../AboutBanner/AboutBanner';
import AboutC from '../AboutC/AboutC';
import Network from '../Network/Network';
import WhatsJoin from '../../../component/WhatsJoin/WhatsJoin';
import AboutForm from '../AboutForm/AboutForm';
import Team from '../Team/Team';

const AboutUs = () => {
    return (
        <div>
            <AboutBanner/>
            <AboutC/>
            <Network/>
            <Team/>
            <WhatsJoin head={'To view All products'} title={'Join our Community'} memberJoin={'200 Members already joined  farmsbook community'}/>
           
        </div>
    );
};

export default AboutUs;