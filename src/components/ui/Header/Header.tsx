// import { ICONS } from "@/shared/AllIcons";
import logo from "@/assets/images/BookCatalog.png";
import { useAppSelector } from "@/hooks/reduxHook";
import { Link } from "react-router-dom";
import Profile from "./Profile";

export default function Header() {
	// auth selector
	const { isLoggedIn } = useAppSelector((state) => state.auth);

	return (
		<div className=" max-w-[1170px] mx-auto  bg-transparent flex items-center justify-between py-4 border-b border-[#000000] ">
			{/* logo */}
			<div>
				<img
					src={logo}
					alt=""
				/>
			</div>

			{/* Menus */}
			<ul className="flex items-center justify-end divide-x divide-[#3B3B3B] ">
				<li
					className=" text-base font-normal text-[#3B3B3B]
				 font-inter px-8 "
				>
					Books
				</li>
				<li
					className=" text-base font-normal text-[#3B3B3B]
				 font-inter  px-8"
				>
					Search
				</li>
				<li
					className=" text-base font-normal text-[#3B3B3B]
				 font-inter  px-8"
				>
					About US
				</li>
				{isLoggedIn ? (
					<li>
						<Profile />
					</li>
				) : (
					<Link to={"/auth/signin"}>
						<li
							className=" text-base font-normal text-[#3B3B3B]
				 font-inter  px-8"
						>
							Log IN
						</li>
					</Link>
				)}
			</ul>
		</div>
	);
}
