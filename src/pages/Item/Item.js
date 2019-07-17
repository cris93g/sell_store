import React from "react";
import axios from "axios";

import { addToCart } from "../../redux/ducks/itemReducer";
import { Button } from "reactstrap";
class Item extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			product: []
		};
	}
	componentDidMount() {
		axios
			.post(`/api/item`, {
				id: this.props.match.params.id
			})
			.then(response => {
				this.setState({ product: response.data });
			});
	}
	render() {
		console.log(this.state);
		const { product } = this.state;
		let displayProduct = product.map(pro => {
			return (
				<div key={pro.id}>
					<img src={pro.picture} className="card_pic" alt="products" />
					<p>{pro.name}</p>

					<p>{pro.price}</p>
					<p>{pro.description}</p>
					<Button color="danger" onClick={() => addToCart(pro)}>
						AddToCart
					</Button>
				</div>
			);
		});
		return <div> {displayProduct}</div>;
	}
}

export default Item;
