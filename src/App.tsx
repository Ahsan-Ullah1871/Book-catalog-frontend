import BookCarousel from "./components/ui/BooksCarousel";
import BookCard from "./components/ui/BookCard";
import LatestBooks from "./components/Home/LatestBooks";

const App = () => {
	return (
		<div className="min-h-screen bg-[#EBE9E1]  flex items-center justify-center ">
			<LatestBooks />
		</div>
	);
};

export default App;

