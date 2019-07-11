import React, { Component } from "react";
import "./Footer.css";

class Footer extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="footer_wrapper">
				{/* <br /> */}
				<div className="icons_wrapper">
					<i class="material-icons">account_circle</i>
					<i class="material-icons md-60">home</i>

					<i class="material-icons">shopping_cart</i>
				</div>
			</div>
		);
	}
}

export default Footer;
