import React from 'react';
import fbLogo from '../../assets/icon/fa_facebook-official.png'
import twiteerLogo from '../../assets/icon/formkit_twitter.png'
import instaLogo from '../../assets/icon/uil_instagram-alt.png'
import youtubeLogo from '../../assets/icon/mdi_youtube.png'
import linkedLogo from '../../assets/icon/bi_linkedin.png'

import playstore from '../../assets/playstore.png'

const Footer = () => {
    const listStyle = {
        listStyle: 'none',
    };
    return (
        <div className='bg-white'>
            <div className='w-full  flex justify-around mt-[80px] '>
                <div>
                    <h2 className='text-[24px] mb-[16px] font-semibold'>COMPANY</h2>
                    <li style={listStyle} className='mb-[8px]'>Buyers Connect</li>
                    <li style={listStyle} className='mb-[8px]'>Harvest Management</li>
                    <li style={listStyle} className='mb-[8px]'>Demand Forcast</li>
                    <li style={listStyle} className=''>About Us</li>
                </div>

                <div>
                    <h2 className='text-[24px] mb-[16px] font-semibold'>CONTACT US</h2>
                    <li style={listStyle} className='mb-[8px]'>BTH, jhalana Doongri, Jaipur, Rajasthan 302004</li>
                    <li style={listStyle} className='mb-[8px]'>Email: info@farmsbook.com</li>
                    <li style={listStyle} className=''>Phone: + (91) 9571141862,  8802556290</li>
                </div>

                <div>
                    <h2 className='text-[24px] mb-[16px] font-semibold'>Download App Now</h2>
                    <img src={playstore} alt="" />
                </div>
            </div>
            <div className='flex justify-center items-center mt-[64px] gap-[45px] h-[32px]'>
                <img src={fbLogo} className='h-[32px] w-[32]' alt="" />
                <img src={twiteerLogo} className='h-[32px] w-[32]' alt="" />
                <img src={instaLogo} className='h-[32px] w-[32]' alt="" />
                <img src={youtubeLogo} className='h-[32px] w-[32]' alt="" />
                <img src={linkedLogo} className='h-[32px] w-[32]' alt="" />
            </div>

            <div className='mt-[78px] mb-[40px] text-center'>
            © Copyright 2021 FarmsBook.com
            </div>

        </div>
    );
};

export default Footer;