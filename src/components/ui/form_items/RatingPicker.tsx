import ICONS from "@/shared/AllIcons";

const RatingPicker = ({
	current_value,
	clickHandler,
}: {
	current_value: number;
	clickHandler?: (value: number) => void;
}) => {
	return (
		<div className="flex items-center justify-center">
			<button
				type="button"
				className={[
					current_value >= 1
						? "text-[#FE8159]"
						: "text-white",
					!clickHandler && "cursor-text",
				].join(" ")}
				onClick={() => clickHandler && clickHandler(1)}
			>
				{ICONS.star_icon}
			</button>
			<button
				type="button"
				className={[
					current_value >= 2
						? "text-[#FE8159]"
						: "text-white",
					!clickHandler && "cursor-text",
				].join(" ")}
				onClick={() => clickHandler && clickHandler(2)}
			>
				{ICONS.star_icon}
			</button>
			<button
				type="button"
				className={[
					current_value >= 3
						? "text-[#FE8159]"
						: "text-white",
					!clickHandler && "cursor-text",
				].join(" ")}
				onClick={() => clickHandler && clickHandler(3)}
			>
				{ICONS.star_icon}
			</button>
			<button
				type="button"
				className={[
					current_value >= 4
						? "text-[#FE8159]"
						: "text-white",
					!clickHandler && "cursor-text",
				].join(" ")}
				onClick={() => clickHandler && clickHandler(4)}
			>
				{ICONS.star_icon}
			</button>
			<button
				type="button"
				className={[
					current_value >= 5
						? "text-[#FE8159]"
						: "text-white",
					!clickHandler && "cursor-text",
				].join(" ")}
				onClick={() => clickHandler && clickHandler(5)}
			>
				{ICONS.star_icon}
			</button>
		</div>
	);
};

export default RatingPicker;

