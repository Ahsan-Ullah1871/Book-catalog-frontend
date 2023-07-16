import { useParams } from "react-router-dom";
import BookImagesCarousel from "../ui/BookImagesCarousel";
import BookInfo from "../ui/BookInfo";
import ReviewSection from "./ReviewSection";
import { useGetBookDetailsQuery } from "@/redux/features/book/bookApi";
import { useEffect, useState } from "react";
import { IBook } from "@/types/Book";
import BookDetailsSkeleton from "./BookDetailsSkeleton";

const FullBookDetails = () => {
	const { bookID } = useParams();

	//
	const [bookDetailsSkip, setBookDetailsSkip] = useState(true);
	useEffect(() => {
		if (bookID) {
			setBookDetailsSkip(false);
		}
	}, [bookID]);

	// Get books query
	const {
		data: book_details_data,
		isLoading,
		// isError,
		// error,
	} = useGetBookDetailsQuery(
		{
			bookID,
		},
		{ skip: bookDetailsSkip }
	);

	const book_details: IBook = book_details_data?.data;

	return (
		<div className=" min-h-screen bg-[#FAF9F5] w-full py-20">
			{isLoading ? (
				<BookDetailsSkeleton />
			) : (
				<div className="max-w-[1170px] mx-auto grid  grid-cols-1 md:grid-cols-2  ">
					{/*Book Image Carousel */}

					<div className="border-y border-l border-[#000000]  max-h-[500px] ">
						<BookImagesCarousel
							images={[
								book_details?.cover_image,
							]}
						/>
					</div>
					{/* Book Info */}
					<div>
						<BookInfo book_info={book_details} />
					</div>
				</div>
			)}

			{/* Reviews */}
			<div className=" mt-[70px] md:mt-[140px]">
				<ReviewSection />
			</div>
		</div>
	);
};

export default FullBookDetails;

