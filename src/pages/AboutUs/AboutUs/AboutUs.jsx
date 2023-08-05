import React from 'react';
import AboutBanner from '../AboutBanner/AboutBanner';
import AboutC from '../AboutC/AboutC';
import Network from '../Network/Network';
import WhatsJoin from '../../../component/WhatsJoin/WhatsJoin';
import AboutForm from '../AboutForm/AboutForm';

const AboutUs = () => {
    return (
        <div>
            <AboutBanner/>
            <AboutC/>
            <Network/>
            <WhatsJoin head={'To view All products'} title={'Join our Community'}/>
            <AboutForm/>
        </div>
    );
};

export default AboutUs;