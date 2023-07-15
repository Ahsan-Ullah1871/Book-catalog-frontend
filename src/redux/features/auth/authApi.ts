import { ApiSlice } from "@/redux/api/apiSlice";
import { userLoggedIn } from "./authSlice";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const authAPi = ApiSlice.injectEndpoints({
	endpoints: (builder) => ({
		// register
		register: builder.mutation({
			query: (data) => ({
				url: "/signup",
				method: "POST",
				body: data,
			}),
			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					const result = await queryFulfilled;
					cookies.set(
						"auth_details",
						JSON.stringify({
							isLoggedIn: true,
							user: result.data.user_details,
						}),
						{ maxAge: 6000 }
					);
					dispatch(
						userLoggedIn({
							isLoggedIn: true,
							user: result.data.user_details,
						})
					);
				} catch (error) {
					//do nothing
					console.log({ arg });
				}
			},
		}),

		// log in
		login: builder.mutation({
			query: ({ data }) => ({
				url: "/login",
				method: "POST",
				body: data,
			}),
			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					const result = await queryFulfilled;
					cookies.set(
						"auth_details",
						JSON.stringify({
							isLoggedIn: true,
							user: result.data.user_details,
						}),
						{ maxAge: 6000 }
					);
					dispatch(
						userLoggedIn({
							isLoggedIn: true,
							user: result.data.user_details,
						})
					);
				} catch (error) {
					//do nothing
					console.log({ arg });
				}
			},
		}),
	}),
});

export const { useRegisterMutation, useLoginMutation } = authAPi;
