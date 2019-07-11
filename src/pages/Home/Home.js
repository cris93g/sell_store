import React, { Component } from "react";
import Carou from "../../components/Carou/Carou";
import Body from "../../components/Body/Body";

class Home extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Carou />
				<Body />
			</div>
		);
	}
}
export default Home;
