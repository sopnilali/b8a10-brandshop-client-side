import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const LeftBar = () => {

    const [allbrand, setAllbrand] = useState([])

    useEffect(()=> {
        fetch('https://brandshop-server-side-csesopnil.vercel.app/brands')
        .then(res => res.json())
        .then(data => setAllbrand(data))
    },[])
    return (
        <div>
            <h2 className='text-lg my-4'>Phone Brands</h2>
            <div className='flex flex-col border-l-2 my-4'>
            {
                allbrand.map(brand => <>
                <NavLink to={`/products/${brand.brandName}`} className='px-1 border-b-2 border-l-2 border-rose-500 py-2 bg-slate-200  '>{brand.brandName}</NavLink>
                </>)
            }
            </div>
            <Link to="/brands">
            <button className='w-full border py-2 bg-slate-200 mb-4'>All brands</button>
            </Link>
        </div>
    );
};

export default LeftBar;