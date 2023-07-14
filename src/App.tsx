import { Button, Carousel } from "flowbite-react";

const App = () => {
	return (
		<div className="h-screen bg-green-200 text-orange-300 text-4xl">
			<Carousel>
				<img
					alt="..."
					src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
				/>
				<img
					alt="..."
					src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
				/>
				<img
					alt="..."
					src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
				/>
				<img
					alt="..."
					src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
				/>
				<img
					alt="..."
					src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
				/>
			</Carousel>
		</div>
	);
};

export default App;

