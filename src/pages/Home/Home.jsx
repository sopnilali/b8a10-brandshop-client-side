import { Link, useLoaderData } from 'react-router-dom';
import HomeBrand from './HomeBrand';
import Banner from '../../components/Banner/Banner';
import MobileReview from '../../components/MobileReview/MobileReview';

const Home = () => {
const {products} = useLoaderData()
    // const [page, setPage] = useState(0);

    // const {data:{result, postCount}} = useQuery({
    //     queryKey: ['products', page],
    //     queryFn: () => fetch(`https://brandshop-server-side-csesopnil.vercel.app/products?page=${page}`).then((res) => res.json()),
    //     initialData:{result:[], postCount:0}
    // })
    // const totalPages = Math.ceil(postCount / 10)
    // const pages = [...new Array(totalPages).fill(0)]
    return (
        <div >
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
                    <div className='grid grid-cols-2 md:grid-cols-3 mx-2 lg:grid-cols-5 gap-2 my-4 '>
                    {
                        products.map( product => <>
                        <div key={product._id}
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="1000"

                        className='border hover:shadow-none shadow-md rounded-md mt-4  '>
                           <div className='hover:underline'>
                           <Link to={`/product-details/${product?._id}`}> <img className='scale-90 transition-all mt-4' src={product?.purl} alt={product?.productName} title={product?.productName} /></Link>
                           <Link to={`/product-details/${product?._id}`}><h2 className='text-center scale-90 text-lg font-semibold'>{product?.productName}</h2></Link>
                           </div>
                           <h2 className='text-center mt-3 text-secondary'>BDT {product?.price}</h2>
                            <div className='flex flex-col md:flex-row gap-4 mb-5 mt-2 items-center justify-center'>
                            <Link to={`/product-details/${product?._id}`}> <button className='border hover:shadow capitalize rounded-md md:px-3 btn-sm md:btn-sm bg-violet-600 hover:bg-violet-800 text-white'>Details</button></Link>
                            <Link to={`/update-product/${product?._id}`}><button className='border hover:shadow capitalize rounded-md md:px-3 btn-sm md:btn-sm'>Update</button></Link>
                            </div>
                        </div>
                        </>)
                    }
                   
                    </div>

                    <MobileReview/>
                </div>

            </div>
        </div>
    );
};

export default Home;