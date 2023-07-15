import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import MainLayout from "@/layouts/MainLayout";
import AuthLayout from "@/layouts/AuthLayout";

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
					<PublicRoute>
						<Home />
					</PublicRoute>
				),
			},
			// {
			// 	index: true,
			// 	element: (
			// 		<PrivateRoute>
			// 			<CoursePlayer />
			// 		</PrivateRoute>
			// 	),
			// },
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
					<PublicRoute>
						<SignIn />
					</PublicRoute>
				),
			},
			{
				path: "signup",
				element: (
					<PublicRoute>
						<SignUp />
					</PublicRoute>
				),
			},
		],
	},
]);
