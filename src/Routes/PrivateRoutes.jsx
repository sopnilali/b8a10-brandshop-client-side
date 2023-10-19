import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = ({children}) => {

    const {user, loading}= useAuth()

    const location = useLocation()

    if(loading){
        return <span className="loading loading-spinner "></span>
    }

    else if (user) {
        return children
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivateRoutes;