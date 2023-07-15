import { RouterProvider } from "react-router-dom";
import useAuthCheck from "./hooks/useAuthCheck";
import { AllRoutes } from "./routes/MainRoutes";

const App = () => {
	const authChecked = useAuthCheck();
	return !authChecked ? (
		<div className="flex flex-col justify-center items-center gap-10 py-20">
			<p className="text-3xl font-bold text-white ">
				Auth checking...
			</p>
		</div>
	) : (
		<RouterProvider router={AllRoutes} />
	);
};

export default App;

