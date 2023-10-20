import { Link, useLoaderData, useParams } from 'react-router-dom';
import ProductSlider from './ProductSlider';
import { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';
import {Helmet} from "react-helmet";

const SingleProduct = () => {

    const bnane = useParams()
    // console.log(bnane);
    const singleproduct = useLoaderData()

    

    useEffect(() => {
        AOS.init();
      }, [])


    return (
        <div>
            <Helmet>
            <title>{bnane.name} Mobile Phones in Bangladesh</title>
            </Helmet>
            <div>
                <h2 className='text-3xl capitalize text-center my-3'>{bnane.name} Phones</h2>
                <hr />
                <ProductSlider></ProductSlider>
                <h2></h2>
                <h2 className='text-3xl capitalize text-center my-3'>Latest All <span>{bnane.name}</span> Phones</h2>
            </div>
                    <div  className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-4 mx-2 '>
                    {
                      singleproduct.length > 0 ?  singleproduct.map( product =>
                            <div data-aos="flip-up" className='border hover:shadow-none shadow-md rounded-md mt-4 ml-0 '>
                                <div className='hover:underline'>
                                <Link to={`/product-details/${product?._id}`}><img className='scale-90 mt-4 transition-all' src={product?.purl} alt={product?.productName} title={product?.productName} /></Link>
                                <Link to={`/product-details/${product?._id}`}><h2 className='text-center text-lg font-semibold'>{product?.productName}</h2></Link>
                                </div>
                                <h2 className='text-center mt-3 text-secondary'>BDT {product?.price}</h2>
                                <div className='flex flex-col md:flex-row items-center gap-4 mb-5 mt-2 justify-center'>
                               <Link to={`/product-details/${product?._id}`}> <button className='border hover:shadow capitalize rounded-md md:px-3 btn-sm md:btn-sm bg-violet-600 hover:bg-violet-800 text-white'>Details</button></Link>
                                <Link to={`/update-product/${product?._id}`}><button className=' border hover:shadow capitalize rounded-md md:px-3 btn-sm md:btn-sm '>Update </button></Link>
                                </div>
                            </div>)
                            : <>Not Available Product</>
                    }
                    </div>
                </div>
    );
};

export default SingleProduct;