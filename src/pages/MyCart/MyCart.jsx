import { Link, useLoaderData, useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MyCart = () => {
const cartdata = useLoaderData()

    const [Data, setData] = useState(cartdata);

    const handleCartDelete = (_id)=>{
        fetch(`https://mobilemaya-server-side.vercel.app/mycarts/${_id}`, {
            method: 'DELETE',
        })
        .then((res) => res.json())
        .then(data => {

            if( data.deletedCount > 0 ) {
              toast.success('Cart deleted successfully')
              const remaining = Data.filter(product => product._id !== _id)
              setData(remaining);  
            }
        })
    }

    return (
        <>
        <div className="max-w-7xl mx-auto">
        <Header></Header>
        <table className=" table">
  <thead className=" bg-neutral-800 font-medium text-white dark:border-neutral-500 dark:bg-neutral-900">
    <tr>
      <th>Product Image</th>
      <th>Product Name</th>
      <th>Brand Name</th>
      <th>Price</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {
      Data.length > 0 ?  Data.map( carts => 
      <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
            <td><Link to={`/product-details/${carts.productID}`}><img className="w-[50px]" src={carts.productImage} alt="" /></Link></td>
            <td className="capitalize"><Link className="hover:text-emerald-600" to={`/product-details/${carts.productID}`}>{carts.productName}</Link></td>
            <td className="capitalize "><Link className="hover:text-emerald-600" to={`/products/${carts.brandname}`}>{carts.brandname}</Link></td>
            <td>BDT {carts.price}</td>
            <td><button onClick={()=> handleCartDelete(carts._id)} className="btn outline-none hover:bg-red-600 hover:text-white">X</button></td>
          </tr> 

    )
    : <><h2 className="text-2xl">Not Available</h2></>
    }
  </tbody>
</table>
        <Footer></Footer>
        </div>
        <ToastContainer/>
        </>
    );
};

export default MyCart;