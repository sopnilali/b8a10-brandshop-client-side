import { Link, NavLink, Navigate, useNavigate, useParams } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Products/Header.css'
import { useEffect, useState } from 'react';


const Header = () => {



  const { user, logoutUser } = useAuth()
  console.log(user);
  
  const navigate = useNavigate()
  const navlinks = <>
              <li className="mr-2 mb-2 md:mb-1"><NavLink to="/">Home</NavLink></li>
              <li className="mr-2 mb-2 md:mb-1"><NavLink to="/add-products">Add Product</NavLink></li>
              <li className="mr-2 mb-2 md:mb-1"><NavLink to={`/products/`}>My Products</NavLink></li>
              <li className="mr-2 mb-2 md:mb-1"><NavLink to="/brands">Brands</NavLink></li>
              <li className="mr-2 mb-2 md:mb-1"><NavLink to={`/mycarts/${user?.uid}`}>MyCart</NavLink></li>
  </>

  const handleLogout = ()=> {
    logoutUser()
    .then( () => {
      setTimeout(() => {
        toast.success("Logout Successful");
      }, 200);
      navigate('/login') 
    })
    .catch(error => console.error(error))
  }

    return (
        <>
         <div className=" navbar bg-base-100">
  <div className="  navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlinks}
      </ul>
    </div>
    <Link to="/"><img className='w-24 md:w-36' src="https://imgdb.net/storage/uploads/80e64afbdc909824edcc4145ebed6ecb0733ae4887ae3b51a04656f0fcf80d1d.png" alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
  <span className='mx-5 '>{user?.displayName }</span> 
  {
    user? <>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user?.photoURL} />
        </div>
      </label>
    </div>
    </>
    :<></>
  }
  {
      user ? <>
      <a onClick={handleLogout} className="btn btn-sm capitalize hover:bg-orange-600 hover:text-white">Log Out</a>
      </>
      : <>
      <NavLink to="/login" className="btn btn-sm ">Login</NavLink>
      
      </>
      
    }

  </div>
</div>   
        </>
    );
};

export default Header;