import React, { Component } from "react";
import { connect } from "react-redux";
import { getCart } from "../../redux/ducks/itemReducer";
import styled from "styled-components";
class Cart extends Component {
	componentDidMount() {
		this.props.getCart();
	}

	render() {
		const { cart } = this.props.itemReducer;
		let num = [];
		let parse = [];
		let sum = 0;
		function add(array) {
			for (let i = 0; i < array.length; i++) {
				parse.push(array[i].price);
			}

			for (let i = 0; i < parse.length; i++) {
				num.push(parseInt(parse[i].split("$")[1]));
			}

			sum = num.reduce((acc, val) => {
				return acc + val;
			}, 0);

			return sum;
		}
		add(cart);
		return (
			<div>
				{this.props.itemReducer.cart.length > 0
					? this.props.itemReducer.cart.map(item => {
							return (
								<div className="card_page" key={item.id}>
									<Wrapper>
										<Card>
											<img src={item.picture} className="card_pic" />
											<p>{item.name}</p>
											<p>{item.price}</p>

											<br />
										</Card>
									</Wrapper>
									<div />
								</div>
							);
					  })
					: "No Items in cart add some"}{" "}
				<div>
					<p>{` Your total is $${sum}`}</p>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => state;
export default connect(
	mapStateToProps,
	{ getCart }
)(Cart);

const Wrapper = styled.section`
	width: 100%;
	margin: auto;
	margin: auto;
	display: flex;
	/* height: 60%; */
	/* align-items: center; */
`;
const Card = styled.div`
	width: 70%;
	margin: auto;
	/* display: flex; */
	/* border: 1px solid black; */
	margin-bottom: 5px;
`;
