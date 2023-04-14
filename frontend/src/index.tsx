import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { App } from './pages/_app';
import { XOGamePage } from './pages/xo-game';
import { SignInPage } from './pages/sign-in';
import { SignUpPage } from './pages/sign-up';
import 'normalize.css';
import './styles/global.css';

export const router = createBrowserRouter([
	{
		path: "sign_in",
		element: <SignInPage />,
	},
	{
		path: "sign_up",
		element: <SignUpPage />,
	},
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "xogame",
				element: <XOGamePage />,
			},
		],
	},
]);

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);