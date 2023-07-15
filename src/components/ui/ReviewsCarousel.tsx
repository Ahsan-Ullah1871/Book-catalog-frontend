import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import ReviewCard from "./ReviewCard";

const ReviewsCarousel = () => {
	return (
		<Swiper
			slidesPerView={"auto"}
			spaceBetween={30}
			pagination={{
				clickable: true,
			}}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			modules={[Navigation, Autoplay]}
			className="  w-full h-full   flex flex-col"
		>
			<SwiperSlide className="w-[478px] ">
				<ReviewCard />
			</SwiperSlide>
			<SwiperSlide className="w-[478px] ">
				<ReviewCard />
			</SwiperSlide>
			<SwiperSlide className="w-[478px] ">
				<ReviewCard />
			</SwiperSlide>
			<SwiperSlide className="w-[478px] ">
				<ReviewCard />
			</SwiperSlide>
			<SwiperSlide className="w-[478px] ">
				<ReviewCard />
			</SwiperSlide>
		</Swiper>
	);
};

export default ReviewsCarousel;

