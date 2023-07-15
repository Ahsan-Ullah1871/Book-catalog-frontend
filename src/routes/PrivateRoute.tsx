import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = () => {
	const isLoggedIn = useAuth();
	return isLoggedIn ? <Navigate to="/" /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
