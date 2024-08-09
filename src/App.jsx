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