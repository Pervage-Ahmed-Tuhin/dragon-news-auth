import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();
    console.log(location.pathname);
    
    if (loading) {
        return <div className="flex justify-center items-center">
            <span className="flex justify-center loading loading-dots loading-lg"></span>

        </div>
    }
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>;

};

export default PrivateRoute;