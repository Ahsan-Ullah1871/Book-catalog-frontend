import { Avatar } from "flowbite-react";

const ReviewCard = () => {
	return (
		<div className="border border-[#000] px-10 py-7 max-w-[478px] h-[232px] ">
			<div className="flex items-center justify-start gap-10">
				<Avatar
					alt="avatar of Jese"
					img="/images/people/profile-picture-5.jpg"
					rounded
				/>

				<p className="text-[#202020]  text-[20px] font-inter font-normal leading-[38px]">
					Mr. Ahsan
				</p>
			</div>

			<div className="mt-6">
				<p className="text-[#202020]  text-[20px] font-inter font-normal leading-[38px]">
					Any of your events you can choose from
					clothfit. I do now recommend Clothfit with
					blind eyes
				</p>
			</div>
		</div>
	);
};

export default ReviewCard;

