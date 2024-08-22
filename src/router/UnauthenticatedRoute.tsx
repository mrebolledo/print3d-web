import {Outlet, Navigate}  from "react-router-dom";
import {useAuth} from "@/contexts/AuthContext";
import Loading from "@/components/Loading";

const UnauthenticatedRoute = () => {
    const { isAuthenticated, loading } = useAuth();
    return (
        !loading ?
            !isAuthenticated ? <Outlet /> : <Navigate to="/" replace /> :
            <Loading />
    );
};

export default UnauthenticatedRoute;
