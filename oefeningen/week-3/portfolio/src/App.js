import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { Home, About, Projects, Contact, Resume, Error } from './pages';
import Root from './layouts/Root';

import { ROUTES } from './routes/routes';

const router = createBrowserRouter(createRoutesFromElements(
	<Route path='/' element={<Root />} errorElement={<Error />}>
		<Route path={ROUTES.home.path} element={<Home />} />
		<Route path={ROUTES.about.path} element={<About />} />
		<Route path={ROUTES.projects.path} element={<Projects />} />
		<Route path={ROUTES.contact.path} element={<Contact />} />
		<Route path={ROUTES.resume.path} element={<Resume />} />
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
