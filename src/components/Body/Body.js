import React, { Component } from "react";
import "./Body.css";

class Body extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<h3>Products</h3>
				<div className="body_wrapper">
					<div className="upper_body">
						<div className="left_upper" />
						<div className="right_upper" />
					</div>
					<div className="lower_body">
						<div className="left_lower" />
						<div className="right_lower" />
					</div>
				</div>
			</div>
		);
	}
}

export default Body;
