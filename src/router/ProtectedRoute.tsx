import {Outlet, Navigate}  from "react-router-dom";
import {useAuth} from "@/contexts/AuthContext";
import Loading from "@/components/Loading";



const ProtectedRoute = () => {
    const { isAuthenticated, loading } = useAuth();
    return (
            !loading ?
            isAuthenticated ? <Outlet /> : <Navigate to="/login" replace /> :
            <Loading />
    );
};

export default ProtectedRoute;
