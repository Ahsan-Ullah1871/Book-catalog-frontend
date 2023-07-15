import BookImagesCarousel from "../ui/BookImagesCarousel";
import BookInfo from "../ui/BookInfo";

const BookDetails = () => {
	return (
		<div className=" min-h-screen bg-[#FAF9F5] w-full">
			<div className="max-w-[1170px] mx-auto grid  grid-cols-1 md:grid-cols-2  ">
				{/*Book Image Carousel */}

				<div className="border-y border-l border-[#000000]  max-h-[500px] ">
					<BookImagesCarousel />
				</div>
				{/* Book Info */}
				<div>
					<BookInfo />
				</div>
			</div>
			;
		</div>
	);
};

export default BookDetails;

