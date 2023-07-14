import listingImage from "@/assets/images/shoe.png";
import ICONS from "@/shared/AllIcons";

const BookCard = () => {
	return (
		<div className=" bg-transparent w-[370px] h-[498px] border border-[#000] flex flex-col    ">
			{/* Image */}
			<img
				src={listingImage}
				className="h-[274px]  border-b border-[#000]  "
				alt=""
			/>
			{/* other items */}
			<div className="mt-[18px]">
				{/* title & genre  */}
				<div className="flex items-center justify-between gap-[24px] px-4 ">
					<p className="text-[#3C3C3C] font-inter  text-2xl font-medium    ">
						New Book in the worls I am test book
					</p>

					<p className="text-[#3C3C3C] font-inter  text-2xl  text-right font-bold  ">
						Novels
					</p>
				</div>
				{/*  */}

				<div className="my-[27px] px-4">
					<p className="text-[#3C3C3C] font-inter  text-base font-normal   ">
						02-02-19
					</p>
				</div>
			</div>

			{/* buttons*/}
			<div className="  border-t border-[#000] p-[10px]  flex items-center justify-between mt-auto">
				<button className="text-[#3C3C3C] font-inter  text-lg font-semibold  ">
					Book now
				</button>
				<button className="text-xm text-white px-6 py-1 bg-[#000000]">
					{ICONS.heart_icon}
				</button>
			</div>
		</div>
	);
};

export default BookCard;

