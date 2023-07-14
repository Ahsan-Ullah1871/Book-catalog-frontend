import BannerImage from "@/assets/images/HeroBanner.png";
import Button from "../ui/Button";

const HeroBanner = () => {
	return (
		<div className="p-4 ">
			{/* Title */}
			<h1
				className=" text-[#3C3C3C] text-center font-anton text-[70px] md:text-[141px]  font-normal leading-[70px] md:leading-[140px] letter-spacing 
            tracking-[-2.82px]  "
			>
				CLITO’N FIT SHOES
			</h1>

			{/* tage */}
			<p className="text-[#222] text-center font-inter text-lg  mt-3 md:mt-6 ">
				Style goes with your personality
			</p>

			<div className="relative  mt-[30px] md:mt-[78px] flex items-center justify-center ">
				<img
					src={BannerImage}
					alt=""
					className=" w-full h-auto md:w-[784px] md:h-[427px] object-cover "
				/>

				{/* Button */}
				<Button
					title="Book now"
					className=" absolute -top-5 md:-top-10 bg-[#FE8159]"
				/>
			</div>
		</div>
	);
};

export default HeroBanner;

