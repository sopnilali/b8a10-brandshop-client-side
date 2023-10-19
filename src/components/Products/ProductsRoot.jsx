import { Outlet } from "react-router-dom";
import LeftBar from "../../shared/Leftbar";
import Footer from "../Footer";
import Header from "../Header";
import Brands from "../Brands/Brands";

const ProductsRoot = () => {
    return (
        <>
        <div className='max-w-7xl mx-auto'>
            <Header/>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-5'>
            {/* <div>
                <LeftBar/>
            </div> */}
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