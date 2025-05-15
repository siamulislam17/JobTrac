import { use } from "react";
import { Navigate, useLocation } from "react-router"
import { AuthContext } from "./AuthProvider";


const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const {user} = use(AuthContext);

    if (user && user.email) {
        return children;
    }
    else {
        return <Navigate state={location.pathname} to="/login" replace></Navigate>;
    }
}

export default PrivateRoute;