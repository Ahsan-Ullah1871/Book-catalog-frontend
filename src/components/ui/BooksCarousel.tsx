// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import BookCard from "./BookCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import ICONS from "@/shared/AllIcons";

const SwiperButtonNext = () => {
	const swiper = useSwiper();
	return (
		<button
			className="text-lg "
			onClick={() => swiper.slideNext()}
		>
			{ICONS.arrow_long_right}
		</button>
	);
};
const SwiperButtonPrev = () => {
	const swiper = useSwiper();
	return (
		<button
			className="text-2xl "
			onClick={() => swiper.slidePrev()}
		>
			{ICONS.arrow_long_left}
		</button>
	);
};

export default function BookCarousel() {
	return (
		<Swiper
			slidesPerView={"auto"}
			spaceBetween={30}
			pagination={{
				clickable: true,
			}}
			modules={[Navigation]}
			className="  w-full h-full p-4  flex flex-col"
		>
			<SwiperSlide className="w-[370px] ">
				<BookCard />
			</SwiperSlide>
			<SwiperSlide className="w-[370px] ">
				<BookCard />
			</SwiperSlide>
			<SwiperSlide className="w-[370px] ">
				<BookCard />
			</SwiperSlide>
			<SwiperSlide className="w-[370px] ">
				<BookCard />
			</SwiperSlide>
			<SwiperSlide className="w-[370px] ">
				<BookCard />
			</SwiperSlide>
			<SwiperSlide className="w-[370px] ">
				<BookCard />
			</SwiperSlide>
			<SwiperSlide className="w-[370px] ">
				<BookCard />
			</SwiperSlide>
			<SwiperSlide className="w-[370px] ">
				<BookCard />
			</SwiperSlide>

			<div className="flex items-center justify-end gap-5 my-5">
				<SwiperButtonPrev />
				<SwiperButtonNext />
			</div>
		</Swiper>
	);
}

