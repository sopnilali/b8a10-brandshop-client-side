import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const HomeBrand = () => {



    const [Brands, setBrands] = useState([])

    useEffect(()=> {
        fetch('http://localhost:5000/brands/')
        .then(res => res.json())
        .then(data => setBrands(data))
    } ,[])

    return (
        <>
        <div className='max-w-7xl mx-auto'>
                <div className='grid  '>
                    <div className='my-5'>
                        <div >
                        <h2 className='text-3xl font-semibold mt-4 text-center'>All Brand List</h2>
                        </div>
                        <div  className="grid h-auto grid-cols-2 md:grid-cols-3 my-4 items-center">
                        {
                            Brands.map( brands =>
                               <div 
                               data-aos="flip-up"
                               
                               className='border shadow-md rounded-md m-2 px-2 py-2'>
                               <Link to={`/products/${brands.brandName}`}><img className='hover:scale-90 transition-all' src={brands.purl} alt="" /></Link>
                               <Link to={`/products/${brands.brandName}`}><h2 className=' font-semibold hover:text-secondary hover:underline text-lg text-center capitalize'>{brands.brandName}</h2></Link>
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

export default HomeBrand;