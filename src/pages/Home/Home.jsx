import { Link, useLoaderData } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import HomeBrand from './HomeBrand';
import Banner from '../../components/Banner/Banner';

const Home = () => {

    const {user}= useAuth()
    console.log(user);
    const allproducts = useLoaderData()

    return (
        <div>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {/* <div className=' flex-1'>
                    <LeftBar></LeftBar>
                </div> */}
                <div className='md:col-span-3'>
                    <div>
                        <Banner></Banner>
                        <HomeBrand></HomeBrand>
                        <h2 className='text-4xl font-semibold'>Latest Products</h2>
                    </div>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-4 '>
                    {
                        allproducts.map( product => <>
                        <div 
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"
                        
                        
                        className='border mt-4 mr-2 '>
                           <div className='hover:underline'>
                           <Link to={`/product-details/${product?._id}`}> <img src={product?.purl} alt="" /></Link>
                           <Link to={`/product-details/${product?._id}`}><h2 className='text-center'>{product?.productName}</h2></Link>
                           </div>
                           <h2 className='text-center'>BDT {product?.price}</h2>
                            <div className='flex gap-4 my-2 justify-center'>
                            <Link to={`/product-details/${product?._id}`}> <button className='btn btn-xs '>Details</button></Link>
                            <Link to={`/update-product/${product?._id}`}><button className='btn btn-xs '>Update</button></Link>
                            </div>
                        </div>
                        </>)
                    }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Home;