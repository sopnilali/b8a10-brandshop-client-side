import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalProducts, setTotalProducts] = useState(0);
    const productsPerPage = 10;

    // Fetch products from backend server with pagination
  const fetchProducts = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get('https://b8a10-brandshop-server-side-two.vercel.app/products', {
        params: {
          page,
          limit: productsPerPage,
        },
      });

      setProducts(response.data.products);
      setTotalPages(response.data.totalPages);
      setTotalProducts(response.data.totalProducts);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  // Handler to go to next page
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  // Handler to go to previous page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

    return (
        <div>
            <h2 className='text-2xl text-center '>You can see all Products</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 mt-0 lg:grid-cols-4 gap-2 my-4 mx-2 '>
                  
                    {
                        loading ? (
                            <div
                            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                            role="status">
                            <span
                            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                            >Loading...</span>
                        </div>
                        )
                        : products.map( product => <>
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
                    <div className=" my-6">
                    <nav aria-label="Page navigation example">
        <ul className="list-style-none mb-6 flex">
            <li>
                <button onClick={handlePrevPage} disabled={currentPage === 1}
                    className=" relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-500 transition-all duration-300 dark:text-neutral-400">Previous</button>
            </li>
            <li>
                <span
                    className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100  dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                    href="#!">{currentPage} of {totalPages} </span>
            </li>
            <li>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}
                    className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                    href="#!">Next</button>
            </li>
        </ul>
    </nav>
                    </div>
        </div>
    );
};

export default Products;