import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const AddProduct = () => {

  const [allbrand, setAllbrand] = useState([])


  useEffect(()=> {
    fetch('https://brandshop-server-side-csesopnil.vercel.app/brands')
    .then(res => res.json())
    .then(data => setAllbrand(data))
},[])

    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        // product variabl
        const productName = form.productName.value;
        const brandName = form.brandName.value;
        const types = form.types.value;
        const price = form.price.value;
        const purl = form.purl.value;
        const rating = form.rating.value;
        const shortDes = form.shortDes.value;
        const products = {productName, brandName, types, price, purl, rating, shortDes}
        console.log(products);

        fetch('https://brandshop-server-side-csesopnil.vercel.app/products', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(products)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

    }

    return (
        <div className="max-w-7xl mx-auto">
            <div className='text-left my-5 bg-slate-500 py-2 px-5 w-36 text-white rounded-md '>
                <Link className='bg-blend-color-burn' to="/">Back to Home</Link>
            </div>
            <div className=" mt-5 border outline-none shadow-2xl rounded-lg  ">
  <div className=" flex-col py-2 my-5 ">
    <div className="text-center my-4 ">
      <h1 className="text-5xl font-bold text-center my-4">Add New Product</h1>
    </div>
    <div className="card  w-full  bg-base-100">
      <form onSubmit={handleAddProduct} className="card-body">
        <div className='grid grid-cols-2 gap-4'>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input type="text" placeholder="Enter Product Name" name='productName' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Brand Name</span>
          </label>
          <select className="input input-bordered" name="brandName" id="">
            {
              allbrand.map (brand => 
                <>
                <option className="capitalize" value={brand.brandName}><p>{brand.brandName}</p></option>
                </>
            )
            }
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Type</span>
          </label>
          <input type="text" placeholder="Enter Type.." name='types' className="input input-bordered outline-none" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" placeholder="Enter the price..." name='price' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Photo URL</span>
          </label>
          <input type="text" placeholder="Enter Product Photo URL" name='purl' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <select className="input input-bordered" name="rating" id="">
            <option className="capitalize " value="5">5</option>
            <option className="capitalize" value="4">4</option>
            <option className="capitalize" value="3">3</option>
          </select>
        </div>
        <div className="rating rating-md"></div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Short Description</span>
          </label>
          <textarea className="textarea textarea-bordered" name='shortDes' placeholder="Enter Short Details..."></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-neutral capitalize text-lg">Add Product</button>
        </div>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default AddProduct;