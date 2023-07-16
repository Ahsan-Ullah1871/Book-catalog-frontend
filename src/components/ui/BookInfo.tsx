import ICONS from "@/shared/AllIcons";
import Button from "./Button";
// import { Accordion } from "flowbite-react";
import { IBook } from "@/types/Book";
import AddReviewModal from "../BookDetails/AddReviewModal";
import { useAppSelector } from "@/hooks/reduxHook";

const BookInfo = ({ book_info }: { book_info: IBook | undefined }) => {
	const { isLoggedIn } = useAppSelector((state) => state.auth);
	return (
		<div className="h-full w-full min-h-[200px] border border-[#000000] bg-[#EAE3D1] p-9">
			{/* title */}
			<h2 className=" text-[#3C3C3C] font-anton text-[40px] font-normal leading-[50px]">
				{book_info?.title}
			</h2>
			{/* ratings */}
			<div className="flex items-center justify-start mt-5">
				<span className="text-[#FE8159]">
					{ICONS.star_icon}
				</span>
				<span className="text-white">
					{ICONS.star_icon}
				</span>
				<span className="text-white">
					{ICONS.star_icon}
				</span>
				<span className="text-white">
					{ICONS.star_icon}
				</span>
				<span className="text-white">
					{ICONS.star_icon}
				</span>
			</div>
			{/* Description */}
			<div className=" mt-7">
				<p className="text-[#000] text-[20px] font-inter font-medium leading-[30px]">
					DESCRIPTION :
				</p>

				<p className="text-[#656565] text-[16px] font-inter font-medium leading-[25px] mt-[6px]">
					{book_info?.description}
				</p>
			</div>

			{/* Main button */}
			<div className="flex items-center justify-between flex-wrap gap-5">
				<Button
					title="Start reading"
					className=" mt-7 text-[#000] text-base  font-semibold bg-[#B4E907]  px-[40px] md:px-[40px]  py-[10px]  md:py-[15px] "
				/>
				{isLoggedIn && (
					<AddReviewModal book_info={book_info} />
				)}
			</div>
			{/* Key notes */}
			{/* <Accordion className="mt-40px divide-[#000] pb-10">
				<Accordion.Panel className="  ">
					<Accordion.Title
						className="text-[#000] text-[20px] font-inter font-medium leading-[30px] px-0 
                    hover:bg-transparent bg-transparent outline-none focus:ring-0"
					>
						What is Flowbite?
					</Accordion.Title>
					<Accordion.Content className="px-0 py-0   border border-[#000] p-4">
						<p className="text-[#656565] text-[16px] font-inter font-medium leading-[25px]   ">
							Flowbite is an open-source
							library of interactive
							components built on top of
							Tailwind CSS including buttons,
							dropdowns, modals, navbars, and
							more.
						</p>
					</Accordion.Content>
				</Accordion.Panel>
				<Accordion.Panel className="  ">
					<Accordion.Title
						className="text-[#000] text-[20px] font-inter font-medium leading-[30px] px-0 
                    hover:bg-transparent bg-transparent outline-none focus:ring-0"
					>
						What is Flowbite?
					</Accordion.Title>
					<Accordion.Content className="px-0 py-0   border border-[#000] p-4">
						<p className="text-[#656565] text-[16px] font-inter font-medium leading-[25px]   ">
							Flowbite is an open-source
							library of interactive
							components built on top of
							Tailwind CSS including buttons,
							dropdowns, modals, navbars, and
							more.
						</p>
					</Accordion.Content>
				</Accordion.Panel>
				<Accordion.Panel className="  ">
					<Accordion.Title
						className="text-[#000] text-[20px] font-inter font-medium leading-[30px] px-0 
                    hover:bg-transparent bg-transparent outline-none focus:ring-0"
					>
						What is Flowbite?
					</Accordion.Title>
					<Accordion.Content className="px-0 py-0   !border border-[#000] p-4">
						<p className="text-[#656565] text-[16px] font-inter font-medium leading-[25px]   ">
							Flowbite is an open-source
							library of interactive
							components built on top of
							Tailwind CSS including buttons,
							dropdowns, modals, navbars, and
							more.
						</p>
					</Accordion.Content>
				</Accordion.Panel>
			</Accordion> */}
		</div>
	);
};

export default BookInfo;

