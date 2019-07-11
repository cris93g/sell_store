import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Navbar/NavBar";
import Carou from "./components/Carou/Carou";
import Footer from "./components/Footer/Footer";
import Body from "./components/Body/Body";
import { Provider } from "react-redux";
import { HashRouter as Router } from "react-router-dom";
import routes from "./routes";
import store from "./redux/store";
function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className="App">
					<NavBar />
					{routes}
					<Footer />
				</div>
			</Router>
		</Provider>
	);
}

export default App;
