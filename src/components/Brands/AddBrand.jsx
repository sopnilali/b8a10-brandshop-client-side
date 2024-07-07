import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AddBrand = () => {

    const handleAddBrand = (event) => {
        event.preventDefault();
        const form = event.target;
        // product variable
        const brandName = form.bname.value.toLowerCase();
        const purl = form.purl.value;
        const brands = {brandName, purl};
        console.log(brands);
        fetch('https://b8a10-brandshop-server-side-two.vercel.app/brands', {
          mode: 'cors',
          credentials: 'include',
          method: 'POST',
          headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(brands)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }

    return (
        <div className="max-w-7xl mx-auto">
        <div className='text-left my-5 bg-slate-500 py-2 px-5 w-36 text-white rounded-md '>
            <Link className='bg-blend-color-burn' to="/brands">Back to Brand</Link>
        </div>
        <div className=" mt-5 border outline-none shadow-2xl rounded-lg  ">
<div className=" flex-col py-2 my-5  ">
<div className="text-center my-4 ">
  <h1 className="text-5xl font-bold text-center my-4">Add New Brand</h1>
</div>
<div className="card w-full  bg-base-100">
  <form onSubmit={handleAddBrand} className="card-body">
    <div className="form-control">
      <label className="label">
        <span className="label-text">Brand Name</span>
      </label>
      <input type="text" placeholder="Enter brand name..." name='bname' className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Photo URL</span>
      </label>
      <input type="text" placeholder="Enter Photo URL" name='purl' className="input input-bordered" required />
    </div>
    <div className="form-control mt-6">
      <button className="btn bg-[#D2B48C] capitalize text-lg">Add Brand</button>
    </div>
  </form>
</div>
</div>
</div>
    </div>
    );
};

export default AddBrand;