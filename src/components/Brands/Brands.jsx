import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import {Helmet} from "react-helmet";

const Brands = () => {

    const allbrand = useLoaderData()
    console.log(allbrand);

    useEffect(() => {
        AOS.init();
      }, [])


    return (
        <>
            <Helmet>
            <title> Mobile Brands in Bangladesh</title>
            </Helmet>
<div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 '>
            <div className='my-5'>
                <div className='relative'>

                <h2 className='text-3xl font-semibold mt-4 text-center'>All Brand List</h2>
                <Link className=' float float-right absolute top-0 right-0 bg-slate-500 py-2 px-5 w-36 text-white rounded-md' to="/add-brands">Add Brand</Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-4 items-center">
                {
                    allbrand.map( brands =>
                       <div data-aos="flip-up"  className='border m-2 px-2 py-2'>
                       <Link to={`/products/${brands.brandName}`}><img className='hover:scale-90 transition-all' src={brands.purl} alt="" /></Link>
                       <Link to={`/products/${brands.brandName}`}><h2 className=' hover:underline text-lg text-center capitalize'>{brands.brandName}</h2></Link>
                       </div>
                        )
                }
                </div>

            </div>
        </div>
        </div>
            
        </>
    );
};

export default Brands;