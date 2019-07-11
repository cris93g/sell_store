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
		console.log(this.props.itemReducer.cart);
		return (
			<div className="footer_wrapper">
				{/* <br /> */}
				<div className="icons_wrapper">
					<i className="material-icons">account_circle</i>

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
