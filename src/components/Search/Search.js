import React, { Component } from "react";
import axios from "axios";
import { Link, Redirect } from "react-router-dom";
import routes from "../../routes";
import Item from "../../pages/Item/Item";

class Search extends Component {
	constructor(props) {
		super(props);
		this.state = {
			products: [],
			words: "",
			product: []
		};
		this.search = this.search.bind(this);
		this.onChangeHandler = this.onChangeHandler.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	componentDidMount() {
		axios.get(`/api/products`).then(response => {
			this.setState({
				products: response.data
			});
		});
	}

	search(namekey, array) {
		for (let i = 0; i < array.length; i++) {
			if (array[i].name.toLowerCase().includes(namekey.toLowerCase())) {
				axios
					.post(`/api/item`, {
						id: array[i].id
					})
					.then(response => {
						console.log(response);
						this.setState({ product: response.data });
					});
			}
		}
	}
	onChangeHandler(e) {
		this.setState({ words: e.target.value });
	}
	onSubmit() {
		this.search(this.state.words, this.state.products);
	}
	render() {
		console.log(this.state.product);
		console.log(this.state.words);
		const { products } = this.state;
		console.log(products);
		return (
			<div>
				<input onChange={e => this.onChangeHandler(e)} />
				<button onClick={this.onSubmit}>SUBMIT</button>
				{this.state.product
					? this.state.product.map(pro => {
							return (
								<div>
									<img src={pro.picture} className="card_pic" alt="products" />
									<p>{pro.name}</p>

									<p>{pro.price}</p>
									<p>{pro.description}</p>
								</div>
							);
					  })
					: "none"}
			</div>
		);
	}
}

export default Search;
