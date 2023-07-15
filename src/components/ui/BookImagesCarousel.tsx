// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Sample from "@/assets/images/longshoe.png";
import { Pagination, Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BookImagesCarousel = () => {
	return (
		<Swiper
			slidesPerView={"auto"}
			spaceBetween={30}
			pagination={{
				dynamicBullets: true,
				clickable: true,
			}}
			autoplay={{
				delay: 2500,
				disableOnInteraction: false,
			}}
			modules={[Navigation, Pagination, Autoplay]}
			className="  w-full h-full"
		>
			<SwiperSlide className=" w-full aspect-square ">
				<img
					src={Sample}
					className="w-full h-full object-cover"
				/>
			</SwiperSlide>
			<SwiperSlide className=" w-full aspect-square ">
				<img
					src={Sample}
					className="w-full h-full object-cover"
				/>
			</SwiperSlide>
			<SwiperSlide className=" w-full aspect-square ">
				<img
					src={Sample}
					className="w-full h-full object-cover"
				/>
			</SwiperSlide>
			<SwiperSlide className=" w-full aspect-square ">
				<img
					src={Sample}
					className="w-full h-full object-cover"
				/>
			</SwiperSlide>
			<SwiperSlide className=" w-full aspect-square ">
				<img
					src={Sample}
					className="w-full h-full object-cover"
				/>
			</SwiperSlide>
			<SwiperSlide className=" w-full aspect-square ">
				<img
					src={Sample}
					className="w-full h-full object-cover"
				/>
			</SwiperSlide>
		</Swiper>
	);
};

export default BookImagesCarousel;

