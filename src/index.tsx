import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { App } from './pages/_app';
import { XOGamePage } from './pages/xo-game';
import { CodeWarsPage } from './pages/code-wars';
import 'normalize.css';
import './styles/global.css';

export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "xogame",
				element: <XOGamePage />,
			},
			{
				path: "codewars",
				element: <CodeWarsPage />,
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