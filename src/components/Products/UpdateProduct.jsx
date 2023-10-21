

import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateProduct = () => {

  const Productdata = useLoaderData()
  console.log(Productdata);

  const [allbrand, setAllbrand] = useState([])

  useEffect(()=> {
    fetch('https://mobilemaya-server-side.vercel.app/brands')
    .then(res => res.json())
    .then(data => setAllbrand(data))
},[])

    const handleUpdateProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        // product variable
        const productName = form.productName.value;
        const brandName = form.brandName.value;
        const types = form.types.value;
        const price = form.price.value;
        const purl = form.purl.value;
        const rating = form.rating.value;
        const shortDes = form.shortDes.value;
        const products = {productName, brandName, types, price, purl, rating, shortDes}
        // console.log(products);
        
        fetch(`https://mobilemaya-server-side.vercel.app/product/${Productdata._id}`, {
          method: 'PUT',
          headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(products)
          })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.modifiedCount == 1) {

            toast.success('Product updated successfully')
          }
          else if(data.modifiedCount == 0){
            toast.warning('Product already updated!!')
          }
        }
        )

    }

    return (
        <div className="max-w-7xl mx-auto">
            <div className='text-left my-5 bg-slate-500 py-2 px-5 w-36 text-white rounded-md '>
                <Link className='bg-blend-color-burn' to="/">Back to Home</Link>
            </div>
            <div className=" mt-5 border outline-none shadow-2xl rounded-lg  ">
  <div className=" flex-col py-2 my-5 ">
    <div className="text-center my-4 ">
      <h1 className="text-5xl font-bold text-center my-4">Update Your Product</h1>
    </div>
    <div className="card  w-full  bg-base-100">
      <form onSubmit={handleUpdateProduct} className="card-body">
        <div className='grid grid-cols-2 gap-4'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input type="text" placeholder="Enter Product Name" defaultValue={Productdata?.productName} name='productName' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand Name</span>
          </label>
          <select className="input input-bordered" name="brandName" id="">
          <option className="capitalize" value={Productdata.brandName}><p>{Productdata.brandName}</p></option>
          {
            allbrand.map(brand => 
          <option className="capitalize" value={brand.brandName}><p>{brand.brandName}</p></option>

              )
          }
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Type</span>
          </label>
          <input type="text" placeholder="Enter Type.." name='types' defaultValue={Productdata?.types} className="input input-bordered outline-none" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" placeholder="Enter the price..." defaultValue={Productdata?.price} name='price' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Photo URL</span>
          </label>
          <input type="text" placeholder="Enter Product Photo URL" defaultValue={Productdata?.purl} name='purl' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <select className="input input-bordered" name="rating" id="">
            <option className="capitalize" value="low">Low</option>
            <option className="capitalize" value="average">Average</option>
            <option className="capitalize" value="best">Best</option>
          </select>
        </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <textarea className="textarea textarea-bordered" defaultValue={Productdata?.shortDes} name='shortDes' placeholder="Enter Short Details..."></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#D2B48C] capitalize text-lg">Update Product</button>
        </div>
      </form>
    </div>
  </div>
</div>
<ToastContainer />
        </div>
    );
};

export default UpdateProduct;