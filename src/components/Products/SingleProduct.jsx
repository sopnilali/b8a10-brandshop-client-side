import { Link, useLoaderData, useParams } from 'react-router-dom';
import ProductSlider from './ProductSlider';
import { useEffect } from 'react';
import AOS from 'aos'; 
import 'aos/dist/aos.css';

const SingleProduct = () => {

    const bnane = useParams()
    // console.log(bnane);
    const singleproduct = useLoaderData()

    

    useEffect(() => {
        AOS.init();
      }, [])


    return (
        <div>
            <div>
                <h2 className='text-3xl capitalize text-center my-3'>{bnane.name} Phones</h2>
                <hr />
                <ProductSlider></ProductSlider>
                <h2></h2>
                <h2 className='text-3xl capitalize text-center my-3'>Latest All <span>{bnane.name}</span> Phones</h2>
            </div>
                    <div  className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 my-4 '>
                    {
                      singleproduct.length > 0 ?  singleproduct.map( product =>
                            <div data-aos="flip-up" className='border mt-4 mr-2 ml-0 '>
                                <div className='hover:underline'>
                                <Link to={`/product-details/${product?._id}`}><img src={product?.purl} alt="" /></Link>
                                <Link to={`/product-details/${product?._id}`}><h2 className='text-center'>{product?.productName}</h2></Link>
                                </div>
                                <h2 className='text-center'>BDT {product?.price}</h2>
                                <div className='flex gap-4 my-2 justify-center'>
                               <Link to={`/product-details/${product?._id}`}> <button className='btn btn-xs '>Details</button></Link>
                                <Link to={`/update-product/${product?._id}`}><button className='btn btn-xs '>Update </button></Link>
                                </div>
                            </div>)
                            : <>Not Available Product</>
                    }
                    </div>
                </div>
    );
};

export default SingleProduct;