import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import { dark } from '@clerk/themes'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import ShoppingPage from './pages/ShoppingPage.jsx'
import LandingPage from './pages/LandingPage.jsx'
import SpecialOfferPage from './pages/SpecialOfferPage.jsx'
import LearnMorePage from './pages/LearnMorePage.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
	throw new Error("Missing Publishable Key")
}
  
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
	<React.StrictMode>
		<ClerkProvider
			appearance={{
				baseTheme: 'dark'
			}}
			publishableKey={PUBLISHABLE_KEY}
			afterSignOutUrl="/"
			showname="true"
		>
			<RouterProvider router={router}>
				<App />
			</RouterProvider>
		</ClerkProvider>
  	</React.StrictMode>
)
