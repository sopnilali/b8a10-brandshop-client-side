import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useState } from 'react';
const Root = () => {

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div className='max-w-7xl mx-auto '>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;