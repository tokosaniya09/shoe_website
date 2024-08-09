import { ClerkProvider } from '@clerk/clerk-react';
import Nav from './components/Nav';
import {
	CustomerReviews, 
	Footer, 
	Hero, 
	PopularProducts, 
	Services, 
	SpecialOffer, 
	Subscribe, 
	SuperQuality
} from './section'
import { Outlet } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
	return (
		<>
			<Outlet/>
			<ScrollToTop/>
		</>
	)
};

export default App;