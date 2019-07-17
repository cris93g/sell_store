import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Tvs from "./pages/Tvs/Tvs";
import Acessorys from "./pages/Acessorys/Acessorys";
import VideoGames from "./pages/VideoGames/VideoGames";
import Phones from "./pages/Phones/Phones";
import Item from "./pages/Item/Item";
import Cart from "./pages/Cart/Cart";
import Search from "./components/Search/Search";
import Checkout from "./components/Checkout/Checkout";
import WishList from "./pages/WishList/WishList";
export default (
	<Switch>
		<Route component={Home} exact path="/" />
		<Route component={Tvs} exact path="/tv" />
		<Route component={Acessorys} exact path="/acessorys" />
		<Route component={VideoGames} exact path="/videogames" />
		<Route component={Phones} exact path="/phones" />
		<Route component={Item} path="/item/:id" />
		<Route component={Cart} path="/cart" />
		<Route component={Search} path="/search" />
		<Route component={WishList} path="/wishlist" />
		<Route path="/checkout" component={Checkout} />
	</Switch>
);
