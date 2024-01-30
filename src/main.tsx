// #region Import
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import './index.css'
import './demos/ipc'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// #endregion

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Suspense fallback={<h1>Loading Page...</h1>}>
				<App />
			</Suspense>
		),
		errorElement: <h1>Something went wrong.</h1>
	}
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<RouterProvider router={router} />
)

postMessage({ payload: 'removeLoading' }, '*')
