import Home from "@/pages/Home";
import { createBrowserRouter } from "react-router-dom";
import PublicRoute from "./PublicRoute";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";

export const AllRoutes = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		children: [
			// {
			// 	index: true,
			// 	element: (
			// 		<PrivateRoute>
			// 			<CoursePlayer />
			// 		</PrivateRoute>
			// 	),
			// },
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
		errorElement: (
			<div className="mt-20">
				{/* <ErrorUI message=" Sorry , There have not any page with this url " /> */}
			</div>
		),
	},
]);
