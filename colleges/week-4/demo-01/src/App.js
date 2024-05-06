import { ThemeArea } from './context/ThemeContext';
import { useFetch } from './hooks/useFetch';
import ThemeSwitcher from './components/ThemeSwitcher';
import './styles/index.css';

const url = 'https://fakestoreapi.com/products'

function App() {

	const { data: products, isLoading, isError } = useFetch(url);
	if (isLoading) return <div>Loading...</div>
	if (isError) return <div>Error</div>

	return (
		<ThemeArea>
			<ThemeSwitcher />

			{products &&
				<ul className="App">
					{products.map(product => (
						<li key={product.id}>
							<h1>{product.title}</h1>
							<p>{product.description}</p>
							<p>€ {product.price}</p>
						</li>
					))}
				</ul>
			}
		</ThemeArea>
	);
}

export default App;
