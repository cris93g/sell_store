import React, { Component } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

class Footer extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="footer_wrapper">
				{/* <br /> */}
				<div className="icons_wrapper">
					<i className="material-icons">account_circle</i>
					<Link to="/">
						{" "}
						<i className="material-icons md-60">home</i>
					</Link>

					<i className="material-icons">shopping_cart</i>
				</div>
			</div>
		);
	}
}

export default Footer;
