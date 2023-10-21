import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PrivateRoutes = ({children}) => {

    const {user, loading}= useAuth()

    const location = useLocation()

    if(loading){
        return <span className="loading loading-spinner "></span>
    }

    else if (user) {
        return children;
    }
    
    return ( 
        toast.warning('Please login first!!'),
        <ToastContainer></ToastContainer>,
    <Navigate state={location.pathname} to="/login"></Navigate>
    
    );
};

export default PrivateRoutes;