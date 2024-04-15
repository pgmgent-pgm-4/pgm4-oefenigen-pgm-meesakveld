import './App.css';

function App() {
	const names = ["Alice", "Bob", "Charlie", "David", "Eva"];

	return (
		<div className="App">
			<ul>
				{names.map((name, index) => (
					<li key={index}>{name}</li>
				))
				}
			</ul>
		</div>
	);
}

export default App;
