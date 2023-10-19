import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ProductsRoot = () => {

    useEffect(() => {
        AOS.init();
      }, [])


    return (
        <>
        <div className='max-w-7xl mx-auto'>
            <Header/>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
            <div className="col-span-4">
            <Outlet></Outlet>
            </div>
        </div>
        <Footer/>
        </div>
        </>
    );
};

export default ProductsRoot;