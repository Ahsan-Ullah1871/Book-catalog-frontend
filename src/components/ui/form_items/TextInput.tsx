import { cn } from "@/lib/utils";

type ITextInput = {
	label?: string;
	type: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	currentValue: string;
	placeHolder: string;
	className?: string;
};

const TextInput = ({
	label,
	type,
	onChange,
	currentValue,
	placeHolder,
	className,
}: ITextInput) => {
	const defaultClassValue =
		"border border-[#000] rounded h-11 px-4 py-5 font-inter text-[#000000]  bg-transparent outline-none ";
	return (
		<div className="flex flex-col gap-2 ">
			{label && <label htmlFor="input-box"> {label}</label>}{" "}
			<input
				id="input-box"
				className={cn(className, defaultClassValue)}
				type={type}
				value={currentValue}
				onChange={onChange}
				placeholder={placeHolder}
			/>
		</div>
	);
};

export default TextInput;

