import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import ShoppingPage from './pages/ShoppingPage.jsx'
import LandingPage from './pages/LandingPage.jsx'
import SpecialOfferPage from './pages/SpecialOfferPage.jsx'
import LearnMorePage from './pages/LearnMorePage.jsx'

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App/>}>
			<Route path="/" element={<LandingPage/>}/> 
			<Route path="/shoppingPage" element={<ShoppingPage/>}/> 
			<Route path="/specialOfferPage" element={<SpecialOfferPage/>}/>
			<Route path="/learnMorePage" element={<LearnMorePage/>}/>
		</Route>
	)
)

ReactDOM.createRoot(document.getElementById('root')).render(
	<RouterProvider router={router} />
)
