import logo from "@/assets/images/BookCatalog.png";
import Button from "./Button";

const Footer = () => {
	return (
		<div className="bg-[#F1F4E6] w-full  min-h-[370px] py-[35px]  md:py-[70px]">
			<div className="max-w-[1170px] mx-auto bg-transparent px-4 flex flex-col md:flex-row gap-10 items-start justify-between ">
				{/* 1st part */}
				<div className="   w-full md:w-auto flex flex-col  gap-4 md:gap-8  items-center md:items-start justify-center md:justify-start">
					{/* logo */}
					<img
						className="object-cover"
						src={logo}
						alt=""
					/>
					{/* tag */}

					<p className="text-[#222] font-inter text-[20px] font-normal   leading-[40px] ">
						Style goes with your personality
					</p>
					{/* Especial req */}
					<div className="   max-w-[600px] w-full md:w-[400px]  bg-white flex items-center justify-start">
						<p className="  flex-grow    w-full block text-[rgba(85, 85, 85, 0.68)] font-inter text-base font-normal px-4 ">
							Get 50% offer
						</p>
						<Button
							title="Book now"
							className=" flex-none py-3 md:py-4 px-4 md:px-7 bg-[#000]"
						/>
					</div>
				</div>

				{/* 2nd part */}
				<div className="grid  grid-cols-1 sm:grid-cols-2   content-center gap-[30px] md:gap-[78px]">
					<div className="flex flex-col gap-[30px]">
						<p className="text-[#3B3B3B] font-inter text-base font-bold ">
							Books
						</p>

						<ul className="flex flex-row md:flex-col gap-3 md:gap-[20px] flex-wrap md:flex-nowrap ">
							<li className="text-[#3B3B3B] font-inter text-base font-normal  whitespace-nowrap ">
								New books
							</li>
							<li className="text-[#3B3B3B] font-inter text-base font-normal whitespace-nowrap">
								New books
							</li>
							<li className="text-[#3B3B3B] font-inter text-base font-normal whitespace-nowrap">
								New books
							</li>
							<li className="text-[#3B3B3B] font-inter text-base font-normal whitespace-nowrap">
								New books
							</li>
						</ul>
					</div>
					<div className="flex flex-col gap-[30px]">
						<p className="text-[#3B3B3B] font-inter text-base font-bold ">
							Books
						</p>

						<ul className="flex flex-row md:flex-col gap-3 md:gap-[20px] flex-wrap md:flex-nowrap ">
							<li className="text-[#3B3B3B] font-inter text-base font-normal  whitespace-nowrap ">
								New books
							</li>
							<li className="text-[#3B3B3B] font-inter text-base font-normal whitespace-nowrap">
								New books
							</li>
							<li className="text-[#3B3B3B] font-inter text-base font-normal whitespace-nowrap">
								New books
							</li>
							<li className="text-[#3B3B3B] font-inter text-base font-normal whitespace-nowrap">
								New books
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;

