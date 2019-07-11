import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Tvs from "./pages/Tvs/Tvs";
import Acessorys from "./pages/Acessorys/Acessorys";
import VideoGames from "./pages/VideoGames/VideoGames";
import Phones from "./pages/Phones/Phones";
export default (
	<Switch>
		<Route component={Home} exact path="/" />
		<Route component={Tvs} exact path="/tv" />
		<Route component={Acessorys} exact path="/acessorys" />
		<Route component={VideoGames} exact path="/videogames" />
		<Route component={Phones} exact path="/phones" />
	</Switch>
);
