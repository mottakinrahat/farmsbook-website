import React from 'react';
import fbLogo from '../../assets/icon/fa_facebook-official.png'
import twiteerLogo from '../../assets/icon/formkit_twitter.png'
import instaLogo from '../../assets/icon/uil_instagram-alt.png'
import youtubeLogo from '../../assets/icon/mdi_youtube.png'
import linkedLogo from '../../assets/icon/bi_linkedin.png'

import playstore from '../../assets/playstore.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    const listStyle = {
        listStyle: 'none',
    };
    return (
        <div className='bg-white px-[16px]'>
            <div className='w-full  flex justify-around mt-[80px] '>
               <div  className='md:flex justify-between gap-[306px]'>
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

               </div>
                <div>
                    <h2 className='text-[24px] mb-[16px] font-semibold'>Download App Now</h2>
                    <Link to='https://play.google.com/store/apps/details?id=com.farmsbooks.farmsbook'><img src={playstore} alt="" /></Link>
                </div>
            </div>
            <div className='flex justify-center items-center mt-[64px] gap-[45px] h-[32px]'>
                <Link to='https://www.facebook.com/farmsbookHub'><img src={fbLogo} className='h-[32px] w-[32]' alt="" /></Link>
                <Link to='https://twitter.com/farmsbook_com'><img src={twiteerLogo} className='h-[32px] w-[32]' alt="" /></Link>
                <Link to='https://www.instagram.com/farmsbook/'><img src={instaLogo} className='h-[32px] w-[32]' alt="" /></Link>
                <Link to='https://www.youtube.com/watch?v=lOKXqHYce_s&ab_channel=NextFounder'><img src={youtubeLogo} className='h-[32px] w-[32]' alt="" /></Link>
                <Link to='https://www.linkedin.com/company/farmsbook/?originalSubdomain=in'><img src={linkedLogo} className='h-[32px] w-[32]' alt="" /></Link>
            </div>

            <div className='mt-[78px] mb-[40px] text-center'>
            © Copyright 2021 FarmsBook.com
            </div>

        </div>
    );
};

export default Footer;