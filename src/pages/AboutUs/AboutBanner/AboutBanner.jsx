import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const AboutBanner = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div data-aos="fade-down">
            <div className="hero md:h-[600px] h-[182px] w-full md:w-full" style={{ backgroundImage: 'url(https://i.ibb.co/Bjk9DVJ/Desktop-8.png)' }}>
               
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutBanner;