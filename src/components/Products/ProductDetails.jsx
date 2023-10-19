import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductDetails = () => {

    const productDetails = useLoaderData()
    console.log(productDetails);

    const addToCart = (e)=>{
        e.preventDefault();
        const productName = productDetails.productName;
        const brandname = productDetails.brandName
        const productID = productDetails._id
        const price = productDetails.price
        const productImage = productDetails.purl
        const mycart = {productName,brandname,price,productImage, productID }
        console.log(mycart);

        fetch('https://mobilemaya-server-side.vercel.app/mycarts', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(mycart)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged == true ){
              toast.success('Your item has been added to your cart')
            }
        })
    }

    return (
        <div>
            <div>
                <form className='space-y-5' onSubmit={addToCart}>
                <div className='block w-2/5 '>
                <img src={productDetails.purl} alt="" />
                <input className='btn btn-sm btn-secondary my-2' type="submit" value="Add to Cart" />
                </div>
                <h2 className='text-3xl'>{productDetails.productName} Price in Bangladesh</h2>
                <p>{productDetails.shortDes}</p>
                <h2 className='text-2xl'>{productDetails.productName} Short Specifications</h2>
                <div className="overflow-x-auto ">
  <table className="table border mb-5">
    <thead >
      <tr>
        <th className='border-r-2 outline-none'>Name</th>
        <td className='font-mono capitalize'>{productDetails.productName}</td>
      </tr>
      <tr>
        <th className='border-r-2 outline-none'>Brand</th>
        <td className='font-mono capitalize'><Link className='hover:text-red-600 ' to={`/products/${productDetails.brandName}`}>{productDetails.brandName}</Link></td>
      </tr>
      <tr>
        <th className='border-r-2 outline-none'>Type</th>
        <td className='font-mono capitalize'>{productDetails.types}</td>
      </tr>
      <tr>
        <th className='border-r-2 outline-none'>Rating</th>
        <td className='font-mono capitalize'>{productDetails.rating}</td>
      </tr>
      <tr>
        <th className='border-r-2 outline-none '>Price</th>
        <td className='font-mono capitalize'>BDT {productDetails.price}</td>
      </tr>
    </thead>
  </table>
</div>
</form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ProductDetails;