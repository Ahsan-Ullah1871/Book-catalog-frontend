import ReviewsCarousel from "../ui/ReviewsCarousel";

const ReviewSection = () => {
	return (
		<div className="max-w-[1170px] mx-auto px-4 md:px-0">
			<div className="mb-20">
				<div className="max-w-[400px]">
					{/* title */}
					<h2 className=" text-[#3C3C3C] font-anton text-[40px] font-normal leading-[50px]">
						Western Chelsea Black
					</h2>
					<p className="text-[#3C3C3C] text-base font-inter mt-[10px]  ">
						Buy best quality Pet food for your
						pets of all kinds form mther and
						babbies as well
					</p>
				</div>
			</div>

			<ReviewsCarousel />
		</div>
	);
};

export default ReviewSection;

