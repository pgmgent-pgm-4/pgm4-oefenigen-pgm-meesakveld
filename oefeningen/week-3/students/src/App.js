import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Home, Student, Error } from './pages';
import Root from './layouts/Root';
import './styles/styles.css';

import { ROUTES } from './routes/routes';

const router = createBrowserRouter(createRoutesFromElements(
	<Route path='/' element={<Root />} errorElement={<Error />}>
		<Route path={ROUTES.home.path} element={<Home />} />
		<Route path={ROUTES.student.path} element={<Student />} />
	</Route>

))

function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
