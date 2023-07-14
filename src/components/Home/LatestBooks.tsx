import BookCarousel from "../ui/BooksCarousel";
import Button from "../ui/Button";

const LatestBooks = () => {
	return (
		<div className="max-w-[1170px] overflow-hidden mx-auto p-4">
			<div className="flex items-start justify-between gap-20">
				<h1 className="text-[#3C3C3C] font-anton text-[20px] md:text-[40px] font-normal leading-[50px] ">
					Best shoes from variety of collections
				</h1>
				<Button
					title="All Books"
					className="px-[20px] md:px-[40px] py-[10px] md:py-[20px] bg-[#000000]"
				/>
			</div>
			<BookCarousel />
		</div>
	);
};

export default LatestBooks;

