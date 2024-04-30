import React, { useEffect, useState } from 'react'
import './styles/style.css';
import BoardLine from './components/BoardLine';

function App() {

	const [parkingData, setParkingData] = useState(null)

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch('https://data.stad.gent/api/explore/v2.1/catalog/datasets/bezetting-parkeergarages-real-time/records?limit=20')
			const data = await response.json()
			setParkingData(data)
		}
		fetchData()
	}, [])

	return (

		<>

			<main>

				<div className="App">

					<article className="board">

						<div className="max-width">

							<div className="availability-board">
								<p className="stadsring">Stadsring</p>
								<ul className="availability-board-lines">
									{parkingData && parkingData.results.map((parking, index) => (
										<BoardLine key={index} parking={parking} />
									))}
								</ul>
							</div>
							<span className="availability-board-pole"></span>
						</div>

					</article>

				</div>

			</main>

			<footer className="footer-container">
				<span className="grass"></span>
				<footer className="footer"></footer>
			</footer>

		</>
	);
}

export default App;
