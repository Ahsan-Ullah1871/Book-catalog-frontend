import { cn } from "@/lib/utils";

type IButton = {
	title: string;
	className: string;
};

const Button = ({ title, className }: IButton) => {
	const default_styles =
		" inline-flex px-[30px]  md:px-[60px] py-[15px] md:py-[30px]  items-center text-[#FFF] text-center font-inter  text-base  md:text-lg font-bold  ";
	return (
		<button className={cn(default_styles, className)}>{title}</button>
	);
};

export default Button;

