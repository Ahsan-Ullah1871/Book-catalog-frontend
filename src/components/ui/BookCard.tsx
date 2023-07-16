import ICONS from "@/shared/AllIcons";
import { IBook } from "@/types/Book";

const BookCard = ({ book }: { book: IBook }) => {
	return (
		<div className=" bg-transparent w-[370px] h-[498px] border border-[#000] flex flex-col    ">
			{/* Image */}
			<img
				src={book?.cover_image}
				className="h-[274px]  border-b border-[#000]  "
				alt=""
			/>
			{/* other items */}
			<div className="mt-[18px]">
				{/* title & rating  */}
				<div className="flex items-center justify-between gap-[24px] px-4 ">
					<p className="text-[#3C3C3C] font-inter  text-2xl font-medium    ">
						{book?.title}
					</p>

					<p className="text-[#3C3C3C] font-inter  text-xl  text-right font-bold  flex items-center gap-2 ">
						{ICONS.star_icon} {book.rating}
					</p>
				</div>
				{/*  */}

				<div className="my-[27px] px-4 flex items-center justify-start gap-3 flex-wrap">
					<p className="text-[#3C3C3C] font-inter  text-base font-normal   ">
						{book.publication_date}
					</p>
					<p className="text-[#3C3C3C] font-inter  text-base font-normal   ">
						{book.pages} pages
					</p>
					<p className="text-[#3C3C3C] font-inter  text-base font-normal   ">
						by-{book.author}
					</p>
				</div>
			</div>

			{/* buttons*/}
			<div className="  border-t border-[#000] p-[10px]  flex items-center justify-between mt-auto">
				<button className="text-[#3C3C3C] font-inter  text-lg font-semibold  ">
					Start reading
				</button>
				<button className="text-xm text-white px-6 py-1 bg-[#000000]">
					{ICONS.heart_icon}
				</button>
			</div>
		</div>
	);
};

export default BookCard;

