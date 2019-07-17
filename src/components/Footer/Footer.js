import React, { Component } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCart } from "../../redux/ducks/itemReducer";
class Footer extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this.props.getCart();
	}
	render() {
		return (
			<div className="footer_wrapper">
				{/* <br /> */}
				<div className="icons_wrapper">
					<Link to="/wishlist">
						{" "}
						<i className="material-icons">account_circle</i>{" "}
					</Link>

					<Link to="/">
						{" "}
						<i className="material-icons md-60">home</i>
					</Link>

					<Link to="/cart">
						{" "}
						<i className="material-icons">shopping_cart</i>{" "}
						{this.props.itemReducer.cart.length}
					</Link>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => state;
export default connect(
	mapStateToProps,
	{ getCart }
)(Footer);
