import React, { Component } from "react";
import { getAll, addToCart } from "../../redux/ducks/itemReducer";
import { connect } from "react-redux";
import axios from "axios";
import "./Featured.css";
class Featured extends Component {
	constructor(props) {
		super(props);
		this.state = {
			items: []
		};
	}

	componentDidMount() {
		axios.get(`/api/products`).then(response => {
			this.setState({ items: response.data });
		});
	}
	render() {
		console.log(this.state.items);
		const shuffled = this.state.items
			? this.state.items.sort(() => 0.5 - Math.random())
			: "none";
		let random = shuffled.slice(-3).map(item => {
			return (
				<div>
					<img src={item.picture} className="feauturedPic" />
					<p>{item.name}</p>
				</div>
			);
		});
		return <div className="featuredContainer">{random}</div>;
	}
}
const mapStateToProps = state => state;
export default connect(
	mapStateToProps,
	{ getAll, addToCart }
)(Featured);
