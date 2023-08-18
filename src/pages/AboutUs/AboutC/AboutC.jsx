import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutC = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className='mt-4'>
            <h2 className='text-[40px] font-bold text-center mt-[40px] mb-[40px]'>About Us</h2>
            <div className=''>
                <div className='md:flex justify-around md:pl-[312px] pl-5  pr-5 md:pr-[107px] mb-[80px]' data-aos="fade-right" >
                    <h2 className='text-[32px] font-semibold md:w-1/2 '>What is Farmsbook</h2>
                    <p className='md:w-1/2 text-[16px]'>Farmsbook™ is one of the fastest growing start-ups in Agri Tech sector and one of the very few companies providing end-to-end solutions and services to the farming community in India. We are building AI-enabled technologies to revolutionize supply chain and production efficiency in farm sector.<br /> <br /> Currently we are operating in Rajasthan with 1 Lakh farmers in our service network and our goal is to bring our services to 10 million farmers by 2024.Founded by the alumni from Rajasthan University,Farmsbook is now an early stage start-up with growth rate of 3-4x annually. The impact we have created at grass root level over last 2 years of our operations has been phenomenal, as recognized and felicitated by IIM kashipur, Rafatar Foudation</p>
                </div>
                <div className='md:flex justify-around md:pl-[312px] pl-5 pr-5 md:pr-[107px]'  data-aos="fade-left">
                    <h2 className='text-[32px] font-semibold md:w-1/2'>What we do</h2>
                    <p className='md:w-1/2 text-[16px]'>At Farmsbook, we assist businesses in sourcing agricultural produce from Indian markets with safety and reliability. "Our platform also empowers buyers with comprehensive market intelligence, enabling them to make better decisions.</p>
                </div>


                <div>

                </div>
            </div>
        </div>
    );
};

export default AboutC;