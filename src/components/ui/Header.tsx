// import { ICONS } from "@/shared/AllIcons";
import logo from "@/assets/images/BookCatalog.png";

export default function Header() {
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
				<li
					className=" text-base font-normal text-[#3B3B3B]
				 font-inter  px-8"
				>
					Log IN
				</li>
			</ul>
		</div>
	);
}

