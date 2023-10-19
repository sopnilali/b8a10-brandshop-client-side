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
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 my-4 mx-2 '>
                    {
                        allproducts.map( product => <>
                        <div key={product._id}
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"

                        className='border shadow-md rounded-md mt-4  '>
                           <div className='hover:underline'>
                           <Link to={`/product-details/${product?._id}`}> <img className='hover:scale-90  transition-all mt-4' src={product?.purl} alt={product?.productName} title={product?.productName} /></Link>
                           <Link to={`/product-details/${product?._id}`}><h2 className='text-center text-lg font-semibold'>{product?.productName}</h2></Link>
                           </div>
                           <h2 className='text-center mt-3 text-secondary'>BDT {product?.price}</h2>
                            <div className='flex flex-col md:flex-row gap-4 mb-5 mt-2 items-center justify-center'>
                            <Link to={`/product-details/${product?._id}`}> <button className='btn rounded-md md:px-3 btn-sm md:btn-sm btn-primary text-white '>Details</button></Link>
                            <Link to={`/update-product/${product?._id}`}><button className='btn rounded-md md:px-3 btn-sm md:btn-sm '>Update</button></Link>
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