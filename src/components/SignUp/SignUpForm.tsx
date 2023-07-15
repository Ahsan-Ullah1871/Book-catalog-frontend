import Button from "../ui/Button";
import TextInput from "../ui/form_items/TextInput";

const SignInForm = () => {
	return (
		<div className="min-h-screen w-full    bg-box-pattern  flex items-center justify-center ">
			<form className="flex  max-w-lg rounded-xl w-full  flex-col gap-4 bg-[#FFFFFF] px-[74px] py-12 ">
				<h1 className=" text-4xl  font-anton text-ceter ">
					LOG IN
				</h1>
				<div className="flex flex-col gap-6">
					<TextInput
						type="email"
						placeHolder="test@gmail.com"
						currentValue=""
						onChange={(e) => console.log(e)}
					/>
					<TextInput
						type="password"
						placeHolder="Enter your password"
						currentValue=""
						onChange={(e) => console.log(e)}
					/>
				</div>

				<Button
					title="Submit"
					className="mt-6 bg-[#B4E907] w-full py-[17px] md:py-[17px] border border-[#000]  text-base font-medium rounded"
				/>

				<div>
					<p className="font-inter text-base text-[#000] text-center ">
						Not registered?
						<a
							className="ml-2  underline"
							href=""
						>
							Create an Account
						</a>
					</p>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;

