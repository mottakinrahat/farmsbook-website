import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BoltIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import logo from '../assets/image 1.png';
import whatsapp from '../assets/whats app.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <div className=' w-full md:text-white sticky md:-mb-20 z-10 '>
            <div className=' px-4 py-5 md:text-white mx-auto sm:max-w-xl h-[80px] md:max-w-full md:px-24 lg:px-8 bg-[#7C7C7C] md:bg-opacity-50'>
                <div className='relative flex md:justify-between md:px-[94px] items-center gap-4'>

                    <div className='flex justify-between  items-center md:gap-[44px]'><Link to='/' className='inline-flex items-center'>

                        <img className='md:w-[33.33333px] md:h-[33.33333px] mt-2' src={logo} alt="" /><span className='ml-2  text-[20px] font-bold md:tracking-wide text-white'>
                            FarmsBook
                        </span>
                    </Link>


                        <ul className=' hidden md:space-x-8 text-[16px] lg:flex'>
                            <li>
                                <NavLink
                                    to='/aboutUs'
                                    className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/buyersConnect'
                                    className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
                                >
                                    Buyers Connect
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/harvestManagement'
                                    className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
                                >
                                    Harvest Management
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to='/demandForecast'
                                    className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
                                >
                                    Demand Forecast
                                </NavLink>
                            </li>
                        </ul></div>
                    <div className='md:flex justify-end gap-2 hidden'>

                        <Link to='https://play.google.com/store/apps/details?id=com.farmerspp.com&hl=en_IN&gl=US&pli=1'><button className='md:px-[16px] md:py-[8px] border-2 border-white rounded-full hover:bg-white hover:text-black delay-50 '>Download App</button></Link>
                        <Link to='https://docs.google.com/forms/d/e/1FAIpQLSfPIP8JddDoDkeMFgXOWYv2eZq3yp68zM06i0JmScN32oqQ8w/viewform'><button className='md:px-[16px] md:py-[8px] border-2 border-white text-black bg-white rounded-full flex gap-1  hover:bg-slate-500 hover:text-white delay-50  hover:border-slate-500'><img className='h-[24px] w-[23.92px]' src={whatsapp} alt="" />Join Us</button></Link>

                    </div>
                    {/* Mobile Navbar Section */}
                    <div className='lg:hidden'>
                        {/* Dropdown Open Button */}
                        <button
                            aria-label='Open Menu'
                            title='Open Menu'
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <Bars3BottomRightIcon className='w-8  ml-[180px] text-white' />
                        </button>
                        {isMenuOpen && (
                            <div className='absolute top-0 left-0 w-full z-10'>
                                <div className='p-5 bg-white border rounded shadow-sm'>
                                    {/* Logo & Button section */}
                                    <div className='flex items-center justify-between mb-4'>
                                        <div>
                                            <Link to='/' className='inline-flex items-center'>

                                                <span className='ml-2 text-xl font-bold  text-gray-800 uppercase'>
                                                    FarmsBook
                                                </span>
                                            </Link>
                                        </div>
                                        {/* Dropdown menu close button */}
                                        <div>
                                            <button
                                                aria-label='Close Menu'
                                                title='Close Menu'
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <XMarkIcon className='w-5 text-gray-600' />
                                            </button>
                                        </div>
                                    </div>
                                    {/* Mobile Nav Items Section */}
                                    <nav>
                                        <ul className='space-y-4'>
                                            <li>
                                                <NavLink
                                                    to='/aboutUs'
                                                    className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
                                                >
                                                    About Us
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/buyersConnect'
                                                    className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
                                                >
                                                    Buyers Connect
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/harvestManagement'
                                                    className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
                                                >
                                                    Harvest Management
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink
                                                    to='/demandForecast'
                                                    className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
                                                >
                                                    Demand Forecast
                                                </NavLink>
                                            </li>
                                        </ul>
                                        <div className='flex justify-center gap-2 mt-2 '>

                                            <Link to='https://play.google.com/store/apps/details?id=com.farmerspp.com&hl=en_IN&gl=US&pli=1'><button className='md:px-[16px] md:py-[8px] px-4 border-2 border-black rounded-full hover:bg-white hover:text-black delay-50'>Download App</button></Link>
                                            <Link to='https://docs.google.com/forms/d/e/1FAIpQLSfPIP8JddDoDkeMFgXOWYv2eZq3yp68zM06i0JmScN32oqQ8w/viewform'><button className='md:px-[16px] md:py-[8px] px-4 border-2 border-black text-white bg-black rounded-full flex gap-1'><img className='h-[24px] w-[23.92px]  hover:bg-slate-500 hover:text-white delay-50  hover:border-slate-500' src={whatsapp} alt="" />Join Us</button></Link>

                                        </div>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;