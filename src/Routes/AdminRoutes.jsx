import { useContext } from "react";
import { useAdmin } from "../hooks/useAdmin";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoutes = ({children}) => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const {user, loading } = useContext(AuthContext);
    const location = useLocation();

    if(loading || isAdminLoading){
        return <p className="text-center mt-20">Loding....</p>
    }

    if(user && isAdmin){
        return children;
    }

    return <Navigate to={'/login'} state={{from: location}} replace></Navigate>

};

export default AdminRoutes;