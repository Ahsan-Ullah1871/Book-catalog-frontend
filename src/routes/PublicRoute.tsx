import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
	const isLoggedIn = useAuth();
	return isLoggedIn ? <Navigate to="/" /> : children;
};

export default PublicRoute;
