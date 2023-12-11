import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Products = () => {


    const allproducts = useLoaderData()
    // const [page, setPage] = useState(0);

    // const {data:{result, postCount}} = useQuery({
    //     queryKey: ['products', page],
    //     queryFn: () => fetch(`https://brandshop-server-side-csesopnil.vercel.app/products?page=${page}`).then((res) => res.json()),
    //     initialData:{result:[], postCount:0}
    // })
    // const totalPages = Math.ceil(postCount / 10)
    // const pages = [...new Array(totalPages).fill(0)]
    
    return (
        <div>
            <h2 className='text-2xl text-center '>You can see all Products</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 mt-0 lg:grid-cols-4 gap-2 my-4 mx-2 '>
                  
                    {
                        allproducts.map( product => <>
                        <div 
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"
                        
                        
                        className='border shadow-md rounded-md mt-4  '>
                           <div className='hover:underline'>
                           <Link to={`/product-details/${product?._id}`}> <img className='scale-90  transition-all mt-4' src={product?.purl} alt={product?.productName} title={product?.productName} /></Link>
                           <Link to={`/product-details/${product?._id}`}><h2 className='text-center text-lg font-semibold'>{product?.productName}</h2></Link>
                           </div>
                           <h2 className='text-center mt-3 text-secondary'>BDT {product?.price}</h2>
                            <div className='flex flex-col md:flex-row gap-4 mb-5 mt-2 items-center justify-center'>
                            <Link to={`/product-details/${product?._id}`}> <button className='border hover:shadow capitalize rounded-md md:px-3 btn-sm md:btn-sm bg-violet-600 hover:bg-violet-800 text-white'>Details</button></Link>
                            <Link to={`/update-product/${product?._id}`}><button className='border hover:shadow capitalize rounded-md md:px-3 btn-sm md:btn-sm '>Update</button></Link>
                            </div>
                        </div>

                        </>)
                    }
                    
                    </div>
                    {/* <div className=" my-6">
                        {pages.map(( item, index)=> 
                        <button onClick={()=> setPage(index)} 
                        className={` rounded-md btn-sm md:btn-sm ml-2 ${page == index ? " bg-violet-800 text-white" : " text-white bg-violet-600  "}  `}>
                            {index + 1}</button>
                        
                        )}
                    </div> */}
        </div>
    );
};

export default Products;