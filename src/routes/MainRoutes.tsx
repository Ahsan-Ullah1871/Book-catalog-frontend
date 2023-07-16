import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";
import AuthRoute from "./AuthRoute";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";
import Books from "@/pages/Books";
import AddBook from "@/components/AddBook/AddBook";
import PrivateRoute from "./PrivateRoute";

export const AllRoutes = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/",
				element: (
					<AuthRoute>
						<Home />
					</AuthRoute>
				),
			},
			{
				path: "/books",
				element: <Books />,
			},
			{
				path: "/add-book",
				element: (
					<PrivateRoute>
						<AddBook />
					</PrivateRoute>
				),
			},
		],

		errorElement: (
			<div className="mt-20">
				{/* <ErrorUI message=" Sorry , There have not any page with this url " /> */}
			</div>
		),
	},
	{
		path: "auth",
		element: <AuthLayout />,
		children: [
			{
				path: "signin",
				element: (
					<AuthRoute>
						<SignIn />
					</AuthRoute>
				),
			},
			{
				path: "signup",
				element: (
					<AuthRoute>
						<SignUp />
					</AuthRoute>
				),
			},
		],
	},
]);
