import { useEffect, useState } from "react";
import { useAppDispatch } from "./redxHook";
import { useCookies } from "react-cookie";
import { userLoggedIn } from "@/redux/features/auth/authSlice";

export default function useAuthCheck() {
	const dispatch = useAppDispatch();
	const [authChecked, setAuthChecked] = useState(false);
	const [cookies] = useCookies(["auth_details"]);

	useEffect(() => {
		if (cookies.auth_details?.isLoggedIn) {
			const userData = JSON.parse(cookies.auth_details);
			if (userData.isLoggedIn && userData.user) {
				dispatch(
					userLoggedIn({
						isLoggedIn: userData.isLoggedIn,
						user: userData.user,
					})
				);
			}
		}
		setAuthChecked(true);
	}, []);
	return authChecked;
}
