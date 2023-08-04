import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BoltIcon,Bars3BottomRightIcon,XMarkIcon } from '@heroicons/react/24/solid'
import logo from '../assets/image 1.png';
import whatsapp from '../assets/whats app.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return ( 
        <div className=' w-full text-white sticky -mb-20 z-10 '>
            <div className=' px-4 py-5 text-white mx-auto sm:max-w-xl h-[80px] md:max-w-full md:px-24 lg:px-8 bg-black bg-opacity-50'>
                <div className='relative flex justify-between px-[94px] items-center gap-4'>

                    <div className='flex justify-between items-center gap-[44px]'><Link to='/' className='inline-flex items-center'>

<img className='w-[33.33333px] h-[33.33333px] mt-2' src={logo} alt="" /><span className='ml-2 text-[20px] font-bold tracking-wide text-white'>
     FarmsBook
 </span>
</Link>


<ul className=' hidden space-x-8 text-[16px] lg:flex'>
 <li>
     <NavLink
         to='/'
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
         to='/blog'
         className={({ isActive }) => (isActive ? 'text-blue-500' : 'default')}
     >
        Buyers Connect
     </NavLink>
 </li>
</ul></div>
                    <div className='flex justify-end gap-2 '>
  
                        <button className='px-[16px] py-[8px] border-2 border-white rounded-full'>Download App</button>
                        <button className='px-[16px] py-[8px] border-2 border-white text-black bg-white rounded-full flex gap-1'><img className='h-[24px] w-[23.92px]' src={whatsapp} alt="" />Join Us</button>
        
                    </div>
                    {/* Mobile Navbar Section */}
                    <div className='lg:hidden'>
                        {/* Dropdown Open Button */}
                        <button
                            aria-label='Open Menu'
                            title='Open Menu'
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <Bars3BottomRightIcon className='w-5 text-gray-600' />
                        </button>
                        {isMenuOpen && (
                            <div className='absolute top-0 left-0 w-full z-10'>
                                <div className='p-5 bg-white border rounded shadow-sm'>
                                    {/* Logo & Button section */}
                                    <div className='flex items-center justify-between mb-4'>
                                        <div>
                                            <Link to='/' className='inline-flex items-center'>

                                                <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                                                    HuntYourJob
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
                                                <Link to='/' className='default'>
                                                    home
                                                </Link>
                                            </li>

                                            <li>
                                                <Link
                                                    to='/blog'
                                                    className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                                >
                                                    Blog
                                                </Link>
                                            </li>
                                        </ul>
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