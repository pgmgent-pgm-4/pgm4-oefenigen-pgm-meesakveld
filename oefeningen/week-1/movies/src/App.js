import './App.css';
import Movie from './components/Movie';

function App() {

	const movies = [
		{
			title: "The Shawshank Redemption",
			synopsis:
				"Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
			tags: ["Drama", "Crime", "Hope"],
			thumbnailUrl: "shawshank_redemption.jpg",
		},
		{
			title: "Inception",
			synopsis:
				"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
			tags: ["Sci-Fi", "Thriller", "Mind-Bending"],
			thumbnailUrl: "inception.jpg",
		},
		{
			title: "The Godfather",
			synopsis:
				"The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
			tags: ["Drama", "Crime", "Classic"],
			thumbnailUrl: "godfather.jpg",
		},
	];

	return (
		<div className="App">
			{movies.map((movie, index) => (
				<Movie key={index} {...movie} />
			))}
		</div>
	);
}

export default App;
