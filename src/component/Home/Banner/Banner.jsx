import React from 'react';
import './BannerCss/banner.css'
import { Link } from 'react-router-dom';
import bannerImg2 from '../../../assets/banner/banner_img_2.png'
import bannerImg3 from '../../../assets/banner/banner_img_3.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './BannerCss/banner.css'
const Banner = () => {
    const bannerImgUrl = 'https://i.ibb.co/ZS568Bt/2nd.png';
    return (
        <div>
            {/* <div className="hero h-[259px] w-full md:h-[600px]" style={{
                backgroundImage: `url(${bannerImgUrl})`,
                
                height:'full'
            }}>
                
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-full">
                        <h1 className="md:mb-[40px] md:text-[40px] mb-5 text-[20px] font-semibold">Connecting the world of Farmers and Buyers</h1>
                        <p className="md:mb-[48px] md:w-[502px] md:text-[24px] mx-auto " id="hidden-text">Bridge the gap between farmers and buyers.
                            Streamline harvest management.
                            Unlock demand forecasting's full potential.</p>
                        <div className='flex  md:gap-[80px] gap-10  md:ml-[240px] ml-[50px]'>
                            <Link to='https://play.google.com/store/apps/details?id=com.farmerspp.com&hl=en_IN&gl=US&pli=1'><button className='md:px-[16px] md:py-[16px] border-4 font-semibold py-[4px] px-[8px] border-white rounded-full'>Download App</button></Link>
                           <Link to='https://docs.google.com/forms/d/e/1FAIpQLSfPIP8JddDoDkeMFgXOWYv2eZq3yp68zM06i0JmScN32oqQ8w/viewform'> <button className='md:px-[49px] md:py-[16px] border-4 py-[4px] px-[20px] font-bold border-white text-black bg-white rounded-full flex gap-1'>Join Us</button></Link>
                        </div>
                      
                            <p className='mt-6 text-yellow-200 text-xl font-semibold'>200 Members already joined  farmsbook community</p>
                       
                    </div>
                </div>
            </div> */}

            {/* <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative md:h-[700px] w-full">
                    <img src="https://i.ibb.co/ZS568Bt/2nd.png" className="w-full" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-full ">
                        <div className="hero-content text-center text-neutral-content mx-auto">
                            <div className="">
                                <h1 className="md:mb-[40px] md:text-[40px] mb-5 text-[20px] font-semibold">Connecting the world of Farmers and Buyers</h1>
                                <p className="md:mb-[48px] md:w-[502px] md:text-[24px] mx-auto " id="hidden-text">Bridge the gap between farmers and buyers.
                                    Streamline harvest management.
                                    Unlock demand forecasting's full potential.</p>
                                <div className='flex  md:gap-[80px] gap-3 md:ml-[240px] ml-[50px]'>
                                    <Link to='https://play.google.com/store/apps/details?id=com.farmerspp.com&hl=en_IN&gl=US&pli=1'><button className='md:px-[16px] md:py-[16px] border-4 font-semibold py-[4px] px-[8px] border-white rounded-full'>Download App</button></Link>
                                    <Link to='https://docs.google.com/forms/d/e/1FAIpQLSfPIP8JddDoDkeMFgXOWYv2eZq3yp68zM06i0JmScN32oqQ8w/viewform'> <button className='md:px-[49px] md:py-[16px] border-4 py-[4px] px-[20px] font-bold border-white text-black bg-white rounded-full flex gap-1'>Join Us</button></Link>
                                </div>

                                <p className='mt-6 text-yellow-200 md:text-xl mx-6 font-semibold'>200 Members already joined  farmsbook community</p>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 md:left-5 left-2 md:right-5 right-2 bottom-0 md:bottom-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative md:h-[700px] w-full">
                    <div className="image-overlay"></div>
                    <img src={bannerImg2} className="w-full " />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-full ">
                        <div className="hero-content text-center text-neutral-content mx-auto">
                            <div className="text-white">
                                <h1 className="md:mb-[40px] md:text-[40px] mb-5 text-[20px] font-semibold">Connecting the world of Farmers and Buyers</h1>
                                <p className="md:mb-[48px] md:w-[502px] md:text-[24px] mx-auto " id="hidden-text">Bridge the gap between farmers and buyers.
                                    Streamline harvest management.
                                    Unlock demand forecasting's full potential.</p>
                                <div className='flex  md:gap-[80px] gap-10  md:ml-[240px] ml-[50px]'>
                                    <Link to='https://play.google.com/store/apps/details?id=com.farmerspp.com&hl=en_IN&gl=US&pli=1'><button className='md:px-[16px] md:py-[16px] border-4 font-semibold py-[4px] px-[8px] border-white rounded-full'>Download App</button></Link>
                                    <Link to='https://docs.google.com/forms/d/e/1FAIpQLSfPIP8JddDoDkeMFgXOWYv2eZq3yp68zM06i0JmScN32oqQ8w/viewform'> <button className='md:px-[49px] md:py-[16px] border-4 py-[4px] px-[20px] font-bold border-white text-black bg-white rounded-full flex gap-1'>Join Us</button></Link>
                                </div>

                                <p className='mt-6 text-yellow-200 md:text-xl mx-6 font-semibold'>200 Members already joined  farmsbook community</p>

                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between  transform -translate-y-1/2 md:left-5 left-2 md:right-5 right-2 bottom-0 md:bottom-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>

                </div>
                <div id="slide3" className="carousel-item relative md:h-[700px] w-full">
                    <div className="image-overlay"></div>
                    <img src={bannerImg3} className="w-full " />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-full ">
                        <div className="hero-content text-center text-neutral-content mx-auto">
                            <div className="">
                                <h1 className="md:mb-[40px] md:text-[40px] mb-5 text-[20px] font-semibold">Connecting the world of Farmers and Buyers</h1>
                                <p className="md:mb-[48px] md:w-[502px] md:text-[24px] mx-auto " id="hidden-text">Bridge the gap between farmers and buyers.
                                    Streamline harvest management.
                                    Unlock demand forecasting's full potential.</p>
                                <div className='flex  md:gap-[80px] gap-10  md:ml-[240px] ml-[50px]'>
                                    <Link to='https://play.google.com/store/apps/details?id=com.farmerspp.com&hl=en_IN&gl=US&pli=1'><button className='md:px-[16px] md:py-[16px] border-4 font-semibold py-[4px] px-[8px] border-white rounded-full'>Download App</button></Link>
                                    <Link to='https://docs.google.com/forms/d/e/1FAIpQLSfPIP8JddDoDkeMFgXOWYv2eZq3yp68zM06i0JmScN32oqQ8w/viewform'> <button className='md:px-[49px] md:py-[16px] border-4 py-[4px] px-[20px] font-bold border-white text-black bg-white rounded-full flex gap-1'>Join Us</button></Link>
                                </div>

                                <p className='mt-6 text-yellow-200 md:text-xl mx-6 font-semibold'>200 Members already joined  farmsbook community</p>

                            </div>
                        </div>
                    </div>

                    <div className="absolute flex justify-between  transform -translate-y-1/2 md:left-5 left-2 md:right-5 right-2 md:top-1/2 bottom-0 md:bottom-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div> */}

            <>
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide >
                        <div id="slide1" className="carousel-item relative md:h-[700px] h-[450px] md:w-full">
                            <img src="https://i.ibb.co/ZS568Bt/2nd.png" className="w-[900px] md:w-full" />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-full ">
                                <div className="hero-content text-center text-neutral-content mx-auto">
                                    <div className="">
                                        <h1 className="md:mb-[40px] md:text-[40px] mb-5 text-[20px] font-semibold">Connecting the world of Farmers and Buyers</h1>
                                        <p className="md:mb-[48px] md:w-[502px] md:text-[24px] mx-auto " id="hidden-text">Bridge the gap between farmers and buyers.
                                            Streamline harvest management.
                                            Unlock demand forecasting's full potential.</p>
                                        <div className='flex  md:gap-[80px] gap-3 md:ml-[240px] ml-[50px]'>
                                            <Link to='https://play.google.com/store/apps/details?id=com.farmerspp.com&hl=en_IN&gl=US&pli=1'><button className='md:px-[16px] md:py-[16px] border-4 font-semibold py-[4px] px-[8px] border-white rounded-full'>Download App</button></Link>
                                            <Link to='https://docs.google.com/forms/d/e/1FAIpQLSfPIP8JddDoDkeMFgXOWYv2eZq3yp68zM06i0JmScN32oqQ8w/viewform'> <button className='md:px-[49px] md:py-[16px] border-4 py-[4px] px-[20px] font-bold border-white text-black bg-white rounded-full flex gap-1'>Join Us</button></Link>
                                        </div>

                                        <p className='mt-6 text-yellow-200 md:text-xl mx-6 font-semibold'>200 Members already joined  farmsbook community</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div id="slide2" className="carousel-item relative md:h-[700px] h-[450px] w-full">
                            <div className="image-overlay"></div>
                            <img src={bannerImg2}  className="w-[900px] md:w-full" />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-full ">
                                <div className="hero-content text-center text-neutral-content mx-auto">
                                    <div className="text-white">
                                        <h1 className="md:mb-[40px] md:text-[40px] mb-5 text-[20px] font-semibold">Connecting the world of Farmers and Buyers</h1>
                                        <p className="md:mb-[48px] md:w-[502px] md:text-[24px] mx-auto " id="hidden-text">Bridge the gap between farmers and buyers.
                                            Streamline harvest management.
                                            Unlock demand forecasting's full potential.</p>
                                        <div className='flex  md:gap-[80px] gap-3  md:ml-[240px] ml-[50px]'>
                                            <Link to='https://play.google.com/store/apps/details?id=com.farmerspp.com&hl=en_IN&gl=US&pli=1'><button className='md:px-[16px] md:py-[16px] border-4 font-semibold py-[4px] px-[8px] border-white rounded-full'>Download App</button></Link>
                                            <Link to='https://docs.google.com/forms/d/e/1FAIpQLSfPIP8JddDoDkeMFgXOWYv2eZq3yp68zM06i0JmScN32oqQ8w/viewform'> <button className='md:px-[49px] md:py-[16px] border-4 py-[4px] px-[20px] font-bold border-white text-black bg-white rounded-full flex gap-1'>Join Us</button></Link>
                                        </div>

                                        <p className='mt-6 text-yellow-200 md:text-xl mx-6 font-semibold'>200 Members already joined  farmsbook community</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div id="slide3" className="carousel-item relative md:h-[700px] h-[450px] w-full">
                            <div className="image-overlay"></div>
                            <img src={bannerImg3}  className="w-[900px] md:w-full" />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white w-full ">
                                <div className="hero-content text-center text-neutral-content mx-auto">
                                    <div className="">
                                        <h1 className="md:mb-[40px] md:text-[40px] mb-5 text-[20px] font-semibold">Connecting the world of Farmers and Buyers</h1>
                                        <p className="md:mb-[48px] md:w-[502px] md:text-[24px] mx-auto " id="hidden-text">Bridge the gap between farmers and buyers.
                                            Streamline harvest management.
                                            Unlock demand forecasting's full potential.</p>
                                        <div className='flex  md:gap-[80px] gap-3  md:ml-[240px] ml-[50px]'>
                                            <Link to='https://play.google.com/store/apps/details?id=com.farmerspp.com&hl=en_IN&gl=US&pli=1'><button className='md:px-[16px] md:py-[16px] border-4 font-semibold py-[4px] px-[8px] border-white rounded-full'>Download App</button></Link>
                                            <Link to='https://docs.google.com/forms/d/e/1FAIpQLSfPIP8JddDoDkeMFgXOWYv2eZq3yp68zM06i0JmScN32oqQ8w/viewform'> <button className='md:px-[49px] md:py-[16px] border-4 py-[4px] px-[20px] font-bold border-white text-black bg-white rounded-full flex gap-1'>Join Us</button></Link>
                                        </div>

                                        <p className='mt-6 text-yellow-200 md:text-xl mx-6 font-semibold'>200 Members already joined  farmsbook community</p>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </>




        </div>
    );
};

export default Banner;