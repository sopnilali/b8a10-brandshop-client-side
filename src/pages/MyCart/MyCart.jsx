import { Link, useLoaderData } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useState } from "react";


const MyCart = () => {

    const mycarts = useLoaderData()
    console.log(mycarts);

    const [Data, setData] = useState(mycarts);

    const handleCartDelete = (_id)=>{
        fetch(`https://mobilemaya-server-side.vercel.app/mycarts/${_id}`, {
            method: 'DELETE',
        })
        .then((res) => res.json())
        .then(data => {
            console.log(data);
            if( data.deletedCount > 0 ) {
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
  <thead>
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
      Data.length > 0 ?  Data.map( carts => <tr>
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
        </>
    );
};

export default MyCart;