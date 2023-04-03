import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { App } from './pages/App';
import { Test } from './pages/Test';
import 'normalize.css';
import './styles/index.css';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/test",
		element: <Test />,
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