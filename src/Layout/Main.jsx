import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../component/Header/Header';
import Navbar from './Navbar';
import Footer from '../component/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header/>
            <Navbar/>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Main;