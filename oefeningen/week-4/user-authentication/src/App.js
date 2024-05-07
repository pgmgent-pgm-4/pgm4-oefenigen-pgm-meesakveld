import { Home, Profile, Login, Register, Error } from './pages';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Root from './layouts/Root';

import { ROUTES } from './routes/routes';
import './styles/index.css'

import { UserArea } from './context/UserContext';

const router = createBrowserRouter(createRoutesFromElements(
	<Route path='/' element={<Root />} errorElement={<Error />}>
		<Route path={ROUTES.home.path} element={<Home />} />,
		<Route path={ROUTES.profile.path} element={<Profile />} />,
		<Route path={ROUTES.login.path} element={<Login />} />,
	</Route>,
));

function App() {
	return (
		<UserArea>
			<RouterProvider router={router} />
		</UserArea>
	);
}

export default App;
